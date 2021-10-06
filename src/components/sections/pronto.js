import React, {Component,Fragment} from "react";
import {Route,Switch} from "react-router-dom";
import Header from "./../header";
import Tabs from "./../tabs";
import Commands from "./../commands";
import SortImg from "../../assets/sort.svg";
import data from "../../data/pronto.json";
import data2 from "../../data/pronto-requests.json";

class Pronto extends Component{

    financing(){
        alert("Al seleccionar una factura se abre un cuadro que solicita el monto para anticipar. Al confirmar se marca esa factura y se agrega a la lista para realizar la solicitud en conjunto. La solicitud general aparece como una franja dinámica en la zona inferior de la pantalla, que muestra el monto total a financiar y un botón para finalizar la operación.");
    }

    actions(){
        alert("Aparecen opciones para ver detalles de la operación o cancelarla.");
    }

    render(){
        return(
            <div className="content">
                <Header title="Pronto Pago" description="Financiación del 100% de tus facturas sin retención ni costos adicionales por mora." button="Sincronizar con SII" buttonIcon="SyncIcon" />
                <Tabs sections={
                    [
                        {id:1,caption:"Facturas disponibles",link:"/pronto-pago",counter:4},
                        {id:2,caption:"Solicitudes",link:"/pronto-pago/solicitudes",counter:2}
                    ]
                } />
                <Switch>
                    <Route exact path="/pronto-pago/solicitudes">
                        <Commands />
                        <div className="list">
                            <div className="list-header">
                                <div className="list-header-column">ID<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column">Inicio<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column">Progreso<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column">Estado<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column">Cant. Fac.<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column list-item-cell-right"><img src={SortImg} alt="Ordenar" />Total</div>
                                <div className="list-header-column list-item-cell-center">Acciones</div>
                            </div>
                            {data2.requests.map(request=>(
                            <Fragment key={request.id}>
                            <div className="list-item">
                                <div className="list-item-cell list-item-outstanding">#{request.number}</div>
                                <div className="list-item-cell">{request.date}</div>
                                <div className="list-item-cell list-item-outstanding">
                                    <div className="list-item-progress">
                                        <div className="list-item-progress-bar">
                                            { request.status==="checking" && 
                                            <div className="list-item-progress-filled" style={{width:request.percent+"%"}}></div>
                                            }
                                            { request.status==="approved" && 
                                            <div className="list-item-progress-filled list-item-progress-filled-green" style={{width:request.percent+"%"}}></div>
                                            }
                                            { request.status==="rejected" && 
                                            <div className="list-item-progress-filled list-item-progress-filled-red" style={{width:request.percent+"%"}}></div>
                                            }
                                        </div>
                                        <div className="list-item-progress-steps">{request.progress}/5</div>
                                    </div>
                                </div>
                                <div className="list-item-cell list-item-cell-100 list-item-super-outstanding">
                                    { request.status==="checking" && 
                                    <Fragment><span>En revisión</span><span className="list-item-status"> – {request.description}</span></Fragment>
                                    }
                                    { request.status==="approved" && 
                                    <Fragment><span>Aprobada</span><span className="list-item-status"> – {request.description}</span></Fragment>
                                    }
                                    { request.status==="rejected" && 
                                    <Fragment><span>Rechazada</span><span className="list-item-status"> – {request.description}</span></Fragment>
                                    }
                                </div>
                                <div className="list-item-cell">{request.quantity}</div>
                                <div className="list-item-cell list-item-cell-right list-item-super-outstanding">${request.amount}</div>
                                <div className="list-item-cell list-item-cell-center">
                                    <div className="list-item-actions" onClick={this.actions}></div>
                                </div>
                                <div className="list-item-min">
                                    <div><span className="list-item-outstanding">#{request.number}</span> – {request.date}</div>
                                    <div><span className="list-item-super-outstanding">${request.amount}</span> ({request.quantity} facturas) </div>
                                    <div className="list-item-progress list-item-outstanding">
                                        <div className="list-item-progress-bar">
                                            { request.status==="checking" && 
                                            <div className="list-item-progress-filled" style={{width:request.percent+"%"}}></div>
                                            }
                                            { request.status==="approved" && 
                                            <div className="list-item-progress-filled list-item-progress-filled-green" style={{width:request.percent+"%"}}></div>
                                            }
                                            { request.status==="rejected" && 
                                            <div className="list-item-progress-filled list-item-progress-filled-red" style={{width:request.percent+"%"}}></div>
                                            }
                                        </div>
                                        <div className="list-item-progress-steps">{request.progress}/5</div>
                                    </div>
                                    <div className="list-item-super-outstanding">
                                        { request.status==="checking" && 
                                        <Fragment><span>En revisión</span><span className="list-item-status"> – {request.description}</span></Fragment>
                                        }
                                        { request.status==="approved" && 
                                        <Fragment><span>Aprobada</span><span className="list-item-status"> – {request.description}</span></Fragment>
                                        }
                                        { request.status==="rejected" && 
                                        <Fragment><span>Rechazada</span><span className="list-item-status"> – {request.description}</span></Fragment>
                                        }
                                    </div>
                                    <div className="list-item-min-btn" onClick={this.actions}>
                                        <div className="list-item-actions"></div>
                                    </div>
                                </div>
                            </div>
                            </Fragment>
                            ))}
                        </div>
                    </Route>
                    <Route path="/pronto-pago">
                        <Commands />
                        <div className="list">
                            <div className="list-header">
                                <div className="list-header-column">Número<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column">Fecha<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column">RUT<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column">Emisor<img src={SortImg} alt="Ordenar" /></div>
                                <div className="list-header-column list-item-cell-right"><img src={SortImg} alt="Ordenar" />Monto</div>
                                <div className="list-header-column list-item-cell-right"><img src={SortImg} alt="Ordenar" />Anticipo</div>
                                <div className="list-header-column list-item-cell-center">Xepelin</div>
                            </div>
                            {data.invoices.map(invoice=>(
                            <Fragment key={invoice.id}>
                            <div className="list-item">
                                <div className="list-item-cell list-item-outstanding">#{invoice.number}</div>
                                <div className="list-item-cell">{invoice.date}</div>
                                <div className="list-item-cell">{invoice.rut}</div>
                                <div className="list-item-cell list-item-cell-100 list-item-outstanding">{invoice.issuer}</div>
                                <div className="list-item-cell list-item-cell-right list-item-super-outstanding">${invoice.amount}</div>
                                <div className="list-item-cell list-item-cell-right list-item-outstanding">{invoice.percent}%</div>
                                <div className="list-item-cell list-item-cell-center">
                                    <div className="list-item-btn noselect" onClick={this.financing}>
                                        <div className="list-item-btn-check"></div>
                                        <div className="list-item-btn-caption">Financiar</div>
                                    </div>
                                </div>
                                <div className="list-item-min">
                                    <div><span className="list-item-outstanding">#{invoice.number}</span> – {invoice.date}</div>
                                    <div><span className="list-item-outstanding">{invoice.issuer}</span> ({invoice.rut})</div>
                                    <div className="list-item-super-outstanding">${invoice.amount} <span className="list-item-super-outstanding">(Anticipo {invoice.percent}%)</span></div>
                                    <div className="list-item-min-btn">
                                        <div className="list-item-btn noselect" onClick={this.financing}>
                                            <div className="list-item-btn-check"></div>
                                            <div className="list-item-btn-caption">Financiar</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Fragment>
                            ))}
                        </div>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Pronto;