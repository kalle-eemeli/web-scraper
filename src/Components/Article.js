import React from 'react';
import '../App.css';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: props.date,
            title: props.title,
            url: props.url
        }
    }

    render() {
        return (
            <div className="Article">
                <p>{this.state.date}</p>
                <h1>
                    <a style={{color: "white"}} href={this.state.url}>{this.state.title}</a>
                </h1>
            </div>
        )
    }
}

export default Article;