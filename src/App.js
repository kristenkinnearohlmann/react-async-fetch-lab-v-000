// create your App component here
import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            true
        )
    }
}

export default App;