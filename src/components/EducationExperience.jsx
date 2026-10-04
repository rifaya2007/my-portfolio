import './EducationExperience.css'
import { ArrowUpRight, GraduationCap, Briefcase } from 'lucide-react'

function EducationExperience() {
    return (
        <section id="education" className="education-experience">

            <div className="education-heading">
                <p className="section-label">EDUCATION & EXPERIENCE</p>

                <h2>
                    My academic
                    <span> journey.</span>
                </h2>

                <p className="education-intro">
                    The milestones that have shaped my path as a computer
                    science student.
                </p>
            </div>

            <div className="journey-list">

                {/* B.E. */}
                <div className="journey-item current-item">

                    <div className="journey-year">
                        2024 — 2028
                    </div>

                    <div className="journey-content">
                        <div className="journey-title">
                            <GraduationCap />
                            <span>EDUCATION</span>
                        </div>

                        <h3>
                            B.E. Computer Science Engineering
                        </h3>

                        <p>
                            Velammal College of Engineering and Technology, Madurai
                        </p>
                    </div>

                    <div className="journey-details">
                        <strong>8.64</strong>
                        <span>CGPA</span>
                        <small>3rd YEAR</small>
                    </div>

                    <ArrowUpRight className="journey-arrow" />

                </div>


                {/* 12th */}
                <div className="journey-item">

                    <div className="journey-year">
                        2024
                    </div>

                    <div className="journey-content">
                        <div className="journey-title">
                            <GraduationCap />
                            <span>EDUCATION</span>
                        </div>

                        <h3>
                            Higher Secondary — 12th
                        </h3>

                        <p>
                            The Asian School, Bahrain
                        </p>
                    </div>

                    <div className="journey-details">
                        <strong>93%</strong>
                        <span>CBSE</span>
                        <small>PCM + COMPUTER SCIENCE</small>
                    </div>

                    <ArrowUpRight className="journey-arrow" />

                </div>


                {/* 10th */}
                <div className="journey-item">

                    <div className="journey-year">
                        2022
                    </div>

                    <div className="journey-content">
                        <div className="journey-title">
                            <GraduationCap />
                            <span>EDUCATION</span>
                        </div>

                        <h3>
                            Secondary School — 10th
                        </h3>

                        <p>
                            The Asian School, Bahrain
                        </p>
                    </div>

                    <div className="journey-details">
                        <strong>90%</strong>
                        <span>CBSE</span>
                        <small>FRENCH · 2ND LANGUAGE</small>
                    </div>

                    <ArrowUpRight className="journey-arrow" />

                </div>


                {/* Hitasoft Internship */}
                <div className="journey-item current-item">

                    <div className="journey-year">
                        JUN 2026
                    </div>

                    <div className="journey-content">
                        <div className="journey-title">
                            <Briefcase />
                            <span>EXPERIENCE</span>
                        </div>

                        <h3>
                            AI/ML Intern
                        </h3>

                        <p>
                            Hitasoft Technology Solutions P. Ltd., Madurai
                        </p>
                    </div>

                    <div className="journey-details">
                        <span>AI / ML</span>
                        <small>JUNE 2026</small>
                    </div>

                    <ArrowUpRight className="journey-arrow" />

                </div>


                {/* Phoenix Softech Internship */}
                <div className="journey-item">

                    <div className="journey-year">
                        DEC 2025
                    </div>

                    <div className="journey-content">
                        <div className="journey-title">
                            <Briefcase />
                            <span>EXPERIENCE</span>
                        </div>

                        <h3>
                            UI/UX Intern
                        </h3>

                        <p>
                            Phoenix Softech, Madurai
                        </p>
                    </div>

                    <div className="journey-details">
                        <span>UI / UX</span>
                        <small>DECEMBER 2025</small>
                    </div>

                    <ArrowUpRight className="journey-arrow" />

                </div>

            </div>


            {/* Beyond Academics */}

            <div className="beyond-section">

                <div>
                    <p className="mini-label">BEYOND ACADEMICS</p>

                    <h3>
                        Things I enjoy
                        <span> outside the classroom.</span>
                    </h3>
                </div>

                <div className="interest-list">
                    <span>Carrom</span>
                    <span>Football</span>
                    <span>Basketball</span>
                </div>

            </div>


            {/* How I Work */}

            <div className="work-section">

                <div className="work-header">
                    <p className="mini-label">HOW I WORK</p>

                    <h3>
                        How I approach
                        <span> a new project.</span>
                    </h3>
                </div>

                <div className="work-principles">

                    <div className="work-principle">
                        <h4>PLAN</h4>
                        <p>
                            I break complex problems down into manageable pieces
                            and prioritize core functionality.
                        </p>
                    </div>

                    <div className="work-principle">
                        <h4>IMPROVE</h4>
                        <p>
                            I iterate on my code, analyze errors,
                            and optimize for performance.
                        </p>
                    </div>

                    <div className="work-principle">
                        <h4>LEARN</h4>
                        <p>
                            I actively research new frameworks and tools
                            to expand my technical capabilities.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default EducationExperience