import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


class Thanks extends Component {
    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: '',
    }

    handleSubmit = (event) => {
        console.log('In handleSubmit');
        event.preventDefault();
        this.props.dispatch({
            type: 'FEEDBACK',
            payload: this.state
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <h5>Success! Thank you for leaving a review.</h5>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Take Another Survey</button>
                </form>
            </>
        );
    }
}


const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles()(connect(putReduxStateOnProps)(Thanks));
