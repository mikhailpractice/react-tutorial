import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        const { comment } = this.props
        return (
            <div>
                <li>
                  {comment.user}
                  {comment.text}
                </li>
            </div>
        )
    }

}
