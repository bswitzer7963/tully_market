import '../../indieCSS/inventoryView.css';
import { motion, useScroll, useTransform } from 'framer-motion'
import CircularGallery from '../carousel/circularGallery.jsx'

export default function InventoryView() {
    const {scrollY} = useScroll();
    const bgParallax = useTransform(scrollY, [0, 3000], [0, -200]);

    return (
        <div id="inventory-view">
            <motion.div 
                id="inventory-bg"
                style={{y: bgParallax}}
            />
            <div id="inventory-content">
                <h1 className="inventory-header">
                    Farm Fresh Produce, Dairy and Honey
                </h1>
                <CircularGallery
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    font="bold 30px Orbitron"
                    scrollSpeed={2}
                />
                <h1 className="inventory-header">
                    Something to Snack On
                </h1>
                <CircularGallery
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    font="bold 30px Orbitron"
                    scrollSpeed={2}
                />
                <h1 className="inventory-header">
                    Quick and Convenient
                </h1>
                <CircularGallery
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    font="bold 30px Orbitron"
                    scrollSpeed={2}
                />
                <h1 className="inventory-header">
                    Other Local Products You Might Love
                </h1>
                <CircularGallery
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    font="bold 30px Orbitron"
                    scrollSpeed={2}
                />
            </div>
        </div>
    )
}