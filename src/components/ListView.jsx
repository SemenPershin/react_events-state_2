import { Component } from "react";
import { ShopItem } from "./ShopItem";

export class ListView extends Component {
    constructor() {
        super();

        this.cardsList = []
    }

    viewItem() {
        this.props.items.forEach(element => {
            this.cardsList.push(<ShopItem item={element} />)
        });
    }

    render() {
        this.viewItem()

        return this.cardsList;
    }
}