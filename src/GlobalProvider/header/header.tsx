// ---Dependencies
import { component$, useStylesScoped$ } from '@builder.io/qwik';
// ---CSS
import styles from './header.css?inline';

export default component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useStylesScoped$(styles);
  return (
    <header>
      <a href="/">
        <img src="/forge-sm-web.png" alt="forge" width={120} />
      </a>
      <ul>
        <li>
          <a href="/firstPage"> First Page</a>
        </li>
        <li>
          <a href="/about"> About </a>
        </li>
        <li>
          <a href="/food"> Food </a>
        </li>
        <li>
          <a href="/LifeCycleHooks"> LifeCycleHooks </a>
        </li>
        <li>
          <a href="/dummyRoot"> Dummy Root </a>
        </li>
      </ul>
    </header>
  );
});
