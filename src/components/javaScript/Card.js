import React from "react";
import turn from "../assets/turn.png";
export default function Card(props){

    let [ 
        flashCards, 
        positionCard, 
        setPositionCard, 
        numberCard, 
        setNumberCard,
        countErro,
        setCountErro,
        setCurrentScreen,
        countZap,
        setCountZap] = props.children;

    const [statusCard, setStatusCard] = React.useState("none");

    let position="", statusTurn="minimize", statusOptions="";
    if(positionCard === "back"){
        position="minimize";
    }
    if(statusCard !=="none"){
        statusTurn="";
        statusOptions="minimize";
    }

    function NextCard(){
        setStatusCard("none");
        setPositionCard("front");
        setNumberCard(numberCard+1);
        if(numberCard == flashCards.questions.length){
            setNumberCard(1);
            setCurrentScreen("FinalScreen");
        }
    }
    function Incorrect(){
        setStatusCard("red");
        setCountErro(countErro+1);
    }
    function Correct(){
        setStatusCard("yellow");
        setCountZap(countZap+1);
    }
    return(
        <div className="card">
            <div class={"frontCard "+position} data-identifier="flashcard">
                <p class="numberCard" data-identifier="counter">{numberCard}/{flashCards.questions.length}</p>
                <p class="title">{flashCards.questions[numberCard -1]}</p>
                <img src={turn} onClick={()=> setPositionCard("back")} data-identifier="arrow"/>
            </div>
            <div class={"backCard "+statusCard} data-identifier="flashcard">
                <p class="numberCard" data-identifier="counter">{numberCard}/{flashCards.questions.length}</p>
                <p class="title">{flashCards.questions[numberCard-1]}</p>
                <p class="answer">{flashCards.answers[numberCard-1]}</p>
                <div class={"options "+statusOptions}>
                    <div class="black" onClick={()=> setStatusCard("black")}>Aprendi agora</div>
                    <div class="red" onClick={Incorrect}>Não lembrei</div>
                    <div class="green" onClick={()=> setStatusCard("green")}>Lembrei com esforço</div>
                    <div class="yellow" onClick={Correct}>Zap!</div>
                </div>
                <img src={turn} className={statusTurn} onClick={NextCard} data-identifier="arrow"/>
            </div>
        </div>
    );
    
}