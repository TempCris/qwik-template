// ---Dependencies
import { component$ } from "@builder.io/qwik";
// ---Images
import mrs from "public/MeeseeksHQ.webp"

export default component$(() => {
    // -----------------------CONSTS, HOOKS, STATES
    return(
      <div className="dummyComp">
      --------------Hi im a Dummy Commponent-------------- 
      <br />
      trye me!!!
      <br />
      <img src={mrs} alt="dummy image"/>
    </div>
  );
});