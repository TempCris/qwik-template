// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
// ---Config
import { RouterHead } from './appConfig/RouterHead/RouterHead';
// ---Styles
import './css/global.css';

/**
 * La raíz de un sitio QwikCity siempre comienza con el componente <QwikCity>,
 * seguido inmediatamente por el <head> y el <body> del documento.
 *
 * No elimine los elementos `<head>` y `<body>`.
 */
export default component$(() => {
  return (
    <QwikCity>
      <head>
        <RouterHead />
      </head>
      <body lang="en">
        <ServiceWorkerRegister />
        <RouterOutlet />
      </body>
    </QwikCity>
  );
});
