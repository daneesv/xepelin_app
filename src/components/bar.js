import React, {Component,Fragment} from "react";
import BrandImg from "../assets/brand.svg";
import {NavLink} from "react-router-dom";

class Bar extends Component{

    openNav(){
        document.getElementById("nav").classList.add("nav-show");
        document.querySelector(".nav-bg").style.display="block";
        setTimeout(()=>{
            document.querySelector(".nav-bg").classList.add("nav-bg-show");
        },0);
    }

    closeNav(){
        document.getElementById("nav").classList.remove("nav-show");
        document.querySelector(".nav-bg").classList.remove("nav-bg-show");
        setTimeout(()=>{
            document.querySelector(".nav-bg").style.display="none";
        },250);
    }

    render(){
        return(
            <Fragment>
                <div id="bar">
                    <div className="bar-menu" onClick={this.openNav}>
                        <div>
                            <div className="bar-menu-line"></div>
                            <div className="bar-menu-line"></div>
                            <div className="bar-menu-line"></div>
                        </div>
                    </div>
                    <div className="bar-brand">
                        <a href="/"><img src={BrandImg} alt="" /></a>
                    </div>
                    <div className="bar-buttons">
                        <NavLink to="/notificaciones" className="bar-notifications">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="44.36" viewBox="0 0 38 44.36"><path d="M37.76,34.14l-3.58-5.3A12.48,12.48,0,0,1,32,22.66l-.59-6.88A13.76,13.76,0,0,0,20.6,3.67C19.79,1.49,18.06,0,16.15,0h-.32c-2,.18-3.61,2-4.07,4.42a13.77,13.77,0,0,0-8.53,13.8l.6,6.88a12.51,12.51,0,0,1-1.09,6.46L.12,37.42a1.32,1.32,0,0,0,.15,1.35,1.39,1.39,0,0,0,1.13.56h.14l6.86-.6a9.9,9.9,0,0,0,9.08,5.63,9.67,9.67,0,0,0,9.61-7.26l9.61-.83a1.41,1.41,0,0,0,1.15-.77A1.31,1.31,0,0,0,37.76,34.14ZM17.48,40.86a6.58,6.58,0,0,1-5.22-2.47l11-1A6.38,6.38,0,0,1,17.48,40.86ZM4.8,35.53,5.93,33a15.94,15.94,0,0,0,1.39-8.19l-.6-6.89a10.23,10.23,0,0,1,6.4-10.26A3.47,3.47,0,0,0,15.2,5.08c.21-1.09.75-1.56.94-1.58h0c.22,0,.81.42,1.18,1.39a3.48,3.48,0,0,0,2.5,2.19,10.24,10.24,0,0,1,8.07,9L28.5,23a15.9,15.9,0,0,0,2.78,7.84l1.55,2.29Z" fill="#fff"/></svg>
                            <div className="bar-notifications-bullet"></div>
                        </NavLink>
                    </div>
                </div>
                <div className="nav-bg" onClick={this.closeNav}></div>
            </Fragment>
        )
    }
}

export default Bar;