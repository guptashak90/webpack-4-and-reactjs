import React from 'react';

import './login.scss';

class LoginForm extends React.Component {

    state = {
        check: false,
        name: '',
        email: '',
        subject: '',
        msg: '',
    }

    validateEmail = (email) => {
        if ((email).match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)) {
            return 1;
        }
        return 0;
    }

    handleChange = key => (e) => {
        this.setState({
            [`${key}`]: e.target.value,
        });
    }

    validateForm = () => {
        const { name, email, subject, msg } = this.state;
        if (name.length > 0 && subject.length > 0 && msg.length > 0 && this.validateEmail(email)) {
            this.setState({
                check: true
            }, () => { this.submitForm(); })
        } else {
            this.submitForm();
        }
    }

    submitForm() {
        if (this.state.check) {
            alert('Submitted Successfully...!')
        } else {
            alert('Something Awefull Happens..!')
        }
    }

    render() {
        const { name, email, subject, msg } = this.state;
        return (
            <div className='container'>
                <div className="contact1">
                    <div className="container-contact1">
                        <div className="contact1-pic js-tilt" data-tilt>
                            <img src={require('../../assets/img-01.png')} alt="IMG" />
                        </div>

                        <div className="contact1-form validate-form">
                            <span className="contact1-form-title">
                                This is for demo purpose.
                            </span>

                            <div className="wrap-input1 validate-input" data-validate="Name is required">
                                <input className="input1" type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange('name')} />
                                <span className="shadow-input1"></span>
                            </div>

                            <div className="wrap-input1 validate-input" data-validate="Valid email is required: xyz@mail.com">
                                <input className="input1" type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange('email')} />
                                <span className="shadow-input1"></span>
                            </div>

                            <div className="wrap-input1 validate-input" data-validate="Subject is required">
                                <input className="input1" type="text" name="subject" placeholder="Subject" value={subject} onChange={this.handleChange('subject')} />
                                <span className="shadow-input1"></span>
                            </div>

                            <div className="wrap-input1 validate-input" data-validate="Message is required">
                                <textarea className="input1" name="message" placeholder="Message" value={msg} onChange={this.handleChange('msg')} ></textarea>
                                <span className="shadow-input1"></span>
                            </div>

                            <div className="container-contact1-form-btn">
                                <button onClick={this.validateForm} className="contact1-form-btn">
                                    <span>
                                        Submit
                                        {/* <i className="fa fa-long-arrow-right" aria-hidden="true"></i> */}
                                        {/* alert-validate */}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;