import React, { useEffect, useState } from "react";
import { Box, Snackbar, Fab, CircularProgress } from "@material-ui/core";
import { Save, Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { ProductAPI } from "../api/ProductAPI";
import { v4 as uuidv4 } from "uuid";
import { ProductTable } from "./ProductTable";
import Alert from "@material-ui/lab/Alert";

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
  centered: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export const App = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [successIsOpen, successSetOpen] = useState(false);
  const [failIsOpen, failSetOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    ProductAPI.getProducts()
      .then((res) => setProducts(res))
      .finally(() => setLoading(false));
  }, [setProducts]);

  const handleSaveButton = () => {
    ProductAPI.putProducts(products).then((ok) => {
      if (ok) successSetOpen(true);
      else failSetOpen(true);
    });
  };

  const handleAddButton = () => {
    setProducts([...products, { id: uuidv4() }]);
  };
  if (isLoading) {
    return <CircularProgress className={classes.centered} />;
  } else {
    return (
      <Box className={classes.box}>
        <ProductTable products={products} setProducts={setProducts} />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={successIsOpen}
          autoHideDuration={6000}
          onClose={() => successSetOpen(false)}
        >
          <Alert onClose={() => successSetOpen(false)} severity="success">
            Successfully Saved!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={failIsOpen}
          autoHideDuration={6000}
          onClose={() => failSetOpen(false)}
        >
          <Alert onClose={() => failSetOpen(false)} severity="error">
            Saving failed!
          </Alert>
        </Snackbar>
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
  }
};
