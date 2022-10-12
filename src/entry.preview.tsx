/*
 * ¿QUÉ ES ESTE ARCHIVO?
 *
 * Es el punto de entrada del paquete para `npm run preview`.
 * Es decir, sirviendo su aplicación construida en modo de producción.
 *
 * Siéntase libre de modificar este archivo, ¡pero no lo elimine!
 *
 * Obtenga más información sobre el comando de vista previa de Vite:
 * - https://vitejs.dev/config/preview-options.html#preview-options
 *
 */
import { qwikCity } from '@builder.io/qwik-city/middleware/node';
import render from './entry.ssr';

/**
 * La exportación predeterminada es el adaptador QwikCity utilizado por la vista previa de Vite.
 */
export default qwikCity(render);
