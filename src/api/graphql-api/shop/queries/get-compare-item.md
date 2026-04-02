---
outline: false
examples:
  - id: get-compare-item-by-id
    title: Get Single Compare Item
    description: Retrieve a specific compare item by its IRI.
    query: |
      query GetCompareItem($id: ID!) {
        compareItem(id: $id) {
          id
          _id
          product {
            id
            _id
            sku
            type
            name
            description
            shortDescription
            price
            formattedPrice
            minimumPrice
            formattedMinimumPrice
            maximumPrice
            formattedMaximumPrice
            guestCheckout
            locale
            channel
          }
          customer {
            id
            firstName
            lastName
            gender
            dateOfBirth
          }
          createdAt
          updatedAt
        }
      }
    variables: |
      {
        "id": "/api/shop/compare-items/80"
      }
    response: |
      {
        "data": {
          "compareItem": {
            "id": "/api/shop/compare-items/80",
            "_id": 80,
            "product": {
              "id": "/api/shop/products/4",
              "_id": 4,
              "sku": "IPHONE-15-PRO",
              "type": "simple",
              "name": "Apple iPhone 15 Pro",
              "description": "Experience premium performance and cutting-edge technology with the Apple iPhone 15 Pro.",
              "shortDescription": "Apple iPhone 15 Pro | Advanced Camera System, Fast Performance, All-Day Battery Life",
              "price": "999",
              "formattedPrice": "$999.00",
              "minimumPrice": "899",
              "formattedMinimumPrice": "$899.00",
              "maximumPrice": "899",
              "formattedMaximumPrice": "$899.00",
              "guestCheckout": "1",
              "locale": null,
              "channel": null
            },
            "customer": {
              "id": "/api/shop/customers/1",
              "firstName": "John",
              "lastName": "Doe",
              "gender": "Male",
              "dateOfBirth": "1990-01-15"
            },
            "createdAt": "2026-02-17T10:30:00+00:00",
            "updatedAt": "2026-02-17T10:30:00+00:00"
          }
        }
      }
    commonErrors:
      - error: ITEM_NOT_FOUND
        cause: Compare item ID does not exist or does not belong to the customer
        solution: Use a valid compare item IRI from the compareItems collection query
      - error: UNAUTHENTICATED
        cause: Missing or invalid Bearer token
        solution: Login and provide a valid customer authentication token
---

# Get Compare Item

## About

The `compareItem` query retrieves a single compare item by its IRI identifier. Use this query to:

- Fetch detailed information about a specific compare item
- Display product comparison details on a detail page
- Verify a product exists in the customer's comparison list

## Authentication

This query requires customer authentication:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).

```
Authorization: Bearer <accessToken>
```

## Arguments

| Argument | Type | Description |
|----------|------|-------------|
| `id` | `ID!` | The IRI of the compare item (e.g. `/api/shop/compare-items/606`). |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `id` | `ID!` | IRI identifier (e.g. `/api/shop/compare-items/606`). |
| `_id` | `Int!` | Numeric identifier. |
| `product` | `Product!` | Associated product with id, name, sku, price, description, etc. |
| `customer` | `Customer!` | Associated customer with id, email, firstName, lastName. |
| `createdAt` | `String` | Timestamp when the item was added. |
| `updatedAt` | `String` | Timestamp when the item was last updated. |
