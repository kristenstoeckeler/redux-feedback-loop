import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


class Support extends Component {
    handleSubmit = (event) => {
        console.log('In handleSubmit');
        event.preventDefault();
        this.props.dispatch({
            type: 'FEEDBACK',
            payload: this.state
        });
        this.props.history.push('/comments');
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
                <h5>How well are you feeling supported?</h5>
                <p>With 1 being 'nobody around here cares about me' and 5 being 'I am clearly god', how well are you feeling supported?</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="dropdown">
                        <select type="select" onChange={event => this.handleChangeFor(event, 'support')}>
                            <option value="0">Comprehension</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
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

export default withStyles()(connect(putReduxStateOnProps)(Support));