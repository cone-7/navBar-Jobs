import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import NavBar from './components/navbar.js'

import './index.scss';

library.add(faSearch, faBell, faEnvelope, faUserCircle)
  
class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        this.getText = this.getText.bind(this);
    }

    getText(text){
        this.setState({
            text: text
        })
    }

    render() {
        return (
        <div>
            <NavBar searchText={this.getText}></NavBar>
            <div className="content">
                <div>{this.state.text}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}

// ========================================

ReactDOM.render(
<Main />,
document.getElementById('root')
);
