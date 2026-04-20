---
outline: false
examples:
  - id: get-wishlist-by-id
    title: Get Single Wishlist Item
    description: Retrieve a specific wishlist item by its IRI.
    query: |
      query GetWishlist($id: ID!) {
        wishlist(id: $id) {
          id
          _id
          product {
            id
            name
            price
            baseImageUrl
          }
          customer {
            id
            email
          }
          channel {
            id
            code
          }
          createdAt
          updatedAt
        }
      }
    variables: |
      {
        "id": "/api/shop/wishlists/81"
      }
    response: |
      {
        "data": {
          "wishlist": {
            "id": "/api/shop/wishlists/81",
            "_id": 81,
            "product": {
              "id": "/api/shop/products/122",
              "name": "Classic Cowboy Hat",
              "price": "149.99",
              "baseImageUrl": "https://api-demo.bagisto.com/storage/product/122/P9n1dbmgM4UOBT3zUAEGCn4wpKi0GjPGhgS1jZe7.webp"
            },
            "customer": {
              "id": "/api/shop/customers/122",
              "email": "john.doe@example.com"
            },
            "channel": {
              "id": "/api/shop/channels/1",
              "code": "default"
            },
            "createdAt": "2026-04-06T18:44:55+05:30",
            "updatedAt": "2026-04-06T18:44:55+05:30"
          }
        }
      }
    commonErrors:
      - error: ITEM_NOT_FOUND
        cause: Wishlist item ID does not exist or does not belong to the customer
        solution: Use a valid wishlist item IRI from the wishlists collection query
      - error: UNAUTHENTICATED
        cause: Missing or invalid Bearer token
        solution: Login and provide a valid customer authentication token
---

# Get Wishlist Item

## About

The `wishlist` query retrieves a single wishlist item by its IRI identifier. Use this query to:

- Fetch detailed information about a specific wishlist item
- Display wishlist item details on a detail page
- Verify a product exists in the customer's wishlist

## Authentication

This query requires customer authentication:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).

```
Authorization: Bearer <accessToken>
```

## Arguments

| Argument | Type | Description |
|----------|------|-------------|
| `id` | `ID!` | The IRI of the wishlist item (e.g. `/api/shop/wishlists/69`). |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `id` | `ID!` | IRI identifier (e.g. `/api/shop/wishlists/69`). |
| `_id` | `Int!` | Numeric identifier. |
| `product` | `Product!` | Associated product with id, name, price, etc. |
| `customer` | `Customer!` | Associated customer with id, email. |
| `channel` | `Channel!` | Associated channel with id, code. |
| `createdAt` | `String` | Timestamp when the item was added. |
| `updatedAt` | `String` | Timestamp when the item was last updated. |
