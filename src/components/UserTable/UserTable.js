import React, { Component, Fragment } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { loadUsers, deleteUser } from '../../actions';
import UserModal from '../Modal/Modal';

const styles = () => ({
  clickableIcon: {
    '&:hover': {
      color: 'yellow',
      cursor: 'pointer'
    },
  },
});

class UserTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      selectedUser: {}
    }
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
  }


  componentDidMount() {
    this.props.loadUsers();
  }

  openEditModal(row) {
    this.setState({ openModal: true, selectedUser: row });
  }

  closeEditModal() {
    this.setState({ openModal: false });
  }

  render() {
    const { classes } = this.props;
    const { users } = this.props;
    return (
      <Fragment>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Country Code</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row._id.$oid}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.country_code}</TableCell>
                  <TableCell>
                    <DeleteIcon className={classes.clickableIcon} color="action" fontSize="large" onClick={() => this.props.deleteUser(row._id.$oid)} />
                    <EditIcon className={classes.clickableIcon} color="secondary" fontSize="large" onClick={() => this.openEditModal(row)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <UserModal open={this.state.openModal} closeModalHandler={this.closeEditModal} selectedUser={this.state.selectedUser}/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ isLoading, users, error }) => ({
  isLoading,
  users,
  error
})

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers()),
  deleteUser: (userId) => dispatch(deleteUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserTable));