import React, {Component,Fragment} from "react";
import SyncIcon from "./../assets/sync.svg";
import CreateIcon from "./../assets/create.svg";
import ChatIcon from "./../assets/chat.svg";
import PdfIcon from "./../assets/pdf.svg";

class Button extends Component {
    openFaqs(){
        window.open("https://soporte.xepelin.com");
    }
    render() {
        return (
            <Fragment>
                {this.props.icon==="SyncIcon" && 
                <div className="header-button">
                    <div>
                    <img src={SyncIcon} alt="" />
                    {this.props.caption}
                    </div>
                </div>
                }
                {this.props.icon==="CreateIcon" && 
                <div className="header-button">
                    <div>
                    <img src={CreateIcon} alt="" />
                    {this.props.caption}
                    </div>
                </div>
                }
                {this.props.icon==="ChatIcon" && 
                <div className="header-button" onClick={this.openFaqs}>
                    <div>
                    <img src={ChatIcon} alt="" />
                    {this.props.caption}
                    </div>
                </div>
                }
                {this.props.icon==="PdfIcon" && 
                <div className="header-button">
                    <div>
                    <img src={PdfIcon} alt="" />
                    {this.props.caption}
                    </div>
                </div>
                }
            </Fragment>
        );
    }
}

export default Button;