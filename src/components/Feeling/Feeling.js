import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

class Feeling extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        // axios.post('/api/order', this.state).then(response => {
        //     console.log('submitted', response);
        // })
        // this.props.dispatch({
        //     type: 'ADD_CUSTOMER',
        //     payload: this.state
        // });
        // this.setState({
        //     customer_name: '',
        //     street_address: '',
        //     city: '',
        //     zip: '',
        //     type: 'Pickup',
        // });
        this.props.history.push('/understanding');

    }

    render() {
        return (
            <>
            <h5>How are you feeling?</h5>
            <form onSubmit={this.handleSubmit}>
            <button type="submit">Next</button>
            </form>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles()(connect(putReduxStateOnProps)(Feeling));
