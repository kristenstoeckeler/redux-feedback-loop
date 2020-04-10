import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


class Thanks extends Component {
    render() {
        return (
            <>
                <h5>Thank you for leaving a review!</h5>
            </>
        );
    }
}


const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles()(connect(putReduxStateOnProps)(Thanks));
