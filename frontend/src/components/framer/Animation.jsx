import { motion } from 'framer-motion';
import './framer2.css'
import Modal from '@mui/material/Modal';
import Capsule from '../../assets/images/Capsule.png'
import capsuleBox from '../../assets/images/capsuleBox.png'
import itemBackground from '../../assets/images/splash2.png'
import pika from '../../assets/images/pika.png'
import zIndex from '@mui/material/styles/zIndex';
import gatcha from "../../assets/audio/gatcha.mp3"
import pikachu from "../../assets/audio/pikachu.mp3"
import Box from '@mui/material/Box';
import { useEffect } from 'react';

function Animation({onClickModal}){

    const style = {
        position: 'absolute',
        display: 'flex',
        top: '40%',
        left: '40%',
        justifycontent: 'center',
        width: 600,
        p: 5,
      };

      useEffect(()=>{
        setTimeout(() => {
            const audio = new Audio(pikachu);
            audio.volume= 0.5;
            audio.play();
        }, 4800);
      })



    return (
        
            <Modal
                    open={onClickModal}
                    close={onClickModal}>
            <Box sx={style} id="modal_box">
                <audio src={gatcha} autoPlay />

                <motion.div
                animate={{
                    scale: [1, 1, 1, 1],
                    background: 'var(--action)',
                    rotate: [-5, 5, -10, 10, -10, 10,-15, 15, -20],
                    transitionEnd: {
                    animation: '0.5s ease-in-out unloadEffect',
                    opacity: '0',
                    },
                }}
                transition={{ duration: 2, repeat: 0 }}
                style={{
                    position: 'absolute',
                }}
                >
                <img
                    src={capsuleBox}
                    alt="뽑기캡슐"
                    style={{ 
                        position:'relative',
                        right: '5vw',
                        width: '60%', 
                        height: 'auto', 
                        margin: 'auto' }}
                />
                </motion.div>

                <motion.div
                animate={{
                    scale: [0, 0, 0, 0, 0, 0, 2, 2, 1, 0.5],
                    rotate: [0, 0, 0, 0, 0, 0, -15, 15, -15, 360],
                    background: 'var(--action)',
                    
                
                }}
                transition={{ duration: 4, repeat: 0 }}
                style={{
                    margin: 'auto',
                    position: 'absolute',
                    top: '3vh',
                }}
            >
               <img src={Capsule} alt="뽑기캡슐" />
                    </motion.div>
                    <motion.div
            animate={{
                scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.5],
                background: 'var(--action)',
            }}
            transition={{ duration: 5, repeat: 0 }}
            style={{
                position: 'absolute',
            }}
            >
            <img
            src={itemBackground}
            alt="뽑기배경"
            style={{
              width: '1200px',
              marginBottom: '7vh',
              marginRight: '100vw',
            }}
          />
        </motion.div>
        <motion.div
          animate={{
            scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.5],
            background: 'var(--action)',
          }}
          transition={{ duration: 5, repeat: 0 }}
          style={{
            margin: 'auto',
            position: 'absolute',
            top: '3vh',
          }}
        >
          <img 
          src={Capsule} alt="뽑기캡슐" />
        </motion.div>
        <motion.div
          animate={{
            scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.5],
            background: 'var(--action)',
          }}
          transition={{ duration: 5, repeat: 0 }}
          style={{
            margin: 'auto',
            position: 'absolute',
            top: '3vh',
          }}
        >
        <audio src={pikachu}/>
          <img
            src={pika}
            alt="pikachu"
            style={{ 
                width: '28%',
                position:'relative',
                right: '6.3vw',
                top: '-10vh'
            }}
          />
        </motion.div>
        <motion.div
          animate={{
            scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.5],
            background: 'var(--action)',
          }}
          transition={{ duration: 5, repeat: 0 }}
          style={{
            margin: 'auto',
            position: 'absolute',
            top: '23vh',
            left: '8vh',
          }}
        >
          <p
            style={{
              textShadow:
                '-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black',
              fontWeight: 700,
              color: 'white',
              fontSize: '2.5vw'
            }}
          >
            피카츄
          </p>
        </motion.div>
        <motion.div
          animate={{
            scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.5],
            background: 'var(--action)',
          }}
          transition={{ duration: 5, repeat: 0 }}
          style={{
            margin: 'auto',
            position: 'absolute',
            top: '14vh',
            left: '3.5vw',
          }}
        >
          <button id="btn4"
           onClick={onClickModal}
          >
             확인 </button>
          
        </motion.div>
        
            </Box>
        </Modal>
  

        )
}









export default Animation;