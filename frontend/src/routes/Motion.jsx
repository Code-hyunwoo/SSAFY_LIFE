import styles from './Motion.module.css'
import { useSpring, animated, a, useTransition } from 'react-spring'
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

    //Picture
    const slides = [
        'https://www.wallpapertip.com/wmimgs/0-3126_cool-wallpapers-moving-colorful-cool-backgrounds.jpg',
        'https://wc.wallpaperuse.com/wallp/98-981647_s.jpg',
        'https://mblogthumb-phinf.pstatic.net/MjAxODAyMDNfNDIg/MDAxNTE3NjMwODA2NDgx.uHrmzMsM3fYV1-K8Lb0lHQiilR-eT2MbpN-KUwAyU7Ag.LpRc_T15kntzJq05rMyp45hrx4wZRPclyKqIpH_Tr_gg.JPEG.knicjin/wallpaper_32.jpg?type=w800',
        'https://downloadwap.com/thumbs2/wallpapers/p2ls/new/33/TrNMwzGE.jpg',
      ]

    const [index, setIndex] = useState(0)
    const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        setIndex(state => (state + 1) % slides.length)
      }
    },
    exitBeforeEnter: true,
  })
      

    return (
        <div className={styles.container}> 
            <div className={styles.titlebox}>Motion UI</div>
            {/* Picture */}
            <div className="flex fill center">
                  {transitions((style, i) => (
                      <animated.div
                      className={styles.bg}
                      style={{
                          ...style,
                          backgroundImage: `url(${slides[i]})`,
                      }}
                      />
                  ))}
            </div>


            {/* Graph */}
            <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
                <animated.div className={styles.fill} style={props} />
                <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
            </div>
            

            {/* Flip */}
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
            

            {/* Move */}
            <div className={styles.move_container}>
                 <animated.div
            style={{
                width: 100,
                height: 100,
                backgroundColor: 'red',
                borderRadius: 16,
                ...moves,
            }}
            />
            </div>



        </div>

    );
}

export default Motion;