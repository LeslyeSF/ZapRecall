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
    let result="success";
    if(goal ===""){
        if(countErro >=1){
            result="fail";
        }
    }else{
        if(parseInt(goal) > countZap ){
            result="fail";
        }
    }
    

    if(result == "success"){
        return(
            <div class="success">
                <p class="title">
                    PARABÉNS! 
                    <img src={party}/> 
                </p>
                <p>Você não esqueceu de nenhum flashcard!</p>
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
                    Putz... 
                    <img src={sad}/> 
                </p>
                <p>{"Você esqueceu " +countErro+ " flashcards..."}</p>
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