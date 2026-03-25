---
outline: false
examples:
  - id: get-booking-slots-non-rental
    title: Get Booking Slots (Default / Appointment / Table / Event)
    description: |
      Retrieve available time slots for non-rental booking products. For default, appointment, table, and event booking types, slots are returned as a flat list with `from`, `to`, `timestamp`, and `qty` fields. The `id` parameter is the `bookingProductId` obtained from the product query's `bookingProducts` relationship.
    query: |
      query {
        bookingSlots(id: 1, date: "2026-03-26") {
          slotId
          from
          to
          timestamp
          qty
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "bookingSlots": [
            {
              "slotId": null,
              "from": "10:00 AM",
              "to": "11:00 AM",
              "timestamp": "1774413000-1774416600",
              "qty": "1"
            },
            {
              "slotId": null,
              "from": "11:00 AM",
              "to": "12:00 PM",
              "timestamp": "1774416600-1774420200",
              "qty": "1"
            },
            {
              "slotId": null,
              "from": "12:00 PM",
              "to": "01:00 PM",
              "timestamp": "1774420200-1774423800",
              "qty": "1"
            },
            {
              "slotId": null,
              "from": "01:00 PM",
              "to": "02:00 PM",
              "timestamp": "1774423800-1774427400",
              "qty": "1"
            },
            {
              "slotId": null,
              "from": "02:00 PM",
              "to": "03:00 PM",
              "timestamp": "1774427400-1774431000",
              "qty": "1"
            }
          ]
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: The bookingProductId does not exist
        solution: Use the bookingProductId from the product query's bookingProducts relationship
      - error: NO_SLOTS_AVAILABLE
        cause: No slots are configured or available for the selected date
        solution: Try a different date — the product may not have slots on this day of the week

  - id: get-booking-slots-rental-hourly
    title: Get Booking Slots (Rental - Hourly)
    description: |
      Retrieve available time slots for a rental booking product with hourly renting type. Unlike other booking types, rental slots are returned in a **grouped structure** — slots are nested inside time range groups using the `time` and `slots` fields. Each group has a `time` label (e.g., "10:00 AM - 12:00 PM") containing individual hourly slots within that range.
    query: |
      query {
        bookingSlots(id: 5, date: "2026-03-26") {
          slotId
          time
          slots
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "bookingSlots": [
            {
              "slotId": null,
              "time": "10:00 AM - 12:00 PM",
              "slots": [
                {
                  "from": "10:00 AM",
                  "to": "11:00 AM",
                  "timestamp": "1774499400-1774503000",
                  "qty": "1"
                },
                {
                  "from": "11:00 AM",
                  "to": "12:00 PM",
                  "timestamp": "1774503000-1774506600",
                  "qty": "1"
                }
              ]
            },
            {
              "slotId": null,
              "time": "12:00 PM - 09:00 PM",
              "slots": [
                {
                  "from": "12:00 PM",
                  "to": "01:00 PM",
                  "timestamp": "1774506600-1774510200",
                  "qty": "1"
                },
                {
                  "from": "01:00 PM",
                  "to": "02:00 PM",
                  "timestamp": "1774510200-1774513800",
                  "qty": "1"
                },
                {
                  "from": "02:00 PM",
                  "to": "03:00 PM",
                  "timestamp": "1774513800-1774517400",
                  "qty": "1"
                },
                {
                  "from": "03:00 PM",
                  "to": "04:00 PM",
                  "timestamp": "1774517400-1774521000",
                  "qty": "1"
                },
                {
                  "from": "04:00 PM",
                  "to": "05:00 PM",
                  "timestamp": "1774521000-1774524600",
                  "qty": "1"
                },
                {
                  "from": "05:00 PM",
                  "to": "06:00 PM",
                  "timestamp": "1774524600-1774528200",
                  "qty": "1"
                },
                {
                  "from": "06:00 PM",
                  "to": "07:00 PM",
                  "timestamp": "1774528200-1774531800",
                  "qty": "1"
                },
                {
                  "from": "07:00 PM",
                  "to": "08:00 PM",
                  "timestamp": "1774531800-1774535400",
                  "qty": "1"
                },
                {
                  "from": "08:00 PM",
                  "to": "09:00 PM",
                  "timestamp": "1774535400-1774539000",
                  "qty": "1"
                }
              ]
            }
          ]
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: The bookingProductId does not exist
        solution: Use the bookingProductId from the product query's bookingProducts relationship
      - error: NO_SLOTS_AVAILABLE
        cause: No rental slots configured for the selected date
        solution: Try a different date — check the product's configured slot days
---

# Get Booking Slots

## About

The `bookingSlots` query retrieves available time slots for a booking product on a specific date. This query is essential for building the booking UI — when a customer selects a date, you use this query to fetch and display the available slots they can choose from before adding the product to cart.

### Why This Query Is Needed

When adding a booking product to the cart, the `booking` input requires a specific time slot (e.g., `"slot": "12:00 PM - 01:00 PM"`). But the available slots depend on the product's configuration (duration, break time, operating hours) and the selected date (day-of-week availability, existing bookings). This query resolves all of that and returns only the slots that are actually available for selection.

The typical flow is:
1. **Query the product** to get `bookingProductId` from the `bookingProducts` relationship
2. **Customer selects a date** on the frontend
3. **Query `bookingSlots`** with the `bookingProductId` and selected date to get available slots
4. **Customer picks a slot** from the results
5. **Add to cart** using the selected slot value in the `booking` JSON

::: info Different Response Structures
The response structure differs based on the booking type:
- **Default, Appointment, Table, Event** — Slots are returned as a **flat list**. Each item has `from`, `to`, `timestamp`, and `qty` fields directly on it.
- **Rental (Hourly)** — Slots are returned in a **grouped structure**. Each item has a `time` field (the time range group label) and a `slots` array containing the individual hourly slots within that group.
- **Rental (Daily)** and **Event** — These types typically don't use time slots (daily rentals use date ranges, events use ticket quantities), so this query may return an empty array for them.
:::

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `Int!` | Yes | The `bookingProductId` — obtained from the product query's `bookingProducts` relationship (not the product ID). |
| `date` | `String!` | Yes | The date to check for available slots in `YYYY-MM-DD` format. |

## Response Fields

### Non-Rental Booking Types (Flat Structure)

| Field | Type | Description |
|-------|------|-------------|
| `slotId` | `Int` | Slot identifier (may be null). |
| `from` | `String` | Slot start time (e.g., "10:00 AM"). |
| `to` | `String` | Slot end time (e.g., "11:00 AM"). |
| `timestamp` | `String` | Unix timestamp range in format `"from-to"` (e.g., "1774413000-1774416600"). |
| `qty` | `String` | Number of available bookings for this slot. |

### Rental Hourly Booking Type (Grouped Structure)

| Field | Type | Description |
|-------|------|-------------|
| `slotId` | `Int` | Slot identifier (may be null). |
| `time` | `String` | Time range group label (e.g., "10:00 AM - 12:00 PM"). |
| `slots` | `[Slot]` | Array of individual hourly slots within the time range group. |
| `slots[].from` | `String` | Individual slot start time (e.g., "10:00 AM"). |
| `slots[].to` | `String` | Individual slot end time (e.g., "11:00 AM"). |
| `slots[].timestamp` | `String` | Unix timestamp range for the individual slot. |
| `slots[].qty` | `String` | Number of available bookings for this individual slot. |

## Response by Booking Type

| Booking Type | Response Structure | Fields to Query |
|---|---|---|
| **Default** | Flat list | `slotId`, `from`, `to`, `timestamp`, `qty` |
| **Appointment** | Flat list | `slotId`, `from`, `to`, `timestamp`, `qty` |
| **Table** | Flat list | `slotId`, `from`, `to`, `timestamp`, `qty` |
| **Event** | Empty array (events use ticket quantities, not time slots) | — |
| **Rental (Hourly)** | Grouped by time ranges | `slotId`, `time`, `slots` |
| **Rental (Daily)** | Empty array (daily rentals use date ranges, not time slots) | — |

## How to Get the `bookingProductId`

The `id` parameter for this query is **not** the product ID — it is the `bookingProductId` from the product's `bookingProducts` relationship. Query it like this:

```graphql
query getProduct($id: ID!) {
  product(id: $id) {
    id
    name
    bookingProducts {
      edges {
        node {
          _id           # This is the bookingProductId to use
          type          # default, appointment, rental, table, event
        }
      }
    }
  }
}
```

Use the `_id` value from `bookingProducts.edges.node` as the `id` argument in the `bookingSlots` query.

## Common Use Cases

### Build a Date + Slot Picker (Non-Rental)

```graphql
# Step 1: User selects a date, fetch available slots
query {
  bookingSlots(id: 1, date: "2026-03-26") {
    from
    to
    timestamp
    qty
  }
}
```

Then use the `from` and `to` values to construct the `slot` field for the add-to-cart mutation:
```json
{
  "booking": "{\"type\":\"appointment\",\"date\":\"2026-03-26\",\"slot\":\"10:00 AM - 11:00 AM\"}"
}
```

### Build an Hourly Rental Slot Picker

```graphql
# Fetch grouped rental slots
query {
  bookingSlots(id: 5, date: "2026-03-26") {
    time
    slots
  }
}
```

Display the `time` groups as headers and individual `slots` as selectable options. Then use the selected slot for add-to-cart:
```json
{
  "booking": "{\"type\":\"rental\",\"renting_type\":\"hourly\",\"date\":\"2026-03-26\",\"slot\":\"10:00 AM - 11:00 AM\"}"
}
```

## Best Practices

1. **Use `bookingProductId`, Not Product ID** — The `id` argument must be the `_id` from the `bookingProducts` relationship, not the main product ID
2. **Check for Empty Results** — An empty array means no slots are available for that date; prompt the user to select a different date
3. **Check `qty`** — Only display slots where `qty` is greater than 0
4. **Handle Both Structures** — Use the product's booking `type` to determine whether to expect flat slots or grouped rental slots
5. **Refresh on Date Change** — Re-query whenever the user changes the selected date

## Related Resources

- [Single Product](/api/graphql-api/shop/queries/get-product) - Get product details including `bookingProducts` relationship
- [Add to Cart](/api/graphql-api/shop/mutations/add-to-cart) - Add booking product to cart with selected slot
