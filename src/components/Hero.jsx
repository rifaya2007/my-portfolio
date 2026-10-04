import './Hero.css'
import profileImage from '../assets/profile.webp'

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    BUILDING
                    <br />
                    INTELLIGENT
                    <br />
                    SYSTEMS.
                </h1>

                <p className="hero-description">
                    AI/ML • SOFTWARE • WEB
                </p>

                <button className="hero-button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                    EXPLORE MY WORK →
                </button>

            </div>

            <div className="hero-visual">
                <div className="profile-wrapper">
                    <img
                        src={profileImage}
                        alt="Rifaya"
                        className="profile-image"
                    />
                </div>
            </div>

        </section>
    )
}

export default Hero