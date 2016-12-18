import React, { Component } from 'react'
import Comment from './Comment'

export default class Article extends Component {
    state = {
        isOpen: false,
        isComments: false
    }

/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        // const { article } = this.props.article
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{this.props.article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleOpenComments = () => {
        this.setState({
          isComments: !this.state.isComments
        })
    }

    getBody() {
      const { article } = this.props
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <h3 onClick={this.toggleOpenComments}>Comments</h3>
                {this.getComments()}
            </section>
        )
    }

    getComments() {
      const { article } = this.props
      if (!this.state.isComments) return null;
      if (!article.comments) return null;
        const comments = article.comments.map( comment => <ul key = {comment.id}><Comment comment = {comment}/></ul>)
        return (
            <div>
              {comments}
            </div>
        )

    }
}
