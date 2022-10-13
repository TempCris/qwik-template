import { component$ } from "@builder.io/qwik";
/**
 * AboutPage Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const About = component$(() => {
  return (
    <div>
      <h1>Custom page</h1>
      <ul>
        <li>
          <a href="/about/12313">First Component</a>
        </li>
        <li>
          <a href="/about/1111"> About </a>
        </li>
        <li>
          <a href="/about/food"> Food </a>
        </li>
      </ul>
    </div>
  );
});
