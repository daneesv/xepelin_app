import React, {Component} from "react";
import {Route,Switch} from "react-router-dom";
import Tabs from "./../tabs";
import {NavLink} from "react-router-dom";
import DirectImg from "./../../assets/direct.svg";
import ProntoImg from "./../../assets/pronto.svg";
import CreditImg from "./../../assets/credit.svg";
import ConfirmingImg from "./../../assets/confirming.svg";
import XtrackerImg from "./../../assets/xtracker.svg";
import BalanceImg from "./../../assets/balance.svg";
import ArrowImg from "./../../assets/arrow-white.svg";
import IgImg from "./../../assets/ig.svg";
import FbImg from "./../../assets/fb.svg";
import TwImg from "./../../assets/tw.svg";
import InImg from "./../../assets/in.svg";
import YtImg from "./../../assets/yt.svg";

class Dashboard extends Component{
    render(){
        return(
            <div className="content content-center noselect">
                <div className="content-focused">
                    <div className="dashboard-greeting">Hola, Mariana Mont.</div>
                    <Tabs focused sections={
                        [
                            {id:1,caption:"Tablero",link:"/tablero",counter:""},
                            {id:2,caption:"Novedades",link:"/tablero/novedades",counter:2}
                        ]
                    } />
                    <Switch>
                        <Route exact path="/tablero/novedades">
                            <div className="dashboard-networks">
                                <a className="dashboard-social" href="https://instagram.com/xepelinofficial" target="_blank" rel="noreferrer"><img src={IgImg} alt="" /></a>
                                <a className="dashboard-social" href="https://twitter.com/xepelinofficial" target="_blank" rel="noreferrer"><img src={TwImg} alt="" /></a>
                                <a className="dashboard-social" href="https://facebook.com/Xepelinofficial" target="_blank" rel="noreferrer"><img src={FbImg} alt="" /></a>
                                <a className="dashboard-social" href="https://linkedin.com/company/xepelinofficial" target="_blank" rel="noreferrer"><img src={InImg} alt="" /></a>
                                <a className="dashboard-social" href="https://youtube.com/channel/UCVvKrRx0AEMXsDHNuA_TAIA" target="_blank" rel="noreferrer"><img src={YtImg} alt="" /></a>
                            </div>
                            <div className="dashboard-news">
                                <div className="dashboard-news-item">
                                    <div className="dashboard-news-tag">Actualización</div>
                                    <div className="dashboard-news-title">¡Experiencia de usuario renovada!</div>
                                    <div className="dashboard-news-content">Ahora, Xepelin es una herramienta más visual e intuitiva que ofrece una renovada experiencia de usuario. Se integra, gestiona y controla todas las operaciones a través de una interacción muy simple e intuitiva. También ofrece herramientas para la interpretación de resultados.</div>
                                </div>
                                <div className="dashboard-news-item">
                                    <div className="dashboard-news-tag">Funcionalidad</div>
                                    <div className="dashboard-news-title">Nueva herramienta para cargar PDFs cedibles</div>
                                    <div className="dashboard-news-content">Transformamos un servicio que, muchas veces debido a su mal funcionamiento y el exceso de tramitación innecesaria, terminaba siendo visto como un problema.</div>
                                </div>
                            </div>
                        </Route>
                        <Route path="/tablero">
                            <div className="dashboard-grid">
                                <div className="dashboard-balance">
                                    <div className="dashboard-balance-info">
                                        <div className="dashboard-balance-title">Saldo disponible</div>
                                        <div className="dashboard-balance-amount">$990.990</div>
                                    </div>
                                    <div className="dashboard-balance-pic"><img src={BalanceImg} alt="" /></div>
                                </div>
                                <NavLink to="/xtracker" className="dashboard-xtracker">
                                    <div className="dashboard-xtracker-info">
                                        <div className="dashboard-xtracker-title">Xtracker</div>
                                        <div className="dashboard-xtracker-caption">Analiza información detallada de tus operaciones<img src={ArrowImg} alt="" /></div>
                                    </div>
                                    <div className="dashboard-xtracker-pic"><img src={XtrackerImg} alt="" /></div>
                                </NavLink>
                            </div>
                            <div className="dashboard-sections">
                                <NavLink className="dashboard-section" to="/financiamiento-directo">
                                    <div className="dashboard-section-icon"><img src={DirectImg} alt="" /></div>
                                    <div className="dashboard-section-caption">Directo</div>
                                </NavLink>
                                <NavLink className="dashboard-section" to="/pronto-pago">
                                    <div className="dashboard-section-icon"><img src={ProntoImg} alt="" /></div>
                                    <div className="dashboard-section-caption">Pronto Pago</div>
                                </NavLink>
                                <NavLink className="dashboard-section" to="/credito-pyme">
                                    <div className="dashboard-section-icon"><img src={CreditImg} alt="" /></div>
                                    <div className="dashboard-section-caption">Crédito Pyme</div>
                                </NavLink>
                                <NavLink className="dashboard-section" to="/confirming">
                                    <div className="dashboard-section-icon"><img src={ConfirmingImg} alt="" /></div>
                                    <div className="dashboard-section-caption">Confirming</div>
                                </NavLink>
                                <div className="clear"></div>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Dashboard;