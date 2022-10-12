// ---Dependencies
import {component$, useContext, } from "@builder.io/qwik";
// ---Components
import { Mycontext } from 'src/pages/Food/Food';
/**
 * ChildEx Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const ChildEx =  component$(() => {
    // -----------------------CONSTS, HOOKS, STATES
    const state: any = useContext(Mycontext);
    return(
    <div>
      --------------Hi im a Child-------------- 
      <br />
      Le mandamos las propiedasdes del State al hijo por medio de "useContext"
      <p>Name state:{state.name} </p>
      <p>Age state:{state.age} </p>
    </div>
  );
});