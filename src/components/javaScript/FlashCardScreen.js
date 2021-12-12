import React from "react";
import logo from "../assets/logo-mini.png";
import Card from "./Card";

export default function FlashCardScreen(props){
    let [
        flashCards, 
        countErro, 
        setCountErro, 
        countZap,
        setCountZap, 
        setCurrentScreen]=props.children;

    const [numberCard, setNumberCard] = React.useState(1);
    const [positionCard, setPositionCard] = React.useState("front");
    
    return(
        <div class="flshCardScreen">
            <img class="logo" src={logo} alt="ZapRecall"/>
            <p class="titleCard">{flashCards.title}</p>
            <Card>
                {flashCards} 
                {positionCard} 
                {setPositionCard} 
                {numberCard}
                {setNumberCard}
                {countErro}
                {setCountErro}
                {setCurrentScreen}
                {countZap}
                {setCountZap}
            </Card>
        </div>
    );
}