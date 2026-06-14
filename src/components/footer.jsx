import "../indieCSS/footer.css";

export default function Footer({curState, setCurState}) {
    function handleFootBtn(to) {
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
        <div id="footer">
            <div id="footer-content">
                <div id="logo-n-desc">
                    <img id="footer-logo" src="/logo_removebg_white.png" alt="Logo"/>
                    <h3 id="footer-desc">
                        Sustainable, Nutritionally Diverse, Community Oriented Grocery
                    </h3>
                </div>
                <div id="quick-links">
                    <h2 id="quick-link-header">
                        Quick Links
                    </h2>
                    <button id="contact-btn" onClick={() => handleFootBtn('contact')}>
                        Contact Now
                    </button>
                    <button id="suppliers-btn" onClick={() => handleFootBtn('suppliers')}>
                        Our Local Suppliers
                    </button>
                    <button id="season-btn" onClick={() => handleFootBtn('season')}>
                        What's in Season?
                    </button>
                    <button id="about-btn" onClick={() => handleFootBtn('about')}>
                        About Us
                    </button>
                </div>
                <div id="footer-info">
                    <h2 id="footer-info-header">
                        Market Hours
                    </h2>
                    <h3 id="footer-hours">
                        M-F : 9am-7pm<br/>
                        Sat : 9am-6pm<br/>
                        Sun : 12pm-4pm<br/>
                    </h3>
                </div>
                <a 
                    href="https://www.google.com/maps/place/Tully+Market/@42.7981447,-76.1114485,17z/data=!3m1!4b1!4m6!3m5!1s0x89da181807f766d1:0x352a9072d9a35f59!8m2!3d42.7981408!4d-76.1088736!16s%2Fg%2F11bxjbtdgy?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                >
                    <img id="map" src="/map_ss.png" alt="Tully Market Map" width={250} height={250}/>
                </a>
            </div>
        </div>
    )
}