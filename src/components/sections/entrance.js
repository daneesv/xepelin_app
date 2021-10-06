import React, {Component} from "react";
import ContinueImg from "./../../assets/continue.svg";
import ShowImg from "./../../assets/show.svg";
import HideImg from "./../../assets/hide.svg";
import XepelinImg from "./../../assets/xepelin.svg";
import LogoImg from "./../../assets/logo.svg";
import Logo2Img from "./../../assets/logo-2.svg";
import {NavLink} from "react-router-dom";

var section=1;

class Entrance extends Component {

    login(){
        document.getElementById("entrance-back").style.display="block";
        document.getElementById("entrance-create").style.left="-100%";
        document.getElementById("entrance-login").style.left="-100%";
        document.getElementById("entrance-login").style.left="0%";
        section=2;
    }

    create(){
        document.getElementById("entrance-back").style.display="none";
        document.getElementById("entrance-login").style.left="100%";
        document.getElementById("entrance-create").style.left="-100%";
        document.getElementById("entrance-create").style.left="0%";
        section=3;
    }

    create2(){
        document.getElementById("entrance-back").style.display="block";
        document.getElementById("entrance-create").style.left="-100%";
        document.getElementById("entrance-create-2").style.left="100%";
        document.getElementById("entrance-create-2").style.left="0%";
        section=4;
    }

    create3(){
        document.getElementById("entrance-back").style.display="block";
        document.getElementById("entrance-create-2").style.left="-100%";
        document.getElementById("entrance-create-3").style.left="100%";
        document.getElementById("entrance-create-3").style.left="0%";
        section=5;
    }

    create4(){
        document.getElementById("entrance-back").style.display="block";
        document.getElementById("entrance-create-3").style.left="-100%";
        document.getElementById("entrance-create-4").style.left="100%";
        document.getElementById("entrance-create-4").style.left="0%";
        section=6;
    }

    back(){
        if(section===2){
            document.getElementById("entrance-login").style.left="100%";
            document.getElementById("entrance-create").style.left="-100%";
            document.getElementById("entrance-create").style.left="0%";
            section=1;
        }else if(section===4){
            document.getElementById("entrance-back").style.display="none";
            document.getElementById("entrance-create-2").style.left="100%";
            document.getElementById("entrance-create").style.left="-100%";
            document.getElementById("entrance-create").style.left="0%";
            section=1;
        }else if(section===5){
            document.getElementById("entrance-create-3").style.left="100%";
            document.getElementById("entrance-create-2").style.left="-100%";
            document.getElementById("entrance-create-2").style.left="0%";
            section=4;
        }else if(section===6){
            document.getElementById("entrance-create-4").style.left="100%";
            document.getElementById("entrance-create-3").style.left="-100%";
            document.getElementById("entrance-create-3").style.left="0%";
            section=5;
        }
    }

    render() {
        return (
            <div className="entrance noselect">
                <div className="entrance-panel">
                    <div className="entrance-panel-bg"></div>
                    <img src={XepelinImg} alt="" />
                </div>
                <div className="entrance-canvas">
                    <div className="entrance-bar">
                        <div className="entrace-bar-center">
                            <a href="https://xepelin.com" target="_blank" rel="noreferrer">
                                <img className="entrance-logo" src={LogoImg} alt="" />
                                <img className="entrance-logo-2" src={Logo2Img} alt="" />
                            </a>
                        </div>
                        <div id="entrance-back" className="entrance-back" onClick={this.back}></div>
                    </div>
                    <div className="entrance-area">
                        <div id="entrance-create" className="entrance-screen">
                            <div className="entrance-frame">
                                <div className="entrance-headline"><strong>Financia el futuro</strong> de tu empresa anticipando el cobro de tus facturas de forma rápida y segura.</div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox" type="text" placeholder="Email:" />
                                </div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox" type="password" placeholder="Elige una contraseña:" />
                                    <div className="entrance-visibility" data-status="hidden">
                                        <div className="entrance-visibility-show"><img src={ShowImg} alt="" /></div>
                                        <div className="entrance-visibility-hide"><img src={HideImg} alt="" /></div>
                                    </div>
                                </div>
                                <div className="entrance-btn-create" onClick={this.create2}>
                                    Crear cuenta<img src={ContinueImg} alt="" />
                                </div>
                                <div className="entrance-login-title">¿Ya tienes una cuenta?</div>
                                <div className="entrance-btn-login" onClick={this.login}>Acceder</div>
                            </div>
                        </div>
                        <div id="entrance-create-2" className="entrance-screen entrance-hidden">
                            <div className="entrance-frame">
                                <div className="entrance-headline">¿Cuál es el <strong>RUT</strong> de tu empresa?</div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox" type="text" placeholder="RUT: 00000000-0" />
                                </div>
                                <div className="entrance-btn-create entrance-btn-space" onClick={this.create3}>
                                    Continuar<img src={ContinueImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="entrance-create-3" className="entrance-screen entrance-hidden">
                            <div className="entrance-frame">
                                <div className="entrance-headline">¿Cuál es tu <strong>nombre</strong> completo?</div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox" type="text" placeholder="Nombre:" />
                                </div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox" type="text" placeholder="Apellido:" />
                                </div>
                                <div className="entrance-btn-create entrance-btn-space" onClick={this.create4}>
                                    Continuar<img src={ContinueImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="entrance-create-4" className="entrance-screen entrance-hidden">
                            <div className="entrance-frame">
                                <div className="entrance-headline">Por último, indica tu número de <strong>teléfono móvil</strong>.</div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox" type="text" placeholder="Teléfono/WhatsApp:" />
                                </div>
                                <NavLink to="/tablero" className="entrance-btn-login entrance-btn-login-alt entrance-btn-space">
                                    Finalizar<img src={ContinueImg} alt="" />
                                </NavLink>
                                <div className="entrance-legal">
                                    Al continuar aceptas los <strong>Términos y Condiciones</strong> y la <strong>Política de Privacidad</strong> de Xepelin.
                                </div>
                            </div>
                        </div>
                        <div id="entrance-login" className="entrance-screen entrance-hidden">
                            <div className="entrance-frame">
                                <div className="entrance-headline">Te damos la <strong>bienvenida</strong>.</div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox entrance-textbox-alt" type="text" placeholder="Email:" />
                                </div>
                                <div className="entrance-textbox-frame">
                                    <input className="entrance-textbox entrance-textbox-alt" type="password" placeholder="Contraseña:" />
                                    <div className="entrance-visibility" data-status="hidden">
                                        <div className="entrance-visibility-show"><img src={ShowImg} alt="" /></div>
                                        <div className="entrance-visibility-hide"><img src={HideImg} alt="" /></div>
                                    </div>
                                </div>
                                <div className="entrance-reminder">¿Olvidaste tu contraseña?</div>
                                <NavLink to="/tablero" className="entrance-btn-login entrance-btn-login-alt">
                                    Acceder<img src={ContinueImg} alt="" />
                                </NavLink>
                                <div className="entrance-login-title">¿No tienes una cuenta?</div>
                                <div className="entrance-btn-create entrance-btn-create-alt" onClick={this.create}>Crear cuenta</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entrance;