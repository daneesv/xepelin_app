import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Tabs extends Component {
    render() {
        return (
            <div className={"tabs noselect "+(this.props.focused ? "tabs-focused" : "")} >
                {this.props.sections.map(section=>(
                    <NavLink exact to={section.link} key={section.id} className="tabs-section" activeClassName="tabs-section-on">
                        {section.caption}
                        {section.counter!=="" && <span className="tab-counter">{"("+section.counter+")"}</span>}
                    </NavLink>
                ))}
            </div>
        );
    }
}

export default Tabs;