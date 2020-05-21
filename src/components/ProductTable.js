import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  TableBody,
} from "@material-ui/core";
import { ProductTableRow } from "./ProductTableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  tableContainer: {
    maxHeight: "100%",
  },
}));

export const ProductTable = ({ setProducts, products }) => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const shownProducts = products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table stickyHeader>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Special Price</TableCell>
            <TableCell align="left">Target Gender</TableCell>
            <TableCell align="left">Target Age</TableCell>
            <TableCell align="left" />
          </TableRow>
        </TableHead>
        <TableBody>
          {shownProducts.map((product) => (
            <ProductTableRow
              key={product.id}
              product={product}
              setProducts={setProducts}
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              count={products.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
