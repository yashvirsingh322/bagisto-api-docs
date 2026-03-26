---
outline: false
examples:
  - id: delete-all-compare-items
    title: Delete All Compare Items
    description: Remove all compare items for the authenticated customer. Returns the count of deleted items.
    query: |
      mutation DeleteAllCompareItems {
        createDeleteAllCompareItems(input: {}) {
          deleteAllCompareItems {
            message
            deletedCount
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "createDeleteAllCompareItems": {
            "deleteAllCompareItems": {
              "message": "All compare items have been removed successfully",
              "deletedCount": 3
            }
          }
        }
      }
    commonErrors:
      - error: UNAUTHENTICATED
        cause: Missing or invalid Bearer token
        solution: Login and provide a valid customer authentication token

---

# Delete All Compare Items

## About

The `createDeleteAllCompareItems` mutation removes all products from the authenticated customer's comparison list at once. Use this mutation to:

- Clear the entire comparison list
- Implement a "Clear All" button for the compare feature
- Reset the customer's comparison state

> **Note:** This is an authenticated-only operation. The customer is auto-detected from the Bearer token.

## Authentication

This mutation requires customer authentication:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).

```
Authorization: Bearer <accessToken>
```

## Arguments

| Argument | Type | Description |
|----------|------|-------------|
| `clientMutationId` | `String` | Optional client-side mutation identifier for tracking. |

> **Note:** No additional input is required. Pass an empty input `{}`.

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `deleteAllCompareItems.message` | `String!` | Success message confirming deletion. |
| `deleteAllCompareItems.deletedCount` | `Int!` | Number of compare items that were removed. |

> **Note:** If the customer has no compare items, the mutation still succeeds and returns `deletedCount: 0` with the same success message. No error is thrown for an already-empty list.
