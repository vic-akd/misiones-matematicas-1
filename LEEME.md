# Misiones de matemáticas · 1.º de primaria (México) · v1.01

Fichas gratuitas de matemáticas para 1.º de primaria en México: 15 temas, 90 fichas y 270 ejercicios. Se contestan en pantalla o se imprimen en carta, con solucionario en la mitad inferior de cada hoja.

**Usarlo en línea:** https://vic-akd.github.io/misiones-matematicas-1/

**Contestar en pantalla:** cada ejercicio tiene casillas y el botón «Comprobar». Si te equivocas aparece una pista; al segundo error puedes ver la respuesta. Nada se guarda.

**Usarlo sin internet:** descarga `index.html` y ábrelo en cualquier navegador. Para PDF, elige «Guardar como PDF» al imprimir.

Los temas se basan en los contenidos de matemáticas de 1.º de la SEP (Fase 3, Plan 2022). Compáralos con el libro de texto de tu grupo.

## Temas

1. Contar hasta 20 · 2. Números hasta 100 · 3. Sumar · 4. Quitar · 5. Comparar y completar · 6. Antes, después y en medio · 7. Sumas iguales · 8. Dobles y diez · 9. Figuras · 10. Cuerpos: planos y curvos · 11. Más largo, más corto · 12. Pesado y ligero · 13. Los días de la semana · 14. La hora · 15. Pictogramas y tablas

## Modificarlo

| Ruta | Qué contiene |
|---|---|
| `src/nucleo/config.js` | Nombre, grado, versión, autor, licencia, Donar y funciones por versión. |
| `src/nucleo/modelo-temas.js` | Los 15 temas: `E(pregunta, figuras, respuesta, pista, {R: campos para contestar})`. |
| `src/nucleo/figuras-base.js`, `figuras.js`, `figuras-solidos.js`, `figuras-basica.js` | Aritmética y dibujos SVG (marcos de diez, colección de manzanas, bloques de base 10, reloj, calendario, balanza, arreglo de puntos y figuras planas…). |
| `src/nucleo/logica-respuestas.js` | Cómo se leen y califican las respuestas. |
| `src/nucleo/vistas-base.js`, `vistas.js` | Armado de cada ficha. |
| `src/nucleo/eventos.js` | Navegación, respuestas, impresión, Donar y Acerca de. |
| `src/nucleo/plantilla-cabeza.html`, `cuerpo.html` | Estilos y estructura de la página. |
| `src/plataformas/html/adaptador.js` | Enlaces, impresión y descarga de la versión HTML. |
| `herramientas/construir.py` | Une todo en un solo HTML. |
| `pruebas/probar.js` | Pruebas automáticas. |

**Regenerar** (Python 3): `python3 herramientas/construir.py` → `index.html` y `web/misiones-matematicas-v1.01-html.html`.

**Probar** (Node y Playwright): `node pruebas/probar.js index.html`.

## Privacidad
Esta aplicación no recaba, guarda, envía ni comparte datos personales. Los botones de Donar abren Mercado Pago o PayPal en tu navegador.

## Autor y licencia
Víctor Arellano · contacto@victorarellano.com · [CC BY-NC-SA 4.0](LICENCIA.md): puedes usarlo, imprimirlo y adaptarlo dando crédito, sin venderlo y compartiendo tus cambios con la misma licencia.

**Cómo dar crédito** si lo usas o lo modificas:

> Basado en *Misiones de matemáticas 1.º* de Víctor Arellano, https://vic-akd.github.io/misiones-matematicas-1/, CC BY-NC-SA 4.0.

Si lo modificaste, agrega «Modificado por <tu nombre>».

Esta herramienta es gratuita. Si te sirve, puedes apoyar de forma voluntaria: [Donar con Mercado Pago](https://link.mercadopago.com.mx/victorcursos) · [Donar con PayPal](https://paypal.me/donar369)
