import React, {Component} from "react";
import Header from "./../header";
import HelpImg from "./../../assets/help.png";
import ArrowImg from "./../../assets/arrow.svg";

class Help extends Component{
    openFaqs(){
        window.open("https://soporte.xepelin.com");
    }
    render(){
        return(
            <div className="content noselect">
                <Header title="Centro de Ayuda" description="¿Con qué podemos ayudarte?" button="Solicitar ayuda" buttonIcon="ChatIcon" />
                <div className="panel">
                    <div className="panel-info">
                        <div className="panel-title">Preguntas frecuentes y conceptos importantes</div>
                        <div className="panel-description">En Xepelin ofrecemos servicios financieros para pymes de manera 100% digital, enfocados en generar una relación cercana con nuestros clientes, para que así podamos ayudarlos a gestionar su capital de trabajo brindándoles distintas alternativas de financiamiento.</div>
                        <div className="panel-button" onClick={this.openFaqs}>Ir a preguntas frecuentes<img src={ArrowImg} alt="" /></div>
                    </div>
                    <div className="panel-picture">
                        <img src={HelpImg} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Help;