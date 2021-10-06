import React, {Component} from "react";
import Header from "./../header";
import Tabs from "./../tabs";
import ConfirmingImg from "./../../assets/confirming.png";
import ArrowImg from "./../../assets/arrow.svg";

class Confirming extends Component{

    modal(){
        alert("Se abre un cuadro con un formulario para completar la solicitud con los datos correspondientes.");
    }

    render(){
        return(
            <div className="content noselect">
                <Header title="Confirming" description="Extiende el plazo de tus cuentas, pagamos por ti y luego nos pagas en la fecha acordada." button="Nueva solicitud" buttonIcon="CreateIcon" />
                <Tabs sections={
                    [
                        {id:1,caption:"Solicitudes",link:"/confirming",counter:0}
                    ]
                } />
                <div className="panel">
                    <div className="panel-info">
                        <div className="panel-title">Ideal para prorrogar tus pagos</div>
                        <div className="panel-description">Pensado para grandes empresas y corporativos que necesiten extender el plazo de sus cuentas por pagar a proveedores claves para su negocio, disminución de riesgo y carga operativa.</div>
                        <div className="panel-button" onClick={this.modal}>Inicia una solicitud<img src={ArrowImg} alt="" /></div>
                    </div>
                    <div className="panel-picture">
                        <img src={ConfirmingImg} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirming;