import {motion} from 'framer-motion';
import {useState} from 'react';
import '../../indieCSS/polaroidCarousel.css';

//Should probably figure out a better way of making the desc not angled thatn subtracting but here we are lol
function Polaroid({title, z, url, newAngle, isTop, shuffleDir, descSide}) {
    let shuffleAni = {opacity: 1};
    if (isTop) {
        if (shuffleDir != 0) {
            //Shuffle next
            if (shuffleDir === 1) {
                shuffleAni = {
                    x: [0, 40, 60, 50, 0, -15, -30, -10, 0],
                    y: [0, -100, -200, -300, -400, -350, -300, -150, 0],
                    opacity: [1, 1, 1, 1, 0.8, 0.6, 0.4, 0.2, 0],
                    rotate: newAngle
                }
            }
            //Shuffle prev
            else {
                shuffleAni = {
                    x: [0, -10, -30, -15, 0, 50, 60, 40, 0],
                    y: [0, 150, 300, 350, 400, 300, 200, 100, 0],
                    opacity: [1, 1, 1, 1, 0.8, 0.6, 0.4, 0.2, 0],
                    rotate: newAngle
                }
            }
        }
    }

    return (
        <motion.div className={`polaroid-container ${descSide}`}
            style={{zIndex: z, transform: `rotate(${newAngle}deg)`}}
            animate={{...shuffleAni, rotate: newAngle}}
            transition={{duration: 0.6, ease: 'easeInOut'}}
        >
            <motion.div className="polaroid">
                <motion.img className="polaroid-image" src={url} alt="Polaroid Image"/>
                <h2 className="polaroid-title">
                    {title}
                </h2>
            </motion.div>
        </motion.div>
    )
}

//Probably suboptimal, but I wanted to have my own implementation aside from embla
//take prev/next from under pile, ani, then pick new random angle, place
//Maybe give mrs vernay a orientation option?
export default function PolaroidCarousel({list, descSide}) {
    const [cur, setCur] = useState(1);
    const [shuffleDir, setShuffleDir] = useState(0);
    const prevSlide = cur === 1 ? list.length : cur - 1;
    const nextSlide = cur === list.length ? 1 : cur + 1;

    let curSlide = list[cur - 1];

    const [angles] = useState(() => 
        list.map(() => Math.random() * 10 - 5)
    )

    const stacked = list.map((curPic, i) => {
        let pos = i + 1;
        let z = 1;

        if (pos === cur) {
            z = 99;
        }
        if (shuffleDir === 1 && pos === nextSlide) {
            z = 98;
        }
        if (shuffleDir === -1 && pos === prevSlide) {
            z = 98;
        }

        return (
            <Polaroid
                key={i}
                animKey={`${i}-${shuffleDir}`}
                title={curPic.title}
                url={curPic.image}
                newAngle={angles[i]}
                isTop={i + 1 === cur}
                shuffleDir={shuffleDir}
                descSide={descSide}
                z={z}
            />
        )}
    );

    function handlePrev() {
        setShuffleDir(-1);
        setTimeout(() => {
            setShuffleDir(0);
            setCur(prev => prev === 1 ? list.length : prev - 1);
        }, 600);
    }

    function handleNext() {
        setShuffleDir(1);
        setTimeout(() => {
            setShuffleDir(0);
            setCur(prev => prev === list.length ? 1 : prev + 1);
        }, 600);
    }

    return (
        <div className={`polaroid-carousel ${descSide}`}>
            <div className="polaroid-stacks">
                {stacked}
            </div>
            <h3 className={`polaroid-carousel-desc ${descSide}`}>
                {curSlide.desc}
            </h3>
            <div className="polaroid-btns">
                <button className={`prev-btn-polaroid ${descSide}`} onClick={() => handlePrev()}>▼</button>
                <button className={`next-btn-polaroid ${descSide}`} onClick={() => handleNext()}>▲</button>
            </div>
        </div>
    )


}