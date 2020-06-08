import React from 'react'
import Styles from '../styles/navigation.module.scss'
import Container from './container'
import ClassNames from 'classnames'
import { IoMdReorder } from 'react-icons/io';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            navIsFixed: false,
            showLoginPopup: false,
            showMenuMobile: false
        }
    }

    componentDidMount() {
        window.onscroll = this.setStateNav.bind(this)
    }

    setStateNav() {
        let stateNav = false;
        if (window.scrollY > 90) stateNav = true;
        this.setState({
            navIsFixed: stateNav
        })
    }

    render() {

        const elemMenu = (
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <button className="btn outline small" onClick={() => {
                        this.setState({
                            showLoginPopup: true
                        })
                    }}>Login</button>
                </li>
                <li className="onlyMobile">
                    <a onClick={() => {
                        this.setState({
                            showMenuMobile: false
                        })
                    }}>Back</a>
                </li>
            </ul>
        )

        return (
            <nav className={ClassNames({ [Styles.nav]: true, [Styles.navFixed]: this.state.navIsFixed })}>
                <Container>
                    <div className={Styles.navLogo}>
                        <img src="/images/logo.svg" alt="Logo" />
                        <span><strong>Analiser</strong></span>
                    </div>
                    <div className={`${Styles.navMenu} tabDesktop`}>
                        {elemMenu}
                    </div>
                    <IoMdReorder className={`${Styles.menu} onlyMobile`} onClick={() => {
                        this.setState({
                            showMenuMobile: true
                        })
                    }} />
                </Container>
                <div className={ClassNames({ [Styles.menuMobile]: true, [Styles.menuMobileHide]: !this.state.showMenuMobile })}>
                    {elemMenu}
                </div>
                <div className={ClassNames({ [Styles.login]: true, [Styles.loginHide]: !this.state.showLoginPopup })}>
                    <div>
                        <h1>Login to your account</h1>
                        <input className="input" type="email" placeholder="Input your email" />
                        <input className="input" type="password" placeholder="Input your password" />
                        <div>
                            <button className="btn">Login</button>
                            <button className="btn danger" onClick={() => {
                                this.setState({
                                    showLoginPopup: false
                                })
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}