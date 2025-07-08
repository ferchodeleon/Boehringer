import { useEffect } from "react";
import Banner from "../Components/Banner";
import Data from "../Components/Data";
import Speakers from "../Components/speakers/Speakers";
import Agend from "../Components/Agend";

export const Home = () => {
  useEffect(() => {
    // Manejar scroll automático cuando se navega con hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Pequeño delay para asegurar que el DOM esté completamente renderizado
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    };

    // Ejecutar después de que el componente se monte
    handleHashScroll();

    // Escuchar cambios en el hash para navegación directa
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <main>
      <Banner />
      <Data />
      <Speakers />
      <Agend />
    </main>
  );
};
