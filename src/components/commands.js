import React, {Component} from "react";

class Commands extends Component {
    render() {
        return (
            <div className="list-commands noselect">
                <div className="list-commands-left">
                    <input type="text" className="list-search" placeholder="Buscar..." />
                </div>
                <div className="list-commands-right">
                    <div className="list-command-btn">Exportar</div>
                </div>
            </div>
        );
    }
}

export default Commands;