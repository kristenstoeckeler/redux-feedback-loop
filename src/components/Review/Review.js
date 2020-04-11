import React, { Component } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
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
    }
})


class Review extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // axios.post('/api/order', this.state).then(response => {
        //     console.log('submitted', response);
        // })
        // this.props.dispatch({
        //     type: 'ADD_CUSTOMER',
        //     payload: this.state
        // });
        // this.setState({
        //     customer_name: '',
        //     street_address: '',
        //     city: '',
        //     zip: '',
        //     type: 'Pickup',
        // });
        this.props.history.push('/thank-you');

    }

    render() {
        return (
            <>
                <h5>Please review your feedback.</h5>
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
                                <TableCell component="th" scope="row">{this.props.feedback.feeling}</TableCell>
                                <TableCell align="center">{this.props.feedback.understanding}</TableCell>
                                <TableCell align="center">{this.props.feedback.support}</TableCell>
                                <TableCell align="left">{this.props.feedback.comments}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
                {JSON.stringify(this.props.feedback)}
            </>
        );
    }
}


const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles()(connect(putReduxStateOnProps)(Review));