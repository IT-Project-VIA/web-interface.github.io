export const ProductAPI = {
  getProducts: () =>
    fetch(
      "https://via-fr-database-connector.herokuapp.com/Products"
    ).then((res) => res.json()),
  putProducts: (products) => {
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ products: products }),
    };
    return fetch(
      "https://via-fr-database-connector.herokuapp.com/Products",
      fetchOptions
    ).then((res) => res.ok);
  },
  deleteProduct: async (id) => {
    const response = await fetch(
      "https://via-fr-database-connector.herokuapp.com/Products/" + id,
      { method: "DELETE" }
    );
    return response.ok;
  },
};
