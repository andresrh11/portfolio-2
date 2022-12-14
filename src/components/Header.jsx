export default function Header() {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200 py-10 ">
        <div className="hero-content text-center content-center items-center">
          <div className="max-w-3xl ">
            <h2 className="text-3xl font-bold">Andrés Romero</h2>
            <div className="heade">
              <span className="heade1">FRONT-END</span>
              <span className="heade2"> DEVELOPER</span>
            </div>
            <h2 className="text-xl font-bold py-1">📍 JavaScript </h2>
            {/* <p className="py-6">
              <h2>
                {" "}
                Desarrollador Web Front-End, con habilidad en lenguajes y
                herramientas de software. Excelente manejo de tecnologías y
                escritura de código para desarrollar sistemas, proyectos
                innovadores, amigables con el usuario y que aportan eficiencia
                al negocio. Habilidad motivando, educando y gestionando equipos.
                Buen manejo del inglés (B2) y español (nativo).
              </h2>
            </p>
            <p>
              <h2>
                Durante 2 años y medio estuve estudiando Administración de
                empresas, donde aprendí muchos conceptos y habilidades que
                complementan tanto mi trabajo en equipo como mi capacidad de
                toma de decisiones.{" "}
              </h2>
            </p> */}
            <a
              href="https://drive.google.com/file/d/1IUi4RlKx3d2k452pzK6bG4xRmdDGOidT/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">Descargar CV</button>
            </a>{" "}
            <button className="btn btn-primary m-2">
              <a href="#contacto">Contacto</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
