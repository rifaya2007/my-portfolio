import './Contact.css'
import {
    Mail,
    Phone,
    MapPin,
    Code2,
    UserRound,
    ArrowUpRight
} from 'lucide-react'

function Contact() {
    return (
        <section id="contact" className="contact">

            {/* =========================
                HEADING
            ========================= */}

            <div className="contact-top">

                <p className="contact-label">
                    CONTACT
                </p>

                <div className="contact-heading">

                    <h2>
                        Have an
                        <span> idea?</span>
                    </h2>

                    <h2>
                        Let's talk.
                    </h2>

                </div>

            </div>


            {/* =========================
                MAIN CONTACT AREA
            ========================= */}

            <div className="contact-main">

                <div className="contact-message">

                    <p>
                        I'm currently seeking internship opportunities to apply my skills 
                        in real-world environments. Whether you have a challenging project 
                        in mind, an opportunity for collaboration, or just want to chat 
                        about the latest in tech and AI, my inbox is always open. 
                        Let's build something amazing together!
                    </p>

                    <a
                        href="mailto:24csea23@gmail.com"
                        className="email-link"
                        aria-label="Email me at 24csea23@gmail.com"
                    >
                        <Mail />

                        <span>
                            24csea23@gmail.com
                        </span>

                        <ArrowUpRight />
                    </a>

                </div>


                {/* =========================
                    CONTACT DETAILS
                ========================= */}

                <div className="contact-side">

                    <div className="availability">

                        <span className="availability-dot"></span>

                        <div>

                            <span>OPEN TO</span>

                            <strong>
                                Internships · Collaborations · Projects
                            </strong>

                        </div>

                    </div>


                    <div className="location">

                        <MapPin />

                        <div>

                            <span>BASED IN</span>

                            <strong>
                                Madurai, Tamil Nadu, India
                            </strong>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================
                CONTACT ACTIONS
            ========================= */}

            <div className="contact-bottom">

                <div className="contact-message-small">

                    <p>
                        Ready to contribute, learn, and build
                        <strong> something extraordinary.</strong>
                    </p>

                </div>


                <div className="contact-actions">

                    {/* EMAIL */}

                    <a
                        href="mailto:24csea23@gmail.com"
                        className="contact-action"
                        aria-label="Email me at 24csea23@gmail.com"
                    >

                        <Mail />

                        <span>
                            Email Me
                        </span>

                        <ArrowUpRight />

                    </a>


                    {/* PHONE */}

                    <a
                        href="tel:9080657012"
                        className="contact-action"
                        aria-label="Call me at 9080657012"
                    >

                        <Phone />

                        <span>
                            9080657012
                        </span>

                        <ArrowUpRight />

                    </a>


                    {/* GITHUB */}

                    <a
                        href="https://github.com/rifaya2007"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-action"
                        aria-label="Visit my GitHub profile"
                    >

                        <Code2 />

                        <span>
                            GitHub
                        </span>

                        <ArrowUpRight />

                    </a>


                    {/* LINKEDIN */}

                    <a
                        href="https://www.linkedin.com/in/rifaya-parveen-914a71333/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-action"
                        aria-label="Visit my LinkedIn profile"
                    >

                        <UserRound />

                        <span>
                            LinkedIn
                        </span>

                        <ArrowUpRight />

                    </a>

                </div>

            </div>


            {/* =========================
                FOOTER
            ========================= */}

            <footer className="contact-footer">

                <div className="footer-left">

                    <span>
                        © 2026 Rifaya Parveen Umar Farook
                    </span>

                    <span>
                        All rights reserved.
                    </span>

                </div>


                <div className="footer-right">

                    <a
                        href="https://github.com/rifaya2007"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/rifaya-parveen-914a71333/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit my LinkedIn profile"
                    >
                        LinkedIn
                    </a>

                </div>

            </footer>

        </section>
    )
}

export default Contact