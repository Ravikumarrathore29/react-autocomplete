import React, { Component } from 'react'

export default class HideableText extends Component {

    constructor(props) {
        super(props); // super will call constructor of previows Class
        this.state = {
            isHidden: false
        };
    }

    toggleIsHidden() {
        this.setState((currentState) => ({
          isHidden: !currentState.isHidden,
        }));
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.toggleIsHidden()}>Toggle</button>
                {!this.state.isHidden && this.props.text}
            </div>
        )
    }
}
