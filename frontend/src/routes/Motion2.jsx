import styles from './Motion.module.css'
import { useSpring, animated, a, useTransition } from 'react-spring'
import { useState, useEffect } from "react";
import useMeasure from 'react-use-measure'
import Rectangle from '../components/framer/Rectangle';
import UseSpring from '../components/framer/UseSpring';
import { useNavigate } from "react-router-dom"
import Menu from '../components/framer/Menu';
import Listorder from '../components/framer/Listorder';
import Taborder from '../components/framer/Taborder';
import { color } from '@mui/system';
import { useCallback } from 'react';
import Animation from '../components/framer/Animation';

function Motion2 (){

  const navigate = useNavigate();
  const [isCapsule, setIsCapsule] = useState(false);

  const onClickModal = useCallback(()=>{
    setIsCapsule(!isCapsule);
  }, [isCapsule]);
  

    return (
        <div className={styles.container}> 
            <div className={styles.titlebox}>Motion UI</div>
            <Rectangle />
            <UseSpring />
            <Menu />
            <Listorder />
            <Taborder />
            {isCapsule && (
                <Animation onClickModal={onClickModal} />
            )}


            <button id={styles.btn2} onClick={()=>{navigate("/motion")}}> 
            Prev </button>
            <button id={styles.btn2}
            style={{
                backgroundColor:"red",
                color:"white",
                left:"30%",
                bottom:"-80%"
            }}
            onClick={onClickModal}> 
            뽑기 </button>
        </div>

    );
}

export default Motion2;