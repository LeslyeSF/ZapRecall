export default function ButtonCard(props){
    let [flashcard, setDeckSelected, setCurrentScreen, goal ]=props.children;

    function SelectedCards(){
        if(goal !== ""){
            if(goal>flashcard.questions.length){
                alert("Meta invalida! O valor da meta é maior que o número de cards!");
            } else{
                setDeckSelected(flashcard.title);
                setCurrentScreen("FlashCardScreen");
            }

        } else{
            setDeckSelected(flashcard.title);
            setCurrentScreen("FlashCardScreen");
        }
    }
   
    return(
        <div className="button" onClick={SelectedCards} data-identifier="start-zap-recall">
            <p>{"Praticar "+flashcard.title}</p>
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1V15L9.5 8L1.5 1Z" fill="#FFEF61" stroke="#FFEF61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 1V15L20.5 8L12.5 1Z" fill="#FFEF61" stroke="#FFEF61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}