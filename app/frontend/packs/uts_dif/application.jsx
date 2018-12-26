import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/app.css';
import PubSub from 'pubsub-js'
import {HeaderLayout, CardTitle, MainLayout, FooterLayout} from './components/layout/func_layouts'
import {FirstCard, SecondCard} from './components/cards/func_cards'

// fix for IE11 allowing us to use axios/fetch for ajax calls
import { promise, polyfill } from 'es6-promise'; polyfill();

// imported axios here so it can be used throughout the app in any card
import axios from 'axios'

export default class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           //stores the card_key as a string used as the key to the cards JSON object in the render method below
           card: 'first'
        };
        this.swapCard = this.swapCard.bind(this);
    }

    swapCard(channel, data) {
        // error checking that the card exists
        let key = data.card_key.toLowerCase();

        if (this.state.card !== key) {
            this.setState({card: key})
        }
    }

    componentDidMount() {
        PubSub.subscribe('HeaderClick', this.swapCard);
    }

    render() {
        let cards = {
            first: {component: <FirstCard />, title: "This is the first component"},
            second: {component: <SecondCard />, title: "This is the second component"},
        };

        let card = cards[this.state.card];

        return (
            <div className="ccontainer">
                <HeaderLayout current_card={this.state.card} />
                <CardTitle title={card.title}/>
                <MainLayout card={card.component}/>
                <FooterLayout footer_text="this is the footer" />
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Application />, document.getElementById('app'));
});

window.axios = require('axios');
window.axios.defaults.headers.common = {
    'X_REQUESTED_WITH': 'XMLHttpRequest',
    'X_CSRF_TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};
