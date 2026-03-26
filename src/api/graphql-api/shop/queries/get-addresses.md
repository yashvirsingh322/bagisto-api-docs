---
outline: false
examples:
  - id: get-addresses
    title: Get Checkout Addresses
    description: Retrieve the address applied to the current checkout session — either the guest-entered address or the authenticated customer's selected checkout address.
    query: |
      query collectionGetCheckoutAddresses {
        collectionGetCheckoutAddresses {
          edges {
            node {
              id
              _id
              addressType
              parentAddressId
              firstName
              lastName
              gender
              companyName
              address
              city
              state
              country
              postcode
              email
              phone
              vatId
              defaultAddress
              useForShipping
              additional
              createdAt
              updatedAt
              name
            }
          }
        }
      }

    variables: |
      {}
    response: |
      {
        "data": {
          "collectionGetCheckoutAddresses": {
            "edges": [
              {
                "node": {
                  "id": "1",
                  "firstName": "John",
                  "lastName": "Doe",
                  "address": "123 Main Street",
                  "city": "New York",
                  "state": "NY",
                  "country": "US",
                  "zipCode": "10001",
                  "phone": "+15550100",
                  "useForShipping": true,
                  "createdAt": "2024-01-10T10:00:00Z"
                }
              }
            ]
          }
        }
      }
---

# Get Checkout Addresses

Retrieve the address associated with the current checkout session.

> **Note:** This query does **not** return all saved addresses for a customer. It returns only the address applied to the active checkout — either the address entered during guest checkout or the address the authenticated customer has selected for the current order. To fetch all saved customer addresses, use the [Get Customer Addresses](/api/graphql-api/shop/queries/get-customer-addresses) query instead.

## Authentication

This query supports both authenticated customers and guest users:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).
- **Guest users**: Provide the Guest Cart Token `cartToken` obtained from the [Create Cart mutation](/api/graphql-api/shop/mutations/create-cart).

```
Authorization: Bearer <accessToken>
```

## Response

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Address ID |
| `addressType` | String | Type of address (billing or shipping) |
| `firstName` | String | First name |
| `lastName` | String | Last name |
| `address` | String | Street address |
| `city` | String | City |
| `state` | String | State/Province |
| `country` | String | Country code |
| `postcode` | String | Postal/Zip code |
| `email` | String | Email address |
| `phone` | String | Phone number |
| `useForShipping` | Boolean | Whether this address is also used for shipping |
| `defaultAddress` | Boolean | Whether this is the customer's default address |
| `createdAt` | DateTime | When address was created |

## Use Cases

- Confirm the address applied to the current checkout session
- Display the selected address on the order review/summary page
- Verify guest checkout address before placing the order

## Related Documentation

- [Get Customer Addresses](/api/graphql-api/shop/queries/get-customer-addresses)
- [Set Shipping Address](/api/graphql-api/shop/mutations/set-shipping-address)
- [Set Billing Address](/api/graphql-api/shop/mutations/set-billing-address)
