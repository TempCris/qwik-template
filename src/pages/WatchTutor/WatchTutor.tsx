// ---Dependencies
import {component$,
  useStore,
  useWatch$, 
  useMount$, 
  useClientEffect$ } from "@builder.io/qwik";
/**
 * WatchTutor Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const WatchTutor = component$(()=>{
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
useWatch$(({track})=>{
  track(stateWatch,'age') 
  stateWatch.doublecounter = stateWatch.age *10
})
useMount$(()=>{
  stateMount.age = 1000
})
useClientEffect$(()=>{
  const timer = setInterval(()=>{
    stateClientEffect.time++
  },1000)
  return()=>{
      clearInterval(timer)
  }
})
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