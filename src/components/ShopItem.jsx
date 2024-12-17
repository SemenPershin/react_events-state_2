import { Component } from "react";


export class ShopItem extends Component {
    constructor() {
        super();

    }

    listBuilder() {
        return (
            <div className="list">
                <img src={this.props.item.img} alt="" />
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.color}</p>
                <p>{"$" + this.props.item.price}</p>
            </div>
        )
    }

    render() {
        return this.listBuilder()
    }
}