import { useState } from "react"
import Card from "./Card"

function Cards(){

    const [items, setItems] = useState([
        { id: 1, img: 'https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800', stat: ''},
        { id: 1, img: 'https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800', stat: ''},
        { id: 2, img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTFfMzAw/MDAxNTQ3MTg4MzUxNDk3.MDppdFgXR_oSpWQ-btdzfzHCtJ6j9cPHtYNJ_aOfxPwg.jodOhnYfP2KUuTngksUgluw-RKHyOYU9lUtHhqMOfP0g.JPEG.jurong25/20190111_152821.jpg?type=w800', stat: ''},
        { id: 2, img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTFfMzAw/MDAxNTQ3MTg4MzUxNDk3.MDppdFgXR_oSpWQ-btdzfzHCtJ6j9cPHtYNJ_aOfxPwg.jodOhnYfP2KUuTngksUgluw-RKHyOYU9lUtHhqMOfP0g.JPEG.jurong25/20190111_152821.jpg?type=w800', stat: ''},
        { id: 3, img: 'https://pbs.twimg.com/media/EfWhGpgU4AUHfaR.jpg:small', stat: ''},
        { id: 3, img: 'https://pbs.twimg.com/media/EfWhGpgU4AUHfaR.jpg:small', stat: ''},
        { id: 4, img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjJfMTg3/MDAxNDg3NzI4NTQ2NjYz.PXKT8WOvIrVgUamJQqSIGdwjeUHlO6GKKQBJrcHejLsg.EgM4jWM1lZh3NGoC2BUgXQ2aFzqQnSCh8ivhMmT7wWUg.PNG.ioea65ztem/02.%EA%B5%AC%EA%B8%80.png?type=w800', stat: ''},
        { id: 4, img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjJfMTg3/MDAxNDg3NzI4NTQ2NjYz.PXKT8WOvIrVgUamJQqSIGdwjeUHlO6GKKQBJrcHejLsg.EgM4jWM1lZh3NGoC2BUgXQ2aFzqQnSCh8ivhMmT7wWUg.PNG.ioea65ztem/02.%EA%B5%AC%EA%B8%80.png?type=w800', stat: ''},
        { id: 5, img: 'https://i.pinimg.com/564x/f3/a7/80/f3a7808c17594693dd8a5244f4cd1d4e.jpg', stat: ''},
        { id: 5, img: 'https://i.pinimg.com/564x/f3/a7/80/f3a7808c17594693dd8a5244f4cd1d4e.jpg', stat: ''},
        { id: 6, img: 'https://m.chemworld.kr/upload/BOARD/2021/08/4640bfc9d7ce3a44c9957da0ccf6ffe8_thumb.png', stat: ''},
        { id: 6, img: 'https://m.chemworld.kr/upload/BOARD/2021/08/4640bfc9d7ce3a44c9957da0ccf6ffe8_thumb.png', stat: ''},
        { id: 7, img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMTE1/MDAxNDg4MjAxNjI4ODkz.nF9pKtBzM2eJeLm1BrkfHjqMxYcyrdhmrg1TgJ50S98g.9sd_Gi5lu825bg8miIB1DjqkZgf4ttW7ojHHwMtJR98g.PNG.minho1632/Poke_mew.png?type=w800', stat: ''},
        { id: 7, img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMTE1/MDAxNDg4MjAxNjI4ODkz.nF9pKtBzM2eJeLm1BrkfHjqMxYcyrdhmrg1TgJ50S98g.9sd_Gi5lu825bg8miIB1DjqkZgf4ttW7ojHHwMtJR98g.PNG.minho1632/Poke_mew.png?type=w800', stat: ''},
        { id: 8, img: 'https://t1.daumcdn.net/cfile/tistory/2632DB365790A14728', stat: ''},
        { id: 8, img: 'https://t1.daumcdn.net/cfile/tistory/2632DB365790A14728', stat: ''},

    ].sort(()=> Math.random() -0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 700)
        }
    }
    
    
    
    function handleClick(id){
        if (items[id].stat ==="correct"){
            console.log("정답")
            return
        }
        
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="game_container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}



export default Cards