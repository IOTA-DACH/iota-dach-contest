import React, { Component } from "react";
import axios from "axios";
import '../css/contact.css';
import {
    Link
} from "react-router-dom";

import Conditions from '../components/home'


class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            title: "",
            message: "",
            status: "Submit"
        };
    }
    render() {
        let buttonText = this.state.status;
        return (

            <div className='contact'>
                

                <div>

                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div >
                            <input
                                type='text'
                                className='form-group'
                                id="name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                                required
                                aria-describedby='emailHelp'
                                placeholder='Telegram-Usernamen eingeben'
                            />
                        </div>

                        <div>
                            <input
                                type='title'
                                className='form-group'
                                id="title"
                                value={this.state.title}
                                onChange={this.handleChange.bind(this)}
                                required
                                aria-describedby='titleHelp'
                                placeholder='Titel der Einsendung'
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                className='form-group'
                                value={this.state.message}
                                onChange={this.handleChange.bind(this)}
                                required
                                rows='6'
                                placeholder='Erkläre deine Idee:'
                            />
                        <div className="checkboxdiv"> 
                            <input
                                type='checkbox'
                                className='checkbox'
                                id="checkbox"
                                required
                                name="checkbox"
                                label="i agree the"
                            />
                            <span className="checkboxText">Ich habe die </span>
                            <Link to="/conditions" onClick={() => Conditions()} className="checkboxText" style={{fontWeight: "bold"}}> Teilnahmebedingungen und den Datenschutz </Link>
                            <span className="checkboxText">gelesen und stimme zu. </span>
                        </div>   
                        </div>
            

                        <div >
                            <button className='submit-btn' type="submit">
                                {buttonText}
                            </button>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </form>
                </div>
                <Link to="/"  className="btn"> zurück </Link>
            </div>
        );
    };

    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
            this.setState({ name: event.target.value });
        } else if (field === "title") {
            this.setState({ title: event.target.value });
        } else if (field === "message") {
            this.setState({ message: event.target.value });
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ status: "Sending" });
        axios({
            method: "POST",
            url: "https://owndev.net:443/contact",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "sent") {
                this.setState({ name: "", title: "", message: "", status: "Gesendet!" });
                setTimeout(function () { window.location.replace("/#/thanks"); }, 1000);
            } else if (response.data.status === "failed") {
                alert("Message Failed");
            }
        });
    }
}

export default Contact;