const SALES_EMAIL = 'sales@dtechl.com';
const SHEET_NAME = 'Prospectos DTechLab';

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || '{}');
    if (payload.website) return json_({ ok: true });

    const required = ['name', 'email', 'business', 'project'];
    const missing = required.filter(function (key) { return !String(payload[key] || '').trim(); });
    if (missing.length) return json_({ ok: false, error: 'Faltan campos requeridos.' });

    const sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
    if (!sheetId) throw new Error('Falta la propiedad SHEET_ID en Apps Script.');

    const spreadsheet = SpreadsheetApp.openById(sheetId);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'WhatsApp', 'Negocio', 'Sector', 'Proyecto', 'Plazo', 'Referencia', 'Página de origen']);
      sheet.setFrozenRows(1);
    }

    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      clean_(payload.name),
      clean_(payload.email),
      clean_(payload.phone),
      clean_(payload.business),
      clean_(payload.sector),
      clean_(payload.project),
      clean_(payload.timeline),
      clean_(payload.interest),
      clean_(payload.source)
    ]);

    const subject = 'Nuevo prospecto web: ' + clean_(payload.business);
    const body = [
      'Nuevo prospecto recibido desde dtechlab.io',
      '',
      'Nombre: ' + clean_(payload.name),
      'Email: ' + clean_(payload.email),
      'WhatsApp: ' + clean_(payload.phone),
      'Negocio: ' + clean_(payload.business),
      'Sector: ' + clean_(payload.sector),
      'Proyecto: ' + clean_(payload.project),
      'Plazo: ' + clean_(payload.timeline),
      'Referencia: ' + clean_(payload.interest),
      'Origen: ' + clean_(payload.source)
    ].join('\n');

    MailApp.sendEmail({ to: SALES_EMAIL, replyTo: clean_(payload.email), subject: subject, body: body });
    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: 'No se pudo registrar el prospecto.' });
  }
}

function clean_(value) {
  const text = String(value || '').trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
