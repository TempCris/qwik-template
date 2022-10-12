/*
 * ¿QUÉ ES ESTE ARCHIVO?
 *
 * Punto de entrada al desarrollo usando solo módulos del lado del cliente:
 * - ¡No utilice este modo en producción!
 * - No SSR
 * - Ninguna parte de la aplicación se renderiza previamente en el servidor.
 * - Toda la aplicación se ejecuta con entusiasmo en el navegador.
 * - Se transfiere más código al navegador que en el modo SSR.
 * - ¡No se ejecuta el código de optimización/serialización/deserialización!
 */
import { render, RenderOptions } from '@builder.io/qwik';
import Root from './root';

export default function (opts: RenderOptions) {
  return render(document, <Root />, opts);
}
