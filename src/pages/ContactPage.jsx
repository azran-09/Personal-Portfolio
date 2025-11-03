import myProfilePicture from '../assets/portfolio_personal_image.jpg';

function ContactPage() {
    return (
        <section>
            <h1> Get in Touch</h1>
            <img src={myProfilePicture} alt="Photo of Azul Rangel" className="profile-pic"/>
            <p id="contact-pg-small-text">I look forward to collaborating with you!</p>
            <a href="mailto:azul.rangel@yale.edu" className="cta">Email Me</a>
            <a href="https://github.com/azran-09" target="_blank" rel="noopener noreferrer" className="cta">Github Profile</a>
            <a href="https://www.linkedin.com/in/azul-rangel-481764272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="cta">LinkedIn</a>
        </section>
    );
}
export default ContactPage;