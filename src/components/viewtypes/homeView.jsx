import "../../indieCSS/homeView.css";
import {motion, useScroll, useTransform} from "framer-motion";
import EmblaCarousel from '../carousel/EmblaCarousel';

//Framer intro stuff taken from my emmets woodworking project
export default function HomeView({setCurState}) {
    const { scrollY } = useScroll();
    const plaxOffset = useTransform(scrollY, [0, 500], [0, -50]);

    const intentWords = ["Fresh.", "Simple.", "Sustainable.", "Locally Sourced."];

    //Change with fetches
    const vendorSlides = [
        {id: 1, image: '/emmi_farms.webp', title: 'Emmi Farms', description: 'Emmis Farms has the absolute best...'},
        {id: 2, image: '/reeves_farms_removebg.png', title: 'Reeves Farms', description: 'Reeves Farms has been a staple of...'},
        {id: 3, image: '/hiwire_honey.png', title: 'Hiwire Honey', description: 'Hiwire honey has the best honey in the business!'},
    ];

    const featuredSlides = [1, 2, 3];

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
                {/* <div id="grad-trans"/> */}
                <div id="owner-message-container">
                    
                    <h2 id="owner-message-header">
                        Message From Mrs.Vernay:
                    </h2>

                </div>
                <motion.h1
                    className="home-header"
                    initial={{y: 40, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                >
                    Our Proud Vendors
                </motion.h1>
                <EmblaCarousel slides={vendorSlides} options={{loop: true}}/>
                <motion.h1
                    className="home-header"
                    initial={{y: 40, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                >
                    Our New Favorites
                </motion.h1>
                <EmblaCarousel slides={featuredSlides} options={{loop: true}}/>
            </div>

        </div>
    )
}


/* function Vendor({name, description}) {

}

function Event({name, date, time, description}) {

}

function FeaturedProduct({label, vendor, price}) {

} */


//Old animation
/*             <div id="intro">
                <motion.img id="overlook-bg" src="/overlook_back.png" alt="BG" style={{opacity: opacIntro}} onWheel={e => window.scrollBy(0, e.deltaY)}/>
                <img id="overlook-fg" src="/overlook_fore.png" alt="FG" onWheel={e => window.scrollBy(0, e.deltaY)}/>
                <motion.img id="logo" src="/emmet_logo_reg.png" alt="LOGO" style={{opacity: opacIntro}} onWheel={e => window.scrollBy(0, e.deltaY)}/>
            </div>*/