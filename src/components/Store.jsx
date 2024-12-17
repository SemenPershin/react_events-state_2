import { Component } from "react";
import { IconSwitch } from "./IconSwitch";
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";

export class Store extends Component {
    constructor() {
        super();

        this.products = [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }];

        this.state = { view: "view_module" };

        this.onSwitch = (view) => this.setState({ view: view })
        this.bindOnSwith = this.onSwitch.bind(this);

        this.renderArr = []
    }


    iconSwitch() {
        return <div>
            <IconSwitch icon={this.state.view} onSwitch = {this.bindOnSwith}/>
        </div>
            
        
    }

    viewSelect() {
        if (this.state.view === "view_module") {
            return <div className="cards">
                <CardsView cards = { this.products }/>
                </div>
        }
        if (this.state.view === "view_list") {
            return <div className="items">
                <ListView items = { this.products }/>
            </div>
        }
    }

    renderStuck() {
        this.renderArr[0] = this.iconSwitch();
        this.renderArr[1] = this.viewSelect()

    }

    render() {
        this.renderStuck()
        console.log(this.renderArr)
        return (
            this.renderArr
        )
    }
}