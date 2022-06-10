import React, { Component } from "react";


class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time : props.startTime
        }
        this.startTimer = this.startTimer.bind(this);
        // this.resetTimer = this.resetTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.timer = null;
        this.pauseValue = null;
    }
    componentDidMount() {
        if(this.state.time > 0) this.startTimer();
    }

    // it is important to clear interval in componentWillUnmount because componentDidMount triggers an extra rendering and this happens before the browser updates the screen.
    // This means that even though the render() will be called twice in this case, the user won’t see the intermediate state thus the timer will be decreased twice each time

    componentWillUnmount() { 
        clearInterval(this.timer);
    }
    startTimer(){
        this.timer = setInterval(
            () => this.countDown(),
            1000
        );
    }
    resetTimer(value) {
        this.setState((state) => ({
            time: value
        }))
    }
    pauseTimer() {
        clearInterval(this.timer);
    }
    countDown() {
        if (this.state.time > 0) 
        this.setState((state) => ({
            time : state.time -=1
        }))
    }
    render () {
        return (
            <>
            <h1>{this.state.time}</h1>
            {this.state.time > 0 && ( 
            <>
                <button onClick={this.pauseTimer}>Pause</button>
                <button onClick={this.startTimer}>Resume</button>
            </>
            )}
            <button onClick={() => this.resetTimer(0)}>Reset</button>
            </>
        );
    }
}

export default Timer;