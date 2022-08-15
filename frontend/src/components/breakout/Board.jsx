import "./Breakout.css"
import { useEffect, useRef } from "react";
import { BallMovement } from "./BallMovement";
import data from "./data";
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./util/BrickCollision";
import PaddleHit from "./util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "./util/AllBroke";
import ResetBall from "./util/ResetBall";
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";


let bricks = [];
let { ballObj, paddleProps, brickObj, player } = data;
function Board() {

    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
      const render = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        paddleProps.y = canvas.height - 30;
  
        // Assign Bricks
        let newBrickSet = Brick(player.level, bricks, canvas, brickObj);
  
        if (newBrickSet && newBrickSet.length > 0) {
          bricks = newBrickSet;
        }
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        PlayerStats(ctx, player, canvas);
  
        // Display Bricks
        bricks.map((brick) => {
          return brick.draw(ctx);
        });
  
        // Handle Ball Movement
        BallMovement(ctx, ballObj);
  
        // Check all broken
        AllBroken(bricks, player, canvas, ballObj);
  
        if (player.lives === 0) {
    
            Swal.fire({
                title: 'Game Over',
                text: '개못핵 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
                imageUrl: 'https://portal.33bits.net/wp-content/uploads/2018/12/gameoverphrase.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonColor: "red",
                confirmButtonText: "확인",
              })
            navigate('/game')
            player.lives = 5;
            player.level = 1;
            player.score = 0;
            ResetBall(ballObj, canvas, paddleProps);
            bricks.length = 0;
        }

        if (player.level === 10){
            Swal.fire({
                title: 'CLEAR',
                text: '이걸 깨다니.... 대단하군' ,
                imageUrl: 'https://img.freepik.com/premium-vector/mission-success-3d-text-effect-editable-text-style-and-suitable-for-game-assets_412327-1143.jpg?w=2000',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonColor: "blue",
                confirmButtonText: "확인",
              })
            navigate('/game')
            player.lives = 5;
            player.level = 1;
            player.score = 0;
            ResetBall(ballObj, canvas, paddleProps);
            bricks.length = 0;
        }
        
        // Ball and Wall Collision
        WallCollision(ballObj, canvas, player, paddleProps);
  
        // Brick Collision
        let brickCollision;
  
        for (let i = 0; i < bricks.length; i++) {
          brickCollision = BrickCollision(ballObj, bricks[i]);
  
          if (brickCollision.hit && !bricks[i].broke) {
            // console.log(brickCollision);
            if (brickCollision.axis === "X") {
              ballObj.dx *= -1;
              bricks[i].broke = true;
            } else if (brickCollision.axis === "Y") {
              ballObj.dy *= -1;
              bricks[i].broke = true;
            }
            player.score += 10;
          }
        }
        Paddle(ctx, canvas, paddleProps);
  
        // Paddle + Ball Collision
        PaddleHit(ballObj, paddleProps);
  
        requestAnimationFrame(render);
      };
      render();
    }, []);


    return (
        <div style={{ textAlign: "center" }}>
        <canvas
          id="canvas"
          ref={canvasRef}
          onMouseMove={(event) =>
            (paddleProps.x =
              event.clientX -
              (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
              paddleProps.width / 2 -
              10)
          }
          height="500"
          width={
            window.innerWidth < 900
              ? window.innerWidth - 20
              : window.innerWidth - (window.innerWidth * 20) / 100
          }
        />
      </div>
    );
  }
  
  export default Board;