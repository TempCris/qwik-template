// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
// ---Components
import Footer from 'src/GlobalProvider/footer/footer';
import Header from 'src/GlobalProvider/header/header';

/**
 * Layout Component: Aqui se hace un diseño de la estructura de las
 * paginas estaticas donde podemos inyectar nuestros componentes 
 * de Header (Navbar) y Footer de igual manera usamos el componente Slot
 * 
 * 
 * -Slot: Permite proyectar los hijos del componente actual,
 *  solo se puede usar dentro del contexto de un componente definido con componente$.
 */
export default component$(() => {
  return (
    <>
      <main>
        <Header/>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
});
