import React from 'react';

import LoginForm from './login';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <header className="header">App Header</header>
                <section className="body">
                    <h1 className="title">Hello and Welcome, React-Redux-Sass Demo kit is successfully build and your kit is ready to use</h1>
                    <LoginForm />
                </section>
                <footer className="header">App Footer</footer>
            </React.Fragment>
        )
    }
}