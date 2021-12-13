import sad from "../assets/sad.png";
import party from "../assets/party.png";
import ButtonRestart from "./ButtonRestart";

export default function Result(props){
    let [
        countErro, 
        setCountErro, 
        setCurrentScreen,
        goal,
        setGoal,
        countZap,
        setCountZap ] = props.children;

    let result="success", messenger="";

    if(goal ===""){

        if(countErro >=1){
            result="fail";
            messenger=<p>{"Você esqueceu " +countErro+ " flashcards..."}</p>;
        } else{
            messenger=<p>Você não esqueceu de nenhum flashcard!</p>;
        }

    }else{

        if(parseInt(goal) > countZap ){
            result="fail";    
            messenger=<p>{"Você não bateu a meta de Zaps! Seu resultado foi "+countZap+"/"+goal+" zaps!"}</p>;
        } else{
            messenger=<p>{"Você bateu a meta de Zaps! Seu resultado foi "+countZap+"/"+goal+" zaps!"}</p>;
        }
    }
    

    if(result == "success"){
        return(
            <div class="success">
                <p class="title">
                    PARABÉNS! 
                    <img src={party}/> 
                </p>
                {messenger}
                <ButtonRestart>
                    {setCountErro}
                    {setCurrentScreen}
                    {setGoal}
                    {setCountZap}
                </ButtonRestart>
            </div>
        );
    }else{
        return(
            <div class="fail">
                <p class="title">
                    Putz.. 
                    <img src={sad}/> 
                </p>
                {messenger}
                <p>Não desanime! Na próxima você consegue!</p>
                <ButtonRestart>
                    {setCountErro}
                    {setCurrentScreen}
                    {setGoal}
                    {setCountZap}
                </ButtonRestart>
            </div>
        );
    }   
}