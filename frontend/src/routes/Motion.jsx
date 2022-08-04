import styles from './Motion.module.css'
import { useSpring, animated, a } from 'react-spring'
import { useState, useEffect} from "react";
import useMeasure from 'react-use-measure'

function Motion (){

    // Gage
    const [open, toggle] = useState(false);
    const [ref, { width }] = useMeasure()
    const props = useSpring({ width: open ? width : 0 })

    // Flip
    const [flipped, set] = useState(false)
     const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
     })
     
    //Move
    const [moves, api] = useSpring(() => ({
        from: { x: -100, opacity: 1 },
      }))

      useEffect(() => {
        api({
          x: 100,
          opacity: 1,
          loop: { reverse: true },
        })
      }, [api])

     
      

    return (
        <div className={styles.container}> 
            <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
                <animated.div className={styles.fill} style={props} />
                <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
            </div>
            
            <div className={styles.flip_container} onClick={() => set(state => !state)}>
            <a.div
                className={`${styles.c} ${styles.back}`}
                style={{ opacity: opacity.to(o => 1 - o), transform }}
            />
            <a.div
                className={`${styles.c} ${styles.front}`}
                style={{
                opacity,
                transform,
                rotateX: '180deg',
                }}
            />
            </div>
            
            <div className={styles.move_container}>
                 <animated.div
            style={{
                width: 100,
                height: 100,
                backgroundColor: '#46e891',
                borderRadius: 16,
                ...moves,
            }}
            />
            </div>



        </div>

    );
}

export default Motion;