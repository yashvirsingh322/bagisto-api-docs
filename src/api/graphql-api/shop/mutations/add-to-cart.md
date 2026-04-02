---
outline: false
examples:
  - id: add-simple-product-to-cart
    title: Add Simple Product to Cart
    description: Add a simple product to the cart. Simple products only require `productId` and `quantity` — no additional options are needed.
    query: |
      mutation createAddProductInCart(
          $productId: Int!
          $quantity: Int!
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            customerId
            channelId
            subtotal
            baseSubtotal
            discountAmount
            baseDiscountAmount
            taxAmount
            baseTaxAmount
            shippingAmount
            baseShippingAmount
            grandTotal
            baseGrandTotal
            formattedSubtotal
            formattedDiscountAmount
            formattedTaxAmount
            formattedShippingAmount
            formattedGrandTotal
            couponCode
            items {
              totalCount
              pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
              }
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  basePrice
                  total
                  baseTotal
                  discountAmount
                  baseDiscountAmount
                  taxAmount
                  baseTaxAmount
                  type
                  formattedPrice
                  formattedTotal
                  priceInclTax
                  basePriceInclTax
                  formattedPriceInclTax
                  totalInclTax
                  baseTotalInclTax
                  formattedTotalInclTax
                  productUrlKey
                  canChangeQty
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
            haveStockableItems
            paymentMethod
            paymentMethodTitle
            subTotalInclTax
            baseSubTotalInclTax
            formattedSubTotalInclTax
            taxTotal
            formattedTaxTotal
            shippingAmountInclTax
            baseShippingAmountInclTax
            formattedShippingAmountInclTax
          }
        }
      }
    variables: |
      {
        "productId": 4,
        "quantity": 1
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4484",
              "_id": 4484,
              "cartToken": "abc123def456",
              "customerId": null,
              "channelId": 1,
              "subtotal": "500.0000",
              "baseSubtotal": "500.0000",
              "discountAmount": "0.0000",
              "baseDiscountAmount": "0.0000",
              "taxAmount": "0.0000",
              "baseTaxAmount": "0.0000",
              "shippingAmount": "0.0000",
              "baseShippingAmount": "0.0000",
              "grandTotal": "500.0000",
              "baseGrandTotal": "500.0000",
              "formattedSubtotal": "$500.00",
              "formattedDiscountAmount": "$0.00",
              "formattedTaxAmount": "$0.00",
              "formattedShippingAmount": "$0.00",
              "formattedGrandTotal": "$500.00",
              "couponCode": null,
              "items": {
                "totalCount": 1,
                "pageInfo": {
                  "startCursor": "MA==",
                  "endCursor": "MA==",
                  "hasNextPage": false,
                  "hasPreviousPage": false
                },
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5648,
                      "cartId": 4484,
                      "productId": 4,
                      "name": "Verdant Luxe 2-Seater Velvet Sofa Green",
                      "sku": "VLS-GREEN-001",
                      "quantity": 1,
                      "price": "500.0000",
                      "basePrice": "500.0000",
                      "total": "500.0000",
                      "baseTotal": "500.0000",
                      "discountAmount": "0.0000",
                      "baseDiscountAmount": "0.0000",
                      "taxAmount": "0.0000",
                      "baseTaxAmount": "0.0000",
                      "type": "simple",
                      "formattedPrice": "$500.00",
                      "formattedTotal": "$500.00",
                      "priceInclTax": "500.0000",
                      "basePriceInclTax": "500.0000",
                      "formattedPriceInclTax": "$500.00",
                      "totalInclTax": "500.0000",
                      "baseTotalInclTax": "500.0000",
                      "formattedTotalInclTax": "$500.00",
                      "productUrlKey": "verdant-luxe-sofa-green",
                      "canChangeQty": true
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "abc123def456",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1,
              "haveStockableItems": true,
              "paymentMethod": null,
              "paymentMethodTitle": null,
              "subTotalInclTax": "500.0000",
              "baseSubTotalInclTax": "500.0000",
              "formattedSubTotalInclTax": "$500.00",
              "taxTotal": "0.0000",
              "formattedTaxTotal": "$0.00",
              "shippingAmountInclTax": "0.0000",
              "baseShippingAmountInclTax": "0.0000",
              "formattedShippingAmountInclTax": "$0.00"
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID does not exist or product is inactive
        solution: Verify the product ID exists and the product status is active
      - error: OUT_OF_STOCK
        cause: Requested quantity exceeds available stock
        solution: Reduce quantity or choose a different product

  - id: add-configurable-product-to-cart
    title: Add Configurable Product to Cart
    description: |
      Add a configurable product (e.g., a product with color/size options) to the cart. Requires `selectedConfigurableOption` (the child variant product ID) and `superAttribute` (an array mapping attribute IDs to their selected option IDs).
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $quantity: Int!
        $selectedConfigurableOption: Int!
        $superAttribute: Iterable
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            selectedConfigurableOption: $selectedConfigurableOption
            superAttribute: $superAttribute
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            customerId
            channelId
            subtotal
            baseSubtotal
            grandTotal
            baseGrandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  basePrice
                  total
                  baseImage
                  baseTotal
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 7,
        "quantity": 1,
        "selectedConfigurableOption": 11,
        "superAttribute": [
          { "23": 2 },
          { "24": 8 }
        ]
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4485",
              "_id": 4485,
              "cartToken": "xyz789token",
              "customerId": null,
              "channelId": 1,
              "subtotal": "14.0000",
              "baseSubtotal": "14.0000",
              "grandTotal": "14.0000",
              "baseGrandTotal": "14.0000",
              "formattedSubtotal": "$14.00",
              "formattedGrandTotal": "$14.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5649,
                      "cartId": 4485,
                      "productId": 11,
                      "name": "OmniHeat Men's Solid Hooded Puffer Jacket-Blue-Yellow-M",
                      "sku": "SP-005",
                      "quantity": 1,
                      "price": "14.0000",
                      "basePrice": "14.0000",
                      "total": "14.0000",
                      "baseImage": "{\"small_image_url\":\"http://example.com/cache/small/product.webp\",\"medium_image_url\":\"http://example.com/cache/medium/product.webp\",\"large_image_url\":\"http://example.com/cache/large/product.webp\",\"original_image_url\":\"http://example.com/cache/original/product.webp\"}",
                      "baseTotal": "14.0000",
                      "type": "configurable",
                      "formattedPrice": "$14.00",
                      "formattedTotal": "$14.00",
                      "productUrlKey": "omniheat-puffer-jacket",
                      "canChangeQty": true,
                      "options": [
                        {
                          "id": "23",
                          "label": "Color",
                          "value": "Blue",
                          "option_id": "2"
                        },
                        {
                          "id": "24",
                          "label": "Size",
                          "value": "M",
                          "option_id": "8"
                        }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "xyz789token",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID or selected configurable option does not exist
        solution: Verify both the parent product ID and the child variant ID are correct
      - error: INVALID_CONFIGURATION
        cause: The superAttribute values don't match any valid variant
        solution: Ensure superAttribute maps the correct attribute IDs to valid option IDs for the selected variant
      - error: OUT_OF_STOCK
        cause: The selected variant is out of stock
        solution: Choose a different variant or reduce quantity

  - id: add-downloadable-product-to-cart
    title: Add Downloadable Product to Cart
    description: |
      Add a downloadable product to the cart. Requires `links` — an array of downloadable link IDs that the customer has selected to purchase. Link IDs can be retrieved from the product query.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $quantity: Int!
        $links: Iterable
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            links: $links
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  basePrice
                  total
                  baseTotal
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
            haveStockableItems
          }
        }
      }
    variables: |
      {
        "productId": 800,
        "quantity": 1,
        "links": [1, 2]
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4486",
              "_id": 4486,
              "cartToken": "dl-token-123",
              "subtotal": "25.0000",
              "grandTotal": "25.0000",
              "formattedSubtotal": "$25.00",
              "formattedGrandTotal": "$25.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5650,
                      "cartId": 4486,
                      "productId": 800,
                      "name": "Premium eBook Collection",
                      "sku": "EBOOK-001",
                      "quantity": 1,
                      "price": "25.0000",
                      "basePrice": "25.0000",
                      "total": "25.0000",
                      "baseTotal": "25.0000",
                      "type": "downloadable",
                      "formattedPrice": "$25.00",
                      "formattedTotal": "$25.00",
                      "productUrlKey": "premium-ebook-collection",
                      "canChangeQty": true,
                      "options": [
                        {
                          "link_id": "1",
                          "title": "PDF Version",
                          "price": 15
                        },
                        {
                          "link_id": "2",
                          "title": "EPUB Version",
                          "price": 10
                        }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "dl-token-123",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1,
              "haveStockableItems": false
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID does not exist
        solution: Verify the product ID
      - error: INVALID_LINKS
        cause: One or more link IDs are invalid or do not belong to this product
        solution: Use valid link IDs from the product query response

  - id: add-grouped-product-to-cart
    title: Add Grouped Product to Cart
    description: |
      Add a grouped product to the cart. Requires `groupedQty` — a JSON string mapping each associated product ID to its desired quantity. All associated products in the group must be included in the map.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $quantity: Int!
        $groupedQty: String
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            groupedQty: $groupedQty
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  basePrice
                  total
                  baseTotal
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 5,
        "quantity": 1,
        "groupedQty": "{\"1\":1,\"3\":1,\"4\":1}"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4487",
              "_id": 4487,
              "cartToken": "grp-token-456",
              "subtotal": "150.0000",
              "grandTotal": "150.0000",
              "formattedSubtotal": "$150.00",
              "formattedGrandTotal": "$150.00",
              "items": {
                "totalCount": 3,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5651,
                      "cartId": 4487,
                      "productId": 1,
                      "name": "Basic T-Shirt",
                      "sku": "TSHIRT-001",
                      "quantity": 1,
                      "price": "29.0000",
                      "basePrice": "29.0000",
                      "total": "29.0000",
                      "baseTotal": "29.0000",
                      "type": "simple",
                      "formattedPrice": "$29.00",
                      "formattedTotal": "$29.00",
                      "productUrlKey": "basic-tshirt",
                      "canChangeQty": true,
                      "options": []
                    }
                  },
                  {
                    "cursor": "MQ==",
                    "node": {
                      "id": 5652,
                      "cartId": 4487,
                      "productId": 3,
                      "name": "Classic Polo",
                      "sku": "POLO-001",
                      "quantity": 1,
                      "price": "49.0000",
                      "basePrice": "49.0000",
                      "total": "49.0000",
                      "baseTotal": "49.0000",
                      "type": "simple",
                      "formattedPrice": "$49.00",
                      "formattedTotal": "$49.00",
                      "productUrlKey": "classic-polo",
                      "canChangeQty": true,
                      "options": []
                    }
                  },
                  {
                    "cursor": "Mg==",
                    "node": {
                      "id": 5653,
                      "cartId": 4487,
                      "productId": 4,
                      "name": "Premium Hoodie",
                      "sku": "HOODIE-001",
                      "quantity": 1,
                      "price": "72.0000",
                      "basePrice": "72.0000",
                      "total": "72.0000",
                      "baseTotal": "72.0000",
                      "type": "simple",
                      "formattedPrice": "$72.00",
                      "formattedTotal": "$72.00",
                      "productUrlKey": "premium-hoodie",
                      "canChangeQty": true,
                      "options": []
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "grp-token-456",
              "isGuest": true,
              "itemsQty": 3,
              "itemsCount": 3
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID does not exist
        solution: Verify the product ID
      - error: MISSING_GROUPED_QUANTITIES
        cause: Not all associated product IDs are included in groupedQty
        solution: Include all associated product IDs in the groupedQty JSON with their quantities

  - id: add-bundle-product-to-cart
    title: Add Bundle Product to Cart
    description: |
      Add a bundle product to the cart. Requires `bundleOptions` (a JSON string mapping bundle option IDs to arrays of selected product IDs) and `bundleOptionQty` (a JSON string mapping bundle option IDs to their quantities). For checkbox/multiselect options, quantities are fixed by admin; for radio/select options, customers can specify quantities.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $quantity: Int!
        $bundleOptions: String
        $bundleOptionQty: String
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            bundleOptions: $bundleOptions
            bundleOptionQty: $bundleOptionQty
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  basePrice
                  total
                  baseImage
                  baseTotal
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 6,
        "quantity": 1,
        "bundleOptions": "{\"1\":[1],\"2\":[2],\"3\":[3],\"4\":[4]}",
        "bundleOptionQty": "{\"2\":3,\"3\":4,\"4\":3}"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4488",
              "_id": 4488,
              "cartToken": "bundle-token-789",
              "subtotal": "350.0000",
              "grandTotal": "350.0000",
              "formattedSubtotal": "$350.00",
              "formattedGrandTotal": "$350.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5654,
                      "cartId": 4488,
                      "productId": 6,
                      "name": "Gaming Accessories Bundle",
                      "sku": "BUNDLE-001",
                      "quantity": 1,
                      "price": "350.0000",
                      "basePrice": "350.0000",
                      "total": "350.0000",
                      "baseImage": "{\"small_image_url\":\"http://example.com/cache/small/bundle.webp\",\"medium_image_url\":\"http://example.com/cache/medium/bundle.webp\",\"large_image_url\":\"http://example.com/cache/large/bundle.webp\",\"original_image_url\":\"http://example.com/cache/original/bundle.webp\"}",
                      "baseTotal": "350.0000",
                      "type": "bundle",
                      "formattedPrice": "$350.00",
                      "formattedTotal": "$350.00",
                      "productUrlKey": "gaming-accessories-bundle",
                      "canChangeQty": true,
                      "options": [
                        {
                          "option_id": "1",
                          "label": "Mouse",
                          "can_change_qty": false,
                          "is_required": true,
                          "value": [{ "id": "1", "qty": 1, "name": "Gaming Mouse Pro" }]
                        },
                        {
                          "option_id": "2",
                          "label": "Keyboard",
                          "can_change_qty": true,
                          "is_required": true,
                          "value": [{ "id": "2", "qty": 3, "name": "Mechanical Keyboard" }]
                        },
                        {
                          "option_id": "3",
                          "label": "Headset",
                          "can_change_qty": true,
                          "is_required": true,
                          "value": [{ "id": "3", "qty": 4, "name": "Surround Sound Headset" }]
                        },
                        {
                          "option_id": "4",
                          "label": "Mousepad",
                          "can_change_qty": true,
                          "is_required": false,
                          "value": [{ "id": "4", "qty": 3, "name": "XL Mousepad" }]
                        }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "bundle-token-789",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID does not exist
        solution: Verify the product ID
      - error: INVALID_BUNDLE_OPTIONS
        cause: Required bundle options are missing or invalid product IDs provided
        solution: Include all required bundle option IDs with valid product selections
      - error: INVALID_BUNDLE_QTY
        cause: Trying to change quantity for a checkbox/multiselect bundle option (admin-fixed qty)
        solution: Only specify quantities for radio/select bundle options; checkbox/multiselect quantities are fixed by admin

  - id: add-default-booking-product-to-cart
    title: Add Default Booking Product to Cart
    description: |
      Add a default booking product to the cart. The `booking` input is a JSON string containing `type`, `date` (YYYY-MM-DD), and `slot` (a time range string like "12:00 PM - 08:00 PM"). The API automatically converts the time range to Unix timestamps.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $booking: String!
        $quantity: Int
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            booking: $booking
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  basePrice
                  total
                  baseTotal
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 803,
        "quantity": 1,
        "booking": "{\"type\":\"default\",\"date\":\"2026-03-25\",\"slot\":\"12:00 PM - 08:00 PM\"}"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4489",
              "_id": 4489,
              "cartToken": "booking-default-token",
              "subtotal": "75.0000",
              "grandTotal": "75.0000",
              "formattedSubtotal": "$75.00",
              "formattedGrandTotal": "$75.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5655,
                      "cartId": 4489,
                      "productId": 803,
                      "name": "Default Booking Product",
                      "sku": "DEFAULT-BOOK-001",
                      "quantity": 1,
                      "price": "75.0000",
                      "basePrice": "75.0000",
                      "total": "75.0000",
                      "baseTotal": "75.0000",
                      "type": "booking",
                      "formattedPrice": "$75.00",
                      "formattedTotal": "$75.00",
                      "productUrlKey": "default-booking-product",
                      "canChangeQty": true,
                      "options": [
                        { "label": "Date", "value": "2026-03-25" },
                        { "label": "Slot", "value": "12:00 PM - 08:00 PM" }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "booking-default-token",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID does not exist
        solution: Verify the product ID
      - error: INVALID_BOOKING
        cause: Booking JSON is malformed or missing required fields
        solution: Ensure booking JSON contains type, date, and slot fields
      - error: SLOT_NOT_AVAILABLE
        cause: The selected time slot is already booked or not available on the selected date
        solution: Choose a different date or time slot

  - id: add-appointment-booking-product-to-cart
    title: Add Appointment Booking Product to Cart
    description: |
      Add an appointment booking product to the cart. The `booking` input is a JSON string with `type` set to "appointment", a `date` (YYYY-MM-DD), and a `slot` (time range string). Appointment slots are generated based on the product's configured duration and break time.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $booking: String!
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            booking: $booking
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  basePrice
                  total
                  baseTotal
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 795,
        "booking": "{\"type\":\"appointment\",\"date\":\"2026-03-28\",\"slot\":\"12:00 PM - 12:45 PM\"}"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4490",
              "_id": 4490,
              "cartToken": "booking-appt-token",
              "subtotal": "100.0000",
              "grandTotal": "100.0000",
              "formattedSubtotal": "$100.00",
              "formattedGrandTotal": "$100.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5656,
                      "cartId": 4490,
                      "productId": 795,
                      "name": "Appointment Booking Product",
                      "sku": "APPT-001",
                      "quantity": 1,
                      "price": "100.0000",
                      "basePrice": "100.0000",
                      "total": "100.0000",
                      "baseTotal": "100.0000",
                      "type": "booking",
                      "formattedPrice": "$100.00",
                      "formattedTotal": "$100.00",
                      "productUrlKey": "appointment-booking-product",
                      "canChangeQty": false,
                      "options": [
                        { "label": "Date", "value": "2026-03-28" },
                        { "label": "Slot", "value": "12:00 PM - 12:45 PM" }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "booking-appt-token",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: PRODUCT_NOT_FOUND
        cause: Product ID does not exist
        solution: Verify the product ID
      - error: SLOT_NOT_AVAILABLE
        cause: The selected appointment slot is already booked
        solution: Choose a different time slot or date

  - id: add-rental-booking-product-daily-to-cart
    title: Add Rental Booking Product to Cart (Daily)
    description: |
      Add a rental booking product with daily renting to the cart. For daily rentals, the `booking` JSON requires `renting_type` set to "daily", `date_from` (start date), and `date_to` (end date). The price is calculated based on the number of rental days.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $booking: String!
        $quantity: Int
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            booking: $booking
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  total
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 801,
        "quantity": 1,
        "booking": "{\"type\":\"rental\",\"renting_type\":\"daily\",\"date_from\":\"2026-03-24\",\"date_to\":\"2026-03-26\"}"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4491",
              "_id": 4491,
              "cartToken": "rental-daily-token",
              "subtotal": "200.0000",
              "grandTotal": "200.0000",
              "formattedSubtotal": "$200.00",
              "formattedGrandTotal": "$200.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5657,
                      "cartId": 4491,
                      "productId": 801,
                      "name": "Rental Booking Product",
                      "sku": "RENTAL-001",
                      "quantity": 1,
                      "price": "200.0000",
                      "total": "200.0000",
                      "type": "booking",
                      "formattedPrice": "$200.00",
                      "formattedTotal": "$200.00",
                      "productUrlKey": "rental-booking-product",
                      "canChangeQty": true,
                      "options": [
                        { "label": "Renting Type", "value": "Daily" },
                        { "label": "Date From", "value": "2026-03-24" },
                        { "label": "Date To", "value": "2026-03-26" }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "rental-daily-token",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: INVALID_DATE_RANGE
        cause: date_from is after date_to or dates are in the past
        solution: Ensure date_from is before date_to and both are future dates

  - id: add-rental-booking-product-hourly-to-cart
    title: Add Rental Booking Product to Cart (Hourly)
    description: |
      Add a rental booking product with hourly renting to the cart. For hourly rentals, the `booking` JSON requires `renting_type` set to "hourly", a `date`, and a `slot` (time range string). The API converts the time range to timestamps automatically.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $booking: String!
        $quantity: Int
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            booking: $booking
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  total
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 2556,
        "quantity": 1,
        "booking": "{\"type\":\"rental\",\"renting_type\":\"hourly\",\"date\":\"2026-03-19\",\"slot\":\"11:00 AM - 12:00 PM\"}"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4492",
              "_id": 4492,
              "cartToken": "rental-hourly-token",
              "subtotal": "15.0000",
              "grandTotal": "15.0000",
              "formattedSubtotal": "$15.00",
              "formattedGrandTotal": "$15.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5658,
                      "cartId": 4492,
                      "productId": 2556,
                      "name": "Rental Booking Product",
                      "sku": "RENTAL-002",
                      "quantity": 1,
                      "price": "15.0000",
                      "total": "15.0000",
                      "type": "booking",
                      "formattedPrice": "$15.00",
                      "formattedTotal": "$15.00",
                      "productUrlKey": "rental-booking-product-hourly",
                      "canChangeQty": true,
                      "options": [
                        { "label": "Renting Type", "value": "Hourly" },
                        { "label": "Date", "value": "2026-03-19" },
                        { "label": "Slot", "value": "11:00 AM - 12:00 PM" }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "rental-hourly-token",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: SLOT_NOT_AVAILABLE
        cause: The selected hourly slot is not available on the chosen date
        solution: Choose a different time slot or date

  - id: add-event-booking-product-to-cart
    title: Add Event Booking Product to Cart
    description: |
      Add an event booking product to the cart. The `booking` JSON requires `type` set to "event" and `qty` — an object mapping ticket type IDs to their quantities. At least one ticket must have a quantity greater than 0.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $booking: String!
        $quantity: Int
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            booking: $booking
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  total
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 798,
        "quantity": 1,
        "booking": "{\"type\":\"event\",\"qty\":{\"1\":1,\"2\":1}}"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4493",
              "_id": 4493,
              "cartToken": "event-token-123",
              "subtotal": "150.0000",
              "grandTotal": "150.0000",
              "formattedSubtotal": "$150.00",
              "formattedGrandTotal": "$150.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5659,
                      "cartId": 4493,
                      "productId": 798,
                      "name": "Event Booking Product",
                      "sku": "EVENT-001",
                      "quantity": 1,
                      "price": "150.0000",
                      "total": "150.0000",
                      "type": "booking",
                      "formattedPrice": "$150.00",
                      "formattedTotal": "$150.00",
                      "productUrlKey": "event-booking-product",
                      "canChangeQty": false,
                      "options": [
                        { "label": "Ticket - General Admission", "value": "1 x $50.00" },
                        { "label": "Ticket - VIP", "value": "1 x $100.00" }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "event-token-123",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: INVALID_TICKET_QTY
        cause: All ticket quantities are 0 or no ticket quantities provided
        solution: At least one ticket type must have a quantity greater than 0
      - error: TICKETS_SOLD_OUT
        cause: Requested quantity exceeds available tickets
        solution: Reduce ticket quantity or choose a different ticket type

  - id: add-table-booking-product-to-cart
    title: Add Table Booking Product to Cart
    description: |
      Add a table booking product to the cart. The `booking` JSON requires `type` set to "table", a `date`, and a `slot`. Table bookings also require a `bookingNote` (or `specialNote`) for special requests — this is mandatory for table reservations.
    query: |
      mutation createAddProductInCart(
        $productId: Int!
        $booking: String!
        $quantity: Int
        $specialNote: String
      ) {
        createAddProductInCart(
          input: {
            productId: $productId
            quantity: $quantity
            booking: $booking
            bookingNote: $specialNote
          }
        ) {
          addProductInCart {
            id
            _id
            cartToken
            subtotal
            grandTotal
            formattedSubtotal
            formattedGrandTotal
            items {
              totalCount
              edges {
                cursor
                node {
                  id
                  cartId
                  productId
                  name
                  sku
                  quantity
                  price
                  total
                  type
                  formattedPrice
                  formattedTotal
                  productUrlKey
                  canChangeQty
                  options
                }
              }
            }
            success
            message
            sessionToken
            isGuest
            itemsQty
            itemsCount
          }
        }
      }
    variables: |
      {
        "productId": 796,
        "quantity": 1,
        "booking": "{\"type\":\"table\",\"date\":\"2026-03-25\",\"slot\":\"12:00 PM - 12:45 PM\"}",
        "specialNote": "This is a special note"
      }
    response: |
      {
        "data": {
          "createAddProductInCart": {
            "addProductInCart": {
              "id": "/api/shop/add-product-in-cart/4494",
              "_id": 4494,
              "cartToken": "table-token-456",
              "subtotal": "0.0000",
              "grandTotal": "0.0000",
              "formattedSubtotal": "$0.00",
              "formattedGrandTotal": "$0.00",
              "items": {
                "totalCount": 1,
                "edges": [
                  {
                    "cursor": "MA==",
                    "node": {
                      "id": 5660,
                      "cartId": 4494,
                      "productId": 796,
                      "name": "Table Booking Product",
                      "sku": "TABLE-001",
                      "quantity": 1,
                      "price": "0.0000",
                      "total": "0.0000",
                      "type": "booking",
                      "formattedPrice": "$0.00",
                      "formattedTotal": "$0.00",
                      "productUrlKey": "table-booking-product",
                      "canChangeQty": false,
                      "options": [
                        { "label": "Date", "value": "2026-03-25" },
                        { "label": "Slot", "value": "12:00 PM - 12:45 PM" },
                        { "label": "Note", "value": "This is a special note" }
                      ]
                    }
                  }
                ]
              },
              "success": true,
              "message": "Product added to cart successfully.",
              "sessionToken": "table-token-456",
              "isGuest": true,
              "itemsQty": 1,
              "itemsCount": 1
            }
          }
        }
      }
    commonErrors:
      - error: MISSING_BOOKING_NOTE
        cause: Table bookings require a note/special request
        solution: Provide a bookingNote or specialNote parameter
      - error: SLOT_NOT_AVAILABLE
        cause: The selected table slot is already reserved
        solution: Choose a different time slot or date
---

# Add to Cart

## About

The `createAddProductInCart` mutation adds a product to a customer's shopping cart. Use this mutation to:

- Add products from product detail pages to cart
- Implement "Add to Cart" buttons and flows
- Add products programmatically from search results
- Handle quantity selection and product-specific options
- Support all product types: simple, configurable, downloadable, grouped, bundle, and booking

This mutation validates product availability, applies applicable pricing rules, and updates the cart totals. It returns the complete updated cart state including all items, pricing, and tax information.

## Authentication

This mutation supports both authenticated customers and guest users:

- **Authenticated customers**: Provide a valid customer authentication token in the `Authorization` header. Obtain this token via the [Customer Login API](/api/graphql-api/shop/mutations/customer-login).
- **Guest users**: Provide the Guest Cart Token `cartToken` obtained from the [Create Cart mutation](/api/graphql-api/shop/mutations/create-cart).

```
Authorization: Bearer <accessToken>
```

## Input Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `productId` | `Int!` | Yes | The product ID to add to the cart. |
| `quantity` | `Int` | No | Number of units to add. Defaults to `1` if omitted. |
| `selectedConfigurableOption` | `Int` | Configurable only | The child variant product ID for configurable products. |
| `superAttribute` | `Iterable` | Configurable only | Array of attribute-option mappings, e.g., `[{"23": 2}, {"24": 8}]` where keys are attribute IDs and values are option IDs. |
| `links` | `Iterable` | Downloadable only | Array of downloadable link IDs the customer wants to purchase, e.g., `[1, 2]`. |
| `groupedQty` | `String` | Grouped only | JSON string mapping each associated product ID to its quantity, e.g., `"{\"1\":1,\"3\":2}"`. All associated products must be included. |
| `bundleOptions` | `String` | Bundle only | JSON string mapping bundle option IDs to arrays of selected product IDs, e.g., `"{\"1\":[1],\"2\":[2]}"`. |
| `bundleOptionQty` | `String` | Bundle only | JSON string mapping bundle option IDs to their quantities, e.g., `"{\"2\":3,\"3\":4}"`. Only applies to radio/select options; checkbox/multiselect quantities are fixed by admin. |
| `booking` | `String` | Booking only | JSON string containing booking details. Structure varies by booking type (see [Booking Input Reference](#booking-input-reference) below). |
| `bookingNote` | `String` | Table booking only | Special note or request for table bookings. Required for table booking type. |
| `isBuyNow` | `Int` | No | Set to `1` for buy-now flow (creates a new cart for immediate checkout). Default: `0`. |

## Input Requirements by Product Type

| Product Type | Required Fields | Optional Fields |
|---|---|---|
| **Simple** | `productId` | `quantity` |
| **Configurable** | `productId`, `selectedConfigurableOption`, `superAttribute` | `quantity` |
| **Downloadable** | `productId`, `links` | `quantity` |
| **Grouped** | `productId`, `groupedQty` | `quantity` |
| **Bundle** | `productId`, `bundleOptions` | `quantity`, `bundleOptionQty` |
| **Booking** | `productId`, `booking` | `quantity`, `bookingNote` |

## Booking Input Reference

The `booking` field accepts a JSON string whose structure varies by booking type. The API automatically converts human-readable time range strings (e.g., `"12:00 PM - 08:00 PM"`) to Unix timestamps internally.

| Booking Type | JSON Structure | Example |
|---|---|---|
| **Default** | `{"type":"default","date":"YYYY-MM-DD","slot":"HH:MM AM - HH:MM PM"}` | `{"type":"default","date":"2026-03-25","slot":"12:00 PM - 08:00 PM"}` |
| **Appointment** | `{"type":"appointment","date":"YYYY-MM-DD","slot":"HH:MM AM - HH:MM PM"}` | `{"type":"appointment","date":"2026-03-28","slot":"12:00 PM - 12:45 PM"}` |
| **Rental (Daily)** | `{"type":"rental","renting_type":"daily","date_from":"YYYY-MM-DD","date_to":"YYYY-MM-DD"}` | `{"type":"rental","renting_type":"daily","date_from":"2026-03-24","date_to":"2026-03-26"}` |
| **Rental (Hourly)** | `{"type":"rental","renting_type":"hourly","date":"YYYY-MM-DD","slot":"HH:MM AM - HH:MM PM"}` | `{"type":"rental","renting_type":"hourly","date":"2026-03-19","slot":"11:00 AM - 12:00 PM"}` |
| **Event** | `{"type":"event","qty":{"ticketId":qty,...}}` | `{"type":"event","qty":{"1":1,"2":1}}` |
| **Table** | `{"type":"table","date":"YYYY-MM-DD","slot":"HH:MM AM - HH:MM PM"}` + `bookingNote` param | `{"type":"table","date":"2026-03-25","slot":"12:00 PM - 12:45 PM"}` |

::: info Booking Type Notes
- **Event bookings**: At least one ticket type must have a quantity greater than 0.
- **Table bookings**: The `bookingNote` input parameter is required. It is passed separately from the `booking` JSON.
- **Rental bookings**: Daily rentals use `date_from`/`date_to`; hourly rentals use `date`/`slot`.
- **Slot format**: Time ranges like `"12:00 PM - 08:00 PM"` are automatically parsed and converted to Unix timestamps by the API.
:::

## Cart Item `options` Field

The `options` field on each cart item contains product-specific selection details. This data is essential for displaying what the customer selected on the cart page. The structure varies by product type:

| Product Type | Options Content | Example |
|---|---|---|
| **Simple** | Not present — no additional options needed | — |
| **Configurable** | Selected attribute values (color, size, etc.) | `[{"id":"23","label":"Color","value":"Blue","option_id":"2"}]` |
| **Downloadable** | Selected downloadable links | `[{"link_id":"1","title":"PDF Version","price":15}]` |
| **Grouped** | Individual product quantities | `[{"product_id":"101","name":"Product A","qty":2}]` |
| **Bundle** | Selected bundle options and quantities | `[{"option_id":"1","label":"Mouse","can_change_qty":true,"value":[...]}]` |
| **Booking** | Booking date, slot, and note details | `[{"label":"Date","value":"2026-03-25"},{"label":"Slot","value":"12:00 PM - 12:45 PM"}]` |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `id` | `ID!` | Cart identifier in IRI format. |
| `_id` | `Int!` | Numeric cart ID. |
| `cartToken` | `String!` | Cart session token for guest users. |
| `customerId` | `Int` | Customer ID (null for guest users). |
| `channelId` | `Int!` | Channel the cart belongs to. |
| `subtotal` | `String!` | Cart subtotal before tax and shipping. |
| `grandTotal` | `String!` | Final cart total including tax and discounts. |
| `discountAmount` | `String` | Total discount applied. |
| `taxAmount` | `String` | Total tax amount. |
| `shippingAmount` | `String` | Shipping cost. |
| `couponCode` | `String` | Applied coupon code, if any. |
| `items` | `CartItemConnection!` | Paginated collection of cart items. |
| `items.totalCount` | `Int!` | Total number of items in cart. |
| `items.edges.node` | `CartItem!` | Individual cart item with product details, pricing, and options. |
| `success` | `Boolean!` | Whether the product was added successfully. |
| `message` | `String!` | Success or error message. |
| `sessionToken` | `String` | Session token for cart persistence. |
| `isGuest` | `Boolean!` | Whether the cart belongs to a guest user. |
| `itemsQty` | `Int!` | Total quantity of all items in cart. |
| `itemsCount` | `Int!` | Number of distinct items in cart. |
| `haveStockableItems` | `Boolean!` | Whether cart contains physical/shippable items. |

## Best Practices

1. **Use Product-Specific Fields** — Only pass the input fields relevant to the product type being added (e.g., don't pass `booking` for simple products)
2. **Handle Options in Cart Display** — Use the `options` field on cart items to display what the customer selected (variant attributes, bundle choices, booking dates, etc.)
3. **Check `success` Field** — Always check the `success` boolean and `message` in the response to handle errors gracefully
4. **Persist Session Token** — Store the `sessionToken`/`cartToken` returned for guest users to maintain cart state across requests
5. **Validate Booking Slots** — For booking products, retrieve available slots from the product query before adding to cart
6. **Bundle Qty Restrictions** — For bundle products, note that checkbox/multiselect option quantities are admin-controlled and cannot be changed by customers

## Related Resources

- [Create Cart](/api/graphql-api/shop/mutations/create-cart) - Create a new cart (required for guest users)
- [Update Cart Item](/api/graphql-api/shop/mutations/update-cart-item) - Update quantity of items in cart
- [Remove Cart Item](/api/graphql-api/shop/mutations/remove-cart-item) - Remove items from cart
- [Get Cart](/api/graphql-api/shop/queries/get-cart) - Retrieve current cart state
- [Single Product](/api/graphql-api/shop/queries/get-product) - Get product details and available options
