import {Component} from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <header className="page-header">
                <nav className="navigation">
                    <a href="index.html" className="logo"><span>i</span>tems</a>
                    <div id="datetime"></div>
                </nav>
            </header>
        )
    }
}

export default Nav;
