import React from 'react';
import GH from '../helpers/gon_helper'
import MainMenu from '../header/main_menu'

const HeaderLayout = (props) => {
    function handleHomeClick() {
        PubSub.publish('HeaderClick', {card_key: 'first'});
    }

    return (
        <div className={"header"}>
            <div className="inline_block">
                <img src={GH.getImagePath('VA-header.png')} alt="VA Header Image" onClick={handleHomeClick}/>
            </div>

            <div className="inline_block">
                <MainMenu current_card={props.current_card} />
            </div>
        </div>
    )
};

const CardTitle = (props) => {
    return (
        <div className="context_title">{props.title}</div>
    )
};

const MainLayout = (props) => {
    return (
        <div className="card_container">
            {props.card}
        </div>
    )
};

const FooterLayout = (props) => {
    return (
        <div className="footer">
            <div className="left">{props.footer_text}</div>
        </div>
    )
};

export {HeaderLayout, CardTitle, MainLayout, FooterLayout}
