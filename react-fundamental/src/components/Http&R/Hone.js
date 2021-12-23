import React, { Component } from 'react'
import axios from 'axios'


class Hone extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
        }
    }
    

    /* because the data after the api rarely changes, so using the function componentDidMount will help the axios render only once */

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (res) => {
                this.setState({ posts: res.data})
                console.log(res)
            })
            // })
            .catch( (err) => {
                console.log(err)
            })
    }

    render() {
        const {posts} = this.state;
        return (
            <div>
                list of posts
                {posts.length ?
                    posts.map( (post) => <div key={post.id}>{post.title}</div>) : "Something went wrong!"
                }
            </div>
        )
    }
}

export default Hone
