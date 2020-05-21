import React, { useState } from "react";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
  Fab,
} from "@material-ui/core";
import { Save, Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { ProductTableRow } from "./ProductTableRow";
import { ProductAPI } from "./api/ProductAPI";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  box: {
    background: "#00000022",
    height: "100vh",
    width: "100vw",
  },
  grid: {
    background: "#00000022",
  },
  saveButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

  addButton: {
    position: "fixed",
    bottom: theme.spacing(2) + 64,
    right: theme.spacing(2),
  },
  tableContainer: {
    maxHeight: "100%",
  },
}));

function App() {
  const classes = useStyles();

  const [products, setProducts] = useState(ProductAPI.getProducts());

  const updateProduct = (product) => {
    const products_copy = [...products];
    const prodIdx = products_copy.findIndex((p) => p.id === product.id);
    products_copy[prodIdx] = product;
    setProducts(products_copy);
  };

  const handleSaveButton = () => {
    ProductAPI.putProducts(products);
  };

  const handleAddButton = () => {
    setProducts([...products, { id: uuidv4() }]);
  };

  const deleteProduct = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  return (
    <Box className={classes.box}>
      <Fab
        className={classes.addButton}
        color={"primary"}
        onClick={handleAddButton}
      >
        <Add />
      </Fab>
      <Fab
        className={classes.saveButton}
        color={"primary"}
        onClick={handleSaveButton}
      >
        <Save />
      </Fab>
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
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
