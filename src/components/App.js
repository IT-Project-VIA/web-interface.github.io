import React, { useState } from "react";
import { Box, Snackbar, Fab } from "@material-ui/core";
import { Save, Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { ProductAPI } from "../api/ProductAPI";
import { v4 as uuidv4 } from "uuid";
import { ProductTable } from "./ProductTable";

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
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },

  addButton: {
    position: "fixed",
    bottom: theme.spacing(4) + 64,
    right: theme.spacing(4),
  },
}));

export const App = () => {
  const classes = useStyles();

  const [products, setProducts] = useState(ProductAPI.getProducts());
  const [open, setOpen] = useState(false);

  const handleSaveButton = () => {
    ProductAPI.putProducts(products);
    setOpen(true);
  };

  const handleAddButton = () => {
    setProducts([...products, { id: uuidv4() }]);
  };

  return (
    <Box className={classes.box}>
      <ProductTable products={products} setProducts={setProducts} />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={<span>Changes saved!</span>}
      />
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
    </Box>
  );
};
