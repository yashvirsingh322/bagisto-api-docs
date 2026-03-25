---
outline: false
examples:
  - id: get-currency-basic
    title: Get Single Currency - Basic
    description: Retrieve a single currency by ID with basic information.
    query: |
      query getCurrencyByID($id: ID!) {
        currency(id: $id) {
          id
          _id
          code
          name
          symbol
        }
      }
    variables: |
      {
        "id": "/api/shop/currencies/3"
      }
    response: |
      {
        "data": {
          "currency": {
            "id": "/api/shop/currencies/3",
            "_id": 3,
            "code": "EUR",
            "name": "Euro",
            "symbol": "€"
          }
        }
      }
    commonErrors:
      - error: Variable "$id" of required type "ID!" was not provided.
        cause: Currency ID parameter is required
        solution: Provide a valid currency ID in format /api/shop/currencies/{id} or numeric ID
      - error: Invalid ID format. Expected IRI format like "/api/shop/currencies/1" or numeric ID
        cause: Currency ID is not in valid format
        solution: Verify the currency ID is in correct format, use "/api/shop/currencies/1" or "1"
      - error: Currency not found
        cause: Currency ID does not exist in the system
        solution: Verify the currency ID is correct and exists

  - id: get-currency-complete
    title: Get Single Currency - Complete Details
    description: Retrieve a single currency with all fields including formatting options.
    query: |
      query getCurrencyByID($id: ID!) {
        currency(id: $id) {
          id
          _id
          code
          name
          symbol
          decimal
          groupSeparator
          decimalSeparator
          currencyPosition
        }
      }
    variables: |
      {
        "id": "/api/shop/currencies/3"
      }
    response: |
      {
        "data": {
          "currency": {
            "id": "/api/shop/currencies/3",
            "_id": 3,
            "code": "EUR",
            "name": "Euro",
            "symbol": "€",
            "decimal": 2,
            "groupSeparator": ".",
            "decimalSeparator": ",",
            "currencyPosition": "right"
          }
        }
      }
    commonErrors:
      - error: Currency not found
        cause: The provided currency ID does not exist
        solution: Use a valid currency ID from the get-currencies query
      - error: Invalid ID format. Expected IRI format like "/api/shop/currencies/1" or numeric ID
        cause: Invalid ID format provided
        solution: Provide valid currency ID in format /api/shop/currencies/1 or numeric ID like "1"

  - id: get-currency-by-numeric-id
    title: Get Single Currency - Using Numeric ID
    description: Retrieve a single currency by its numeric ID instead of IRI format.
    query: |
      query getCurrencyByID($id: ID!) {
        currency(id: $id) {
          id
          _id
          code
          name
          symbol
          decimal
          groupSeparator
          decimalSeparator
          currencyPosition
        }
      }
    variables: |
      {
        "id": "1"
      }
    response: |
      {
        "data": {
          "currency": {
            "id": "/api/shop/currencies/1",
            "_id": 1,
            "code": "USD",
            "name": "US Dollar",
            "symbol": "$",
            "decimal": 2,
            "groupSeparator": ",",
            "decimalSeparator": ".",
            "currencyPosition": "left"
          }
        }
      }
    commonErrors:
      - error: Invalid ID format. Expected IRI format like "/api/shop/currencies/1" or numeric ID
        cause: ID format is not recognized
        solution: Use either numeric ID like "1" or IRI format like /api/shop/currencies/1

  - id: get-currency-formatting
    title: Get Currency Formatting Details
    description: Retrieve a currency with all formatting fields for correct price display.
    query: |
      query getCurrencyByID($id: ID!) {
        currency(id: $id) {
          id
          _id
          code
          name
          symbol
          decimal
          groupSeparator
          decimalSeparator
          currencyPosition
        }
      }
    variables: |
      {
        "id": "/api/shop/currencies/2"
      }
    response: |
      {
        "data": {
          "currency": {
            "id": "/api/shop/currencies/2",
            "_id": 2,
            "code": "INR",
            "name": "Indian Rupee",
            "symbol": "₹",
            "decimal": 2,
            "groupSeparator": ",",
            "decimalSeparator": ".",
            "currencyPosition": "left"
          }
        }
      }
    commonErrors:
      - error: Currency not found
        cause: The provided currency ID does not exist
        solution: Use a valid currency ID from the get-currencies query
---

# Get Single Currency

## About

The `currency` query retrieves a single currency by ID with support for detailed field access. This query is essential for:

- Fetching specific currency details for price formatting
- Retrieving currency symbol and position for display
- Getting formatting details (decimal places, separators)
- Validating currency existence before operations
- Building currency detail pages
- Configuring currency-specific price formatting

The query allows you to fetch a specific currency with all its properties.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `ID!` | Yes | The unique identifier of the currency. Can be either numeric ID or IRI format (`/api/shop/currencies/{id}`). |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `currency` | `Currency` | The requested currency object, or null if not found. |

## Currency Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `String!` | Unique identifier in format `/api/shop/currencies/{id}` |
| `_id` | `Int!` | Numeric identifier for the currency |
| `code` | `String!` | ISO 4217 currency code (e.g., "USD", "EUR", "INR") |
| `name` | `String!` | Display name of the currency (e.g., "US Dollar", "Euro") |
| `symbol` | `String!` | Currency symbol (e.g., "$", "€", "₹") |
| `decimal` | `Int` | Number of decimal places for the currency |
| `groupSeparator` | `String` | Thousands group separator character (e.g., ",") |
| `decimalSeparator` | `String` | Decimal separator character (e.g., ".") |
| `currencyPosition` | `String` | Position of currency symbol: "left" or "right" |

## Common Use Cases

### Get Currency Details by IRI ID

```graphql
query GetCurrencyByIRI($id: ID!) {
  currency(id: $id) {
    id
    _id
    code
    name
    symbol
    currencyPosition
  }
}
```

Variables:
```json
{
  "id": "/api/shop/currencies/1"
}
```

### Get Currency Formatting Details

```graphql
query GetCurrencyFormatting($id: ID!) {
  currency(id: $id) {
    code
    symbol
    decimal
    groupSeparator
    decimalSeparator
    currencyPosition
  }
}
```

### Get Currency Symbol and Position

```graphql
query GetCurrencyDisplay($id: ID!) {
  currency(id: $id) {
    code
    name
    symbol
    currencyPosition
  }
}
```

### Validate Currency Existence

```graphql
query ValidateCurrency($id: ID!) {
  currency(id: $id) {
    id
    code
  }
}
```

## Error Handling

### Currency Not Found

```json
{
  "data": {
    "currency": null
  }
}
```

### Missing Required ID Parameter

```json
{
  "errors": [
    {
      "message": "Field \"currency\" argument \"id\" of type \"ID!\" is required but not provided."
    }
  ]
}
```

### Invalid ID Format

```json
{
  "errors": [
    {
      "message": "Invalid ID format. Expected IRI format like \"/api/shop/currencies/1\" or numeric ID"
    }
  ]
}
```

## Best Practices

1. **Always Provide ID** - The ID parameter is required for this query
2. **Check for Null** - Handle the case when currency is not found (returns null)
3. **Use Formatting Fields** - Always use `decimal`, `groupSeparator`, `decimalSeparator`, and `currencyPosition` for correct price display
4. **Cache Results** - Currencies change infrequently; implement caching
5. **Validate Before Using** - Verify currency exists before using in operations
6. **Use Variables** - Use GraphQL variables for dynamic currency queries
7. **Request Needed Fields** - Only request fields you'll actually use
8. **Display Symbol Correctly** - Use `currencyPosition` to place symbol on the correct side

## Related Resources

- [Get Currencies](/api/graphql-api/shop/queries/get-currencies) - Retrieve all currencies with pagination
- [Get Channel](/api/graphql-api/shop/queries/get-channel) - Channel includes base currency and supported currencies
- [Pagination Guide](/api/graphql-api/pagination) - Cursor pagination documentation
- [Shop API Overview](/api/graphql-api/shop-api) - Overview of Shop API resources
