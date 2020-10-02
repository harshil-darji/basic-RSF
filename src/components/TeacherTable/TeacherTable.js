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
import { loadTeachers, deleteTeacher } from '../../actions/teacherActions';
import UserModal from '../Modal/Modal';

const styles = () => ({
  clickableIcon: {
    '&:hover': {
      color: 'yellow',
      cursor: 'pointer'
    },
  },
});

class TeacherTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      selectedTeacher: {}
    }
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
  }


  componentDidMount() {
    this.props.loadTeachers();
  }

  openEditModal(row) {
    this.setState({ openModal: true, selectedUser: row });
  }

  closeEditModal() {
    this.setState({ openModal: false });
  }

  render() {
    const { classes } = this.props;
    const { teachers } = this.props;
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
              {teachers.map((row) => (
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
                    <DeleteIcon className={classes.clickableIcon} color="action" fontSize="large" onClick={() => this.props.deleteTeacher(row._id.$oid)} />
                    <EditIcon className={classes.clickableIcon} color="secondary" fontSize="large" onClick={() => this.openEditModal(row)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <UserModal open={this.state.openModal} closeModalHandler={this.closeEditModal} selectedTeacher={this.state.selectedTeacher}/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ isLoading, teachers, error }) => ({
  isLoading,
  teachers,
  error
})

const mapDispatchToProps = dispatch => ({
  loadTeachers: () => dispatch(loadTeachers()),
  deleteTeacher: (userId) => dispatch(deleteTeacher(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TeacherTable));