import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import React, { useState } from "react";
import './styles.css'
import { Link } from "react-router-dom";

function Compra(){
    const [style1, setStyle1] = useState("unselected");
    const [style2, setStyle2] = useState("unselected");
    const [preco, setPreco] = useState(0);
    const [total, setTotal] = useState(0);

    const changeStyle1 = () => {
        if(style1 === "selected"){
            setStyle1("unselected");
            setStyle2("unselected");
            setPreco(0);
            const x = 0;
            valor1(x);
        }
        else if(style1 === "unselected"){
            setStyle1("selected");
            setStyle2("unselected");
            setPreco(19.99);
            const x = 19.99;
            valor1(x);
        }
    }

    const changeStyle2 = () => {
        if(style2 === "selected"){
            setStyle1("unselected");
            setStyle2("unselected");
            setPreco(0);
            const x = 0;
            valor1(x);
        }
        else if(style2 === "unselected"){
            setStyle1("unselected");
            setStyle2("selected");
            setPreco(24.99);
            const x = 24.99;
            valor1(x);
        }
    }

    function valor1(preco1) {
        const tickets = document.getElementById('value').value;
        setTotal(preco1*tickets);
    }

    function valor() {
        const tickets = document.getElementById('value').value;
        setTotal(preco*tickets);
    }

    return(
        <>
            <Header />
            <div className="body-compra">
                <div className="select-2d-3d">
                    <button className={style1} onClick={changeStyle1}>2D - 19,99</button>
                    <button className={style2} onClick={changeStyle2}>3D - 24,99</button>
                </div>
                <div className="ingressos-container">
                    <p>Numero de Ingressos</p>
                    <select className="numero-ingressos" type="number" id="value" onClick={valor}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="compra-container">
                    <div className="valortotal">Total = {total.toFixed(2)}</div>
                    <Link to="/fim">
                        <button className="finalizarcompra">Finalizar Compra</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Compra