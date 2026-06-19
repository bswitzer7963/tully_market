//Ripped paper effect DC: https://www.bing.com/videos/riverview/relatedvideo?q=gimp+torn+paper+edge+easy&mid=8DA5954A8E9CB15D6D078DA5954A8E9CB15D6D07&churl=https://www.youtube.com/channel/UCfO77hYhephENwf_USh-2xg&FORM=VIRE
//Typed DC: https://dev.to/kristinegusta/how-to-use-typedjs-in-react-beginner-friendly-dnc
import "../../indieCSS/homeView.css";
import {useRef, useEffect} from 'react';
import {motion, useScroll, useTransform, useInView} from "framer-motion";
import Typed from "typed.js";
import PolaroidCarousel from "../carousel/polaroidCarousel.jsx";

//Framer intro stuff taken from my emmets woodworking project
export default function HomeView({setCurState}) {
    const { scrollY } = useScroll();
    const plaxOffset = useTransform(scrollY, [0, 500], [0, -50]);

    const paperContainer = useRef(null);
    const typedRef = useRef(null);
    const canSee = useInView(paperContainer, {once: true, amount: 0.5});

    const intentWords = ["Fresh.", "Simple.", "Sustainable.", "Locally Sourced."];

    //Change with fetches
    const vendorSlides = [
        {id: 1, image: '/emmi_farms.webp', title: 'Emmi Farms', desc: 'Emmis Farms has the absolute best...'},
        {id: 2, image: '/reeves_farms.png', title: 'Reeves Farms', desc: 'Reeves Farms has been a staple of...'},
        {id: 3, image: '/hiwire_honey.png', title: 'Hiwire Honey', desc: 'Hiwire honey has the best honey in the business!'},
        {id: 4, image: '/random-pic.webp', title: 'Some Family', desc: 'This is some family that i found on the internet that i wanted to see whether it would fit well or not for the polaroid. dasdddddddd ddddddddddddddd dddddd ddddd ddd dd ddd ddd dddd d dddd ddddd dddddd ddddd d dddd ddd dd dddd'}
    ];

    const featuredSlides = [1, 2, 3];

    useEffect(() => {
        if (!canSee) return;

        const typed = new Typed(typedRef.current, {
            strings: [`The mission of our store is to provide a wide variety of healthy grocery choices to the people of the Tully area, incorporating as many local food producers as possible, with a goal of accenting the foods that are not ultra processed. The purpose of the store is not to make money, but rather to serve the local area.`
            ],
            typeSpeed: 20,
            showCursor: false,
            loop: false,
        });

        return () => typed.destroy()
    }, [canSee]);

    return (
        <div id="home-view">
            <div id="intro">
                <motion.img id="storefront" src="/storefront_ripped.png" alt="Store Front" style={{y: plaxOffset}}/>
                <div id="onload-intro-ani">
                    <motion.div
                        id="intro-logo-container"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.5, ease: 'easeIn', delay: 0.8}}
                    >
                        <img id="intro-logo" src="/logo_removebg_white.png" alt="Logo"/>
                    </motion.div>
                    <div id="intent-stmt">
                        {intentWords.map((word, i) => (
                            <motion.p
                                key={i}
                                className="intent-word"
                                initial={{opacity: 0, y: i % 2 ? 40 : -40}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, ease: 'easeIn', delay: 2.3 + 0.5 * i}}
                            >
                                {word}
                            </motion.p>
                        ))}

                        <motion.p
                            id="end_intent"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, ease: 'easeIn', delay: 4.5}}
                            className="intent-word"
                        >
                            Your Community<br/>
                            Under One Roof
                        </motion.p>
                    </div>
                </div>
            </div>
            <div id="home-view-content">
                <div id="owner-message-container">
                    <motion.div id="owner-message-paper" ref={paperContainer}>
                        <div id="owner-message-upper">
                            <img id="tack1" src="/tack.png" alt="Tack"/>
                            <img id="owner-avatar" src="/anonymous.webp" alt="Mrs.Vernay Avatar"/>
                            <h2 id="owner-message-header">
                                Message From Kathy Vernay:
                            </h2>
                            <img id="tack2" src="/tack.png" alt="Tack"/>
                        </div>
                        <div id="owner-message-body">
                            <span ref={typedRef}></span>
                            <hr id="hr1" className="dashed"/>
                            <hr id="hr2" className="dashed"/>
                            <hr id="hr3" className="dashed"/>
                            <hr id="hr4" className="dashed"/>
                        </div>
                    </motion.div>
                </div>
                <div id="spotlight-container">
                    <img id="cork-burlap-delimeter" src="/wood_delimeter.webp" alt="Wood Delimeter"/>
                    <motion.h1
                        id="spotlight-header"
                        className="home-header"
                        initial={{x: -200, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 0.8, ease: 'easeIn'}}
                    >
                        Vendor Spotlight
                    </motion.h1>
                    <PolaroidCarousel list={vendorSlides} descSide="right"/>
                    <img id="burlap-burlap-delimeter" src="/wood_delimeter.webp" alt="Wood Delimeter"/>
                    <motion.h1
                        id="new-header"
                        className="home-header"
                        initial={{x: 200, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 0.8, ease: 'easeIn'}}
                    >
                        Our New Favorites
                    </motion.h1>
                    <PolaroidCarousel list={vendorSlides} descSide="left"/>
                </div>
            </div>

        </div>
    )
}