import React from 'react';


export default class FormControls extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            likeMovies: false,
            gender: "",
            favColor: "blue"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, type, value, checked} = event.target;
    
        type === "checkbox" ? this.setState({[name]: checked}) :
            this.setState({[name]: value})
    }

    handleSubmit(event) {
        console.log('form submitted');
        event.preventDefault();
    }

    render() {
        return (
            <form className="form" 
            onSubmit={this.handleSubmit}>
                <label>
                    First Name
                    <input type="text" name="firstName" 
                        placeholder="enter first name" 
                        onChange={this.handleChange}
                        value={this.state.firstName}
                    />
                </label>
                <br />
                <label>
                    Last Name
                    <input type="text" name="lastName" 
                        placeholder="enter last name" 
                        onChange={this.handleChange}
                        value={this.state.lastName}
                     />
                </label>
                <br />
                <label>
                    Does like movies
                    <input type="checkbox" 
                        name="likeMovies" 
                        checked={this.state.likeMovies}
                        onChange={this.handleChange} />
                </label>

                <br/>
                <label>
                    <input type="radio" 
                        name="gender" 
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} />
                        male
                </label>
                <label>
                    <input type="radio" 
                        name="gender" 
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} />
                        female
                </label>
                <br/>

                <select value={this.state.favColor} 
                onChange={this.handleChange}
                name="favColor">
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="magenta">Magenta</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                    <option value="cyan">Cyan</option>
                </select>

                <button>Submit</button>

                


                <p>{this.state.firstName} {this.state.lastName} {this.state.likeMovies ? "Yes" : "No"}</p>                
                <p>{this.state.gender}</p>
                <p>{this.state.favColor}</p>
            </form>
            
        )
    }
}

