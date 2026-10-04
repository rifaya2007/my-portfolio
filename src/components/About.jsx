import './About.css'

import {
    GraduationCap,
    Building2,
    BarChart3,
    Brain,
    Code2,
    MapPin
} from 'lucide-react'


function About() {
    return (
        <section id="about" className="about">

            <div className="about-heading">

                <p className="section-label">
                    ABOUT ME
                </p>

                <h2>
                    Turning curiosity into
                    <span> practical solutions.</span>
                </h2>

                <p className="about-intro">
                    Hi, I'm Rifaya! I am a third-year Computer Science and Engineering student 
                    with a deep passion for artificial intelligence, machine learning, and 
                    building robust software. I thrive on breaking down complex problems into 
                    clean, efficient code, and I'm always eager to learn new technologies. 
                    Whether it's training a predictive model or developing a full-stack web 
                    application, I love building things that make a real impact.
                </p>

            </div>


            <div className="about-info">

                <div
    className="info-card"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
    }}
>

                    <div className="info-icon">
                        <GraduationCap />
                    </div>

                    <div>
                        <p className="info-label">EDUCATION</p>
                        <h3>B.E. Computer Science</h3>
                        <p>3rd Year</p>
                    </div>

                </div>


                <div
    className="info-card"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
    }}
>

                    <div className="info-icon">
                        <Building2 />
                    </div>

                    <div>
                        <p className="info-label">COLLEGE</p>
                        <h3>Velammal College</h3>
                        <p>of Engineering and Technology</p>
                    </div>

                </div>


                <div
    className="info-card"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
    }}
>

                    <div className="info-icon">
                        <BarChart3 />
                    </div>

                    <div>
                        <p className="info-label">CGPA</p>
                        <h3>8.64 / 10</h3>
                        <p>Through 4th Semester</p>
                    </div>

                </div>


                <div
    className="info-card"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
    }}
>

                    <div className="info-icon">
                        <Brain />
                    </div>

                    <div>
                        <p className="info-label">INTEREST</p>
                        <h3>AI / ML</h3>
                        <p>Exploring intelligent solutions</p>
                    </div>

                </div>


                <div
    className="info-card"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
    }}
>

                    <div className="info-icon">
                        <Code2 />
                    </div>

                    <div>
                        <p className="info-label">FOCUS</p>
                        <h3>Software Development</h3>
                        <p>Building practical applications</p>
                    </div>

                </div>


                <div
    className="info-card"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
    }}
>

                    <div className="info-icon">
                        <MapPin />
                    </div>

                    <div>
                        <p className="info-label">LOCATION</p>
                        <h3>Madurai</h3>
                        <p>Tamil Nadu, India</p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About