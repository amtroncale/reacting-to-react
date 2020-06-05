import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            text: 'Is your opinion wrong?',
            hasLoaded: false,
        }
    }
    inputChange(text) {
        this.setState({ text });
    }
    isLoading() {
        this.setState({ hasLoaded: false });
    }
    toggleLoaded = () => {
        this.setState({ hasLoaded: true });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <>
                    <h1>{this.props.name} is the best baseball player of all-time. CHANGE MY MIND.</h1>
                    <p>{this.state.text}</p>
                    <input
                        placeholder={'Enter Barry Bonds here'}
                        onChange={(event) => { this.inputChange(event.target.value)}}
                    ></input>
                    <br />
                    <button onClick={(event) => { this.isLoading() }}>Confirm that Barry Bonds is the GOAT</button>
                </>
            );
            } else
            return (
                <>
                    <h1>There is no refuting the fact that he is.</h1>
                    <button onClick={() => { this.toggleLoaded() }}>STOP WASTING MY TIME</button>
                </>
            );
    }
    componentDidMount () {
        this.setState({ hasLoaded: true });
      }
};

export default App;