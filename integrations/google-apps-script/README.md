# Conexión del chat con correo y Google Sheets

1. Crea una hoja de Google Sheets y copia su ID desde la URL.
2. Crea el proyecto de Google Apps Script con la misma cuenta propietaria de la hoja y pega `Code.gs`.
3. Despliega el script como aplicación web, ejecutándolo como propietario y dando acceso a cualquier usuario.
4. Copia la URL terminada en `/exec` dentro de `lead-config.js`.

Cada conversación completada se guardará en la pestaña `Prospectos DTechLab` y enviará un correo a `sales@dtechl.com`.

La URL `/exec` es pública por diseño y no es una credencial. No se deben incluir contraseñas, claves API ni secretos en `lead-config.js`. La hoja permanece privada y el script descarta el campo trampa `website` antes de guardar datos o enviar correo.
