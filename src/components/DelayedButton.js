import React, { Component } from 'react'

class DelayedButton extends Component{

    handleOnClick = (e) => {
        window.setTimeout(()=>{
            e.persist();
            this.props.onDelayedClick(e);

        }, this.props.timeout)
    }

    render() {
        return (
            <button onClick={this.handleOnClick}></button>
        )
    }
}

export default DelayedButton