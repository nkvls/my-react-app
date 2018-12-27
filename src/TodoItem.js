import React from 'react';

class TodoItem extends React.Component {
    render() {
        var completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        };

        return (
            <div>
                <input type="checkbox" 
                    id={this.props.item.id} 
                    checked= {this.props.item.completed}
                    onChange={(event) => {this.props.handleChange(this.props.item.id)}} />

                <p style={this.props.item.completed? completedStyle: null}>{this.props.item.text}</p>
            </div>
        )
    };
}

export default TodoItem;