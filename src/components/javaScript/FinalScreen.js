import Result from "./Result";
import logo from "../assets/logo-mini.png";


export default function FinalScreen(props){
    let [
        countErro, 
        setCountErro, 
        setCurrentScreen, 
        goal,
        setGoal,
        countZap,
        setCountZap] = props.children;
    
    return (
        <div class="finalScreen ">
            <img class="logo" src={logo} alt="ZapRecall"/>
            <Result>
                {countErro}
                {setCountErro}
                {setCurrentScreen}
                {goal}
                {setGoal}
                {countZap}
                {setCountZap}
            </Result>
        </div>
    );
}