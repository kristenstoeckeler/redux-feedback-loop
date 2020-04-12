import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments:'',
    }

    handleSubmit = (event) => {
        console.log( 'In handleSubmit');
        event.preventDefault();

        if(this.state.feeling > 0){
            this.props.dispatch({
                type: 'FEEDBACK',
                payload: this.state
            });
            this.props.history.push('/understanding');
        }else{
            alert('Please enter a response to continue');
        }
    }

    handleChangeFor = (event, propertyName) => {
        console.log( 'in handleChangeFor', event.target.value );
        this.setState({
            [propertyName]: event.target.value
        })
    }

    render() {
        return (
            <>
            <h5>How are you feeling today?</h5>
            <p>With 1 being the worst day ever and 5 being the day you win the lottery, how are you feeling today?</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="dropdown">
                        <select type="select" onChange = {event => this.handleChangeFor(event, 'feeling')}>
                            <option value="0">Feelings</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button type="submit">Next</button>
                </form>
            {JSON.stringify(this.state)}
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    form: reduxStore.formReducer,
})

export default withStyles()(connect(putReduxStateOnProps)(Feeling));
