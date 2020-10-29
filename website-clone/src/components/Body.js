import React, { Component } from 'react'
import Service from "./Service"


export class Body extends Component {
    render() {

        const serviceTitle = [
            {
                title: "E-Commerce",
                className: "e-comm",
                svg: ""
            },
            {
                title: "Responsive Design",
                className: "resp-des",
                svg: ""
            }, 
            {
                title: "Web Security",
                className: "web-sec",
                svg: ""
            }
        ]
        // const test = serviceTitle.map((title, index) => <Service key={index} title={title}/>)

        return (
            <div>
                <div className="welcome-container">
                    <div className="welcome-text-container">
                        <div className="welcome-text">Welcome To Our Studio!</div>
                        <div className="nice-to-meet-text">IT'S NICE TO MEET YOU</div>
                        <a href="" className="tell-me-more">TELL ME MORE</a>
                    </div>
                </div>
                <div className="services">
                    <div className="services-header">
                        <h1>SERVICES</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="services-container">
                        {test}
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
