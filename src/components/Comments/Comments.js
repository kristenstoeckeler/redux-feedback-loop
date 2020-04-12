import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});


class Comments extends Component {

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
        this.props.history.push('/review');
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
                <h3>For god's sake, say something.</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Comments
                    <textarea onChange={event => this.handleChangeFor(event, 'comments')}/>
                    </label>
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

export default withStyles(styles)(connect(putReduxStateOnProps)(Comments));
