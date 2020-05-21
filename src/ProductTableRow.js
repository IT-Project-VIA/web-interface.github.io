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

export const ProductTableRow = ({ product, updateProduct, deleteProduct }) => {
  const handleChange = (event) => {
    updateProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleDeleteButton = () => {
    deleteProduct(product);
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
          name="specialPrice"
          type={"number"}
          variant="outlined"
          size={"small"}
          onChange={handleChange}
          value={product.specialPrice ?? ""}
        />
      </TableCell>
      <TableCell align="left">
        <Select
          name={"targetGender"}
          value={product.targetGender ?? "none"}
          variant={"outlined"}
          onChange={handleChange}
        >
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </TableCell>
      <TableCell align="left">
        <Select
          name={"targetAge"}
          value={product.targetAge ?? "none"}
          variant={"outlined"}
          onChange={handleChange}
        >
          <MenuItem value={"none"}>None</MenuItem>
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
