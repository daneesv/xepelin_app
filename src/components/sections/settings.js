import React, {Component} from "react";
import {Route,Switch} from "react-router-dom";
import Header from "./../header";
import Tabs from "./../tabs";
import EditImg from "./../../assets/edit.svg";
import AddImg from "./../../assets/add.svg";
import CompanyImg from "./../../assets/company.svg";
import PeopleImg from "./../../assets/people.svg";
import BankImg from "./../../assets/bank.svg";
import UserImg from "./../../assets/user.svg";
import NotificationsImg from "./../../assets/notifications.svg";
import GlobeImg from "./../../assets/globe.svg";

class Settings extends Component{
    render(){
        return(
            <div className="content noselect">
                <Header title="Configuración" description="Establece datos de acceso, información de la empresa, cuentas bancarias y conexiones." button="" buttonIcon="" />
                <Tabs sections={
                    [
                        {id:1,caption:"Cuenta",link:"/configuracion",counter:""},
                        {id:2,caption:"Empresa",link:"/configuracion/empresa",counter:""},
                        {id:3,caption:"Conexiones",link:"/configuracion/conexiones",counter:""}
                    ]
                } />
                <Switch>
                    <Route exact path="/configuracion">
                        <div className="config-blocks">
                            <div className="config-block">
                                <div className="config-header">
                                    <div className="config-icon"><img src={UserImg} alt="" /></div>
                                    <div className="config-title">Datos personales</div>
                                    <div className="config-edit">
                                        <div className="config-edit-icon"><img src={EditImg} alt="" /></div>Editar
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="config-fields">
                                    <div className="config-field">
                                        <div className="config-label">Nombre y apellido</div>
                                        <div className="config-value">Mariana Mont</div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">Email</div>
                                        <div className="config-value">marianam@gmail.com</div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">Teléfono/WhatsApp</div>
                                        <div className="config-value">+56123475865</div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">Contraseña</div>
                                        <div className="config-value">
                                            <div className="config-button">Cambiar contraseña</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="config-block">
                                <div className="config-header">
                                    <div className="config-icon"><img src={NotificationsImg} alt="" /></div>
                                    <div className="config-title">Notificaciones</div>
                                    <div className="config-edit">
                                        <div className="config-edit-icon"><img src={EditImg} alt="" /></div>Editar
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="config-fields">
                                    <div className="config-field">
                                        <div className="config-label">
                                            Notificaciones por WhatsApp
                                            <div className="config-details">Avance y estado de las operaciones</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button">Activar</div>
                                        </div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">
                                            Notificaciones por email
                                            <div className="config-details">Avance y estado de las operaciones</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button config-button-grey">Desactivar</div>
                                        </div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">
                                            Newsletter
                                            <div className="config-details">Actualizaciones y nuevas funciones</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button config-button-grey">Desactivar</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path="/configuracion/empresa">
                        <div className="config-blocks">
                            <div className="config-block">
                                <div className="config-header">
                                    <div className="config-icon"><img src={CompanyImg} alt="" /></div>
                                    <div className="config-title">Información general</div>
                                    <div className="config-edit">
                                        <div className="config-edit-icon"><img src={EditImg} alt="" /></div>Editar
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="config-fields">
                                    <div className="config-field">
                                        <div className="config-label">Razón social</div>
                                        <div className="config-value">Alimex S.A.</div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">RUT</div>
                                        <div className="config-value">96938200-8</div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">Dirección</div>
                                        <div className="config-value">Av. Apoquindo 3400<br />Las Condes, Chile</div>
                                    </div>                                
                                </div>
                            </div>
                            <div className="config-block">
                                <div className="config-header">
                                    <div className="config-icon"><img src={PeopleImg} alt="" /></div>
                                    <div className="config-title">Representantes legales</div>
                                    <div className="config-edit">
                                        <div className="config-edit-icon config-edit-icon-add"><img src={AddImg} alt="" /></div>Agregar
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="config-fields">
                                    <div className="config-note">Indica quiénes están autorizados para transferir el dinero de tus operaciones.</div>
                                    <div className="config-field">
                                        <div className="config-label">
                                            Pablo Martín Almanares
                                            <div className="config-details">RUT: 78089540-3<br/>pabloa@gmail.com</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button">Editar</div>
                                        </div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">
                                            Carla María Rodríguez
                                            <div className="config-details">RUT: 79682100-0<br/>carlarod@gmail.com</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button">Editar</div>
                                        </div>
                                    </div>                             
                                </div>
                            </div>
                            <div className="config-block">
                                <div className="config-header">
                                    <div className="config-icon"><img src={BankImg} alt="" /></div>
                                    <div className="config-title">Cuentas bancarias</div>
                                    <div className="config-edit">
                                        <div className="config-edit-icon config-edit-icon-add"><img src={AddImg} alt="" /></div>Agregar
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="config-fields">
                                    <div className="config-note">Establece una o varias cuentas a las cuales se realizarán las transferencias.</div>
                                    <div className="config-field">
                                        <div className="config-label">
                                            Banco de Chile
                                            <div className="config-details">CC N° 5070420-2 021-6<br/>CBU 00145875 300036985438547</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button">Editar</div>
                                        </div>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path="/configuracion/conexiones">
                        <div className="config-blocks">
                            <div className="config-block">
                                <div className="config-header">
                                    <div className="config-icon"><img src={GlobeImg} alt="" /></div>
                                    <div className="config-title">Servicio de Impuestos Interno (SII)</div>
                                </div>
                                <div className="config-fields">
                                    <div className="config-field">
                                        <div className="config-label">
                                            Certificado digital
                                            <div className="config-details">Sube tu certificado digital (.pfx) para sincronizar automáticamente tus facturas.</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button">Subir certificado</div>
                                        </div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">
                                            Clave de consulta
                                            <div className="config-details">Con esta clave podremos darte mejores alternativas de financiamiento y mostrártelas en tiempo real.</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button">Ingresar clave</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="config-block">
                                <div className="config-header">
                                    <div className="config-icon"><img src={GlobeImg} alt="" /></div>
                                    <div className="config-title">PreviRed</div>
                                </div>
                                <div className="config-fields">
                                    <div className="config-field">
                                        <div className="config-label">RUT de ingreso</div>
                                        <div className="config-value">96938200-8</div>
                                    </div>
                                    <div className="config-field">
                                        <div className="config-label">
                                            Contraseña de acceso
                                            <div className="config-details">Procesa tus solicitudes de manera automática y sin contratiempos.</div>
                                        </div>
                                        <div className="config-value">
                                            <div className="config-button">Ingresar contraseña</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Settings;