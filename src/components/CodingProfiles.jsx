import './CodingProfiles.css'
import { Code2, Terminal, UserRound, ArrowUpRight } from 'lucide-react'

function CodingProfiles() {
    return (
        <section id="profiles" className="coding-profiles">

            <div className="profiles-heading">
                <p className="section-label">CODING PROFILES</p>

                <h2>
                    Where I
                    <span> practice & share.</span>
                </h2>

                <p className="profiles-intro">
                    Platforms where I push my code, practice algorithms, 
                    and connect with the tech community.
                </p>
            </div>

            <div className="profiles-list">

                <a
                    href="https://github.com/rifaya2007"
                    target="_blank"
                    rel="noreferrer"
                    className="profile-item"
                    aria-label="Visit my GitHub profile"
                >
                    <div className="profile-icon">
                        <Terminal />
                    </div>

                    <div className="profile-info">
                        <span>DEVELOPMENT</span>
                        <h3>GitHub</h3>
                        <p>
                            Projects, experiments, and things I'm building.
                        </p>
                    </div>

                    <div className="profile-link">
                        <span>@rifaya2007</span>
                        <ArrowUpRight />
                    </div>
                </a>

                <a
                    href="https://leetcode.com/u/rifa_07/"
                    target="_blank"
                    rel="noreferrer"
                    className="profile-item"
                    aria-label="Visit my LeetCode profile"
                >
                    <div className="profile-icon">
                        <Code2 />
                    </div>

                    <div className="profile-info">
                        <span>PROBLEM SOLVING</span>
                        <h3>LeetCode</h3>
                        <p>
                            Practicing DSA and improving my problem-solving skills.
                        </p>
                    </div>

                    <div className="profile-link">
                        <span>View Profile</span>
                        <ArrowUpRight />
                    </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/rifaya-parveen-914a71333/"
                    target="_blank"
                    rel="noreferrer"
                    className="profile-item"
                    aria-label="Visit my LinkedIn profile"
                >
                    <div className="profile-icon">
                        <UserRound />
                    </div>

                    <div className="profile-info">
                        <span>PROFESSIONAL</span>
                        <h3>LinkedIn</h3>
                        <p>
                            My professional profile, experience, and journey.
                        </p>
                    </div>

                    <div className="profile-link">
                        <span>Connect</span>
                        <ArrowUpRight />
                    </div>
                </a>

            </div>

        </section>
    )
}

export default CodingProfiles