/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts(
    $id: ID
    $product_name: String
    $expiry_duration: Int
    $minimum_stock: Float
    $product_cart_description: String
  ) {
    onCreateProducts(
      id: $id
      product_name: $product_name
      expiry_duration: $expiry_duration
      minimum_stock: $minimum_stock
      product_cart_description: $product_cart_description
    ) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts(
    $id: ID
    $product_name: String
    $expiry_duration: Int
    $minimum_stock: Float
    $product_cart_description: String
  ) {
    onUpdateProducts(
      id: $id
      product_name: $product_name
      expiry_duration: $expiry_duration
      minimum_stock: $minimum_stock
      product_cart_description: $product_cart_description
    ) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts(
    $id: ID
    $product_name: String
    $expiry_duration: Int
    $minimum_stock: Float
    $product_cart_description: String
  ) {
    onDeleteProducts(
      id: $id
      product_name: $product_name
      expiry_duration: $expiry_duration
      minimum_stock: $minimum_stock
      product_cart_description: $product_cart_description
    ) {
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
export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock(
    $id: ID
    $product_id: String
    $quantity: Int
    $date_added: AWSDate
    $expiry_date: AWSDate
  ) {
    onCreateStock(
      id: $id
      product_id: $product_id
      quantity: $quantity
      date_added: $date_added
      expiry_date: $expiry_date
    ) {
      id
      product_id
      quantity
      date_added
      expiry_date
    }
  }
`;
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock(
    $id: ID
    $product_id: String
    $quantity: Int
    $date_added: AWSDate
    $expiry_date: AWSDate
  ) {
    onUpdateStock(
      id: $id
      product_id: $product_id
      quantity: $quantity
      date_added: $date_added
      expiry_date: $expiry_date
    ) {
      id
      product_id
      quantity
      date_added
      expiry_date
    }
  }
`;
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock(
    $id: ID
    $product_id: String
    $quantity: Int
    $date_added: AWSDate
    $expiry_date: AWSDate
  ) {
    onDeleteStock(
      id: $id
      product_id: $product_id
      quantity: $quantity
      date_added: $date_added
      expiry_date: $expiry_date
    ) {
      id
      product_id
      quantity
      date_added
      expiry_date
    }
  }
`;
