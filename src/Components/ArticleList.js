import Article from './Article';
import React from 'react';

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
   
    componentDidMount() {
        fetch('http://localhost:8000/news')
        .then(response => response.json())
        .then(result => {
            this.setState({data: result})
        })
    }

    render() {
        return (
            <div className="ArticleList">
                <h1 style={{fontSize: 60}}>NEWEST ARTICLES FROM GAMERANX.COM</h1>
                <ul>
                    {this.state.data.map(item =>
                        <li>
                            <Article title={item.title} url={item.url} date={item.date}/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ArticleList;