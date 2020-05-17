/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProducts = /* GraphQL */ `
  mutation CreateProducts($input: CreateProductsInput!) {
    createProducts(input: $input) {
      id
      product_name
      expiry_duration
      minimum_stock
      product_cart_description
      product_long_description
      product_category
      product_image
      product_location
      product_price
      product_stock {
        id
        product_id
        quantity
        date_added
        expiry_date
      }
      product_measure
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts($input: UpdateProductsInput!) {
    updateProducts(input: $input) {
      id
      product_name
      expiry_duration
      minimum_stock
      product_cart_description
      product_long_description
      product_category
      product_image
      product_location
      product_price
      product_stock {
        id
        product_id
        quantity
        date_added
        expiry_date
      }
      product_measure
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts($input: DeleteProductsInput!) {
    deleteProducts(input: $input) {
      id
      product_name
      expiry_duration
      minimum_stock
      product_cart_description
      product_long_description
      product_category
      product_image
      product_location
      product_price
      product_stock {
        id
        product_id
        quantity
        date_added
        expiry_date
      }
      product_measure
    }
  }
`;
export const createStock = /* GraphQL */ `
  mutation CreateStock($input: CreateStockInput!) {
    createStock(input: $input) {
      id
      product_id
      quantity
      date_added
      expiry_date
    }
  }
`;
export const updateStock = /* GraphQL */ `
  mutation UpdateStock($input: UpdateStockInput!) {
    updateStock(input: $input) {
      id
      product_id
      quantity
      date_added
      expiry_date
    }
  }
`;
export const deleteStock = /* GraphQL */ `
  mutation DeleteStock($input: DeleteStockInput!) {
    deleteStock(input: $input) {
      id
      product_id
      quantity
      date_added
      expiry_date
    }
  }
`;
