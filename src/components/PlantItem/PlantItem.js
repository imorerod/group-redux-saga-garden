import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantItem extends Component {
    deletePlant = () => {
        this.props.dispatch({
            type: 'DELETE_PLANT',
            payload: this.props.plantItem.id
        })
        console.log('DELETE button firing!')
    }

    getPlant() {
            this.props.dispatch({
              type: 'GET_PLANT'
            })
        
    }

    render() {
        return (
            <li>
                <span>{this.props.plantItem.name}</span>
                <button onClick={this.deletePlant}>Remove</button>
            </li>
        )
    }
}

export default connect()(PlantItem);