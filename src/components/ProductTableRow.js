import React from "react";
import {
  TableCell,
  TableRow,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { ProductAPI } from "../api/ProductAPI";

export const ProductTableRow = ({ product, setProducts }) => {
  const updateProduct = (product) => {
    setProducts((previousState) => {
      const products_copy = [...previousState];
      const prodIdx = products_copy.findIndex((p) => p.id === product.id);
      products_copy[prodIdx] = product;
      return products_copy;
    });
  };

  const deleteProduct = async (product) => {
    if (await ProductAPI.deleteProduct(product.id)) {
      setProducts((previousState) =>
        previousState.filter((p) => p.id !== product.id)
      );
    }
  };

  const handleChange = (event) => {
    updateProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleDeleteButton = async () => {
    await deleteProduct(product);
  };

  return (
    <TableRow>
      <TableCell align="left">
        <TextField
          name="name"
          variant="outlined"
          size={"small"}
          onChange={handleChange}
          value={product.name ?? ""}
        />
      </TableCell>
      <TableCell align="left">
        <TextField
          name="price"
          variant="outlined"
          type={"number"}
          onChange={handleChange}
          size={"small"}
          value={product.price ?? ""}
        />
      </TableCell>
      <TableCell align="left">
        <TextField
          name="newPrice"
          type={"number"}
          variant="outlined"
          size={"small"}
          onChange={handleChange}
          value={product.newPrice ?? ""}
        />
      </TableCell>
      <TableCell align="left">
        <Select
          name={"sex"}
          value={product.sex ?? "none"}
          variant={"outlined"}
          onChange={handleChange}
        >
          <MenuItem value={"none"}>Any</MenuItem>
          <MenuItem value={"M"}>Male</MenuItem>
          <MenuItem value={"F"}>Female</MenuItem>
        </Select>
      </TableCell>
      <TableCell align="left">
        <Select
          name={"age"}
          value={product.age ?? "none"}
          variant={"outlined"}
          onChange={handleChange}
        >
          <MenuItem value={"none"}>Any</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={80}>80</MenuItem>
        </Select>
      </TableCell>
      <TableCell>
        <Button onClick={handleDeleteButton}>
          <Delete />
        </Button>
      </TableCell>
    </TableRow>
  );
};
