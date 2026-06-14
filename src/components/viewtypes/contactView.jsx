import "../../indieCSS/contactView.css";

export default function ContactView() {

    return (
        <div id="contact-view">
            <div id="contact-view-container">
                <h1 id="contact-header" className="engraved">
                    Contact Now
                </h1>
                <div id="contact-post-its">
                    <div className="post-it">
                        <h1>
                            Find @
                        </h1>
                        <span>
                            <a href="https://www.google.com/maps/place/Tully+Market/@42.7981447,-76.1114485,17z/data=!3m1!4b1!4m6!3m5!1s0x89da181807f766d1:0x352a9072d9a35f59!8m2!3d42.7981408!4d-76.1088736!16s%2Fg%2F11bxjbtdgy?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                8 Clinton Street, Tully, NY
                            </a>
                        </span>
                    </div>
                    <div className="post-it">
                        <h1>
                            Call @
                        </h1>
                        <span>
                            <a href="tel:315-810-4200">
                                315-810-4200
                            </a>
                        </span>
                    </div>
                    <div className="post-it">
                        <h1>
                            Email @
                        </h1>
                        <span>
                            <a href="mailto:tullymarketny@gmail.com">
                                tullymarketny@gmail.com
                            </a>
                        </span>
                    </div>
                    <div className="post-it">
                        <h1>
                            Follow @
                        </h1>
                        <span>
                            <a className="contact-icons" href="https://www.instagram.com/tullymarket/" target="_blank" rel="noopener nofollow">
                                <img id="insta-icon" src="/insta-icon.svg" alt="Follow Us On Instagram"/>
                            </a>
                            <a className="contact-icons" href="https://www.facebook.com/tullymarketny/" target="_blank" rel="noopener nofollow">
                                <img id="fb-icon" src="/fb-icon.svg" alt="Follow Us On Facebook"/>
                            </a>
                        </span>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </div>
    )
}

//Uses netlify to send email via form
function ContactForm() {
    return (
        <div id="contact-form-container">
            <form name="contact" method="POST" data-netlify="true" action="/success">
                <input type="hidden" name="form-name" value="contact"/>
                <h1 id="write-in-header">
                    Have any questions? Write To Us!
                </h1>
                <div className="form-field">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" name="name" required/>
                    <hr id="fl1" className="dashed"/>
                </div>
                <div className="form-field">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email" name="email" required/>
                    <hr id="fl2" className="dashed"/>
                </div>
                <div className="form-field">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea id="message" name="message" rows="5" required/>
                    <hr id="fl3" className="dashed"/>
                </div>
                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>
    )
}