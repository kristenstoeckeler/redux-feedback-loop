import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


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
        //put if/else in here with .alert?

        this.setState({
            ...this.props.feedback,
            [propertyName]: event.target.value
        })
    }



    render() {
        return (
            <>
                <h5>How well are you understanding the content?</h5>
                <p>With 1 being 'Don't understand a thing' and 5 being 'I'm a genius now', how well do you understand the content?</p>
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
                    <button type="submit">Next</button>
                </form>
                {JSON.stringify(this.props.feedback)}
                <p>Here's state rn:</p> {JSON.stringify(this.state)}
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles()(connect(putReduxStateOnProps)(Understanding));
