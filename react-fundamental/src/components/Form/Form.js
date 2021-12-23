import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comment: '',
            topic: ''
        };
    }
    render() {
        const [username, comment, topic] = this.state;
        return (
            <div>
                <form>
                    <label>Username</label>
                    <input type="text" 
                        value={username}
                        onChange={ (e) => { this.setState({username: e.target.value})}}
                    >

                    </input>
                </form>
                <div> 
                    <label> Comments</label>
                    <textarea value={comment} onChange={(e) => { this.setState({comment: e.target.value})}}></textarea>
                </div>
                
                <div> 
                    <lebel> Topic</lebel>
                    <select value={topic} onChange={ (e) => { this.setState({topic: e.target.value})}}> 
                        <option value="react">React</option >
                        <option value="vue">Vue</option >
                        <option value="angular">Angular</option >
                    </select>
                </div>
                <button type="submit" onClick={() => { console.log('you are dont')}}>Submit</button>
            </div>
        )
    }
}

export default Form
