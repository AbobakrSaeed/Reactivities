/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import { activityPropTypes } from '../propTypes/activityTypes';  // Importing PropTypes


const TableComponent = ({ headers, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => {
            //Destructure the row and exclude the 'id' key
            const { id, ...newRow } = row; // Exclude the 'id'
            return (
              <TableRow
                key={rowIndex}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.values(newRow).map((cell) => (
                  <TableCell key={id} component="th" scope="row">{cell}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
};

// Using the imported PropTypes for validation
// TableComponent.propTypes = activityPropTypes;

export default TableComponent;
