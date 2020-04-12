import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

//this is for Material U-I buttons
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});


class Feeling extends Component {
//I employed state here b/c for some reason it allowed me to access this.state.feeling below in my if statement to throw an alert
//if there wasn't a value selected. I don't totally get why this works rn, but it did the trick. Same for all successive components. 
    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments:'',
    }

//this function is sending state to the feedback reducer at index.js if a value has been registered in the select menu on the DOM
//it also advances to the next page if a value was logged. Otherwise it throws an alert asking for a selection to be made.
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
            alert('Please enter a response to continue.');
        }
    }

//This function sets state with values from select menu on DOM
    handleChangeFor = (event, propertyName) => {
        console.log( 'in handleChangeFor', event.target.value );
        this.setState({
            [propertyName]: event.target.value
        })
    }

    render() {
        //this is for Material U-I buttons
        const classes = this.props.classes 

        return (
            <>
            <h3>How are you feeling today?</h3>
            <p>With '1' being the worst day ever and '5' being the day you win the lottery, how are you feeling today?</p>
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
                    <Button type="submit" variant="contained" color="secondary" className={classes.button}>Next</Button>
                </form>
            {/* {JSON.stringify(this.state)} */}
            </>
        );
    }
}

export default withStyles(styles)(connect()(Feeling));
