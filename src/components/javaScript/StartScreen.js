import logo from "../assets/logo.png";
import ButtonCard from "./ButtonCard";

export default function StartScreen(props){
    let [deckFlashCards, setCurrentScreen, setDeckSelected, goal, setGoal ]= props.children;

    const insertFlashCards = deckFlashCards.map(
        (flashcard)=> 
        <ButtonCard>
            {flashcard} 
            {setDeckSelected}
            {setCurrentScreen}
            {goal}
        </ButtonCard>
        );

    return(
        <div className="startScreen" >
            <img src={logo} alt="Logo ZapRecall"/>
            <div className="optionsCards">
                <input type="number" min="1" max="8" step="1" placeholder="Sua meta de zaps" value={goal} onChange={event => setGoal(event.target.value)}/>
                {insertFlashCards}
            </div>
        </div>
    );
}