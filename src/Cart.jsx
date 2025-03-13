import { useEffect } from "react";
import "./Cart.css";
function Cart() {





  const alerta = async () => {
    alert("bienvenido a la pagina web");
  };

  useEffect(() => {
    const btn = document.getElementById("boton");
    if (btn) {
      btn.addEventListener("click", alerta);

      return () => {
        btn.removeEventListener("click", alerta);

      }
    }


  }, []
  )



  return (<button id="boton" className="nav-link active">carrito</button>)
}

export default Cart;
