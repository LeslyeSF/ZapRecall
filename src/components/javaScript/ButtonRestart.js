export default function ButtonRestart(props){
    let [
        setCountErro, 
        setCurrentScreen,
        setGoal,
        setCountZap] = props.children;

    function Restart(){
        setCountErro(0);
        setCurrentScreen("StartScreen");
        setGoal("");
        setCountZap(0);
    }
    return(
        <div class="button" onClick={Restart}>
            <p>Tentar novamente</p>
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1V15L9.5 8L1.5 1Z" fill="#FFEF61" stroke="#FFEF61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 1V15L20.5 8L12.5 1Z" fill="#FFEF61" stroke="#FFEF61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}