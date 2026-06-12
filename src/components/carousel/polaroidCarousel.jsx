import {motion} from 'framer-motion';
import {useState} from 'react';
import '../../indieCSS/polaroidCarousel.css';

//Should probably figure out a better way of making the desc not angled thatn subtracting but here we are lol
function Polaroid({title, desc, url, newAngle, isTop}) {
    let renderDesc = null;
    if (isTop) {
        renderDesc = (
            <h3 className="polaroid-carousel-desc" style={{transform: `rotate(${-newAngle}deg)`}}>
                {desc}
            </h3>
        )
    }

    return (
        <div className="polaroid-container" style={{zIndex: isTop ? 10 : 1, transform: `rotate(${newAngle}deg)`}}>
            <motion.div className="polaroid">
                <motion.img className="polaroid-image" src={url} alt="Polaroid Image"/>
                <h2 className="polaroid-title">
                    {title}
                </h2>
            </motion.div>
            {renderDesc}
        </div>
    )
}

//Probably suboptimal, but I wanted to have my own implementation aside from embla
//take prev/next from under pile, ani, then pick new random angle, place
//Maybe give mrs vernay a orientation option?
export default function PolaroidCarousel({list}) {
    const [cur, setCur] = useState(1);

    const [angles] = useState(() => 
        list.map(() => Math.random() * 10 - 5)
    )

    const stacked = list.map((curPic, i) =>
        <Polaroid key={i} title={curPic.title} desc={curPic.desc} url={curPic.image} newAngle={angles[i]} isTop={i + 1 === cur} />
    );

    function handlePrev() {
        if (cur === 1) {
            setCur(list.length);
        }
        else {
            setCur(prev => prev - 1);
        }
    }

    function handleNext() {
        if (cur === list.length) {
            setCur(1);
        }
        else {
            setCur(prev => prev + 1);
        }
    }

    return (
        <div className="polaroid-carousel">
            <div className="polaroid-stacks">
                {stacked}
            </div>
            <div className="polaroid-btns">
                <button className="prev-btn-polaroid" onClick={() => handlePrev()}>▼</button>
                <button className="next-btn-polaroid" onClick={() => handleNext()}>▲</button>
            </div>
        </div>
    )


}