---
outline: false
examples:
  - id: set-shipping-method
    title: Set Shipping Method
    description: Set the shipping method for a checkout.
    query: |
      mutation createCheckoutShippingMethod(
          $shippingMethod: String!
      ) {
        createCheckoutShippingMethod(
          input: {
            shippingMethod: $shippingMethod
          }
        ) {
          checkoutShippingMethod {
            success
            id
            message

          }
        }
      }
    variables: |
      {
        "shippingMethod": "flatrate_flatrate"
      }
    response: |
      {
          "data": {
              "createCheckoutShippingMethod": {
                  "checkoutShippingMethod": {
                      "success": true,
                      "id": "4813",
                      "message": "Shipping method saved successfully"
                  }
              }
          }
      }
---

# Set Shipping Method

Set the shipping method for a cart.

## Authentication

This query supports both authenticated customers and guest users:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).
- **Guest users**: Provide the Guest Cart Token `cartToken` obtained from the [Create Cart mutation](/api/graphql-api/shop/mutations/create-cart).

```
Authorization: Bearer <accessToken>
```

## Arguments

| Name | Type | Required | Description |
|------|------|----------|-------------| 
| `shippingMethod` | String | ✅ Yes | Shipping method code (e.g., flatrate_flatrate) |

## Response

| Field | Type | Description |
|-------|------|-------------|
| `success` | Boolean | Success status |
| `id` | String | Shipping method ID |
| `message` | String | Success or error message |

## Common Shipping Method Codes

| Code | Description |
|------|-------------|
| `flatrate_flatrate` | Flat Rate - Fixed shipping cost |
| `free_free` | Free Shipping - No shipping charge |

## Prerequisites

- Shipping address must be set before this mutation
- Available shipping methods depend on:
  - Cart items
  - Shipping address country/region
  - Store configuration

## Validation Rules

- Shipping method code must be valid and available
- Shipping address must be set
- Cart must have items

## Error Responses

```json
{
  "errors": {
    "shippingMethod": ["Invalid or unavailable shipping method."],
    "shippingAddress": ["Shipping address must be set first."]
  }
}
```

## Related Documentation

- [Get Shipping Methods](/api/graphql-api/shop/queries/get-shipping-methods)
- [Set Checkout Address](/api/graphql-api/shop/mutations/set-billing-address)
- [Set Payment Method](/api/graphql-api/shop/mutations/set-payment-method)
