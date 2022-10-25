// ---Dependencies
import { component$ } from "@builder.io/qwik";
/**
 * DummyPage Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const GridLayout = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  return (
    <>
      <p>
        hi i am a Grid Layout - First Box
      </p>
      <p>First Box</p>
      <div className="first-box">
        <div className="child-one">Child One</div>
        <div className="child-two">Child Two</div>
        <div className="child-three">Child Three </div>
        <div className="child-four">Child Four</div>
        <div className="child-five">Child Five</div>
        <div className="child-six">Child Six </div>
      </div>
      <p>Second Box</p>
      <div className="second-box">
        <div className="child2-one">Child One</div>
        <div className="child2-two">Child Two</div>
        <div className="child2-three">Child Three </div>
      </div>
    </>
  );
});