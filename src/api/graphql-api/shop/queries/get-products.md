---
outline: false
examples:
  - id: get-products-sorted-az
    title: Get Products Sorted A-Z
    description: Fetch products sorted by title in ascending order.
    query: |
      query getProductsSorted {
        products(reverse: false, sortKey: "TITLE", first: 10) {
          edges {
            node {
              id
              name
              sku
              price
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "1",
                  "name": "Product A",
                  "sku": "SKU001",
                  "price": 29.99
                }
              }
            ]
          }
        }
      }
    commonErrors:
      - error: INVALID_SORT_KEY
        cause: Sort key not supported
        solution: Use valid sort keys like TITLE, PRICE, CREATED_AT

  - id: get-products-sorted-za
    title: Get Products Sorted Z-A
    description: Fetch products sorted by title in descending order.
    query: |
      query getProductsSorted {
        products(reverse: true, sortKey: "TITLE", first: 10) {
          edges {
            node {
              id
              name
              sku
              price
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "10",
                  "name": "Zebra Product",
                  "sku": "SKU010",
                  "price": 99.99
                }
              }
            ]
          }
        }
      }
    commonErrors:
      - error: INVALID_REVERSE_PARAM
        cause: Reverse parameter invalid
        solution: Use true or false

  - id: get-products-newest-first
    title: Get Products - Newest First
    description: Fetch newest products first sorted by creation date.
    query: |
      query getProductsSorted {
        products(reverse: true, sortKey: "CREATED_AT", first: 10) {
          edges {
            node {
              id
              name
              sku
              price
              createdAt
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "100",
                  "name": "Newest Product",
                  "sku": "SKU100",
                  "price": 49.99,
                  "createdAt": "2024-01-20T10:00:00Z"
                }
              }
            ]
          }
        }
      }
    commonErrors:
      - error: NO_PRODUCTS
        cause: No products available
        solution: Add products to your store

  - id: get-products-oldest-first
    title: Get Products - Oldest First
    description: Fetch oldest products first sorted by creation date.
    query: |
      query getProductsSorted {
        products(reverse: false, sortKey: "CREATED_AT", first: 10) {
          edges {
            node {
              id
              name
              sku
              price
              createdAt
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "1",
                  "name": "First Product",
                  "sku": "SKU001",
                  "price": 29.99,
                  "createdAt": "2023-01-01T08:00:00Z"
                }
              }
            ]
          }
        }
      }
    commonErrors:
      - error: INVALID_DATE_FORMAT
        cause: Date format is invalid
        solution: Use ISO 8601 date format

  - id: get-products-cheapest-first
    title: Get Products - Cheapest First
    description: Fetch products sorted by price in ascending order.
    query: |
      query getProductsSorted {
        products(reverse: false, sortKey: "PRICE", first: 10) {
          edges {
            node {
              id
              name
              sku
              price
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "5",
                  "name": "Budget Product",
                  "sku": "SKU005",
                  "price": 9.99
                }
              }
            ]
          }
        }
      }
    commonErrors:
      - error: INVALID_PRICE
        cause: Price format is invalid
        solution: Ensure prices are positive numbers

  - id: get-products-expensive-first
    title: Get Products - Most Expensive First
    description: Fetch products sorted by price in descending order.
    query: |
      query getProductsSorted {
        products(reverse: true, sortKey: "PRICE", first: 10) {
          edges {
            node {
              id
              name
              sku
              price
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "50",
                  "name": "Premium Product",
                  "sku": "SKU050",
                  "price": 999.99
                }
              }
            ]
          }
        }
      }
    commonErrors:
      - error: PRICE_OUT_OF_RANGE
        cause: Price exceeds acceptable range
        solution: Check product pricing configuration

  - id: get-products-type-simple
    title: Get Products - Simple Type
    description: Retrieve all simple products. Simple products have no variants and include pricing, images, attributes, and categories.
    query: |
      query getAllSimpleProducts {
        products(filter: "{\"type\": \"simple\"}") {
          edges {
            node {
              id
              name
              sku
              urlKey
              description
              shortDescription
              price
              specialPrice
              images(first: 5) {
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
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/products/1",
                  "name": "Classic White T-Shirt",
                  "sku": "TSHIRT-WHT-001",
                  "urlKey": "classic-white-t-shirt",
                  "description": "A comfortable everyday white t-shirt made from 100% cotton.",
                  "shortDescription": "100% cotton white t-shirt.",
                  "price": "29.99",
                  "specialPrice": "24.99",
                  "images": {
                    "edges": [
                      {
                        "node": {
                          "id": "/api/shop/product-images/10",
                          "publicPath": "https://your-store.com/storage/product/tshirt-white.jpg",
                          "position": 1
                        }
                      }
                    ]
                  },
                  "attributeValues": {
                    "edges": [
                      {
                        "node": {
                          "value": "White",
                          "attribute": {
                            "code": "color",
                            "adminName": "Color"
                          }
                        }
                      }
                    ]
                  },
                  "categories": {
                    "edges": [
                      {
                        "node": {
                          "id": "/api/shop/categories/3",
                          "translation": {
                            "name": "T-Shirts"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "totalCount": 16
          }
        }
      }
    commonErrors:
      - error: INVALID_FILTER_FORMAT
        cause: Filter string is not valid JSON
        solution: Pass filter as a single-line JSON string with escaped quotes e.g. "{\"type\":\"simple\"}"

  - id: get-products-type-configurable
    title: Get Products - Configurable Type
    description: Retrieve all configurable products. Configurable products have selectable variants (e.g. size, color) and include variants, combinations, and superAttributeOptions.
    query: |
      query getAllConfigurableProducts {
        products(filter: "{\"type\": \"configurable\"}") {
          edges {
            node {
              id
              name
              sku
              type
              combinations
              superAttributeOptions
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
              urlKey
              description
              shortDescription
              minimumPrice
              images(first: 5) {
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
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/products/5",
                  "name": "Premium Hoodie",
                  "sku": "HOODIE-001",
                  "type": "configurable",
                  "combinations": "{\"small-black\":{\"id\":\"6\"},\"medium-black\":{\"id\":\"7\"}}",
                  "superAttributeOptions": "{\"size\":{\"small\":\"1\",\"medium\":\"2\"},\"color\":{\"black\":\"3\"}}",
                  "variants": {
                    "edges": [
                      {
                        "node": {
                          "id": "/api/shop/products/6",
                          "name": "Premium Hoodie - Small / Black",
                          "sku": "HOODIE-001-SM-BLK",
                          "price": "59.99",
                          "attributeValues": {
                            "edges": [
                              {
                                "node": {
                                  "value": "Small",
                                  "attribute": { "code": "size", "adminName": "Size" }
                                }
                              },
                              {
                                "node": {
                                  "value": "Black",
                                  "attribute": { "code": "color", "adminName": "Color" }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "urlKey": "premium-hoodie",
                  "description": "A premium quality hoodie available in multiple sizes and colors.",
                  "shortDescription": "Premium quality hoodie.",
                  "minimumPrice": "59.99",
                  "images": { "edges": [] },
                  "attributeValues": { "edges": [] },
                  "categories": {
                    "edges": [
                      {
                        "node": {
                          "id": "/api/shop/categories/4",
                          "translation": { "name": "Hoodies" }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "totalCount": 9
          }
        }
      }
    commonErrors:
      - error: INVALID_FILTER_FORMAT
        cause: Filter string is not valid JSON
        solution: Pass filter as a single-line JSON string with escaped quotes

  - id: get-products-type-booking
    title: Get Products - Booking Type
    description: Retrieve all booking products. Booking products are time-slot or appointment-based and include bookingProducts connection with availability details.
    query: |
      query getAllBookingProducts {
        products(filter: "{\"type\": \"booking\"}") {
          edges {
            node {
              id
              name
              sku
              type
              urlKey
              description
              shortDescription
              price
              specialPrice
              bookingProducts {
                edges {
                  node {
                    id
                    type
                    qty
                    location
                    showLocation
                    availableEveryWeek
                    availableFrom
                    availableTo
                    createdAt
                    updatedAt
                  }
                }
              }
              images(first: 5) {
                edges {
                  node {
                    id
                    publicPath
                    position
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
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/products/20",
                  "name": "Conference Room Booking",
                  "sku": "BOOKING-CONF-001",
                  "type": "booking",
                  "urlKey": "conference-room-booking",
                  "description": "Book a conference room by the hour.",
                  "shortDescription": "Hourly conference room rental.",
                  "price": "50.00",
                  "specialPrice": null,
                  "bookingProducts": {
                    "edges": [
                      {
                        "node": {
                          "id": "1",
                          "type": "default",
                          "qty": 10,
                          "location": "Main Building, Floor 2",
                          "showLocation": true,
                          "availableEveryWeek": true,
                          "availableFrom": null,
                          "availableTo": null,
                          "createdAt": "2025-01-10T09:00:00+05:30",
                          "updatedAt": "2025-01-10T09:00:00+05:30"
                        }
                      }
                    ]
                  },
                  "images": { "edges": [] },
                  "categories": { "edges": [] }
                }
              }
            ],
            "totalCount": 0
          }
        }
      }
    commonErrors:
      - error: INVALID_FILTER_FORMAT
        cause: Filter string is not valid JSON
        solution: Pass filter as a single-line JSON string with escaped quotes

  - id: get-products-type-virtual
    title: Get Products - Virtual Type
    description: Retrieve all virtual products. Virtual products are non-physical items (e.g. services, warranties) that require no shipping. Structurally similar to simple products.
    query: |
      query getAllVirtualProducts {
        products(filter: "{\"type\": \"virtual\"}") {
          edges {
            node {
              id
              name
              sku
              type
              urlKey
              description
              shortDescription
              price
              specialPrice
              images(first: 5) {
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
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/products/30",
                  "name": "1-Year Extended Warranty",
                  "sku": "WARRANTY-1YR",
                  "type": "virtual",
                  "urlKey": "1-year-extended-warranty",
                  "description": "Extend your product warranty by 1 year with full coverage.",
                  "shortDescription": "1-year full coverage warranty.",
                  "price": "19.99",
                  "specialPrice": null,
                  "images": { "edges": [] },
                  "attributeValues": { "edges": [] },
                  "categories": {
                    "edges": [
                      {
                        "node": {
                          "id": "/api/shop/categories/10",
                          "translation": { "name": "Services" }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "totalCount": 0
          }
        }
      }
    commonErrors:
      - error: INVALID_FILTER_FORMAT
        cause: Filter string is not valid JSON
        solution: Pass filter as a single-line JSON string with escaped quotes

  - id: get-products-type-grouped
    title: Get Products - Grouped Type
    description: Retrieve all grouped products. Grouped products are a collection of simple products sold together. Includes groupedProducts connection with associated product details.
    query: |
      query getAllGroupedProducts {
        products(filter: "{\"type\": \"grouped\"}") {
          edges {
            node {
              id
              name
              sku
              type
              urlKey
              description
              shortDescription
              groupedProducts {
                edges {
                  node {
                    id
                    qty
                    sortOrder
                    associatedProduct {
                      id
                      name
                      sku
                      price
                      specialPrice
                      images(first: 3) {
                        edges {
                          node {
                            id
                            publicPath
                          }
                        }
                      }
                    }
                  }
                }
              }
              images(first: 5) {
                edges {
                  node {
                    id
                    publicPath
                    position
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
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/products/40",
                  "name": "Office Essentials Bundle",
                  "sku": "OFFICE-BUNDLE-001",
                  "type": "grouped",
                  "urlKey": "office-essentials-bundle",
                  "description": "A curated bundle of essential office products.",
                  "shortDescription": "Essential office products bundle.",
                  "groupedProducts": {
                    "edges": [
                      {
                        "node": {
                          "id": "1",
                          "qty": 1,
                          "sortOrder": 1,
                          "associatedProduct": {
                            "id": "/api/shop/products/41",
                            "name": "Ballpoint Pen Pack",
                            "sku": "PEN-BALL-12",
                            "price": "5.99",
                            "specialPrice": null,
                            "images": { "edges": [] }
                          }
                        }
                      },
                      {
                        "node": {
                          "id": "2",
                          "qty": 1,
                          "sortOrder": 2,
                          "associatedProduct": {
                            "id": "/api/shop/products/42",
                            "name": "Spiral Notebook A5",
                            "sku": "NB-SPIRAL-A5",
                            "price": "3.49",
                            "specialPrice": null,
                            "images": { "edges": [] }
                          }
                        }
                      }
                    ]
                  },
                  "images": { "edges": [] },
                  "categories": { "edges": [] }
                }
              }
            ],
            "totalCount": 0
          }
        }
      }
    commonErrors:
      - error: INVALID_FILTER_FORMAT
        cause: Filter string is not valid JSON
        solution: Pass filter as a single-line JSON string with escaped quotes

  - id: get-products-type-downloadable
    title: Get Products - Downloadable Type
    description: Retrieve all downloadable products. Downloadable products are digital items with file links and optional samples. Includes downloadableLinks and downloadableSamples connections.
    query: |
      query getAllDownloadableProducts {
        products(filter: "{\"type\": \"downloadable\"}") {
          edges {
            node {
              id
              name
              sku
              type
              urlKey
              description
              shortDescription
              price
              specialPrice
              downloadableLinks {
                edges {
                  node {
                    id
                    type
                    price
                    downloads
                    sortOrder
                    fileUrl
                    sampleFileUrl
                    translation {
                      title
                    }
                  }
                }
              }
              downloadableSamples {
                edges {
                  node {
                    id
                    type
                    fileUrl
                    sortOrder
                    translation {
                      title
                    }
                  }
                }
              }
              images(first: 5) {
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
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/products/50",
                  "name": "UX Design Course",
                  "sku": "COURSE-UX-001",
                  "type": "downloadable",
                  "urlKey": "ux-design-course",
                  "description": "A comprehensive UX design course with 40 video lessons.",
                  "shortDescription": "40-lesson UX design video course.",
                  "price": "99.00",
                  "specialPrice": "79.00",
                  "downloadableLinks": {
                    "edges": [
                      {
                        "node": {
                          "id": "1",
                          "type": "file",
                          "price": "0.00",
                          "downloads": 5,
                          "sortOrder": 1,
                          "fileUrl": "https://your-store.com/storage/downloadable/course-module-1.zip",
                          "sampleFileUrl": null,
                          "translation": {
                            "title": "Module 1 – Introduction to UX"
                          }
                        }
                      }
                    ]
                  },
                  "downloadableSamples": {
                    "edges": [
                      {
                        "node": {
                          "id": "1",
                          "type": "file",
                          "fileUrl": "https://your-store.com/storage/downloadable/sample-ux.pdf",
                          "sortOrder": 1,
                          "translation": {
                            "title": "Free Sample – UX Basics"
                          }
                        }
                      }
                    ]
                  },
                  "images": { "edges": [] },
                  "attributeValues": { "edges": [] },
                  "categories": { "edges": [] }
                }
              }
            ],
            "totalCount": 0
          }
        }
      }
    commonErrors:
      - error: INVALID_FILTER_FORMAT
        cause: Filter string is not valid JSON
        solution: Pass filter as a single-line JSON string with escaped quotes

  - id: get-products-type-bundle
    title: Get Products - Bundle Type
    description: Retrieve all bundle products. Bundle products are composed of selectable options where customers can choose individual components. Includes bundleOptions and bundleOptionProducts connections.
    query: |
      query getAllBundleProducts {
        products(filter: "{\"type\": \"bundle\"}") {
          edges {
            node {
              id
              name
              sku
              type
              urlKey
              description
              shortDescription
              minimumPrice
              bundleOptions {
                edges {
                  node {
                    id
                    type
                    isRequired
                    sortOrder
                    translation {
                      label
                    }
                    bundleOptionProducts {
                      edges {
                        node {
                          id
                          qty
                          isDefault
                          isUserDefined
                          sortOrder
                          product {
                            id
                            name
                            sku
                            price
                            images(first: 3) {
                              edges {
                                node {
                                  id
                                  publicPath
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              images(first: 5) {
                edges {
                  node {
                    id
                    publicPath
                    position
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
          totalCount
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "products": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/products/60",
                  "name": "Build Your Own Laptop",
                  "sku": "LAPTOP-BUNDLE-001",
                  "type": "bundle",
                  "urlKey": "build-your-own-laptop",
                  "description": "Configure your own laptop by choosing CPU, RAM, and storage.",
                  "shortDescription": "Customisable laptop bundle.",
                  "minimumPrice": "799.00",
                  "bundleOptions": {
                    "edges": [
                      {
                        "node": {
                          "id": "1",
                          "type": "select",
                          "isRequired": true,
                          "sortOrder": 1,
                          "translation": { "label": "Choose RAM" },
                          "bundleOptionProducts": {
                            "edges": [
                              {
                                "node": {
                                  "id": "1",
                                  "qty": 1,
                                  "isDefault": true,
                                  "isUserDefined": false,
                                  "sortOrder": 1,
                                  "product": {
                                    "id": "/api/shop/products/61",
                                    "name": "8GB DDR5 RAM",
                                    "sku": "RAM-8GB-DDR5",
                                    "price": "80.00",
                                    "images": { "edges": [] }
                                  }
                                }
                              },
                              {
                                "node": {
                                  "id": "2",
                                  "qty": 1,
                                  "isDefault": false,
                                  "isUserDefined": false,
                                  "sortOrder": 2,
                                  "product": {
                                    "id": "/api/shop/products/62",
                                    "name": "16GB DDR5 RAM",
                                    "sku": "RAM-16GB-DDR5",
                                    "price": "140.00",
                                    "images": { "edges": [] }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "images": { "edges": [] },
                  "categories": { "edges": [] }
                }
              }
            ],
            "totalCount": 0
          }
        }
      }
    commonErrors:
      - error: INVALID_FILTER_FORMAT
        cause: Filter string is not valid JSON
        solution: Pass filter as a single-line JSON string with escaped quotes
---

# Get Products

## About

The `getProducts` query retrieves a paginated list of products from your store with support for advanced sorting and filtering. This query is essential for:

- Building product catalog browsing interfaces
- Implementing product search, sorting, and filtering experiences
- Creating product recommendation systems
- Syncing product data with external systems

The query supports cursor-based pagination to efficiently handle large product catalogs and includes metadata for:

- Basic product information (name, SKU, description, vendor)
- Pricing and inventory details
- Product images and media
- Categories, tags, and custom attributes
- Publication and availability status
- Created and updated timestamps

## Arguments

| Argument | Type | Description |
|----------|------|-------------|
| `first` | `Int` | The number of products to return per page (max: 250). Used for forward pagination. |
| `after` | `String` | The cursor of the product to start after. Used with `first` for pagination. |
| `last` | `Int` | The number of products to return in reverse (max: 250). Used for backward pagination. |
| `before` | `String` | The cursor to start before. Used with `last` for reverse pagination. |
| `sortKey` | `ProductSortKeys` | Field to sort by: `TITLE`, `PRICE`, `CREATED_AT`, `UPDATED_AT`. Default: `TITLE` |
| `reverse` | `Boolean` | Reverse the sort order. Default: `false` |
| `query` | `String` | Search query string for filtering products. Supports advanced search syntax. |
| `filter` | `String` | JSON string for filtering by type, category, attributes, or price. See examples below. |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `edges` | `[ProductEdge!]!` | Array of edges containing products and cursors. Each edge represents a connection between nodes. |
| `edges.node` | `Product!` | The actual product object containing id, name, sku, price, and other product fields. |
| `edges.cursor` | `String!` | Pagination cursor for this product. Use with `after` or `before` arguments. |
| `nodes` | `[Product!]!` | Flattened array of products without edge information. |
| `pageInfo` | `PageInfo!` | Pagination metadata object. |
| `pageInfo.hasNextPage` | `Boolean!` | Whether there are more products after the current page. |
| `pageInfo.hasPreviousPage` | `Boolean!` | Whether there are products before the current page. |
| `pageInfo.startCursor` | `String` | Cursor of the first product on the current page. |
| `pageInfo.endCursor` | `String` | Cursor of the last product on the current page. |
| `totalCount` | `Int!` | Total number of products matching the query criteria. |

## Product Types

Use the `filter` argument with `"type"` to fetch products of a specific kind. The filter value must be a single-line JSON string with escaped quotes.

| Type | Filter Value | Key Fields |
|------|-------------|------------|
| Simple | `"{\"type\": \"simple\"}"` | `price`, `specialPrice`, `images`, `attributeValues` |
| Configurable | `"{\"type\": \"configurable\"}"` | `variants`, `combinations`, `superAttributeOptions` |
| Booking | `"{\"type\": \"booking\"}"` | `bookingProducts` (type, qty, location, availability) |
| Virtual | `"{\"type\": \"virtual\"}"` | `price`, `specialPrice`, `attributeValues` |
| Grouped | `"{\"type\": \"grouped\"}"` | `groupedProducts` → `associatedProduct` |
| Downloadable | `"{\"type\": \"downloadable\"}"` | `downloadableLinks`, `downloadableSamples` |
| Bundle | `"{\"type\": \"bundle\"}"` | `bundleOptions` → `bundleOptionProducts` → `product` |

