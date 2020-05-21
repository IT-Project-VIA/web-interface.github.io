import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
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
          {products.map((product) => (
            <ProductTableRow
              key={product.id}
              product={product}
              setProducts={setProducts}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
