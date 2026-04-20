---
outline: false
examples:
  - id: get-locales-basic
    title: Get Locales - Basic
    description: Retrieve all store locales with basic information.
    query: |
      query getLocales {
        locales {
          edges {
            node {
              id
              _id
              code
              name
              direction
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
          "locales": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/locales/1",
                  "_id": 1,
                  "code": "en",
                  "name": "English",
                  "direction": "ltr"
                }
              },
              {
                "node": {
                  "id": "/api/shop/locales/10",
                  "_id": 10,
                  "code": "AR",
                  "name": "Arabic",
                  "direction": "rtl"
                }
              }
            ],
            "pageInfo": {
              "hasNextPage": false,
              "endCursor": "MQ=="
            }
          }
        }
      }
    commonErrors:
      - error: UNAUTHORIZED
        cause: Invalid or missing authentication token
        solution: Provide valid authentication credentials
      - error: NO_LOCALES
        cause: No locales configured in the system
        solution: Create locales in the admin panel

  - id: get-locales-complete
    title: Get Locales - Complete Details
    description: Retrieve all locales with complete information including logo paths.
    query: |
      query getLocales {
        locales {
          edges {
            cursor
            node {
              id
              _id
              code
              name
              direction
              logoPath
              logoUrl
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
          "locales": {
            "edges": [
              {
                "cursor": "MA==",
                "node": {
                  "id": "/api/shop/locales/1",
                  "_id": 1,
                  "code": "en",
                  "name": "English",
                  "direction": "ltr",
                  "logoPath": "locales/en.png",
                  "logoUrl": "https://api-demo.bagisto.com/storage/locales/en.png"
                }
              },
              {
                "cursor": "MQ==",
                "node": {
                  "id": "/api/shop/locales/10",
                  "_id": 10,
                  "code": "AR",
                  "name": "Arabic",
                  "direction": "rtl",
                  "logoPath": "locales/AR.png",
                  "logoUrl": "https://api-demo.bagisto.com/storage/locales/AR.png"
                }
              }
            ],
            "pageInfo": {
              "endCursor": "MQ==",
              "startCursor": "MA==",
              "hasNextPage": false,
              "hasPreviousPage": false
            },
            "totalCount": 2
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

  - id: get-locales-with-pagination
    title: Get Locales with Pagination
    description: Retrieve locales with cursor-based pagination for handling large datasets.
    query: |
      query getLocalesWithPagination($first: Int, $after: String) {
        locales(first: $first, after: $after) {
          edges {
            cursor
            node {
              id
              _id
              code
              name
              direction
              logoUrl
              logoPath
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
          "locales": {
            "edges": [
              {
                "cursor": "MA==",
                "node": {
                  "id": "/api/shop/locales/1",
                  "_id": 1,
                  "code": "en",
                  "name": "English",
                  "direction": "ltr",
                  "logoUrl": "https://api-demo.bagisto.com/storage/locales/en.png",
                  "logoPath": "locales/en.png"
                }
              },
              {
                "cursor": "MQ==",
                "node": {
                  "id": "/api/shop/locales/10",
                  "_id": 10,
                  "code": "AR",
                  "name": "Arabic",
                  "direction": "rtl",
                  "logoUrl": "https://api-demo.bagisto.com/storage/locales/AR.png",
                  "logoPath": "locales/AR.png"
                }
              }
            ],
            "pageInfo": {
              "endCursor": "MQ==",
              "startCursor": "MA==",
              "hasNextPage": false,
              "hasPreviousPage": false
            },
            "totalCount": 2
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

# Get Locales

## About

The `getLocales` query retrieves locale information from your store with support for pagination and detailed field access. This query is essential for:

- Displaying available language and locale options
- Building multi-language selector interfaces
- Determining text direction (LTR/RTL) for UI layout
- Retrieving locale-specific logos and branding
- Managing store language configurations
- Building locale management interfaces

The query supports cursor-based pagination and allows you to fetch all locales with full relationship access.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `first` | `Int` | No | Number of locales to retrieve from the start (forward pagination). Max: 100. |
| `after` | `String` | No | Cursor to start after for forward pagination. |
| `last` | `Int` | No | Number of locales to retrieve from the end (backward pagination). Max: 100. |
| `before` | `String` | No | Cursor to start before for backward pagination. |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `edges` | `[LocaleEdge!]!` | Array of locale edges containing locales and cursors. |
| `edges.node` | `Locale!` | The actual locale object with id, code, name, direction, and other fields. |
| `edges.cursor` | `String!` | Pagination cursor for this locale. Use with `after` or `before` arguments. |
| `pageInfo` | `PageInfo!` | Pagination metadata object. |
| `pageInfo.hasNextPage` | `Boolean!` | Whether more locales exist after the current page. |
| `pageInfo.hasPreviousPage` | `Boolean!` | Whether locales exist before the current page. |
| `pageInfo.startCursor` | `String` | Cursor of the first locale on the current page. |
| `pageInfo.endCursor` | `String` | Cursor of the last locale on the current page. |
| `totalCount` | `Int!` | Total number of locales available. |

## Locale Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `String!` | Unique identifier in format `/api/shop/locales/{id}` |
| `_id` | `Int!` | Numeric identifier for the locale |
| `code` | `String!` | Unique locale code (e.g., `"en"`, `"AR"`) |
| `name` | `String!` | Display name of the locale (e.g., `"English"`, `"Arabic"`) |
| `direction` | `String!` | Text direction: `"ltr"` (left-to-right) or `"rtl"` (right-to-left) |
| `logoPath` | `String` | File path to the locale logo (e.g., `"locales/en.png"`) |
| `logoUrl` | `String` | Full URL to the locale logo image |
