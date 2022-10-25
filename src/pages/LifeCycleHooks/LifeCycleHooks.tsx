// ---Dependencies
import {component$,
  useStore,
  useWatch$, 
  useMount$, 
  useClientEffect$ } from "@builder.io/qwik";
/**
 * LifeCycleHooks Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const LifeCycleHooks = component$(()=>{
// -----------------------CONSTS, HOOKS, STATES
const stateWatch = useStore({
  age:10,
  doublecounter:0  
});
const stateMount = useStore({
  age:20,
  doublecounter:0  
});
const stateClientEffect = useStore({
  time:0,
  doublecounter:0  
});
/**
  Se usa para dale seguimiento a los cambios de la Store o algunos de
  sus atributos, esto puede evitar que el cliente tenga que descargar 
  todos los componentes y ejecutarlos al menos una vez para recuperar
  la información de suscripción del sistema, se ejecutan antes de que 
  el componente se renderice y pueden ser asincrónicos se puede usar 
  para una ejecución explícita de código cuando cambia una propiedad.
 */
useWatch$(({track})=>{
  track(stateWatch,'age') 
  stateWatch.doublecounter = stateWatch.age * 2
});
/**
 * 
 */
useMount$(()=>{
  stateMount.age = 1000
});
/**
 */
useClientEffect$(()=>{
  const timer = setInterval(()=>{
    stateClientEffect.time++
  },1000)
  return()=>{
      clearInterval(timer)
  }
});
return(
  <div>
      ------------watch example-------------
      <br />
      <button onClick$={()=>{ 
          stateWatch.age++
      }}>
          add
      </button>
      <br />
      real: {stateWatch.age}
      <br />
      double : {stateWatch.doublecounter}
      <br />
      ---------------useMount---------------
      <br />
      real: {stateMount.age }
      <br />
      -------------useClientEffect-------------
      <br />
      real: {stateClientEffect.time}
      <br />
      double: {stateClientEffect.doublecounter}
  </div>
)
})