/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      product_name
      product_cart_description
      product_long_description
      product_category
      product_image
      product_location
      product_price
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: TableProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product_name
        product_cart_description
        product_long_description
        product_category
        product_image
        product_location
        product_price
      }
      nextToken
    }
  }
`;
export const getStock = /* GraphQL */ `
  query GetStock($id: ID!) {
    getStock(id: $id) {
      id
      product_id
      quantity
      date_added
      expiry_date
    }
  }
`;
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $filter: TableStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product_id
        quantity
        date_added
        expiry_date
      }
      nextToken
    }
  }
`;
