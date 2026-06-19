//Style DC: https://uiverse.io/SelfMadeSystem/ancient-donkey-33
//Nav Scroll Hide DC: https://motion.dev/docs/react-scroll-animations
import "../indieCSS/navbar.css";
import {useState, useEffect} from 'react';
import {useScroll, motion, useMotionValueEvent} from 'framer-motion';

export default function NavBar({curState, setCurState}) {
    const {scrollY} = useScroll()
    const [hidden, setHidden] = useState("down");

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    });

    function handleNavBtn(to) {
        if (curState === to) {
            if (curState === 'home') {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
            return;
        }
        else {
            setCurState(to);
        }
    }

    return (
        <motion.div className="navbar"
            animate={{y: hidden ? -140 : 0, opacity: hidden ? 0 : 1}}
            transition={{duration: 0.3, ease: "easeInOut"}}
        >
            <div className="container">
                <div className="btn" onClick={() => handleNavBtn('home')}>
                    Home
                </div>
                <div className="btn" onClick={() => handleNavBtn('contact')}>
                    Contact
                </div>
                <div className="btn" onClick={() => handleNavBtn('inventory')}>
                    Our Proud Suppliers
                </div>
                <div className="btn" onClick={() => handleNavBtn('in-season')}>
                    What's in Season?
                </div>
                <div className="btn" onClick={() => handleNavBtn('about')}>
                    About
                </div>
                <svg
                    className="outline"
                    overflow="visible"
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 60"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <rect
                    className="rect"
                    pathLength="100"
                    x="0"
                    y="0"
                    width="400"
                    height="60"
                    fill="transparent"
                    strokeWidth="5"
                ></rect>
                </svg>
            </div>
        </motion.div>
    )
}