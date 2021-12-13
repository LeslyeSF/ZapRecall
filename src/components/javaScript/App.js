import React from "react";
import "../css/CSSreset.css"
import "../css/style.css"
import FinalScreen from "./FinalScreen";
import FlashCardScreen from "./FlashCardScreen";
import StartScreen from "./StartScreen";

let deckFlashCards = [
    {
    title: "React",
    questions:["O que é JSX?", "O React é __ ", "Componentes devem iniciar com __ ", 
    "Podemos colocar __ dentro do JSX ", "O ReactDOM nos ajuda __ ", "Usamos o npm para __ ", 
    "Usamos props para __ ", "Usamos estado (state) para __ "],
    answers:["Uma extensão de linguagem do JavaScript", 
    "uma biblioteca JavaScript para construção de interfaces", "letra maiúscula", 
    "expressões", "interagindo com a DOM para colocar componentes React na mesma", 
    "gerenciar os pacotes necessários e suas dependências", 
    "passar diferentes informações para componentes", 
    "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"]
    },
    {
    title: "JavaScript",
    questions:["O que é JSX?", "O React é __ ", "Componentes devem iniciar com __ ", 
    "Podemos colocar __ dentro do JSX ", "O ReactDOM nos ajuda __ ", "Usamos o npm para __ ", 
    "Usamos props para __ ", "Usamos estado (state) para __ "],
    answers:["Uma extensão de linguagem do JavaScript", 
    "uma biblioteca JavaScript para construção de interfaces", "letra maiúscula", 
    "expressões", "interagindo com a DOM para colocar componentes React na mesma", 
    "gerenciar os pacotes necessários e suas dependências", 
    "passar diferentes informações para componentes", 
    "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"]
    },
    {
    title:"Tabela Periódica",
    questions:["H", "Be", "Co", "K", "Cs", "W", "Re", "As"],
    answers:["Hidrogênio", "Berílio", "Cobalto", "Potássio", "Césio", "Tungstênio", 
    "Rênio", "Arsênio"]
    },
    {
    title:"Tabela Periódica 2",
    questions:["H", "Be", "Co", "K", "Cs", "W", "Re", "As"],
    answers:["Hidrogênio", "Berílio", "Cobalto", "Potássio", "Césio", "Tungstênio", 
    "Rênio", "Arsênio"]
    }
    
];

export default function App(){

    const [currentScreen, setCurrentScreen] = React.useState("StartScreen");
    const [deckSelected, setDeckSelected] = React.useState("");
    const [countErro, setCountErro] = React.useState(0);
    const [countZap, setCountZap] = React.useState(0);
    const [goal, setGoal] = React.useState("");

    if(currentScreen == "StartScreen"){

        return(
            <StartScreen >
                {deckFlashCards}
                {setCurrentScreen} 
                {setDeckSelected}
                {goal}
                {setGoal}
            </StartScreen>
        );

    } else if(currentScreen == "FlashCardScreen"){

        let index;
        for(let i = 0; i<deckFlashCards.length; i++){
            if(deckFlashCards[i].title === deckSelected) {
                index = i;
            } 
        }

        return(
            <FlashCardScreen >
                {deckFlashCards[index]}
                {countErro}
                {setCountErro}
                {countZap}
                {setCountZap}
                {setCurrentScreen}
            </FlashCardScreen>
        );

    } else{
        return(
            <FinalScreen>
                {countErro}
                {setCountErro}
                {setCurrentScreen}
                {goal}
                {setGoal}
                {countZap}
                {setCountZap}
            </FinalScreen>
        );
    }
    
}