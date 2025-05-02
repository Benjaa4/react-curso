
import { useNavigate } from "react-router";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productos");
  };
  const handleClick2 = () => {
    navigate("/");
  }
  return (
    <header className="nvheader">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="navbar-btn" aria-current="page" href="#" onClick={handleClick2}>
                  Techshop
                </button>
              </li>
              <li>
                <button className="navbar-btn" onClick={handleClick}>Products</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
