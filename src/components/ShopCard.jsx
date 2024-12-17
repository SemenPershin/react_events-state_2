import { Component } from "react";


export class ShopCard extends Component {
    constructor() {
        super();

    }

    cardBuilder() {
        return (
            <div className="card">
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.color}</p>
                <img src={this.props.item.img} alt="" />
                <p>{"$" + this.props.item.price}</p>
            </div>
        )
    }

    render() {
        return this.cardBuilder()
    }
}