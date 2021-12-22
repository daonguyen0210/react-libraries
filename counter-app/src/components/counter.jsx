
// import \functions, component\ from \library, file, folder\
import React, { Component } from 'react';


// A component can be defined as a reusable block of code that divides the user interface into smaller parts.
class Counter extends Component {
    //state is a special property in React to include any data what this Component needs
    state = {
        // count: this.props.counter.value,

        tags: ['tag1', 'tag2', 'tag3'],
        // setting attributes as static
        imageUrl:  'https://picsum.photos/200',
    };


    // this method constructor will be involked when the class is created
    // constructor function is involked to create value what are parameters
    // constructor () {
    //     super();
    //     // An object to which the this keyword can refer inside the new function.
        
    // }


    render() { 

        console.log('prop', this.props);

        // Render is used to return the HTML you want to display in a component.
        return (  

            // JSX expressions are just like normal JS objects 
            // <div>
            //     <h1>hello world</h1>
            //     <h2>{this.state.count}</h2>
            //     <h2>{this.formatCount()}</h2>
            //     <button className={ classes} style={ {fontSize: 30, color: '#dd9f0a'}}>increament</button>

            //     {/* setting attribute  */}
            //     <img src={this.state.imageUrl} />
            //     {/* the class is keyword used in JSX, to set attribute class, it will be className */}
            //     {/* m-2: margin: 2rem */}
            //     <button className="badge badge-warning m-2" style={ this.styles}>Button className</button>
            //     <button id="hello" style={ { fontSize: 30, fontWeight: 'lighter', color: '#dd4d87'}}>Button id</button>
            // </div>

            // Rendering Lists
            // <div>
            //     <span className={ this.getBadgeClasses()}>{ this.formatCount()}</span>
            //     <button className="btn btn-secondary btn-sm">Increment</button>
            //     <ul>
            //         {this.state.tags.map(val => <li key={val}>{val}</li>)}
            //     </ul>
            // </div>

            // // conditional rendering
            // <div>
            //     { this.state.tags.length === 0 && 'Please create a new tag'};
            //     { this.renderTags()};
            // </div>

            // // handle event
            // <div>
            //     <button onClick={ this.handleIncreament} className="btn btn-secondary btn-sm">Increament</button>
            // </div>


            // binding event handle
            // The event binding allows you to add an event handler for a specified event so that your chosen JavaScript function will be invoked when that event is triggered for the associated DOM element.
            // if the function will be involked by method such as object.method() so the 'this' will reference to the object. But when the function will be involked and not reference to object it will referce to window object without 'strict mode'

            // we can use constructor function to bind the function to object such as:
                // ràng buộc method vào object, cái
                // constructor () {
                    // this.handleIncreament = this.handleIncreament.bind(this);
                // }
     
                
            <div>
                {/* call handleIncreament function */}
                <h3>id component: { this.props.counter.id}</h3>
                <span className="btn-warning" style={ { fontSize: 24}}>{ this.props.counter.value}</span>
                <button onClick={ () => this.props.onIncreament( this.props.counter)} className="btn btn-primary btn-sm m-3">Increament</button>
                {/* tại sao lại phải dùng arrow-function to pass parmetter
                ==> bới vì nếu truyền tiếp this.props.onDelete( this.props.id) thì hàm sẽ thực thi luôn không còn là callback-function. nhưng khi sử dụng arrow function thì function chỉ khi event trick. */}
                <button className="btn btn-danger btn-sm m-3" onClick={ () => this.props.onDelete( this.props.counter.id)}>Delete</button>
            </div>
  
            // what happens when State changes
            /*Cause the State is acsynochonism so it is not immidiately updated, but when the fucntion call it is done excution, so when the State change, the render will reliase which element changed, and update it to real DOM*/ 
             
        );
    }



    styles = {
        fontSize: 30, //it will be 10px
        fontWeight: "bold",
        color: 'crimson',
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    // method of class component
    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : 'More';
    }

    

    // conditional rendering: because the rendering doesnot have conditional if-else like Angular, but to can use conditional rendering 
    renderTags() {
        if( this.state.tags.length === 0) return <p>There is no tags</p>;

        return  <ul>{this.state.tags.map(val => <li key={val}>{val}</li>)}</ul>;
    }



    // handleIncreament() {
    //     // updating the state
    //     // when access the property of set we only can read-only
    //     // this.state.count ++; => will be error
    //     // this.setState( { count: this.state.count + 1});
    //     console.log( 'handle increament button', this);
    // }

    // bind the event handler by arrow function:
    // handleIncreament = (value) => {
    //     this.setState( { count: this.state.count + 1});
    // } 
}
 
export default Counter;


 