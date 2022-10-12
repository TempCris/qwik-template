/*
 * ¿QUÉ ES ESTE ARCHIVO?
 *
 * El archivo service-worker.ts se utiliza para tener una captación previa de última generación.
 * https://qwik.builder.io/docs/advanced/prefetching/#prefetching
 *
 * Qwik usa serviceworker para acelerar su sitio y reducir la latencia, es decir, no se usa en la forma tradicional de estar fuera de línea.
 * También puede usar este archivo para agregar más funciones que se ejecutan en el trabajador del servicio.
 */
import { setupServiceWorker } from '@builder.io/qwik-city/service-worker';

setupServiceWorker();

addEventListener('install', () => self.skipWaiting());

addEventListener('activate', () => self.clients.claim());

declare const self: ServiceWorkerGlobalScope;
