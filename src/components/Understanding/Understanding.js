//comments on Feeling.js apply to everything in this component as well

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = theme => ({ 
    button: {
        margin: theme.spacing.unit,
    },
});

class Understanding extends Component {

    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: '',
    }
   
    handleSubmit = (event) => {
        console.log('In handleSubmit', this.state);
        event.preventDefault();

        if (this.state.understanding > 0) {
            this.props.dispatch({
                type: 'FEEDBACK',
                payload: this.state
            });
            this.props.history.push('/support');
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
                <h3>How well are you understanding the material?</h3>
                <p>With '1' being "I don't get a freaking thing" and '5' being "I am clearly a genius now," 
                    how well do you understand the content?</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="dropdown">
                        <select type="select" onChange={event => this.handleChangeFor(event, 'understanding')}>
                            <option value="0">Comprehension</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <Button type="submit" variant="contained" color="secondary" className={classes.button}>Next</Button>
                </form>
                {JSON.stringify(this.props.feedback)}
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Understanding));
