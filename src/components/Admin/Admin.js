import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

class Admin extends Component {

    componentDidMount() {
        this.getFeedback()
    }

    getFeedback = () => {
        axios.get('/api/feedback')
            .then(response => {
                console.log('Feedback:', response.data);
                this.props.dispatch({ type: 'FEEDBACK', payload: response.data })
            }).catch(error => {
                console.log('Error getting feedback', error);
            })
    }

    render() {
        return (
            <>
            <div>
            {/* {JSON.stringify(this.props.feedback)} */}

            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Comprehension</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Delete</TableCell> {/*this is just to finish off the nice table line to include button*/}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.props.feedback.map((feedback) => (
                            <TableRow key={feedback.id}>
                                <TableCell align="center" component="th" scope="row">{feedback.feeling}</TableCell>
                                <TableCell align="center">{feedback.understanding}</TableCell>
                                <TableCell align="center">{feedback.support}</TableCell>
                                <TableCell align="center">{feedback.comments}</TableCell>
                                <TableCell align="center">
                                    <button onClick={() => console.log('Here is delete button')}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            </div>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    feedback: reduxStore.feedbackReducer,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Admin));