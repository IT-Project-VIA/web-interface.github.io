export const ProductAPI = {
  getProducts: () => fetch("/Products").then((res) => res.json()),
  putProducts: (products) => {
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ products: products }),
    };
    return fetch("/Products", fetchOptions).then((res) => res.ok);
  },
  deleteProduct: async (id) => {
    const response = await fetch("/Products/" + id, { method: "DELETE" });
    return response.ok;
  },
};
