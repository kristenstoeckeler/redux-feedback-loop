import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
})

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
        const classes = this.props.classes
        return (
            <>
                <h3>Success! Thank you for sharing your innermost feelings with me.</h3>
                <form onSubmit={this.handleSubmit}>
                    <Button type="submit" variant="contained" color="secondary" className={classes.button}>Take Another Survey</Button>
                </form>
            </>
        );
    }
}


const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Thanks));
