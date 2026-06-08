import "../indieCSS/footer.css";

export default function Footer() {
    return (
        <div id="footer">
            <div id="footer-content">
                <button id="about-btn" onClick={() => handleFootBtn('about')}>
                    About Us
                </button>     
                <button id="contact-btn" onClick={() => handleFootBtn('contact')}>
                    Contact Now
                </button>
            </div>
            <a 
                href="https://www.google.com/maps/place/Tully+Market/@42.7981447,-76.1114485,17z/data=!3m1!4b1!4m6!3m5!1s0x89da181807f766d1:0x352a9072d9a35f59!8m2!3d42.7981408!4d-76.1088736!16s%2Fg%2F11bxjbtdgy?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
            >
                <img id="map" src="/map_ss.png" alt="Tully Market Map" width={250} height={250}/>
            </a>
        </div>
    )
}