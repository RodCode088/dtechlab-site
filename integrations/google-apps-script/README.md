# Conexión del chat con correo y Google Sheets

1. Crea una hoja de Google Sheets y copia su ID desde la URL.
2. Crea un proyecto en Google Apps Script, pega `Code.gs` y agrega una propiedad de script llamada `SHEET_ID` con el ID de la hoja.
3. Despliega el script como aplicación web, ejecutándolo como propietario y dando acceso a cualquier usuario.
4. Copia la URL terminada en `/exec` dentro de `lead-config.js`.

Cada conversación completada se guardará en la pestaña `Prospectos DTechLab` y enviará un correo a `sales@dtechl.com`.
