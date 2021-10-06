import React, {Component} from "react";

class Notification extends Component {
    render() {
        return (
            <div className={"notification "+(this.props.new?"notification-unread":"")}>
                <div className="notification-pic">
                    <div className="notification-picture">
                        <div className={"notification-icon "+(this.props.icon?"notification-icon-2":"")}></div>
                    </div>
                </div>
                <div className="notification-data">
                    <div>
                        <div className="notification-content" dangerouslySetInnerHTML={{ __html:this.props.content}}></div>
                        <div className="notification-date">{this.props.date}</div>
                    </div>
                </div>
                <div className="notification-mark">
                    <div className="notification-point"></div>
                </div>
            </div>
        );
    }
}

export default Notification;