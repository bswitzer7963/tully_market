import {motion} from 'framer-motion';

function Polaroid({title, desc, url}) {
    return (
        <div className="polaroid-carousel">
            <motion.div className="polaroid">
                <motion.img className="polaroid-image" src={`/${url}`} alt="Polaroid Image"/>
                <h2 className="polaroid-title">
                    {title}
                </h2>
            </motion.div>
            <h3 className="polaroid-carousel-desc">
                {desc}
            </h3>
        </div>
    )
}

export default function PolaroidCarousel({title, desc, url}) {
    
}