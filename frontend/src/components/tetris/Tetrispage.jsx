import Game from "./gamecompo/Game"




function Tetrispage (){

    return (
        <div>
            <Game rows={20} columns={10}/>
        </div>
    );
}


export default Tetrispage;