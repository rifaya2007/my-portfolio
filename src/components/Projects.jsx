import './Projects.css'

function Projects() {
    return (
        <section id="projects" className="projects">

            <div className="projects-heading">
                <p className="section-label">PROJECTS</p>

                <h2>
                    My recent
                    <span> work.</span>
                </h2>

                <p className="projects-intro">
                    A few projects where I've applied machine learning and 
                    computer vision to create practical software.
                </p>
            </div>

            <div className="projects-grid">

                <div className="project-card">
                    <p className="project-number">01</p>

                    <h3>Placement Prediction System</h3>

                    <p>
                        A machine learning web application that predicts
                        student placement outcomes using academic and
                        profile-based features.
                    </p>

                    <div className="project-tags">
                        <span>Python</span>
                        <span>Machine Learning</span>
                        <span>Streamlit</span>
                    </div>

                    <a
    href="https://github.com/rifaya2007/Placement_Prediction_model"
    target="_blank"
    rel="noreferrer"
>
    <span>View Repository</span>
    <span className="project-arrow">↗</span>
</a>
                </div>

                <div className="project-card">
                    <p className="project-number">02</p>

                    <h3>VisionAssist</h3>

                    <p>
                        A computer vision project using YOLOv8 for real-time
                        object detection and audio-based object alerts.
                    </p>

                    <div className="project-tags">
                        <span>Python</span>
                        <span>Computer Vision</span>
                        <span>YOLOv8</span>
                    </div>

                    <a
    href="https://github.com/rifaya2007/Vision_assist"
    target="_blank"
    rel="noreferrer"
>
    <span>View Repository</span>
    <span className="project-arrow">↗</span>
</a>
                </div>

            </div>

        </section>
    )
}

export default Projects