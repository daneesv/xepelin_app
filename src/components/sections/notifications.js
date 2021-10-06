import React, {Component} from "react";
import Notification from "./../notification";
import data from "../../data/notifications.json";

class Notifications extends Component{
    render(){
        return(
            <div className="content content-center noselect">
                <div className="content-focused">
                    <div className="notifications-header">Notificaciones</div>
                    <div className="notifications">
                        {data.notifications.map(notification=>(
                            <Notification key={notification.id} content={notification.content} date={notification.date} new={notification.new} icon={notification.icon} />
                        ))}
                    </div>
                    <div className="list-more">
                        <div className="list-more-btn">Mostrar más</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifications;