import React, { Component } from 'react'
import logo from '../assets/navbar-logo.svg'


class Header extends Component {
    constructor() {
        super()
        this.state = {
            toggleSwitch: false
        }
    }

    toggleSwitchFunc = () => {
        this.setState(prevState => {
            return {
                toggleSwitch: !prevState.toggleSwitch
            }
        })
    }

    render() {
        return (
            <header>
                <div className={`header-container ${this.state.toggleSwitch ? "header-padding-show" : ""}`}>
                    <nav>
                        <a href="">
                            <img className="logo" src={logo} alt="logo" />
                        </a>
                        <button className="hamburger-btn" onClick={this.toggleSwitchFunc}>
                            MENU
                            <svg class="hamburger-icon" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                            </svg>
                        </button>
                        <div className={`nav-items-container ${this.state.toggleSwitch ? "show" : ""}`}>
                            <ul className="nav-list">
                                <li className="nav-items"><a href="">SERVICES</a></li>
                                <li className="nav-items"><a href="">PORTFOLIO</a></li>
                                <li className="nav-items"><a href="">ABOUT</a></li>
                                <li className="nav-items"><a href="">TEAM</a></li>
                                <li className="nav-items"><a href="">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header
