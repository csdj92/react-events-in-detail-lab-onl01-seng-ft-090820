import React, { Component } from 'react'

class CorrdinatesButton extends Component {

    handleOnClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }


    render() {
        return (
           <button onClick={this.handleOnClick}></button>
        )
    }
}

export default CorrdinatesButton