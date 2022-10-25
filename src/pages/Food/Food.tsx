// ---Dependencies
import {component$, 
  useStore,
  useContextProvider,
  createContext } from "@builder.io/qwik";
// ---Images
import initState from 'public/initialState.jpg'
// ---Custom Hooks
export const Mycontext = createContext("whatever");

/**
 * Food Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const Food = component$(() => {
   // -----------------------CONSTS, HOOKS, STATES
    const initialState = useStore({
    name:"Cristian", 
    age:28
  });
  useContextProvider(Mycontext,initialState)
  return (
    <div>
      Inicializamos el estado en el componente padre y se lo mandamos al componente hijo 
      <br />
      <br />
      <img src={initState} alt="" />
      <br/>
      <br/>
      my state is: {initialState.name}
      <br/>
      <input onInput$={(e)=> initialState.name = (e?.target as HTMLInputElement).value}/>
      <br/>
  </div>)
});

