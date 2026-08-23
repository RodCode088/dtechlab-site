# Firmas de correo · DTechLab

## Formatos que hay aquí

| Archivo | Para qué sirve |
|---|---|
| `horizontal-oscuro.html` / `horizontal-claro.html` | **La que debes usar.** Firma real: texto seleccionable y logo embebido. |
| `vertical-oscuro.html` / `vertical-claro.html` | Misma firma en formato vertical (móvil, firmas cortas). |
| `firma-horizontal-oscuro.png` / `-claro.png` | Respaldo como imagen, para clientes que no aceptan HTML. |
| `firma-texto-plano.txt` | Para correos en texto plano y formularios. |

El logo va **embebido dentro del propio HTML** (base64), así que la firma no
depende de ningún servidor: no se rompe ni aparece como "imagen bloqueada".

## Cómo ponerla en Gmail (2 minutos)

1. Abre `horizontal-oscuro.html` (o la clara) en Chrome — doble clic al archivo.
2. Selecciona el bloque completo de la firma: clic antes del logo y arrastra
   hasta el final del teléfono. **No uses Ctrl+A**, arrastra sobre el bloque.
3. Copia con Ctrl+C.
4. En Gmail: engranaje → *Ver todos los ajustes* → pestaña *General* →
   sección *Firma* → *Crear nueva* → pega con **Ctrl+V**.
5. Baja hasta el final y pulsa *Guardar cambios*.

> Elige **la clara** si escribes a clientes: la mayoría lee el correo con fondo
> blanco y la versión oscura deja un rectángulo negro en medio del mensaje.
> La oscura queda mejor en Gmail con tema oscuro y en presentaciones.

## Outlook

Outlook de escritorio: *Archivo → Opciones → Correo → Firmas*, y pega igual con
Ctrl+V. Si Outlook deforma el diseño, usa el PNG: insértalo como imagen y escribe
debajo el correo y el teléfono como texto (así siguen siendo clicables).

## Apple Mail

*Mail → Ajustes → Firmas*, desmarca "Usar siempre el tipo de letra predeterminado"
y pega la firma copiada del navegador.

## Reglas

- No la reescales a mano: si la necesitas más pequeña, pídeme la versión vertical.
- No cambies el azul por otro color; es el único acento de la marca.
- Si cambian tus datos, edítalos directamente en el HTML (están en texto claro,
  al final del archivo) o pídeme la firma para otra persona del equipo.
