import React, { Component } from 'react'

export default class PastIceberg extends Component {
    static defaultProps = {

        match: {
            params: {}
        }
    }
    
    render() {

        const { icebergId } = this.props.match.params
        console.log(this.props.match.params)
        return (
            <div>
                <p>TEST</p>
            </div>
        )
    }
}