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
        .then(response => {
            if (!response.ok) {
                throw Error('could not fetch data')
            }
            return response.json()
        })
        .then(result => {
            this.setState({data: result});
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        return (
            <div className="ArticleList">
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