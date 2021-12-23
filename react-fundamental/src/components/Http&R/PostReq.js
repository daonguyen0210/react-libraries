import React, { Component } from 'react'
import moduleName from './Hone'


class PostReq extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userId: '',
            title: '',
            body: '', 
        }
    }
    
    handleChange = (e) => {
        let change = {[e.target.name]: e.target.name}
        console.log(change)
        this.setState(change)

    }
 
    handleSubmite = (e) => {
        e.preventDefault()
        alert(this.state)
    }

    render() {

        const {userId, title, body} = this.state
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="text" name="title"  value={title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="text" name="body"  value={body} onChange={this.handleChange}/>
                    </div>

                    <button onClick={this.handleSubmite}>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostReq
