import { Component } from "react";


export class IconSwitch extends Component {
    constructor() {
        super();

    }

    callBack() {
        if (this.props.icon === "view_list") {
            this.props.onSwitch("view_module")
        } else if (this.props.icon === "view_module") {
            this.props.onSwitch("view_list")
        }
    }

    iconAdd() {
        return (
            <button className="material-icons" onClick={ () => {this.callBack()} }>{this.props.icon}</button>
        )
    }

    render() {
        return this.iconAdd()
    }
}