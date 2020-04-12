import React, { Component } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';


const styles = theme => ({
    root: {
        width: '90%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },

    table: {
        minWidth: 700
    },

    button: {
        margin: theme.spacing.unit,
    },
})


class Review extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('/api/feedback', this.props.feedback)
        .then(response => {
            console.log('submitted', response);
        }).catch(error =>{
            console.log( 'Error on POST', error);
        })
        this.props.history.push('/thank-you');

    }

    render() {
        const classes = this.props.classes
        return (
            <>
                <h3>Please review your feedback.</h3>
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Feeling</TableCell>
                                <TableCell align="center">Comprehension</TableCell>
                                <TableCell align="center">Support</TableCell>
                                <TableCell align="center">Comments</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell align="center" component="th" scope="row">{this.props.feedback.feeling}</TableCell>
                                <TableCell align="center">{this.props.feedback.understanding}</TableCell>
                                <TableCell align="center">{this.props.feedback.support}</TableCell>
                                <TableCell align="center">{this.props.feedback.comments}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <form onSubmit={this.handleSubmit}>
                    <Button type="submit" variant="contained" color="secondary" className={classes.button}>Submit</Button>
                </form>
                {JSON.stringify(this.props.feedback)}
            </>
        );
    }
}


const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Review));