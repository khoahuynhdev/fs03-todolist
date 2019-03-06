import React, { Component } from 'react';

class AddNewTask extends Component {
    render() {
        return (
            <button 
                type="button" 
                className="btn my-3 btn-warning"
                onClick={this.props.saveLS}
            >
                Lưu lên LocalStortage
            </button>
        );
    }
}

export default AddNewTask;