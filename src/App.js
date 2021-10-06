import React, {Component} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Bar from "./components/bar";
import Dashboard from "./components/sections/dashboard";
import Notifications from "./components/sections/notifications";
import Direct from "./components/sections/direct";
import Pronto from "./components/sections/pronto";
import Credit from "./components/sections/credit";
import Confirming from "./components/sections/confirming";
import Xtracker from "./components/sections/xtracker";
import Settings from "./components/sections/settings";
import Help from "./components/sections/help";
import Notfound from "./components/sections/notfound";
import Entrance from "./components/sections/entrance";

class App extends Component{
  render(){
      return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Entrance></Entrance>
                </Route>
                <Route path="*">
                    <BrowserRouter>
                        <div id="environment">
                            <div id="viewport">
                                <Bar />
                                <Nav />
                                <div id="side"></div>
                                <div id="area">
                                    <Switch>
                                        <Route path="/notificaciones" component={Notifications} />
                                        <Route path="/financiamiento-directo" component={Direct} />
                                        <Route path="/pronto-pago" component={Pronto} />
                                        <Route path="/credito-pyme" component={Credit} />
                                        <Route path="/confirming" component={Confirming} />
                                        <Route path="/xtracker" component={Xtracker} />
                                        <Route path="/configuracion" component={Settings} />
                                        <Route path="/ayuda" component={Help} />
                                        <Route path="/tablero" component={Dashboard} />
                                        <Route exact path="*" component={Notfound} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </BrowserRouter>
                </Route>
            </Switch>
        </BrowserRouter>
      )
  }
}

window.addEventListener("load",function(){

    //DETECT TOUCH DEVICE

    var isTouch=false;
    var isTouchTimer;
    var touchClass="";

    //Touch events on Safari

    document.addEventListener("touchstart",function(){},true);

    //Detect touch input

    document.addEventListener("touchstart",function(event){
        clearTimeout(isTouchTimer);
        isTouch=true;
        if(touchClass!=="touch"){
            touchClass="touch";
            document.body.className="touch";
        }
        isTouchTimer=setTimeout(function(){isTouch=false},2000);
    },false);

    //Detect all inputs (touch, mouse, trackpad)

    document.addEventListener("mouseover",function(event){
        if(!isTouch && touchClass==="touch"){
            isTouch=false;
            touchClass="";
            document.body.className="";
        }
    },false);


    //Document click

    document.addEventListener("mouseup",function(){
        if(document.querySelector(".nav-profile-buttons")){
            if(document.querySelector(".nav-profile-buttons").style.display==="block"){
                document.querySelector(".nav-profile-buttons").classList.remove("nav-profile-buttons-show");
                setTimeout(()=>{
                    document.querySelector(".nav-profile-buttons").style.display="none";
                },250);
            }            
        }
    },true);

    // --- SERVICE WORKER ---

    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("sw.js",{
            scope:"."
        }).then(function(registration){
            //Registration was successful
        },function(err){
            //Registration failed
        });
    }

},false);

export default App;