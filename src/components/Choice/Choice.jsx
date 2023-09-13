import React from "react";
import './style/Choice.css';
import About from './src/icone-about.svg';
import Chat from './src/icone-chat.svg';
import Mobile from './src/icone-mobile.svg';
import Codes from './src/icone-codes.svg';

const Choice = () => {

    return (
        <section className="choice">
            <div className="card-choice">
                <img src={About} alt="About"></img>
                <a href="#" target="_blank">A propos de moi</a>
            </div>
            <div className="card-choice">
                <img src={Chat} alt="Chat"></img>
                <a href="#" target="_blank">Contactez moi</a>
            </div>
            <div className="card-choice">
                <img src={Codes} alt="Codes"></img>
                <a href="https://github.com/Sc0rpi0V/React" target="_blank">Voir mon Code</a>
            </div>
            <div className="card-choice">
                <img src={Mobile} alt="Portfolio"></img>
                <a href="#" target="_blank">Voir mon Portfolio</a>
            </div>
        </section>
    );
};

export default Choice;