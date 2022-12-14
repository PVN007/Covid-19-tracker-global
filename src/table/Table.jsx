import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables({ post }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STATE</StyledTableCell>
            <StyledTableCell align="right">Active case</StyledTableCell>
            <StyledTableCell align="right">Confirmed case</StyledTableCell>
            <StyledTableCell align="right">Death</StyledTableCell>
            <StyledTableCell align="right">Recovered</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {post.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.state}
              </StyledTableCell>
              <StyledTableCell align="right">{row.active}</StyledTableCell>
              <StyledTableCell align="right">{row.confirmed}</StyledTableCell>
              <StyledTableCell align="right">{row.deaths}</StyledTableCell>
              <StyledTableCell align="right">{row.recovered}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
