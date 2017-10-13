import React, { Component } from 'react'

class Places extends Component {
    render() {
        const list = this.props.points.map((point, i) => {
            return (
                <li key = {i}>{point.name}</li>
            )
        })

        return (
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        )
    }
}

export default Places