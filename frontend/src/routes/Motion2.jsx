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

function Motion2 (){

  const navigate = useNavigate();
  

    return (
        <div className={styles.container}> 
            <div className={styles.titlebox}>Motion UI</div>
            <Rectangle />
            <UseSpring />
            <Menu />
            <Listorder />
            <Taborder />
            


            <button id={styles.btn2} onClick={()=>{navigate("/motion")}}> 
            Prev </button>
        </div>

    );
}

export default Motion2;