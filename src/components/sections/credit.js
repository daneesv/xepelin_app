import React, {Component} from "react";
import Header from "./../header";
import Tabs from "./../tabs";
import CreditImg from "./../../assets/credit.png";
import ArrowImg from "./../../assets/arrow.svg";

class Credit extends Component{

    modal(){
        alert("Se abre un cuadro con un formulario para completar la solicitud con los datos correspondientes.");
    }

    render(){
        return(
            <div className="content noselect">
                <Header title="Crédito Pyme" description="Potencia tu negocio financiando órdenes de compra, comprando maquinarias o inversión en crecimiento." button="Nuevo crédito" buttonIcon="CreateIcon" />
                <Tabs sections={
                    [
                        {id:1,caption:"Solicitudes",link:"/credito-pyme",counter:0}
                    ]
                } />
                <div className="panel">
                    <div className="panel-info">
                        <div className="panel-title">Créditos de capital de trabajo</div>
                        <div className="panel-description">Sin papeleos, formularios ni estados de resultados, nuestro modelo de riesgos genera la data por nosotros; requisitos sencillos, pagos flexibles y tasa de interés personalizada.</div>
                        <div className="panel-button" onClick={this.modal}>Solicita un crédito<img src={ArrowImg} alt="" /></div>
                    </div>
                    <div className="panel-picture">
                        <img src={CreditImg} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Credit;