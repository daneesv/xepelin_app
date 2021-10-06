import React, {Component} from "react";
import {Route,Switch} from "react-router-dom";
import {Bar} from "react-chartjs-2";
import Header from "./../header";
import Tabs from "./../tabs";
import DateImg from "./../../assets/date.svg";
import DropImg from "./../../assets/drop.svg";
import TgrImg from "./../../assets/tgr.svg";
import DicomImg from "./../../assets/dicom.svg";
import ScoreImg from "./../../assets/score.svg";

const rand=()=>Math.round(Math.random()*40000000);
const rand2=()=>Math.round(Math.random()*1000);
const data={
  labels:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
  datasets:[
    {
        type:"bar",
        label:"Ventas",
        backgroundColor:"rgb(115,0,255)",
        borderColor:"transparent",
        borderWidth:2,
        order:2,
        data:[rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()]
    }, {
        type:"bar",
        label:"Compras",
        backgroundColor:"rgb(219,218,226)",
        borderColor:"transparent",
        borderWidth:2,
        order:3,
        data:[rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()]
    }, {
        type:"line",
        label:"Facturas cedidas",
        borderColor:"rgb(94,186,125)",
        borderWidth:2,
        backgroundColor:"rgba(94,186,125)",
        fill:false,
        order:0,
        data:[rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()]
    }, {
        type:"line",
        label:"Facturas canceladas",
        borderColor:"rgb(235,57,65)",
        backgroundColor:"rgb(235,57,65)",
        borderWidth:2,
        fill:false,
        order:1,
        data:[rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()]
    }
  ],
};

const data2={
    labels:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    datasets:[
        {
          type:"line",
          label:"Score Xepelin",
          borderColor:"rgb(255,92,30)",
          backgroundColor:"rgb(255,92,30)",
          borderWidth:2,
          fill:false,
          order:1,
          data:[rand2(),rand2(),rand2(),rand2(),rand2(),rand2(),rand2(),rand2(),rand2(),rand2(),rand2(),rand2()]
        },
        {
            type:"line",
            label:"Buen score",
            borderColor:"rgb(94,186,125)",
            backgroundColor:"rgb(94,186,125)",
            borderWidth:2,
            pointBackgroundColor:"rgba(0,0,0,0)",
            pointBorderColor:"rgba(0,0,0,0)",
            fill:false,
            order:1,
            data:[500,500,500,500,500,500,500,500,500,500,500,500]
        }
    ],
  };

class Xtracker extends Component{

    advice1(){
        alert("Se abre un cuadro de opciones para seleccionar una periodo de fechas.");
    }

    advice2(){
        alert("Se despliegan opciones para variar el dato que se muestra, por ej. 'Margen Bruto'.");
    }

    advice3(){
        alert("Se abre un cuadro con filtros para ordenar por diferentes criterios, seleccionar rangos de operaciones, etc.");
    }

    render(){
        return(
            <div className="content">
                <Header title="Xtracker" description="Analiza información detallada de tus operaciones y verifica tu calificación." button="Descargar PDF" buttonIcon="PdfIcon" />
                <Tabs sections={
                    [
                        {id:1,caption:"Operaciones",link:"/xtracker",counter:""},
                        {id:2,caption:"Calificación",link:"/xtracker/calificacion",counter:""}
                    ]
                } />
                <Switch>
                    <Route exact path="/xtracker/calificacion">
                        <div className="xtracker-scores-full noselect">
                            <div className="xtracker-score-xepelin">
                                <div className="xtracker-score-xepelin-info">
                                    <div className="xtracker-score-caption">Score Xepelin</div>
                                    <div className="xtracker-score-value">525</div>
                                    <div className="xtracker-score-note">Mientras más alto sea tu score, más rápido podrás financiar facturas.</div>
                                </div>
                                <div className="xtracker-score-xepelin-pic"><img src={ScoreImg} alt="" /></div>
                            </div>
                            <Bar data={data2} className="xtracker-score-chart" options={{
                                aspectRatio:3,
                                plugins:{
                                    tooltip:{
                                        intersect: false,
                                        backgroundColor:"rgba(80,80,80,0.8)",
                                        padding:16
                                    },
                                    legend:{
                                        position:"bottom",
                                        labels:{
                                            padding:20
                                        }
                                    }
                                }
                            }} />
                        </div>
                        <div className="xtracker-scores noselect">
                            <div className="xtracker-score xtracker-score-green-border">
                                <div className="xtracker-score-caption">Cesiones</div>
                                <div className="xtracker-score-value xtracker-score-green">57%</div>
                                <div className="xtracker-score-note">La recurrencia en tus cesiones mejora tu calificación.</div>
                            </div>
                            <div className="xtracker-score xtracker-score-red-border">
                                <div className="xtracker-score-caption">Cancelaciones</div>
                                <div className="xtracker-score-value xtracker-score-red">10%</div>
                            </div>
                            <div className="xtracker-score">
                                <div className="xtracker-score-caption">Estado TGR<img className="xtracker-tgr" src={TgrImg} alt="" /></div>
                                <div className="xtracker-score-value-text xtracker-score-green">No se registran deudas pendientes.</div>
                            </div>
                            <div className="xtracker-score">
                                <div className="xtracker-score-caption">Estado DICOM<img className="xtracker-dicom" src={DicomImg} alt="" /></div>
                                <div className="xtracker-score-value-text xtracker-score-green">No se registran deudas pendientes.</div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/xtracker">
                        <div className="xtracker-commands noselect">
                            <div className="xtracker-commands-left">
                                <div className="xtracker-period" onClick={this.advice1}>
                                    Año 2021
                                    <img className="xtracker-period-date" src={DateImg} alt="" />
                                    <img className="xtracker-period-drop" src={DropImg} alt="" />
                                </div>
                            </div>
                            <div className="xtracker-commands-right">
                                <div className="xtracker-filters" onClick={this.advice3}>Filtros</div>
                            </div>
                        </div>
                        <div className="xtracker-values">
                            <div className="xtracker-value">
                                <div className="xtracker-value-caption">Ventas</div>
                                <div className="xtracker-value-amount">$30.700.000</div>
                                <div className="xtracker-value-select" onClick={this.advice2}></div>
                            </div>
                            <div className="xtracker-value">
                                <div className="xtracker-value-caption">Compras</div>
                                <div className="xtracker-value-amount">$30.700.000</div>
                                <div className="xtracker-value-select" onClick={this.advice2}></div>
                            </div>
                            <div className="xtracker-value">
                                <div className="xtracker-value-caption">Margen</div>
                                <div className="xtracker-value-amount">$30.700.000</div>
                                <div className="xtracker-value-select" onClick={this.advice2}></div>
                            </div>
                        </div>
                        <Bar data={data} className="xtracker-chart" options={{
                            aspectRatio:2.5,
                            plugins:{
                                tooltip:{
                                    intersect: false,
                                    backgroundColor:"rgba(80,80,80,0.8)",
                                    padding:16
                                },
                                legend:{
                                    position:"bottom",
                                    labels:{
                                        padding:20
                                    }
                                }
                            }
                        }} />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Xtracker;