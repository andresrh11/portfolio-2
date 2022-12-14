

export default function Navbar() {
  return (
    <div id="home" className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          href="https://www.linkedin.com/in/andresrh29/"
          target="_blank"
          rel="noreferrer"
        >
          Andres
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
