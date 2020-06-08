import Styles from '../styles/contact.module.scss'

export default function Contact() {
    return (
        <section className={Styles.contact} id="contact">
            <h1>Contact</h1>
            <input className="input" type="text" placeholder="Input your name"/>
            <input className="input" type="email" placeholder="Input your email"/>
            <textarea rows="7" className="input" placeholder="Input your body text"></textarea>
            <button className="btn">Send</button>
        </section>
    )
}