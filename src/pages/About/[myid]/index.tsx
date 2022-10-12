// ---Dependencies
import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
    // -----------------------CONSTS, HOOKS, STATES
    const location = useLocation();
    return (
    <div>
        <h1>obtenemos los valores como Id
          de la ruta que estamos usando</h1>
        <br />
        my params is: {location.params.myid}
    </div>
  );
});