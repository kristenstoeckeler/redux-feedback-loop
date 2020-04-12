import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    },
    button: {
        margin: theme.spacing.unit,
    },
})

class Admin extends Component {
    //rendering initial GET
    componentDidMount() {
        this.getFeedback()
    }

    //sending axios request to server feedback router for data from server
    getFeedback = () => {
        axios.get('/api/feedback')
            .then(response => {
                console.log('Feedback:', response.data);
                this.props.dispatch({ type: 'FORM', payload: response.data })
            }).catch(error => {
                console.log('Error getting feedback', error);
            })
    }
//axios delete request
    handleDelete = (id) => {
        console.log('Deleting feedback');
        console.log('Heres the id', id);
        axios.delete(`/api/feedback/${id}`)
            .then((response) => {
                this.getFeedback();
            }).catch((error) => {
                alert('Error on delete');
                console.log('Error on DELETE', error);
            })
    }

    render() {
        const classes = this.props.classes
        return (
            <>
            <div>
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
                        {this.props.form.map((feedback) => (
                            <TableRow key={feedback.id}>
                                <TableCell align="center" component="th" scope="row">{feedback.feeling}</TableCell>
                                <TableCell align="center">{feedback.understanding}</TableCell>
                                <TableCell align="center">{feedback.support}</TableCell>
                                <TableCell align="center">{feedback.comments}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" color="secondary" className={classes.button} onClick={() => this.handleDelete(feedback.id)}>Delete</Button>
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
    form: reduxStore.formReducer,
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Admin));
