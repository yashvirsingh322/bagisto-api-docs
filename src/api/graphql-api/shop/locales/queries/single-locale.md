---
outline: false
examples:
  - id: get-locale-basic
    title: Get Single Locale - Basic
    description: Retrieve a single locale by ID with basic information.
    query: |
      query getSingleLocale($id: ID!) {
        locale(id: $id) {
          id
          _id
          code
          name
          direction
        }
      }
    variables: |
      {
        "id": "/api/shop/locales/10"
      }
    response: |
      {
        "data": {
          "locale": {
            "id": "/api/shop/locales/10",
            "_id": 10,
            "code": "AR",
            "name": "Arabic",
            "direction": "rtl"
          }
        }
      }
    commonErrors:
      - error: Variable "$id" of required type "ID!" was not provided.
        cause: Locale ID parameter is required
        solution: Provide a valid locale ID in format /api/shop/locales/{id} or numeric ID
      - error: Locale not found
        cause: Locale ID does not exist in the system
        solution: Verify the locale ID is correct and exists

  - id: get-locale-complete
    title: Get Single Locale - Complete Details
    description: Retrieve a single locale with all fields including logo path and URL.
    query: |
      query getSingleLocale($id: ID!) {
        locale(id: $id) {
          id
          _id
          code
          name
          direction
          logoPath
          logoUrl
        }
      }
    variables: |
      {
        "id": "/api/shop/locales/10"
      }
    response: |
      {
        "data": {
          "locale": {
            "id": "/api/shop/locales/10",
            "_id": 10,
            "code": "AR",
            "name": "Arabic",
            "direction": "rtl",
            "logoPath": "locales/AR.png",
            "logoUrl": "https://api-demo.bagisto.com/storage/locales/AR.png"
          }
        }
      }
    commonErrors:
      - error: Locale not found
        cause: The provided locale ID does not exist
        solution: Use a valid locale ID from the get-locales query

  - id: get-locale-by-code
    title: Get Single Locale - Using Numeric ID
    description: Retrieve a single locale by its numeric ID instead of IRI format.
    query: |
      query getSingleLocale($id: ID!) {
        locale(id: $id) {
          id
          _id
          code
          name
          direction
          logoPath
          logoUrl
        }
      }
    variables: |
      {
        "id": "10"
      }
    response: |
      {
        "data": {
          "locale": {
            "id": "/api/shop/locales/10",
            "_id": 10,
            "code": "AR",
            "name": "Arabic",
            "direction": "rtl",
            "logoPath": "locales/AR.png",
            "logoUrl": "https://api-demo.bagisto.com/storage/locales/AR.png"
          }
        }
      }
    commonErrors:
      - error: Locale not found
        cause: The provided locale ID does not exist
        solution: Use a valid locale ID from the get-locales query
---

# Get Single Locale

## About

The `locale` query retrieves a single locale by ID with support for detailed field access. This query is essential for:

- Fetching specific locale details for UI configuration
- Checking text direction (LTR/RTL) for layout adjustments
- Retrieving locale-specific branding and logos
- Validating locale existence before operations
- Building locale detail pages
- Configuring locale-specific settings

The query allows you to fetch a specific locale with all its properties and relationships.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `ID!` | Yes | The unique identifier of the locale. Can be either numeric ID or IRI format (`/api/shop/locales/{id}`). |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `locale` | `Locale` | The requested locale object, or null if not found. |

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

## Error Handling

### Locale Not Found

```json
{
  "data": {
    "locale": null
  }
}
```

### Missing Required ID Parameter

```json
{
  "errors": [
    {
      "message": "Field \"locale\" argument \"id\" of type \"ID!\" is required but not provided."
    }
  ]
}
```

## Related Resources

- [Get Locales](/api/graphql-api/shop/locales/queries/locales) - Retrieve all locales with pagination
