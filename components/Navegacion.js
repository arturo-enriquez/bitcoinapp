import Link from "next/link";

const Navegacion = () => (
  <nav className="navbar navbar-expand navbar-light bg-light">
    <div className="container">
      <h1><Link href=""><a className="">TodoBitcoin</a></Link></h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Inicio</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/nosotros"><a className="nav-link">Nosotros</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  // <style jsx>{`
  //   .bg-dark {
  //     background-color: black;
  //   }
  // `}</style>
);

export default Navegacion;
