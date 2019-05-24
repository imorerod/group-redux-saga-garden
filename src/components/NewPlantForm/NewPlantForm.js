import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            id: 4,
            name: ''
        }
    }

    handleNameChange = event => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                name: event.target.value,
            }
        });
    }

    componentDidMount() {
        // this.getElements();
        this.props.dispatch({
          type: 'GET_PLANTS'
        })
        console.log('This is in NewPlantForm,');
      }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                id: this.state.newPlant.id + 1,
                name: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewPlant}>
                    <input type='text' value={this.state.newPlant.name} onChange={this.handleNameChange} />
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
