---
outline: false
examples:
  - id: get-currencies-basic
    title: Get Currencies - Basic
    description: Retrieve all store currencies with basic information.
    query: |
      query allCurrency {
        currencies {
          edges {
            node {
              id
              _id
              code
              name
              symbol
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "currencies": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/currencies/1",
                  "_id": 1,
                  "code": "USD",
                  "name": "US Dollar",
                  "symbol": "$"
                }
              },
              {
                "node": {
                  "id": "/api/shop/currencies/2",
                  "_id": 2,
                  "code": "INR",
                  "name": "Indian Rupee",
                  "symbol": "₹"
                }
              },
              {
                "node": {
                  "id": "/api/shop/currencies/3",
                  "_id": 3,
                  "code": "EUR",
                  "name": "Euro",
                  "symbol": "€"
                }
              }
            ],
            "pageInfo": {
              "hasNextPage": false,
              "endCursor": "Mw=="
            }
          }
        }
      }
    commonErrors:
      - error: UNAUTHORIZED
        cause: Invalid or missing authentication token
        solution: Provide valid authentication credentials
      - error: NO_CURRENCIES
        cause: No currencies configured in the system
        solution: Create currencies in the admin panel

  - id: get-currencies-complete
    title: Get Currencies - Complete Details
    description: Retrieve all currencies with complete information including formatting options.
    query: |
      query allCurrency {
        currencies {
          edges {
            cursor
            node {
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
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "currencies": {
            "edges": [
              {
                "cursor": "MQ==",
                "node": {
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
              },
              {
                "cursor": "Mg==",
                "node": {
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
              },
              {
                "cursor": "Mw==",
                "node": {
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
            ],
            "pageInfo": {
              "endCursor": "Mw==",
              "startCursor": "MQ==",
              "hasNextPage": false,
              "hasPreviousPage": false
            },
            "totalCount": 3
          }
        }
      }
    commonErrors:
      - error: INVALID_PAGINATION
        cause: Invalid pagination parameters provided
        solution: Ensure first/last are positive integers and cursors are valid
      - error: INVALID_CURSOR
        cause: Pagination cursor is invalid or expired
        solution: Use cursor values from the previous response

  - id: get-currencies-with-pagination
    title: Get Currencies with Pagination
    description: Retrieve currencies with cursor-based pagination for handling large datasets.
    query: |
      query getCurrenciesWithPagination($first: Int, $after: String) {
        currencies(first: $first, after: $after) {
          edges {
            cursor
            node {
              id
              _id
              code
              name
              symbol
            }
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
          totalCount
        }
      }
    variables: |
      {
        "first": 10,
        "after": null
      }
    response: |
      {
        "data": {
          "currencies": {
            "edges": [
              {
                "cursor": "MQ==",
                "node": {
                  "id": "/api/shop/currencies/1",
                  "_id": 1,
                  "code": "USD",
                  "name": "US Dollar",
                  "symbol": "$"
                }
              },
              {
                "cursor": "Mg==",
                "node": {
                  "id": "/api/shop/currencies/2",
                  "_id": 2,
                  "code": "INR",
                  "name": "Indian Rupee",
                  "symbol": "₹"
                }
              }
            ],
            "pageInfo": {
              "endCursor": "Mg==",
              "startCursor": "MQ==",
              "hasNextPage": true,
              "hasPreviousPage": false
            },
            "totalCount": 5
          }
        }
      }
    commonErrors:
      - error: INVALID_FIRST_VALUE
        cause: The first argument exceeds maximum allowed value
        solution: Use first value between 1 and 100
      - error: INVALID_CURSOR
        cause: The provided cursor is invalid
        solution: Use a valid cursor from a previous response
---

# Get Currencies

## About

The `currencies` query retrieves currency information from your store with support for pagination and detailed field access. This query is essential for:

- Displaying available currency options for store visitors
- Building currency selector/switcher interfaces
- Retrieving currency formatting details (symbol, position, separators)
- Managing multi-currency pricing configurations
- Formatting prices correctly based on currency settings

The query supports cursor-based pagination and allows you to fetch all currencies with full field access.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `first` | `Int` | No | Number of currencies to retrieve from the start (forward pagination). Max: 100. |
| `after` | `String` | No | Cursor to start after for forward pagination. |
| `last` | `Int` | No | Number of currencies to retrieve from the end (backward pagination). Max: 100. |
| `before` | `String` | No | Cursor to start before for backward pagination. |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `edges` | `[CurrencyEdge!]!` | Array of currency edges containing currencies and cursors. |
| `edges.node` | `Currency!` | The actual currency object with id, code, name, symbol, and other fields. |
| `edges.cursor` | `String!` | Pagination cursor for this currency. Use with `after` or `before` arguments. |
| `pageInfo` | `PageInfo!` | Pagination metadata object. |
| `pageInfo.hasNextPage` | `Boolean!` | Whether more currencies exist after the current page. |
| `pageInfo.hasPreviousPage` | `Boolean!` | Whether currencies exist before the current page. |
| `pageInfo.startCursor` | `String` | Cursor of the first currency on the current page. |
| `pageInfo.endCursor` | `String` | Cursor of the last currency on the current page. |
| `totalCount` | `Int!` | Total number of currencies available. |

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

### Display All Available Currencies

```graphql
query GetAllCurrencies {
  currencies {
    edges {
      node {
        id
        code
        name
        symbol
      }
    }
  }
}
```

### Build Currency Selector

```graphql
query GetCurrenciesForSelector {
  currencies {
    edges {
      node {
        code
        name
        symbol
        currencyPosition
      }
    }
  }
}
```

### Get Currency Formatting Details

```graphql
query GetCurrencyFormatting {
  currencies {
    edges {
      node {
        code
        symbol
        decimal
        groupSeparator
        decimalSeparator
        currencyPosition
      }
    }
    totalCount
  }
}
```

### Get Currencies with Pagination

```graphql
query GetCurrenciesWithPagination($first: Int!) {
  currencies(first: $first) {
    edges {
      cursor
      node {
        id
        code
        name
        symbol
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
```

## Error Handling

### Missing Currencies Configuration

```json
{
  "data": {
    "currencies": {
      "edges": [],
      "pageInfo": {
        "hasNextPage": false,
        "hasPreviousPage": false,
        "startCursor": null,
        "endCursor": null
      },
      "totalCount": 0
    }
  }
}
```

### Invalid Pagination Parameters

```json
{
  "errors": [
    {
      "message": "Argument \"first\" must be between 1 and 100"
    }
  ]
}
```

### Invalid Cursor

```json
{
  "errors": [
    {
      "message": "Invalid cursor provided"
    }
  ]
}
```

## Best Practices

1. **Cache Currencies** - Currencies change infrequently; implement client-side caching
2. **Use Formatting Fields** - Always use `decimal`, `groupSeparator`, `decimalSeparator`, and `currencyPosition` for correct price formatting
3. **Request Only Needed Fields** - Reduce payload by selecting specific fields
4. **Display Symbol Correctly** - Use `currencyPosition` to place symbol on the correct side of the amount
5. **Paginate When Needed** - For systems with many currencies, use pagination
6. **Use Variables** - Use GraphQL variables for dynamic currency queries

## Related Resources

- [Get Currency](/api/graphql-api/shop/queries/get-currency) - Retrieve a single currency by ID
- [Get Channel](/api/graphql-api/shop/queries/get-channel) - Channel includes base currency and supported currencies
- [Pagination Guide](/api/graphql-api/pagination) - Cursor pagination documentation
- [Shop API Overview](/api/graphql-api/shop-api) - Overview of Shop API resources
