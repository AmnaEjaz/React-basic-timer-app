import React, { Component } from "react";
      // read https://reactjs.org/docs/hooks-reference.html#usestate

class TimeInput extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form>
                <label>
                    Enter Timer (seconds): 
                </label>
                <input type="number" name="name" />
                <input type="submit" value="Start" />
            </form>
        );
    }
}

export default TimeInput;