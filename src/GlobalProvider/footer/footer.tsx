// ---Dependencies
import { component$, useStylesScoped$ } from '@builder.io/qwik';
// ---CSS
import styles from './footer.css?inline';
/**
 * Compoente del Footer
 */
export const Footer = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useStylesScoped$(styles);
  return (
    <footer>
      custom footer
    </footer>
  );
});