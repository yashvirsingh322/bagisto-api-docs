---
outline: false
examples:
  - id: get-shipping-methods
    title: Get Shipping Methods
    description: Retrieve available shipping methods for checkout.
    query: |
      query checkoutShippingRates {
        collectionShippingRates {
          _id
          id
          code
          label
          method
          description
          price
          formattedPrice
        }
      }
    response: |
      {
        "data": {
          "collectionShippingRates": [
            {
              "_id": "flatrate_flatrate_flatrate",
              "id": "/api/.well-known/genid/f14f85f51f8e3efd572e",
              "code": "flatrate",
              "label": "Flat Rate",
              "method": "flatrate_flatrate",
              "description": "Flat Rate Shipping",
              "price": 20,
              "formattedPrice": "$20.00"
            },
            {
              "_id": "free_free_free",
              "id": "/api/.well-known/genid/f14f85f51f8e3efd572e",
              "code": "free",
              "label": "Free Shipping",
              "method": "free_free",
              "description": "Free Shipping",
              "price": 0,
              "formattedPrice": "$0.00"
            }
          ]
        }
      }
---

# Get Shipping Methods

Retrieve available shipping methods for a cart during checkout.

## Authentication

This query supports both authenticated customers and guest users:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).

- **Guest users**: Provide the Guest Cart Token `cartToken` obtained from the [Create Cart mutation](/api/graphql-api/shop/mutations/create-cart).


```
Authorization: Bearer <accessToken>
```

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `_id` | String | Internal shipping method identifier |
| `id` | String | API resource identifier |
| `code` | String | Shipping method code (used for selection) |
| `description` | String | Human-readable method description |
| `method` | String | Shipping method identifier |
| `price` | Float | Shipping cost amount |
| `formattedPrice` | String | Shipping cost formatted with currency symbol (e.g. `$20.00`) |
| `label` | String | Display label for the shipping method |

## Prerequisites

- Cart must exist
- Shipping address must be set
- Available methods depend on:
  - Cart items
  - Shipping address
  - Store configuration

## Common Methods

| Code | Method | Label | Price | Description |
|------|--------|-------|-------|-------------|
| `flatrate` | `flatrate_flatrate` | Flat Rate | 20 | Fixed shipping cost |
| `free` | `free_free` | Free Shipping | 0 | No shipping charge |

## Use Cases

- Display shipping options during checkout
- Calculate total with shipping
- Allow customer selection
- Show shipping cost estimates

## Error Responses

```json
{
  "errors": {
    "cartId": ["Cart not found."],
    "shippingAddress": ["Shipping address must be set first."]
  }
}
```

## Related Documentation

- [Get Cart](/api/graphql-api/shop/queries/get-cart)
- [Set Checkout Address](/api/graphql-api/shop/mutations/set-billing-address)
- [Set Shipping Method](/api/graphql-api/shop/mutations/set-shipping-method)
