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
        <img src="public\forge-sm-web.png" alt="forge" width={120} />
      </a>
      <ul>
        <li>
          <a href="/firstComponent"> First Component</a>
        </li>
        <li>
          <a href="/about"> About </a>
        </li>
        <li>
          <a href="/food"> Food </a>
        </li>
        <li>
          <a href="/watchTutor"> Watchtutor </a>
        </li>
        <li>
          <a href="/dummyRoot"> Dummy Root </a>
        </li>
      </ul>
    </header>
  );
});
