import './Skills.css'

function Skills() {
    return (
        <section id="skills" className="skills">

            <div className="skills-heading">

                <p className="section-label">
                    SKILLS
                </p>

                <h2>
                    Tools I use to
                    <span> build ideas.</span>
                </h2>

                <p className="skills-intro">
                    Over the course of my studies and independent projects, I have developed 
                    a versatile set of technical skills. From object-oriented programming to 
                    building modern web interfaces and managing databases, here is a look at 
                    the core technologies I use to bring ideas to life.
                </p>

            </div>


            <div className="skills-grid">

                <div
    className="skill-category"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        e.currentTarget.style.setProperty(
            '--mouse-x',
            `${e.clientX - rect.left}px`
        )

        e.currentTarget.style.setProperty(
            '--mouse-y',
            `${e.clientY - rect.top}px`
        )
    }}
>
                    <h3>Languages</h3>

                    <div className="skill-list">
                        <span>Java</span>
                        <span>Python</span>
                        <span>C</span>
                    </div>
                </div>


                <div
    className="skill-category"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        e.currentTarget.style.setProperty(
            '--mouse-x',
            `${e.clientX - rect.left}px`
        )

        e.currentTarget.style.setProperty(
            '--mouse-y',
            `${e.clientY - rect.top}px`
        )
    }}
>
                    <h3>Web Development</h3>

                    <div className="skill-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>PHP</span>
                    </div>
                </div>


                <div
    className="skill-category"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        e.currentTarget.style.setProperty(
            '--mouse-x',
            `${e.clientX - rect.left}px`
        )

        e.currentTarget.style.setProperty(
            '--mouse-y',
            `${e.clientY - rect.top}px`
        )
    }}
>
                    <h3>Databases</h3>

                    <div className="skill-list">
                        <span>MySQL</span>
                        <span>MongoDB</span>
                    </div>
                </div>


                <div
    className="skill-category"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        e.currentTarget.style.setProperty(
            '--mouse-x',
            `${e.clientX - rect.left}px`
        )

        e.currentTarget.style.setProperty(
            '--mouse-y',
            `${e.clientY - rect.top}px`
        )
    }}
>
                    <h3>Tools & Other</h3>

                    <div className="skill-list">
                        <span>Git</span>
                        <span>REST API</span>
                        <span>DSA</span>
                        <span>Problem Solving</span>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills