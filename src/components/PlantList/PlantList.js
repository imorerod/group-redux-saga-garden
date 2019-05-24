import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantItem from '../../components/PlantItem/PlantItem';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.getPlant();
    }

    getPlant() {
        this.props.dispatch({
          type: 'GET_PLANTS'
        })
    }

    render() {
        return (
            <ul>
                {this.props.reduxState.plantList.map((plantItem, index) => {
                    return (
                        <PlantItem key={plantItem.id} plantItem={plantItem} />
                    );
                })}
            </ul>
        )
    }
}

export default connect(mapStateToProps)(PlantList);
