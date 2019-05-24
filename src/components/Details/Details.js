import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Details extends Component {
    render(){
        return(
            <div>
                <input placeholder = "Name" type="text">Name</input>
                <input placeholder = "Kingdom" type="text">Kingdom</input>
                <input placeholder = "Clade" type="text">Clade</input>
                <input placeholder = "Order" type="text">Order</input>
                <input placeholder = "Family" type="text">Family</input>
                <input placeholder = "Subfamily" type="text">Subfamily</input>
                <input placeholder = "Genus" type="text">Genus</input>
                <button type="text">Submit Changes</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Details);
