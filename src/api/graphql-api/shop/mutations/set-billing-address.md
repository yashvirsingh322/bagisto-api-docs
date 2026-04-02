---
outline: false
examples:
  - id: set-checkout-address-same
    title: Set Checkout Address — Same for Billing & Shipping
    description: Set the billing address and use it as the shipping address too by setting useForShipping to true.
    query: |
      mutation createCheckoutAddress(
          $billingFirstName: String!
          $billingLastName: String!
          $billingEmail: String!
          $billingAddress: String!
          $billingCity: String!
          $billingCountry: String!
          $billingState: String!
          $billingPostcode: String!
          $billingPhoneNumber: String!
          $useForShipping: Boolean
      ) {
        createCheckoutAddress(
          input: { 
            billingFirstName: $billingFirstName
            billingLastName: $billingLastName
            billingEmail: $billingEmail
            billingAddress: $billingAddress
            billingCity: $billingCity
            billingCountry: $billingCountry
            billingState: $billingState
            billingPostcode: $billingPostcode
            billingPhoneNumber: $billingPhoneNumber
            useForShipping: $useForShipping
          }
        ) {
          checkoutAddress {
            _id
            success
            message
            id
            cartToken
            billingFirstName
            billingLastName
            billingAddress
            billingCity
            billingState
            billingPostcode
            billingPhoneNumber
            shippingFirstName
            shippingLastName
            shippingAddress
            shippingCity
            shippingState
            shippingPostcode
            shippingPhoneNumber
          }
        }
      }
    variables: |
      {
        "billingFirstName": "John",
        "billingLastName": "Doe",
        "billingEmail": "john@example.com",
        "billingAddress": "123 Main St",
        "billingCity": "Los Angeles",
        "billingCountry": "US",
        "billingState": "CA",
        "billingPostcode": "90001",
        "billingPhoneNumber": "2125551234",
        "useForShipping": true
      }
    response: |
      {
        "data": {
          "createCheckoutAddress": {
            "checkoutAddress": {
              "_id": 1239,
              "success": true,
              "message": "Address saved successfully",
              "id": "1239",
              "cartToken": "255",
              "billingFirstName": "John",
              "billingLastName": "Doe",
              "billingAddress": "123 Main St",
              "billingCity": "Los Angeles",
              "billingState": "CA",
              "billingPostcode": "90001",
              "billingPhoneNumber": "2125551234",
              "shippingFirstName": "John",
              "shippingLastName": "Doe",
              "shippingAddress": "123 Main St",
              "shippingCity": "Los Angeles",
              "shippingState": "CA",
              "shippingPostcode": "90001",
              "shippingPhoneNumber": "2125551234"
            }
          }
        }
      }
    commonErrors:
      - error: VALIDATION_ERROR
        cause: Required billing fields are missing
        solution: Provide all required billing address fields
      - error: INVALID_EMAIL
        cause: Billing email format is invalid
        solution: Provide a valid email address
      - error: INVALID_COUNTRY
        cause: Country code is not valid
        solution: Use a valid ISO 3166-1 alpha-2 country code

  - id: set-checkout-address-different
    title: Set Checkout Address — Different Shipping Address
    description: Set separate billing and shipping addresses by setting useForShipping to false and providing shipping address fields.
    query: |
      mutation createCheckoutAddress(
          $billingFirstName: String!
          $billingLastName: String!
          $billingEmail: String!
          $billingAddress: String!
          $billingCity: String!
          $billingCountry: String!
          $billingState: String!
          $billingPostcode: String!
          $billingPhoneNumber: String!
          $shippingFirstName: String!
          $shippingLastName: String!
          $shippingEmail: String!
          $shippingAddress: String!
          $shippingCity: String!
          $shippingCountry: String!
          $shippingState: String!
          $shippingPostcode: String!
          $shippingPhoneNumber: String!
          $useForShipping: Boolean
      ) {
        createCheckoutAddress(
          input: { 
            billingFirstName: $billingFirstName
            billingLastName: $billingLastName
            billingEmail: $billingEmail
            billingAddress: $billingAddress
            billingCity: $billingCity
            billingCountry: $billingCountry
            billingState: $billingState
            billingPostcode: $billingPostcode
            billingPhoneNumber: $billingPhoneNumber
            shippingFirstName: $shippingFirstName
            shippingLastName: $shippingLastName
            shippingEmail: $shippingEmail
            shippingAddress: $shippingAddress
            shippingCity: $shippingCity
            shippingCountry: $shippingCountry
            shippingState: $shippingState
            shippingPostcode: $shippingPostcode
            shippingPhoneNumber: $shippingPhoneNumber
            useForShipping: $useForShipping
          }
        ) {
          checkoutAddress {
            _id
            success
            message
            id
            cartToken
            billingFirstName
            billingLastName
            billingAddress
            billingCity
            billingState
            billingPostcode
            billingPhoneNumber
            shippingFirstName
            shippingLastName
            shippingAddress
            shippingCity
            shippingState
            shippingPostcode
            shippingPhoneNumber
          }
        }
      }
    variables: |
      {
        "billingFirstName": "John",
        "billingLastName": "Doe",
        "billingEmail": "john@example.com",
        "billingAddress": "123 Main St",
        "billingCity": "Los Angeles",
        "billingCountry": "US",
        "billingState": "CA",
        "billingPostcode": "90001",
        "billingPhoneNumber": "2125551234",
        "shippingFirstName": "Jane",
        "shippingLastName": "Doe",
        "shippingEmail": "jane@example.com",
        "shippingAddress": "456 Oak Ave",
        "shippingCity": "San Francisco",
        "shippingCountry": "US",
        "shippingState": "CA",
        "shippingPostcode": "94102",
        "shippingPhoneNumber": "4155559876",
        "useForShipping": false
      }
    response: |
      {
        "data": {
          "createCheckoutAddress": {
            "checkoutAddress": {
              "_id": 1240,
              "success": true,
              "message": "Address saved successfully",
              "id": "1240",
              "cartToken": "255",
              "billingFirstName": "John",
              "billingLastName": "Doe",
              "billingAddress": "123 Main St",
              "billingCity": "Los Angeles",
              "billingState": "CA",
              "billingPostcode": "90001",
              "billingPhoneNumber": "2125551234",
              "shippingFirstName": "Jane",
              "shippingLastName": "Doe",
              "shippingAddress": "456 Oak Ave",
              "shippingCity": "San Francisco",
              "shippingState": "CA",
              "shippingPostcode": "94102",
              "shippingPhoneNumber": "4155559876"
            }
          }
        }
      }
    commonErrors:
      - error: VALIDATION_ERROR
        cause: Required shipping fields are missing when useForShipping is false
        solution: Provide all required shipping address fields
      - error: INVALID_EMAIL
        cause: Email format is invalid
        solution: Provide a valid email address
      - error: INVALID_COUNTRY
        cause: Country code is not valid
        solution: Use a valid ISO 3166-1 alpha-2 country code
---

# Set Checkout Address

## About

The `createCheckoutAddress` mutation sets the billing and shipping address for the current checkout session. This is a single mutation that handles both addresses based on the `useForShipping` flag:

- **`useForShipping: true`** — Only billing address fields are required. The billing address is automatically copied to the shipping address.
- **`useForShipping: false`** — Both billing and shipping address fields must be provided separately. This allows the customer to ship to a different address than their billing address.

## Authentication

This mutation supports both authenticated customers and guest users:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).
- **Guest users**: Provide the Guest Cart Token `cartToken` obtained from the [Create Cart mutation](/api/graphql-api/shop/mutations/create-cart).

```
Authorization: Bearer <accessToken>
```

## Arguments

### Billing Address (always required)

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `billingFirstName` | String | Yes | Billing first name |
| `billingLastName` | String | Yes | Billing last name |
| `billingEmail` | String | Yes | Billing email address |
| `billingAddress` | String | Yes | Billing street address |
| `billingCity` | String | Yes | Billing city |
| `billingCountry` | String | Yes | Billing country code (ISO 3166-1 alpha-2) |
| `billingState` | String | Yes | Billing state/province code |
| `billingPostcode` | String | Yes | Billing postal/zip code |
| `billingPhoneNumber` | String | Yes | Billing phone number |
| `useForShipping` | Boolean | No | If `true`, billing address is used as shipping address. If `false`, separate shipping fields are required. Default: `false` |

### Shipping Address (required when `useForShipping` is `false`)

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `shippingFirstName` | String | Conditional | Shipping first name |
| `shippingLastName` | String | Conditional | Shipping last name |
| `shippingEmail` | String | Conditional | Shipping email address |
| `shippingAddress` | String | Conditional | Shipping street address |
| `shippingCity` | String | Conditional | Shipping city |
| `shippingCountry` | String | Conditional | Shipping country code (ISO 3166-1 alpha-2) |
| `shippingState` | String | Conditional | Shipping state/province code |
| `shippingPostcode` | String | Conditional | Shipping postal/zip code |
| `shippingPhoneNumber` | String | Conditional | Shipping phone number |

## Response

| Field | Type | Description |
|-------|------|-------------|
| `_id` | Integer | Internal address identifier |
| `id` | String | Address ID |
| `success` | Boolean | Success status |
| `message` | String | Success or error message |
| `cartToken` | String | Cart token for the checkout session |
| `billingFirstName` | String | Billing first name |
| `billingLastName` | String | Billing last name |
| `billingAddress` | String | Billing street address |
| `billingCity` | String | Billing city |
| `billingState` | String | Billing state/province |
| `billingPostcode` | String | Billing postal/zip code |
| `billingPhoneNumber` | String | Billing phone number |
| `shippingFirstName` | String | Shipping first name |
| `shippingLastName` | String | Shipping last name |
| `shippingAddress` | String | Shipping street address |
| `shippingCity` | String | Shipping city |
| `shippingState` | String | Shipping state/province |
| `shippingPostcode` | String | Shipping postal/zip code |
| `shippingPhoneNumber` | String | Shipping phone number |

## Validation Rules

- All required billing address fields must be provided
- `billingEmail` must be a valid email address
- Country codes must be valid ISO 3166-1 alpha-2 codes
- Phone numbers should be in valid format
- When `useForShipping` is `false`, all shipping address fields become required

## Error Responses

```json
{
  "errors": {
    "billingEmail": ["The billing email must be a valid email address."],
    "billingCountry": ["Invalid country code."],
    "shippingFirstName": ["The shipping first name field is required."]
  }
}
```

## Related Documentation

- [Get Checkout Addresses](/api/graphql-api/shop/queries/get-addresses)
- [Set Shipping Method](/api/graphql-api/shop/mutations/set-shipping-method)
- [Checkout Flow](/api/graphql-api/shop/checkout)
