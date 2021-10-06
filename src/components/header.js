import React, {Component} from "react";
import Button from "./button";

class Header extends Component {
    render() {
        return (
            <div className="header noselect">
                <div className="header-info">
                    <div className="header-title">{this.props.title}</div>
                    <div className="header-description">{this.props.description}</div>
                </div>
                {this.props.button &&
                <div className="header-actions">
                    <Button caption={this.props.button} icon={this.props.buttonIcon} />
                </div>
                }
            </div>
        );
    }
}

export default Header;