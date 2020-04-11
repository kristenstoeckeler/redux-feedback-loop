import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

class Review extends Component {
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
        this.props.history.push('/thank-you');

    }

    render() {
        return (
            <>
                <h5>Please review your feedback.</h5>
                {JSON.stringify(this.props.feedback)}
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

export default withStyles()(connect(putReduxStateOnProps)(Review));