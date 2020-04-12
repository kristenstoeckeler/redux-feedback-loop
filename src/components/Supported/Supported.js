//comments on Feeling.js and Understanding.js apply to everything in this component as well

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class Support extends Component {
    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: '',
    }

    handleSubmit = (event) => {
        console.log('In handleSubmit', this.state);
        event.preventDefault();

        if (this.state.support > 0) {
            this.props.dispatch({
                type: 'FEEDBACK',
                payload: this.state
            });
            this.props.history.push('/comments');
        } else {
            alert('Please enter a response to continue');
        }
    }

    handleChangeFor = (event, propertyName) => {
        console.log('in handleChangeFor', event.target.value);

        this.setState({
            ...this.props.feedback,
            [propertyName]: event.target.value
        })
    }

    render() {
        const classes = this.props.classes
        return (
            <>
                <h3>How well are you feeling supported?</h3>
                <p>With '1' being "Nobody around here cares about me at all" and '5' being "I am clearly god because every need
                    I have is being attended to every moment of every day", how well are you feeling supported?</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="dropdown">
                        <select type="select" onChange={event => this.handleChangeFor(event, 'support')}>
                            <option value="0">Support</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <Button type="submit" variant="contained" color="secondary" className={classes.button}>Next</Button>
                </form>
                {/* {JSON.stringify(this.props.feedback)} */}
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Support));