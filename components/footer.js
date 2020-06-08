import Styles from '../styles/footer.module.scss'
import Container from './container'

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <Container>
                <span>Copyright &copy; {(new Date()).getFullYear()} by Mohammad Khaufillah</span>
                <ul className="tabDesktop">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </Container>
        </footer>
    )
}