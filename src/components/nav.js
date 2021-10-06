import React, {Component} from "react";
import BrandImg from "../assets/brand.svg";
import CloseImg from "../assets/close.svg";
import {NavLink} from "react-router-dom";

class Nav extends Component{

    closeNav(){
        document.getElementById("nav").classList.remove("nav-show");
        document.querySelector(".nav-bg").classList.remove("nav-bg-show");
        setTimeout(()=>{
            document.querySelector(".nav-bg").style.display="none";
        },250);
    }

    closePanel(){
        var overlay=document.querySelector(".nav-bg");
        if(overlay.className.match(/\bnav-bg-show\b/)){
            document.getElementById("nav").classList.remove("nav-show");
            document.querySelector(".nav-bg").classList.remove("nav-bg-show");
            setTimeout(()=>{
                document.querySelector(".nav-bg").style.display="none";
            },250);
        }
    }

    manageButtons(){
        if(document.querySelector(".nav-profile-buttons").style.display==="block"){
            document.querySelector(".nav-profile-buttons").classList.remove("nav-profile-buttons-show");
            setTimeout(()=>{
                document.querySelector(".nav-profile-buttons").style.display="none";
            },250);
        }else{
            document.querySelector(".nav-profile-buttons").style.display="block";
            setTimeout(()=>{
                document.querySelector(".nav-profile-buttons").classList.add("nav-profile-buttons-show");
            },0);
        }
    }

    render(){
        return(
        <div id="nav" className="noselect">
            <div className="nav-brand">
                <NavLink to="/tablero"><img src={BrandImg} alt="" /></NavLink>
            </div>
            <div className="nav-close" onClick={this.closeNav}>
                <img src={CloseImg} alt="Cerrar" />
            </div>
            <div className="nav-nodes">
                <NavLink className="nav-node" to="/tablero" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="39.62" height="43.37" viewBox="0 0 39.62 43.37"><path d="M36.05,11.24,21,.38a2,2,0,0,0-2.34,0L3.57,11.24a8.39,8.39,0,0,0-3.57,7V37.09a6.29,6.29,0,0,0,6.28,6.28H33.34a6.29,6.29,0,0,0,6.28-6.28V18.21A8.39,8.39,0,0,0,36.05,11.24ZM23.53,39.37H16.09V23.81h7.44Zm12.09-2.28a2.29,2.29,0,0,1-2.28,2.28H27.53V23.73a3.93,3.93,0,0,0-3.92-3.92H16a3.93,3.93,0,0,0-3.92,3.92V39.37H6.28A2.29,2.29,0,0,1,4,37.09V18.21a4.43,4.43,0,0,1,1.91-3.73l13.9-10,13.9,10a4.43,4.43,0,0,1,1.91,3.73Z" fill="#fff"/></svg>Inicio</NavLink>
                <NavLink className="nav-node" to="/notificaciones" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="38" height="44.61" viewBox="0 0 38 44.61"><path d="M37.76,34.14l-3.58-5.3A12.48,12.48,0,0,1,32,22.66l-.59-6.88A13.76,13.76,0,0,0,20.6,3.67C19.79,1.49,18.06,0,16.15,0h-.32c-2,.18-3.61,2-4.07,4.42a13.77,13.77,0,0,0-8.53,13.8l.6,6.88a12.51,12.51,0,0,1-1.09,6.46L.12,37.42a1.32,1.32,0,0,0,.15,1.35,1.39,1.39,0,0,0,1.13.56h.14l6.59-.58a10.16,10.16,0,0,0,9.35,5.86,9.91,9.91,0,0,0,9.87-7.53l9.35-.81a1.41,1.41,0,0,0,1.15-.77A1.31,1.31,0,0,0,37.76,34.14ZM17.48,40.61a6.37,6.37,0,0,1-4.92-2.24L23,37.46A6.18,6.18,0,0,1,17.48,40.61ZM5.6,35l.79-1.75a16.52,16.52,0,0,0,1.43-8.45l-.6-6.88a9.74,9.74,0,0,1,6.09-9.76A4,4,0,0,0,15.7,5.17a2.27,2.27,0,0,1,.48-1.12,2.33,2.33,0,0,1,.68,1,4,4,0,0,0,2.86,2.5,9.72,9.72,0,0,1,7.68,8.55L28,23a16.48,16.48,0,0,0,2.86,8.07l1.08,1.59Z" fill="#fff"/></svg>Notificaciones<div className="nav-node-bullet"></div></NavLink>
                <div className="nav-group">Financiamiento</div>
                <NavLink className="nav-node" to="/financiamiento-directo" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="42.91" height="42.91" viewBox="0 0 42.91 42.91"><path d="M31.94,14.19a2,2,0,0,1,0,2.83l-4.61,4.61A2,2,0,0,1,24.5,18.8l1.19-1.2H12.39a2,2,0,1,1,0-4h13.3L24.5,12.41a2,2,0,0,1,2.83-2.83ZM30.52,25.31H17.22l1.19-1.2a2,2,0,1,0-2.83-2.82L11,25.89a2,2,0,0,0-.59,1.42A2,2,0,0,0,11,28.72l4.6,4.61a2,2,0,0,0,1.42.59,2,2,0,0,0,1.41-3.42l-1.19-1.19h13.3a2,2,0,1,0,0-4Zm12.39-3.85A21.46,21.46,0,1,1,21.46,0,21.47,21.47,0,0,1,42.91,21.46Zm-4,0A17.46,17.46,0,1,0,21.46,38.91,17.47,17.47,0,0,0,38.91,21.46Z" fill="#fff"/></svg>Directo</NavLink>
                <NavLink className="nav-node" to="/pronto-pago" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="42.91" height="42.91" viewBox="0 0 42.91 42.91"><path d="M33.09,20a2,2,0,0,1,0,2.83l-5.19,5.2a2,2,0,0,1-1.42.58,2,2,0,0,1-1.41-.58,2,2,0,0,1,0-2.83l1.78-1.78H11.23a2,2,0,1,1,0-4H26.85l-1.78-1.79a2,2,0,0,1,2.83-2.82Zm9.82,1.42A21.46,21.46,0,1,1,21.46,0,21.47,21.47,0,0,1,42.91,21.46Zm-4,0A17.46,17.46,0,1,0,21.46,38.91,17.47,17.47,0,0,0,38.91,21.46Z" fill="#fff"/></svg>Pronto Pago</NavLink>
                <NavLink className="nav-node" to="/credito-pyme" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="42.91" height="42.91" viewBox="0 0 42.91 42.91"><path d="M26.49,16.13a2,2,0,1,0,2-3.45,13.69,13.69,0,0,0-3.65-1.63c-.3-.07-.61-.13-.92-.18V9.38a2,2,0,0,0-4,0v1.41h-.11A7,7,0,0,0,15.63,13a5.51,5.51,0,0,0-1.36,4.1,5.44,5.44,0,0,0,2.79,4.35,18.39,18.39,0,0,0,2.88,1.38v5.37L19.48,28a6.75,6.75,0,0,1-2.79-1.66,2,2,0,0,0-2.56,3.07,10.62,10.62,0,0,0,4.33,2.46,10.18,10.18,0,0,0,1.48.28v1.1a2,2,0,0,0,4,0V32a9.15,9.15,0,0,0,1.12-.3,6.62,6.62,0,0,0,4.13-4.13,5,5,0,0,0-.89-4.68,9.18,9.18,0,0,0-4-2.71l-.36-.15V15A9.71,9.71,0,0,1,26.49,16.13ZM19.19,18c-.89-.56-.92-1-.93-1.24a1.55,1.55,0,0,1,.36-1.17,2.82,2.82,0,0,1,1.32-.73v3.55A8.45,8.45,0,0,1,19.19,18Zm5.95,7.35a1.05,1.05,0,0,1,.24,1,2.69,2.69,0,0,1-1.44,1.45V24.46A3.91,3.91,0,0,1,25.14,25.36ZM21.46,0A21.46,21.46,0,1,0,42.91,21.46,21.49,21.49,0,0,0,21.46,0Zm0,38.91A17.46,17.46,0,1,1,38.91,21.46,17.47,17.47,0,0,1,21.46,38.91Z" fill="#fff"/></svg>Crédito Pyme</NavLink>
                <NavLink className="nav-node" to="/confirming" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="42.91" height="42.91" viewBox="0 0 42.91 42.91"><path d="M21.46,0A21.46,21.46,0,1,0,42.91,21.46,21.48,21.48,0,0,0,21.46,0Zm0,38.91A17.46,17.46,0,1,1,38.91,21.46,17.47,17.47,0,0,1,21.46,38.91Zm10-10a2,2,0,0,1-2.8.42l-8.43-6.27a2,2,0,0,1-.8-1.6V8a2,2,0,1,1,4,0V20.45l7.61,5.67A2,2,0,0,1,31.49,28.91Z" fill="#fff"/></svg>Confirming</NavLink>
                <div className="nav-group">Análisis</div>
                <NavLink className="nav-node" to="/xtracker" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="42.88" height="42.88" viewBox="0 0 42.88 42.88"><path d="M42.88,21.44A21.44,21.44,0,1,1,21.44,0a2,2,0,0,1,2,2V17.24a2,2,0,0,1-.07.49,4.2,4.2,0,1,1-3.86,0,1.93,1.93,0,0,1-.07-.49V11.91a9.74,9.74,0,1,0,11.74,9.53,9.63,9.63,0,0,0-1.88-5.75,2,2,0,1,1,3.22-2.37A13.74,13.74,0,1,1,19.44,7.86V4.11A17.44,17.44,0,1,0,34.86,10.3a2,2,0,1,1,3.07-2.56A21.47,21.47,0,0,1,42.88,21.44Z" fill="#fff" fillRule="evenodd"/></svg>Xtracker<span className="nav-node-tag">Nuevo</span></NavLink>
                <div className="nav-group">Comercio</div>
                <NavLink className="nav-node" to="/configuracion" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="42.91" height="42.91" viewBox="0 0 42.91 42.91"><path d="M23.17,42.91H19.74a4.39,4.39,0,0,1-4.35-3.67l-.26-1.57-.59-.24-1.33.94a4.28,4.28,0,0,1-2.54.82A4.4,4.4,0,0,1,7.55,37.9L5.13,35.47a4.39,4.39,0,0,1-.48-5.67l.91-1.26c-.1-.22-.19-.45-.28-.67l-1.61-.28A4.39,4.39,0,0,1,0,23.25V19.83a4.4,4.4,0,0,1,3.68-4.35l1.52-.26c.09-.23.18-.45.28-.68l-1-1.33A4.39,4.39,0,0,1,5,7.54L7.44,5.12a4.49,4.49,0,0,1,5.68-.47l1.26.91.67-.28.28-1.61A4.39,4.39,0,0,1,19.67,0h3.42a4.4,4.4,0,0,1,4.35,3.68L27.7,5.2l.77.32,1.3-.92a4.29,4.29,0,0,1,2.55-.82,4.36,4.36,0,0,1,3.11,1.29L37.86,7.5a4.38,4.38,0,0,1,.47,5.67l-.92,1.29c.1.22.19.45.28.67l1.56.27a4.35,4.35,0,0,1,3.66,4.37v3.4a4.38,4.38,0,0,1-3.67,4.34l-1.57.26c-.09.23-.18.45-.28.68l.92,1.3a4.38,4.38,0,0,1-.47,5.67l-2.42,2.42a4.5,4.5,0,0,1-5.68.47l-1.29-.92-.67.28-.27,1.57A4.38,4.38,0,0,1,23.17,42.91Zm-8.83-9.79a1.91,1.91,0,0,1,.93.23,13,13,0,0,0,2.23.91,2,2,0,0,1,1.38,1.59l.46,2.73a.39.39,0,0,0,.4.33h3.43a.4.4,0,0,0,.4-.34L24,35.84a2,2,0,0,1,1.38-1.58,13.83,13.83,0,0,0,2.31-.95,2,2,0,0,1,2.1.14l2.25,1.61a.4.4,0,0,0,.52-.05L35,32.59a.41.41,0,0,0,.05-.52l-1.61-2.26a2,2,0,0,1-.15-2.09,13.09,13.09,0,0,0,1-2.3A2,2,0,0,1,35.84,24l2.74-.45a.4.4,0,0,0,.33-.4V19.75a.39.39,0,0,0-.32-.41h0l-2.74-.46a2,2,0,0,1-1.57-1.38,13.39,13.39,0,0,0-1-2.31,2,2,0,0,1,.14-2.1l1.62-2.25a.4.4,0,0,0,0-.51L32.61,7.9a.4.4,0,0,0-.51-.05L29.83,9.47a2,2,0,0,1-2.09.13,13.22,13.22,0,0,0-2.39-1A2,2,0,0,1,24,7l-.45-2.7A.41.41,0,0,0,23.09,4H19.67a.4.4,0,0,0-.4.34L18.8,7.11a2,2,0,0,1-1.38,1.57,13.44,13.44,0,0,0-2.29,1A2,2,0,0,1,13,9.51L10.78,7.9a.35.35,0,0,0-.5,0L7.83,10.37a.42.42,0,0,0,0,.53l1.63,2.28a2,2,0,0,1,.14,2.09,12.9,12.9,0,0,0-.94,2.3A2,2,0,0,1,7,19l-2.7.46a.39.39,0,0,0-.34.4v3.42a.4.4,0,0,0,.34.4l2.77.47A2,2,0,0,1,8.68,25.5a13.44,13.44,0,0,0,1,2.29,2,2,0,0,1-.14,2.11l-1.6,2.23a.39.39,0,0,0,0,.51l2.43,2.43a.4.4,0,0,0,.51,0l2.29-1.63A2,2,0,0,1,14.34,33.12Zm7.12-2a9.62,9.62,0,1,1,9.61-9.62A9.63,9.63,0,0,1,21.46,31.07Zm0-15.23a5.62,5.62,0,1,0,5.61,5.61A5.62,5.62,0,0,0,21.46,15.84Z" fill="#fff"/></svg>Configuración</NavLink>
                <NavLink className="nav-node" to="/ayuda" activeClassName="nav-node-on" onClick={this.closePanel}><svg xmlns="http://www.w3.org/2000/svg" width="42.91" height="42.91" viewBox="0 0 42.91 42.91"><path d="M22.88,25l-4-.58a10.34,10.34,0,0,1,.6-2.54,5.34,5.34,0,0,1,1.77-2.13q.39-.3.87-.63c.32-.23.67-.47,1-.73a5,5,0,0,0,1.25-1.28,3,3,0,0,0,.39-1.37,1.83,1.83,0,0,0-.29-1,2.61,2.61,0,0,0-1.09-1,5,5,0,0,0-2.24-.44,3.39,3.39,0,0,0-1.69.52,2.28,2.28,0,0,0-.92,1,9.26,9.26,0,0,0-.5,2.14l-3.95-.63A11.71,11.71,0,0,1,15,13.1a6.2,6.2,0,0,1,2.39-2.67A7.41,7.41,0,0,1,21,9.28a8.91,8.91,0,0,1,4.22.87A6.64,6.64,0,0,1,28,12.73a5.8,5.8,0,0,1,.85,3.11,7.12,7.12,0,0,1-.95,3.33,9.07,9.07,0,0,1-2.24,2.4c-.39.3-.79.58-1.16.84l-.74.54c-.4.3-.47.42-.52.54A7.2,7.2,0,0,0,22.88,25Zm-6.77-8.39h0Zm4.79,11a2.6,2.6,0,1,0,2.59,2.59,2.6,2.6,0,0,0-2.59-2.59Zm.56,15.32A21.46,21.46,0,1,1,42.91,21.46,21.47,21.47,0,0,1,21.46,42.91ZM21.46,4A17.46,17.46,0,1,0,38.91,21.46,17.48,17.48,0,0,0,21.46,4Z" fill="#fff"/></svg>Ayuda</NavLink>
            </div>
            <div className="nav-account">
                <div className="nav-profile">
                    <div className="nav-profile-pic"></div>
                    <div className="nav-profile-data">
                        <div className="nav-profile-name">Mariana Mont</div>
                        <div className="nav-profile-company">Alimex S.A.</div>
                        <div className="nav-profile-rut">96938200-8</div>
                    </div>
                    <div className="nav-profile-menu" onClick={this.manageButtons}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.76" height="4" viewBox="0 0 17.76 4"><path d="M4,2A2,2,0,1,1,2,0,2,2,0,0,1,4,2ZM8.88,0a2,2,0,1,0,2,2A2,2,0,0,0,8.88,0Zm6.88,0a2,2,0,1,0,2,2A2,2,0,0,0,15.76,0Z" fill="#fff"/></svg>
                    </div>
                </div>
                <div className="nav-profile-buttons">
                    <NavLink className="nav-profile-btn" to="/configuracion" activeClassName="nav-profile-btn-on" onClick={this.closePanel}>Preferencias</NavLink>
                    <NavLink className="nav-profile-btn" to="/">Cerrar sesión</NavLink>
                </div>
            </div>
        </div>
        )
    }
}

export default Nav;