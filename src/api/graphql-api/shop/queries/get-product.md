---
outline: false
examples:
  - id: get-product-by-id
    title: Get Product by ID
    description: Retrieve product information using the product ID.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          urlKey
          price
        }
      }
    variables: |
      {
        "id": "1"
      }
    response: |
      {
        "data": {
          "product": {
            "id": "1",
            "name": "Product Name",
            "sku": "PROD-001",
            "urlKey": "product-name",
            "price": 99.99
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Provided product ID does not exist
        solution: Verify the product ID exists
      - error: INVALID_ID
        cause: Invalid ID format
        solution: Use valid numeric or string ID
  - id: get-product-by-sku
    title: Get Product by SKU
    description: Retrieve product using the product SKU (Stock Keeping Unit).
    query: |
      query getProduct($sku: String!) {
        product(sku: $sku) {
          id
          name
          sku
          urlKey
          price
        }
      }
    variables: |
      {
        "sku": "COASTALBREEZEMENSHOODIE"
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/1",
            "name": "Coastal Breeze Men's Blue Zipper Hoodie",
            "sku": "COASTALBREEZEMENSHOODIE",
            "urlKey": "coastal-breeze-mens-blue-zipper-hoodie",
            "price": "100"
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: SKU does not exist
        solution: Check product SKU spelling
  - id: get-product-with-variants
    title: Get Product with Variants
    description: Retrieve product including variant options.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          urlKey
          price
          variants {
            edges {
              node {
                id
                name
                sku
                price
                attributeValues {
                  edges {
                    node {
                      value
                      attribute {
                        code
                        adminName
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": "1"
      }
    response: |
      {
        "data": {
          "product": {
            "id": "1",
            "name": "T-Shirt",
            "sku": "TSHIRT-001",
            "urlKey": "t-shirt",
            "price": 29.99,
            "variants": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/products/8",
                    "name": "OmniHeat Men's Solid Hooded Puffer Jacket-Blue-Yellow-M",
                    "sku": "SP-005",
                    "price": "14",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "SP-001",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: NO_VARIANTS
        cause: Product has no variants
        solution: Use simple product query
  - id: get-product-details-full
    title: Get Full Product Details
    description: Retrieve complete product information including attributes, images, descriptions, pricing, and all formatted price fields.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          type
          urlKey
          locale
          channel
          status
          description
          shortDescription
          color
          size
          featured
          new
          guestCheckout
          isSaleable
          price
          specialPrice
          minimumPrice
          maximumPrice
          regularMinimumPrice
          regularMaximumPrice
          formattedPrice
          formattedSpecialPrice
          formattedMinimumPrice
          formattedMaximumPrice
          formattedRegularMinimumPrice
          formattedRegularMaximumPrice
          images {
            edges {
              node {
                id
                publicPath
                position
              }
            }
          }
          attributeValues {
            edges {
              node {
                value
                attribute {
                  code
                  adminName
                }
              }
            }
          }
          variants {
            edges {
              node {
                id
                name
                sku
                price
                attributeValues {
                  edges {
                    node {
                      value
                      attribute {
                        code
                        adminName
                      }
                    }
                  }
                }
              }
            }
          }
          categories {
            edges {
              node {
                id
                translation {
                  name
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": "1"
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/1",
            "name": "Premium Wireless Headphones",
            "sku": "HEADPHONES-001",
            "type": "simple",
            "urlKey": "premium-wireless-headphones",
            "locale": "en",
            "channel": "default",
            "status": "1",
            "description": "High-quality wireless headphones with noise cancellation and 30-hour battery life",
            "shortDescription": "Premium wireless headphones with active noise cancellation",
            "color": null,
            "size": null,
            "featured": true,
            "new": false,
            "guestCheckout": true,
            "isSaleable": true,
            "price": 199.99,
            "specialPrice": 149.99,
            "minimumPrice": 149.99,
            "maximumPrice": 199.99,
            "regularMinimumPrice": 199.99,
            "regularMaximumPrice": 199.99,
            "formattedPrice": "$199.99",
            "formattedSpecialPrice": "$149.99",
            "formattedMinimumPrice": "$149.99",
            "formattedMaximumPrice": "$199.99",
            "formattedRegularMinimumPrice": "$199.99",
            "formattedRegularMaximumPrice": "$199.99",
            "images": {
              "edges": [
                {
                  "node": {
                    "id": "/api/admin/images/7",
                    "publicPath": "http://127.0.0.1:8000/storage/product/7/L79gIVq7SdiKK2Xk7MHVHdEZgAb32TedY764iZr4.webp",
                    "position": "1"
                  }
                },
                {
                  "node": {
                    "id": "/api/admin/images/8",
                    "publicPath": "http://127.0.0.1:8000/storage/product/7/sW5mmHIh07PJJefnSLC8jwtvx0BpjnWVhVUYonVs.webp",
                    "position": "2"
                  }
                }
              ]
            },
            "attributeValues": {
              "edges": [
                {
                  "node": {
                    "value": "Black",
                    "attribute": {
                      "code": "color",
                      "adminName": "Color"
                    }
                  }
                }
              ]
            },
            "variants": {
              "edges": []
            },
            "categories": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/categories/3",
                    "translation": {
                      "name": "Electronics"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID does not exist
        solution: Verify the product ID is correct
  - id: get-appointment-booking-product
    title: Get Appointment Booking Product
    description: Retrieve an appointment booking product with its slot configuration. Appointment bookings use the `appointmentSlot` relationship which includes duration, break time, and time slot availability per day.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          urlKey
          price
          bookingProducts {
            edges {
              node {
                _id
                type
                appointmentSlot {
                  id
                  _id
                  bookingProductId
                  duration
                  breakTime
                  sameSlotAllDays
                  slots
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": 2555
      }
    response: |
      {
        "data": {
          "product": {
            "id": "2555",
            "name": "Appointment Booking Product",
            "sku": "APPOINTMENT-001",
            "urlKey": "appointment-booking-product",
            "price": 100,
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": "booking_1",
                    "type": "appointment",
                    "appointmentSlot": {
                      "id": "/api/booking/slots/1",
                      "_id": "slot_1",
                      "bookingProductId": "2555",
                      "duration": 60,
                      "breakTime": 15,
                      "sameSlotAllDays": true,
                      "slots": [
                        {
                          "day": "monday",
                          "slots": ["09:00 - 12:00", "14:00 - 18:00"]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Provided product ID does not exist
        solution: Verify the product ID exists
      - error: BOOKING_TYPE_MISMATCH
        cause: Product is not an appointment booking type
        solution: Ensure the product has appointment booking enabled
  - id: get-rental-booking-product
    title: Get Rental Booking Product
    description: Retrieve a rental booking product with its rental slot configuration. Rental bookings use the `rentalSlot` relationship which includes renting type (daily/hourly), daily and hourly pricing, and slot availability.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          urlKey
          price
          bookingProducts {
            edges {
              node {
                _id
                type
                rentalSlot {
                  id
                  _id
                  bookingProductId
                  rentingType
                  dailyPrice
                  hourlyPrice
                  sameSlotAllDays
                  slots
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": 2556
      }
    response: |
      {
        "data": {
          "product": {
            "id": "2556",
            "name": "Rental Booking Product",
            "sku": "RENTAL-001",
            "urlKey": "rental-booking-product",
            "price": 50,
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": "booking_2",
                    "type": "rental",
                    "rentalSlot": {
                      "id": "/api/booking/slots/2",
                      "_id": "slot_2",
                      "bookingProductId": "2556",
                      "rentingType": "daily",
                      "dailyPrice": 100,
                      "hourlyPrice": 15,
                      "sameSlotAllDays": true,
                      "slots": []
                    }
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Provided product ID does not exist
        solution: Verify the product ID exists
      - error: BOOKING_TYPE_MISMATCH
        cause: Product is not a rental booking type
        solution: Ensure the product has rental booking enabled
  - id: get-default-booking-product
    title: Get Default Booking Product
    description: Retrieve a default booking product with its slot configuration. Default bookings use the `defaultSlot` relationship which includes booking type, duration, break time, and day-wise slot availability.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          urlKey
          price
          bookingProducts {
            edges {
              node {
                _id
                type
                defaultSlot {
                  id
                  _id
                  bookingType
                  duration
                  breakTime
                  slots
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": 2558
      }
    response: |
      {
        "data": {
          "product": {
            "id": "2558",
            "name": "Default Booking Product",
            "sku": "DEFAULT-001",
            "urlKey": "default-booking-product",
            "price": 75,
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": "booking_3",
                    "type": "default",
                    "defaultSlot": {
                      "id": "/api/booking/slots/3",
                      "_id": "slot_3",
                      "bookingType": "default",
                      "duration": 60,
                      "breakTime": 0,
                      "slots": [
                        {
                          "day": "monday",
                          "slots": ["10:00 - 17:00"]
                        },
                        {
                          "day": "tuesday",
                          "slots": ["10:00 - 17:00"]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Provided product ID does not exist
        solution: Verify the product ID exists
      - error: BOOKING_TYPE_MISMATCH
        cause: Product is not a default booking type
        solution: Ensure the product has default booking enabled
  - id: get-table-booking-product
    title: Get Table Booking Product
    description: Retrieve a table booking product with its slot configuration. Table bookings use the `tableSlot` relationship which includes price type, guest limit, duration, break time, scheduling restrictions, and day-wise slot availability.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          urlKey
          price
          bookingProducts {
            edges {
              node {
                _id
                type
                tableSlot {
                  id
                  _id
                  bookingProductId
                  priceType
                  guestLimit
                  duration
                  breakTime
                  preventSchedulingBefore
                  sameSlotAllDays
                  slots
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": 2563
      }
    response: |
      {
        "data": {
          "product": {
            "id": "2563",
            "name": "Table Booking Product",
            "sku": "TABLE-001",
            "urlKey": "table-booking-product",
            "price": 0,
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": "booking_4",
                    "type": "table",
                    "tableSlot": {
                      "id": "/api/booking/slots/4",
                      "_id": "slot_4",
                      "bookingProductId": "2563",
                      "priceType": "guest",
                      "guestLimit": 10,
                      "duration": 120,
                      "breakTime": 0,
                      "preventSchedulingBefore": 2,
                      "sameSlotAllDays": false,
                      "slots": [
                        {
                          "day": "monday",
                          "slots": ["18:00 - 22:00"]
                        },
                        {
                          "day": "tuesday",
                          "slots": ["18:00 - 22:00"]
                        },
                        {
                          "day": "wednesday",
                          "slots": ["18:00 - 22:00"]
                        },
                        {
                          "day": "thursday",
                          "slots": ["18:00 - 22:00"]
                        },
                        {
                          "day": "friday",
                          "slots": ["18:00 - 23:00"]
                        },
                        {
                          "day": "saturday",
                          "slots": ["18:00 - 23:00"]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Provided product ID does not exist
        solution: Verify the product ID exists
      - error: BOOKING_TYPE_MISMATCH
        cause: Product is not a table booking type
        solution: Ensure the product has table booking enabled
  - id: get-event-booking-product
    title: Get Event Booking Product
    description: Retrieve an event booking product with its ticket configuration. Event bookings use the `eventTickets` relationship which includes ticket pricing, quantity, and special price date ranges — a different structure from slot-based booking types.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          name
          sku
          urlKey
          price
          bookingProducts {
            edges {
              node {
                _id
                type
                eventTickets {
                  edges {
                    node {
                      id
                      _id
                      bookingProductId
                      price
                      qty
                      specialPrice
                      specialPriceFrom
                      specialPriceTo
                    }
                  }
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": 2564
      }
    response: |
      {
        "data": {
          "product": {
            "id": "2564",
            "name": "Event Booking Product",
            "sku": "EVENT-001",
            "urlKey": "event-booking-product",
            "price": 0,
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": "booking_5",
                    "type": "event",
                    "eventTickets": {
                      "edges": [
                        {
                          "node": {
                            "id": "/api/booking/tickets/1",
                            "_id": "ticket_1",
                            "bookingProductId": "2564",
                            "price": 50,
                            "qty": 100,
                            "specialPrice": 40,
                            "specialPriceFrom": "2024-01-01",
                            "specialPriceTo": "2024-12-31"
                          }
                        },
                        {
                          "node": {
                            "id": "/api/booking/tickets/2",
                            "_id": "ticket_2",
                            "bookingProductId": "2564",
                            "price": 100,
                            "qty": 50,
                            "specialPrice": null,
                            "specialPriceFrom": null,
                            "specialPriceTo": null
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Provided product ID does not exist
        solution: Verify the product ID exists
      - error: BOOKING_TYPE_MISMATCH
        cause: Product is not an event booking type
        solution: Ensure the product has event booking enabled
---

# Single Product

## About

The `product` query retrieves a single product by its unique identifier, SKU, or URL key. Use this query to:

- Fetch individual products for detail pages
- Look up products by different identifier types (ID, SKU, URL)
- Display complete product information including images, variants, and attributes
- Show product pricing, descriptions, and SEO metadata
- Retrieve inventory and availability status
- Build product-specific API integrations
- Generate product detail pages with all metadata

This query supports multiple lookup methods (ID, SKU, or URL key) and can return minimal data for previews or comprehensive data for full product detail pages, making it flexible for various use cases.

::: info Why Booking Product Types Are Documented Separately
All product types (simple, configurable, grouped, bundle, downloadable, virtual) share the same core fields (`name`, `sku`, `price`, `images`, `variants`, `attributeValues`, etc.) and can be queried using the same base query structure. However, **booking products** are documented with separate examples because each booking type (Appointment, Rental, Default, Table, Event) exposes its own unique relationship and slot structure through the `bookingProducts` field. These sub-types have different fields and response shapes (e.g., `appointmentSlot`, `rentalSlot`, `defaultSlot`, `tableSlot`, `eventTickets`), so dedicated examples are provided to show how to query each one correctly.
:::

## Arguments

| Argument | Type | Description |
|----------|------|-------------|
| `id` | `ID` | Product's unique system identifier. Use this for direct lookups. |
| `sku` | `String` | Stock Keeping Unit. Alternative identifier for product lookup. |
| `urlKey` | `String` | URL-friendly product slug. Alternative lookup method. |
| `include_variants` | `Boolean` | Include product variants (colors, sizes, options). Default: `false` |
| `include_images` | `Boolean` | Include product images. Default: `false` |
| `include_attributes` | `Boolean` | Include custom product attributes. Default: `true` |
| `image_resolution` | `String` | Image quality: `thumbnail`, `medium`, `large`, `original`. Default: `large` |
| `include_recommendations` | `Boolean` | Include related and recommended products. Default: `false` |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `id` | `ID!` | Unique product identifier. |
| `name` | `String!` | Product display name. |
| `sku` | `String!` | Stock Keeping Unit for inventory tracking. |
| `urlKey` | `String!` | URL-friendly product slug for SEO. |
| `type` | `String!` | Product type (simple, configurable, grouped, bundle). |
| `description` | `String` | Full product description with formatting. |
| `shortDescription` | `String` | Brief product summary. |
| `price` | `Float!` | Base product price. |
| `specialPrice` | `Float` | Promotional/discounted price if applicable. |
| `taxClass` | `String` | Tax classification for the product. |
| `images` | `[ProductImage!]` | Array of product images with URLs and metadata. |
| `images.url` | `String!` | Image URL. |
| `images.altText` | `String` | Image alt text for accessibility. |
| `images.position` | `Int` | Image order in gallery. |
| `images.width` | `Int` | Image width in pixels. |
| `images.height` | `Int` | Image height in pixels. |
| `attributes` | `[ProductAttribute!]` | Custom product attributes and values. |
| `variants` | `[ProductVariant!]` | Product variants (colors, sizes, options). |
| `variants.sku` | `String!` | Variant SKU. |
| `variants.price` | `Float!` | Variant-specific price. |
| `inventory` | `InventoryInfo!` | Stock availability information. |
| `inventory.stock` | `Int!` | Current stock quantity. |
| `inventory.status` | `String!` | Stock status (in_stock, out_of_stock, low_stock). |
| `categories` | `[Category!]!` | Categories this product belongs to. |
| `tags` | `[String!]` | Product tags and labels. |
| `seo` | `ProductSEO!` | SEO metadata. |
| `status` | `String!` | Product status (active, draft, inactive). |
| `visibility` | `String!` | Visibility status (visible, not visible, search only). |
| `createdAt` | `DateTime!` | Product creation date. |
| `updatedAt` | `DateTime!` | Last modification date. |

## Booking Product Types

All standard product types (simple, configurable, grouped, bundle, downloadable, virtual) share the same core fields and can be queried using any of the general examples above. Booking products, however, require special attention because each booking type exposes a **different relationship with its own unique fields** through the `bookingProducts` connection.

The `bookingProducts` field returns a `type` that determines which slot/ticket relationship contains the data:

| Booking Type | Relationship Field | Key Fields | Use Case |
|---|---|---|---|
| **Appointment** | `appointmentSlot` | `duration`, `breakTime`, `sameSlotAllDays`, `slots` | Salon visits, doctor appointments, consultations |
| **Rental** | `rentalSlot` | `rentingType`, `dailyPrice`, `hourlyPrice`, `slots` | Equipment rental, vehicle hire, venue booking |
| **Default** | `defaultSlot` | `bookingType`, `duration`, `breakTime`, `slots` | General time-slot bookings |
| **Table** | `tableSlot` | `priceType`, `guestLimit`, `duration`, `breakTime`, `preventSchedulingBefore`, `slots` | Restaurant reservations, meeting rooms |
| **Event** | `eventTickets` | `price`, `qty`, `specialPrice`, `specialPriceFrom`, `specialPriceTo` | Concerts, workshops, conferences |

::: tip
Only the relationship matching the product's booking type will contain data. For example, an appointment booking product will have data in `appointmentSlot` but not in `rentalSlot` or `tableSlot`. Always check the `type` field first to determine which relationship to query.
:::
