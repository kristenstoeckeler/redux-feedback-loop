import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


class Comments extends Component {
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
        return (
            <>
                <h5>Are there any comments you'd like to leave?</h5>
                <form onSubmit={this.handleSubmit}>
                    <label>Comments
                    <textarea onChange={event => this.handleChangeFor(event, 'comments')}/>
                    </label>
                    <button type="submit">Next</button>
                </form>

                {JSON.stringify(this.props.feedback)}
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles()(connect(putReduxStateOnProps)(Comments));
