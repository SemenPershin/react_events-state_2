import { Component } from "react";
import { ShopCard } from "./ShopCard";


export class CardsView extends Component {
    constructor() {
        super();

        this.cardsList = []
    }

    viewItem() {
        this.props.cards.forEach(element => {
            this.cardsList.push(<ShopCard item ={element}/>)
        });
    }

    render() {
        this.viewItem()
        return this.cardsList;
    }
}