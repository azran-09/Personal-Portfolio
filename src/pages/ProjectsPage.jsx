function ProjectsPage() {
    return (
        <section>
            <h1> Projects </h1>
            <div className="project-card">
                <h2>WordToASL</h2>
                <p> A 2022 Congressional App Challenge Winner,
                    WordToASL takes any English Word, up to 22 characters in length,
                    and translates each letter into its American Sign Language equivalent.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IwrqsWMZacM" frameborder="0" allowfullscreen></iframe>
            </div>

            <div className="project-card">
                <h2>HopeHorizon</h2>
                <p> A 2023 Congressional App Challenge Winner, 
                    Hope Horizon's Aim is to provide resources for any person experiencing housing insecurity.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wKHDSd725s4" frameborder="0" allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default ProjectsPage;