---
outline: false
examples:
  - id: get-customer-invoice-basic
    title: Get Single Customer Invoice
    description: Retrieve details of a specific invoice by its IRI identifier.
    query: |
      query GetCustomerInvoice {
        customerInvoice(id: "/api/shop/customer-invoices/532") {
          incrementId
          state
          totalQty
          grandTotal
          baseGrandTotal
          subTotal
          baseSubTotal
          shippingAmount
          baseShippingAmount
          taxAmount
          baseTaxAmount
          discountAmount
          baseDiscountAmount
          shippingTaxAmount
          subTotalInclTax
          shippingAmountInclTax
          baseCurrencyCode
          channelCurrencyCode
          orderCurrencyCode
          transactionId
          emailSent
          reminders
          createdAt
          updatedAt
          downloadUrl
          items {
            edges {
              node {
                id
                sku
                name
                qty
                price
                total
              }
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "customerInvoice": {
            "incrementId": "532",
            "state": "paid",
            "totalQty": 1,
            "grandTotal": 4810,
            "baseGrandTotal": 4810,
            "subTotal": 5000,
            "baseSubTotal": 5000,
            "shippingAmount": 10,
            "baseShippingAmount": 10,
            "taxAmount": 0,
            "baseTaxAmount": 0,
            "discountAmount": 200,
            "baseDiscountAmount": 200,
            "shippingTaxAmount": 0,
            "subTotalInclTax": 5000,
            "shippingAmountInclTax": 10,
            "baseCurrencyCode": "USD",
            "channelCurrencyCode": "USD",
            "orderCurrencyCode": "USD",
            "transactionId": null,
            "emailSent": true,
            "reminders": 0,
            "createdAt": "2026-04-10T18:43:10+05:30",
            "updatedAt": "2026-04-10T18:43:11+05:30",
            "downloadUrl": "https://api-demo.bagisto.com/api/shop/customer-invoices/532/pdf",
            "items": {
              "edges": [
                {
                  "node": {
                    "id": "/api/customer_invoice_items/803",
                    "sku": "AURORA-BLAZER-001",
                    "name": "Aurora Cream Winter Blazer Coat",
                    "qty": 1,
                    "price": 5000,
                    "total": 5000
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: UNAUTHENTICATED
        cause: Missing or invalid Bearer token
        solution: Login and provide a valid customer authentication token
      - error: NOT_FOUND
        cause: Invoice with specified ID does not exist or does not belong to the customer
        solution: Verify the invoice ID and ensure it belongs to the authenticated customer's orders
      - error: MISSING_ID
        cause: Invoice ID not provided
        solution: Provide a valid invoice IRI identifier

---

# Get Customer Invoice

## About

The `customerInvoice` query retrieves detailed information for a specific invoice by its IRI identifier. Customers can only access invoices from their own orders — requesting another customer's invoice returns a not found error, preventing enumeration attacks. Use this query to:

- Display detailed invoice information
- Show invoice summary with line items and totals
- Track payment state and transaction details
- View tax, shipping, and discount breakdowns
- Display financial details for a specific invoice

## Authentication

This query requires customer authentication:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).

```
Authorization: Bearer <accessToken>
X-STOREFRONT-KEY: <storefrontKey>
```

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `ID!` | ✅ Yes | The IRI identifier of the customer invoice (e.g. `/api/shop/customer-invoices/1`). |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `_id` | `Int!` | Numeric invoice ID. |
| `incrementId` | `String!` | Human-readable invoice number (e.g. `INV-001`). |
| `state` | `String!` | Invoice state: `pending`, `pending_payment`, `paid`, `overdue`, `refunded`. |
| `totalQty` | `Int!` | Total quantity of items in the invoice. |
| `emailSent` | `Boolean` | Whether the invoice email was sent. |
| `grandTotal` | `Float!` | Grand total. |
| `baseGrandTotal` | `Float!` | Base grand total. |
| `subTotal` | `Float!` | Sub total. |
| `baseSubTotal` | `Float!` | Base sub total. |
| `shippingAmount` | `Float` | Shipping amount. |
| `baseShippingAmount` | `Float` | Base shipping amount. |
| `taxAmount` | `Float` | Tax amount. |
| `baseTaxAmount` | `Float` | Base tax amount. |
| `discountAmount` | `Float` | Discount amount. |
| `baseDiscountAmount` | `Float` | Base discount amount. |
| `shippingTaxAmount` | `Float` | Shipping tax amount. |
| `baseShippingTaxAmount` | `Float` | Base shipping tax amount. |
| `subTotalInclTax` | `Float` | Sub total including tax. |
| `baseSubTotalInclTax` | `Float` | Base sub total including tax. |
| `shippingAmountInclTax` | `Float` | Shipping amount including tax. |
| `baseShippingAmountInclTax` | `Float` | Base shipping amount including tax. |
| `baseCurrencyCode` | `String!` | Base currency code (e.g. `USD`). |
| `channelCurrencyCode` | `String` | Channel currency code. |
| `orderCurrencyCode` | `String!` | Order currency code. |
| `transactionId` | `String` | Payment transaction ID. |
| `reminders` | `Int` | Number of reminders sent. |
| `nextReminderAt` | `DateTime` | Next reminder scheduled date. |
| `createdAt` | `DateTime!` | Invoice creation timestamp. |
| `updatedAt` | `DateTime!` | Invoice last update timestamp. |
| `downloadUrl` | `String` | URL to download the invoice as PDF. |

## Error Handling

### Invoice Not Found

```json
{
  "errors": [
    {
      "message": "Customer invoice with ID \"999\" not found.",
      "locations": [{ "line": 2, "column": 3 }],
      "path": ["customerInvoice"]
    }
  ]
}
```

### Unauthenticated Request

```json
{
  "errors": [
    {
      "message": "Customer is not logged in.",
      "locations": [{ "line": 2, "column": 3 }],
      "path": ["customerInvoice"]
    }
  ]
}
```

## Use Cases

- Display detailed invoice page in customer account
- Show full financial breakdown of an invoice
- Track payment state and transaction ID
- View tax and shipping details
- Check if invoice email was sent

## Notes

- **Customer isolation:** Invoices are scoped through the order relationship. A customer can only access invoices from their own orders.
- **Read-only:** Only query operations are available. Invoices cannot be modified through this API.

## Related Resources

- [Get All Customer Invoices](/api/graphql-api/shop/queries/get-customer-invoices) — Query all customer invoices
- [Get Customer Orders](/api/graphql-api/shop/queries/get-customer-orders) — Query customer orders
- [Get Customer Profile](/api/graphql-api/shop/queries/get-customer-profile) — Query customer profile
