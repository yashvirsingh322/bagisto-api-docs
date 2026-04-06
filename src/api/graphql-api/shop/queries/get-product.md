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
        "id": 2499
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2499",
            "name": "Ivory Frost Classic Overcoat XL",
            "sku": "sku-345346346-variant-9",
            "urlKey": "sku-345346346-variant-9",
            "price": "500"
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
        "sku": "sku-345346346-variant-9"
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2499",
            "name": "Ivory Frost Classic Overcoat XL",
            "sku": "sku-345346346-variant-9",
            "urlKey": "sku-345346346-variant-9",
            "price": "500"
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
        "id": 2468
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2468",
            "name": "Minimalist Cotton Shirt",
            "sku": "345325",
            "urlKey": "minimalist-cotton-shirt",
            "price": "0",
            "variants": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/products/2469",
                    "name": "قميص قطني أصفر بتصميم بسيط، مقاس صغير",
                    "sku": "345325-variant-3-6",
                    "price": "463",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/products/2470",
                    "name": "Minimalist Cotton Shirt Lavender Grey S",
                    "sku": "345325-variant-26-6",
                    "price": "463",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/products/2471",
                    "name": "Minimalist Cotton Shirt Charcoal S",
                    "sku": "345325-variant-27-6",
                    "price": "463",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/products/2472",
                    "name": "Minimalist Cotton Shirt Yellow M",
                    "sku": "345325-variant-3-7",
                    "price": "463",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/products/2473",
                    "name": "Minimalist Cotton Shirt Lavender Grey M",
                    "sku": "345325-variant-26-7",
                    "price": "463",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/products/2474",
                    "name": "Minimalist Cotton Shirt Charcoal M",
                    "sku": "345325-variant-27-7",
                    "price": "463",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
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
          superAttributeOptions
          combinations
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
        "id": 2478
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2478",
            "name": "Contemporary Fit Cut-Out Top",
            "sku": "sku9324729384",
            "type": "configurable",
            "urlKey": "contemporary-fit-cut-out-top",
            "locale": "en",
            "channel": null,
            "status": "1",
            "description": "This modern cut-out tank top is designed for those who prefer bold simplicity with a contemporary edge. Crafted with a body-hugging fit and subtle ribbed texture, it enhances the silhouette while keeping the look clean and refined",
            "shortDescription": "A sleek ribbed tank top with a bold cut-out detail, designed to make a confident style statement with minimal effort.",
            "color": "",
            "size": "",
            "featured": "",
            "new": "1",
            "guestCheckout": "1",
            "isSaleable": "1",
            "price": "0",
            "specialPrice": null,
            "minimumPrice": "435",
            "maximumPrice": "435",
            "regularMinimumPrice": "435",
            "regularMaximumPrice": "435",
            "formattedPrice": "$0.00",
            "formattedSpecialPrice": null,
            "formattedMinimumPrice": "$435.00",
            "formattedMaximumPrice": "$435.00",
            "formattedRegularMinimumPrice": "$435.00",
            "formattedRegularMaximumPrice": "$435.00",
            "superAttributeOptions": "[{\"id\":23,\"code\":\"color\",\"label\":\"Color\",\"options\":[{\"id\":1,\"label\":\"Red\"},{\"id\":5,\"label\":\"White\"},{\"id\":20,\"label\":\"Ash grey\"}]},{\"id\":24,\"code\":\"size\",\"label\":\"Size\",\"options\":[{\"id\":6,\"label\":\"S\"}]}]",
            "combinations": "{\"2479\":{\"color\":1,\"size\":6},\"2480\":{\"color\":5,\"size\":6},\"2482\":{\"color\":20,\"size\":6}}",
            "images": {
              "edges": [
                {
                  "node": {
                    "id": "/api/admin/images/678",
                    "publicPath": "https://api-demo.bagisto.com/storage/product/2478/AA1X8qJMtgi3HKHGiwmV1LEPFrQk6Z8aYPc137Y0.webp",
                    "position": "1"
                  }
                },
                {
                  "node": {
                    "id": "/api/admin/images/679",
                    "publicPath": "https://api-demo.bagisto.com/storage/product/2478/LXF5IyrOREvTpNl0mMMeWgMLNFFWb7LqQjfn21H6.webp",
                    "position": "2"
                  }
                },
                {
                  "node": {
                    "id": "/api/admin/images/680",
                    "publicPath": "https://api-demo.bagisto.com/storage/product/2478/1P3HJK8nT9Bl5sPoG2zuR0AqNbPpJ3faR7u9aAaF.webp",
                    "position": "3"
                  }
                },
                {
                  "node": {
                    "id": "/api/admin/images/681",
                    "publicPath": "https://api-demo.bagisto.com/storage/product/2478/BXiWC67lLJGuIrbaA20JTaJ9eeEvLWXFKabsA0sj.webp",
                    "position": "4"
                  }
                },
                {
                  "node": {
                    "id": "/api/admin/images/682",
                    "publicPath": "https://api-demo.bagisto.com/storage/product/2478/y4arFOtq37paTb2XpIhtKLiA0QGqsIvOsBpRKKOV.webp",
                    "position": "5"
                  }
                },
                {
                  "node": {
                    "id": "/api/admin/images/683",
                    "publicPath": "https://api-demo.bagisto.com/storage/product/2478/ynwH4VNSV0lJi26P8pyZLKCRKXFOEHQdGI7wbChD.webp",
                    "position": "6"
                  }
                }
              ]
            },
            "attributeValues": {
              "edges": [
                {
                  "node": {
                    "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                    "attribute": {
                      "code": "short_description",
                      "adminName": "Short Description"
                    }
                  }
                },
                {
                  "node": {
                    "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                    "attribute": {
                      "code": "description",
                      "adminName": "Description"
                    }
                  }
                },
                {
                  "node": {
                    "value": "COASTALBREEZEMENSHOODIE",
                    "attribute": {
                      "code": "sku",
                      "adminName": "SKU"
                    }
                  }
                },
                {
                  "node": {
                    "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                    "attribute": {
                      "code": "name",
                      "adminName": "Name"
                    }
                  }
                },
                {
                  "node": {
                    "value": "coastal-breeze-mens-blue-zipper-hoodie",
                    "attribute": {
                      "code": "url_key",
                      "adminName": "URL Key"
                    }
                  }
                },
                {
                  "node": {
                    "value": "",
                    "attribute": {
                      "code": "product_number",
                      "adminName": "Product Number"
                    }
                  }
                },
                {
                  "node": {
                    "value": "1",
                    "attribute": {
                      "code": "manage_stock",
                      "adminName": "Manage Stock"
                    }
                  }
                },
                {
                  "node": {
                    "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                    "attribute": {
                      "code": "meta_title",
                      "adminName": "Meta Title"
                    }
                  }
                },
                {
                  "node": {
                    "value": "",
                    "attribute": {
                      "code": "meta_keywords",
                      "adminName": "Meta Keywords"
                    }
                  }
                },
                {
                  "node": {
                    "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                    "attribute": {
                      "code": "meta_description",
                      "adminName": "Meta Description"
                    }
                  }
                }
              ]
            },
            "variants": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/products/2479",
                    "name": "Contemporary Fit Cut-Out Top Red S",
                    "sku": "sku9324729384-variant-1-6",
                    "price": "435",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/products/2480",
                    "name": "Contemporary Fit Cut-Out Top White S",
                    "sku": "sku9324729384-variant-4-6",
                    "price": "435",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/products/2482",
                    "name": "Contemporary Fit Cut-Out Top Ash Grey S",
                    "sku": "sku9324729384-variant-20-6",
                    "price": "435",
                    "attributeValues": {
                      "edges": [
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control. Convenient front pockets are perfect for storage and keeping your hands warm.",
                            "attribute": {
                              "code": "short_description",
                              "adminName": "Short Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "The Coastal Breeze Men's Blue Zipper Hoodie is your reliable companion for staying warm, comfortable, and stylish. This hoodie is designed for the modern man who values both fashion and functionality. The stylish blue design adds a touch of contemporary flair, making it suitable for various occasions, whether you're running errands, heading to the gym, or simply enjoying a relaxed day out. Warmth is a top priority, and this hoodie delivers. The interior lining is soft and cozy, ensuring that you stay comfortable and warm even in cooler weather. It's the perfect addition to your wardrobe when you need that extra layer of insulation. The full zipper closure is not just about style; it allows you to control your comfort and temperature easily. You can wear the hoodie fully zipped for maximum warmth or open it up for a more relaxed look. This versatility makes it a go-to choice for various settings. Convenience is key, and the front pockets provide just that. They are perfect for storing your essentials, whether it's your phone, wallet, or keys. Plus, they keep your hands warm during chilly days. Crafted from a comfortable and durable cotton blend, this hoodie is designed to withstand everyday wear and maintain its stylish appeal. Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This hoodie is more than just clothing; it's a reflection of your modern and practical fashion sense. Let it be your reliable choice for staying cozy and fashionable in any situation, ensuring you look and feel your best.",
                            "attribute": {
                              "code": "description",
                              "adminName": "Description"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "COASTALBREEZEMENSHOODIE",
                            "attribute": {
                              "code": "sku",
                              "adminName": "SKU"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "name",
                              "adminName": "Name"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "coastal-breeze-mens-blue-zipper-hoodie",
                            "attribute": {
                              "code": "url_key",
                              "adminName": "URL Key"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "product_number",
                              "adminName": "Product Number"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "1",
                            "attribute": {
                              "code": "manage_stock",
                              "adminName": "Manage Stock"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Coastal Breeze Men's Blue Zipper Hoodie",
                            "attribute": {
                              "code": "meta_title",
                              "adminName": "Meta Title"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "",
                            "attribute": {
                              "code": "meta_keywords",
                              "adminName": "Meta Keywords"
                            }
                          }
                        },
                        {
                          "node": {
                            "value": "Stay warm and stylish with the Coastal Breeze Men's Blue Zipper Hoodie. This fashionable hoodie features a modern design, making it ideal for casual and active wear. The soft and cozy interior lining provides warmth, while the full zipper closure allows for versatile styling and temperature control.",
                            "attribute": {
                              "code": "meta_description",
                              "adminName": "Meta Description"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "categories": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/categories/22",
                    "translation": {
                      "name": "Fashion"
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
  - id: get-downloadable-product-samples
    title: Get Downloadable Product with Samples
    description: Retrieve a downloadable product with its downloadable links and product-level samples. Use the _id from each link or sample to download the corresponding file.
    query: |
      query getProduct($id: ID!) {
        product(id: $id) {
          _id
          name
          sku
          type
          price
          downloadableLinks {
            edges {
              node {
                _id
                type
                translation {
                  title
                }
                price
                formattedPrice
                sampleType
                sampleFile
                sampleFileUrl
                sampleUrl
              }
            }
          }
          downloadableSamples {
            edges {
              node {
                _id
                type
                file
                fileUrl
                url
                translation {
                  title
                }
              }
            }
          }
        }
      }
    variables: |
      {
        "id": 2506
      }
    response: |
      {
        "data": {
          "product": {
            "_id": 2506,
            "name": "Complete Personal Finance Guide (eBook PDF)",
            "sku": "COMPLETE-PERSONAL-FINANCE-GUIDE-EBOOK",
            "type": "downloadable",
            "price": "70",
            "downloadableLinks": {
              "edges": [
                {
                  "node": {
                    "_id": 2,
                    "type": "url",
                    "translation": {
                      "title": "Full eBook PDF"
                    },
                    "price": "69",
                    "formattedPrice": "$69.00",
                    "sampleType": "file",
                    "sampleFile": "product_downloadable_links/2506/4aUxeYumTemSR3QwHHHGmdiHBG2qWek3KDR8fhYK.pdf",
                    "sampleFileUrl": "https://api-demo.bagisto.com/api/downloadable/download-sample/link/2",
                    "sampleUrl": null
                  }
                }
              ]
            },
            "downloadableSamples": {
              "edges": [
                {
                  "node": {
                    "_id": 1,
                    "type": "file",
                    "file": "product_downloadable_links/2506/1apTXUkt2ugCISKHadT5Fmp4EwU7YeWYY2wb4mNs.pdf",
                    "fileUrl": "https://api-demo.bagisto.com/api/downloadable/download-sample/sample/1",
                    "url": null,
                    "translation": {
                      "title": ""
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
  - id: get-grouped-product
    title: Get Grouped Product
    description: Retrieve a grouped product with its associated child products and quantities. Grouped products bundle multiple simple products together, each with a default quantity.
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
                  formattedPrice
                  specialPrice
                  formattedSpecialPrice
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
          images {
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
    variables: |
      {
        "id": 2516
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2516",
            "name": "Arctic Frost Winter Accessories",
            "sku": "GP-001",
            "type": "grouped",
            "urlKey": "arctic-frost-winter-accessories",
            "locale": "en",
            "channel": null,
            "status": "1",
            "description": "Introducing the Arctic Frost Winter Accessories Bundle, your go-to solution for staying warm, stylish, and connected during the chilly winter days. This thoughtfully curated set brings together Four essential winter accessories to create a harmonious ensemble. The luxurious scarf, woven from a blend of acrylic and wool, not only adds a layer of warmth but also brings a touch of elegance to your winter wardrobe. The soft knit beanie, crafted with care, promises to keep you cozy while adding a fashionable flair to your look. But it doesn't end there – our bundle also includes touchscreen-compatible gloves. Stay connected without sacrificing warmth as you navigate your devices effortlessly. Whether you're answering calls, sending messages, or capturing winter moments on your smartphone, these gloves ensure convenience without compromising style. The soft and cozy texture of the socks offers a luxurious feel against your skin. Say goodbye to chilly feet as you embrace the plush warmth provided by these wool blend socks. The Arctic Frost Winter Accessories Bundle is not just about functionality; it's a statement of winter fashion. Each piece is designed not only to protect you from the cold but also to elevate your style during the frosty season. The materials chosen for this bundle prioritize both durability and comfort, ensuring that you can enjoy the winter wonderland in style. Whether you're treating yourself or searching for the perfect gift, the Arctic Frost Winter Accessories Bundle is a versatile choice. Delight someone special during the holiday season or elevate your own winter wardrobe with this stylish and functional ensemble. Embrace the frost with confidence, knowing that you have the perfect accessories to keep you warm and chic.",
            "shortDescription": "Embrace the winter chill with our Arctic Frost Winter Accessories Bundle. This curated set includes a luxurious scarf, a cozy beanie, touchscreen-compatible gloves and wool Blend Socks. Stylish and functional, this ensemble is crafted from high-quality materials, ensuring both durability and comfort. Elevate your winter wardrobe or delight someone special with this perfect gifting option.",
            "featured": "1",
            "new": "1",
            "guestCheckout": "1",
            "isSaleable": "1",
            "price": "0",
            "specialPrice": null,
            "minimumPrice": "14",
            "maximumPrice": "21",
            "regularMinimumPrice": "14",
            "regularMaximumPrice": "21",
            "formattedPrice": "$0.00",
            "formattedSpecialPrice": null,
            "formattedMinimumPrice": "$14.00",
            "formattedMaximumPrice": "$21.00",
            "formattedRegularMinimumPrice": "$14.00",
            "formattedRegularMaximumPrice": "$21.00",
            "groupedProducts": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/product_grouped_products/1",
                    "qty": 1,
                    "sortOrder": 0,
                    "associatedProduct": {
                      "id": "/api/shop/products/2512",
                      "name": "Arctic Cozy Knit Unisex Beanie",
                      "sku": "SP-001",
                      "price": "14",
                      "formattedPrice": "$14.00",
                      "specialPrice": null,
                      "formattedSpecialPrice": null,
                      "images": {
                        "edges": [
                          {
                            "node": {
                              "id": "/api/admin/images/851",
                              "publicPath": "https://api-demo.bagisto.com/storage/product/2512/Muc0qeWks34MTZaxf38s6DBmfqMqrCxku81Uo8EB.webp"
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/product_grouped_products/2",
                    "qty": 1,
                    "sortOrder": 1,
                    "associatedProduct": {
                      "id": "/api/shop/products/2514",
                      "name": "Arctic Touchscreen Winter Gloves",
                      "sku": "SP-003",
                      "price": "21",
                      "formattedPrice": "$21.00",
                      "specialPrice": "17",
                      "formattedSpecialPrice": "$17.00",
                      "images": {
                        "edges": [
                          {
                            "node": {
                              "id": "/api/admin/images/853",
                              "publicPath": "https://api-demo.bagisto.com/storage/product/2514/g8lR0Ity8HcpE20A4yAkX5wvLY5RlTC67NJKyyg6.webp"
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/product_grouped_products/3",
                    "qty": 1,
                    "sortOrder": 2,
                    "associatedProduct": {
                      "id": "/api/shop/products/2515",
                      "name": "Arctic Warmth Wool Blend Socks",
                      "sku": "SP-004",
                      "price": "21",
                      "formattedPrice": "$21.00",
                      "specialPrice": null,
                      "formattedSpecialPrice": null,
                      "images": {
                        "edges": [
                          {
                            "node": {
                              "id": "/api/admin/images/854",
                              "publicPath": "https://api-demo.bagisto.com/storage/product/2515/442ouyaT1K4weKSZGhSDtSKDBbrhiH0aWWwGcFW0.webp"
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            "images": {
              "edges": [
                {
                  "node": {
                    "id": "/api/admin/images/855",
                    "publicPath": "https://api-demo.bagisto.com/storage/product/2516/5Kgto6KVm6FLMaaDEY6pwCcVoTIhX03D3OGDzwbf.webp",
                    "position": "1"
                  }
                }
              ]
            },
            "categories": {
              "edges": []
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
                availableFrom
                availableTo
                qty
                location
                availableEveryWeek
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
        "id": 2509
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2509",
            "name": "Men's Haircut Appointment",
            "sku": "SALON-HAIRCUT-APPOINTMENT",
            "urlKey": "mens-haircut-appointment",
            "price": "60",
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": 3,
                    "type": "appointment",
                    "availableFrom": "2026-04-06T06:30:00.000000Z",
                    "availableTo": "2026-12-30T06:30:00.000000Z",
                    "qty": 10,
                    "location": "Noida, Uttar Pradesh",
                    "availableEveryWeek": "0",
                    "appointmentSlot": {
                      "id": "1",
                      "_id": 1,
                      "bookingProductId": "3",
                      "duration": 45,
                      "breakTime": 15,
                      "sameSlotAllDays": "1",
                      "slots": "[{\"to\": \"10:45\", \"from\": \"10:00\"}, {\"to\": \"11:45\", \"from\": \"11:00\"}, {\"to\": \"12:45\", \"from\": \"12:00\"}, {\"to\": \"14:45\", \"from\": \"14:00\"}, {\"to\": \"15:45\", \"from\": \"15:00\"}]"
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
                availableFrom
                availableTo
                qty
                location
                availableEveryWeek
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
        "id": 2510
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2510",
            "name": "Wooden Folding Chair Rental",
            "sku": "WOODEN-FOLDING-CHAIR-RENTAL",
            "urlKey": "wooden-folding-chair-rental",
            "price": "109",
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": 4,
                    "type": "rental",
                    "availableFrom": "2026-04-06T06:30:00.000000Z",
                    "availableTo": "2026-04-30T06:30:00.000000Z",
                    "qty": 150,
                    "location": "Noida, Uttar Pradesh",
                    "availableEveryWeek": "0",
                    "rentalSlot": {
                      "id": "1",
                      "_id": 1,
                      "bookingProductId": "4",
                      "rentingType": "daily_hourly",
                      "dailyPrice": "99",
                      "hourlyPrice": "105",
                      "sameSlotAllDays": "1",
                      "slots": "[{\"to\": \"18:00\", \"from\": \"12:00\"}]"
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
                availableFrom
                availableTo
                qty
                location
                availableEveryWeek
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
        "id": 2507
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2507",
            "name": "Professional Photography Session",
            "sku": "PROFESSIONAL-PHOTOGRAPHY-SESSION",
            "urlKey": "professional-photography-session",
            "price": "100",
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": 1,
                    "type": "default",
                    "availableFrom": "2026-04-06T06:30:00.000000Z",
                    "availableTo": "2026-12-31T06:30:00.000000Z",
                    "qty": 150,
                    "location": "Noida, Uttar Pradesh",
                    "availableEveryWeek": null,
                    "defaultSlot": {
                      "id": "1",
                      "_id": 1,
                      "bookingType": "one",
                      "duration": null,
                      "breakTime": null,
                      "slots": "[{\"id\": \"1\", \"to\": \"18:00\", \"from\": \"12:00\", \"to_day\": \"1\", \"from_day\": \"1\"}, {\"id\": \"2\", \"to\": \"18:00\", \"from\": \"12:00\", \"to_day\": \"2\", \"from_day\": \"2\"}, {\"id\": \"1\", \"to\": \"18:00\", \"from\": \"12:00\", \"to_day\": \"3\", \"from_day\": \"3\"}]"
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
                availableFrom
                availableTo
                qty
                location
                availableEveryWeek
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
        "id": 2511
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2511",
            "name": "Fine Dining Table Reservation",
            "sku": "FINE-DINING-TABLE-RESERVATION",
            "urlKey": "fine-dining-table-reservation",
            "price": "200",
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": 5,
                    "type": "table",
                    "availableFrom": "2026-04-06T06:30:00.000000Z",
                    "availableTo": "2026-04-30T06:30:00.000000Z",
                    "qty": 5,
                    "location": "Mumbai, Maharashtra",
                    "availableEveryWeek": "0",
                    "tableSlot": {
                      "id": "1",
                      "_id": 1,
                      "bookingProductId": "5",
                      "priceType": "guest",
                      "guestLimit": 0,
                      "duration": 45,
                      "breakTime": 15,
                      "preventSchedulingBefore": 2,
                      "sameSlotAllDays": "1",
                      "slots": "[{\"to\": \"12:45\", \"from\": \"12:00\"}, {\"to\": \"13:45\", \"from\": \"13:00\"}, {\"to\": \"14:45\", \"from\": \"14:00\"}, {\"to\": \"19:45\", \"from\": \"19:00\"}, {\"to\": \"20:45\", \"from\": \"20:00\"}, {\"to\": \"21:45\", \"from\": \"21:00\"}]"
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
                availableFrom
                availableTo
                qty
                location
                availableEveryWeek
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
        "id": 2508
      }
    response: |
      {
        "data": {
          "product": {
            "id": "/api/shop/products/2508",
            "name": "Live Music Concert Ticket",
            "sku": "LIVE-MUSIC-CONCERT-TICKET",
            "urlKey": "live-music-concert-ticket",
            "price": "120",
            "bookingProducts": {
              "edges": [
                {
                  "node": {
                    "_id": 2,
                    "type": "event",
                    "availableFrom": "2026-04-06T06:30:00.000000Z",
                    "availableTo": "2026-04-30T06:30:00.000000Z",
                    "qty": 0,
                    "location": "Noida, Uttar Pradesh",
                    "availableEveryWeek": null,
                    "eventTickets": {
                      "edges": [
                        {
                          "node": {
                            "id": "7",
                            "_id": 7,
                            "bookingProductId": "2",
                            "price": "120",
                            "qty": 1500,
                            "specialPrice": "115",
                            "specialPriceFrom": "2026-04-06 12:00:00",
                            "specialPriceTo": "2026-04-30 12:00:00"
                          }
                        },
                        {
                          "node": {
                            "id": "8",
                            "_id": 8,
                            "bookingProductId": "2",
                            "price": "125",
                            "qty": 150,
                            "specialPrice": "120",
                            "specialPriceFrom": "2026-04-02 12:00:00",
                            "specialPriceTo": "2026-04-30 12:00:00"
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
| `superAttributeOptions` | `String (JSON)` | JSON-encoded array of configurable attribute options (e.g. color, size) with their available values. Only populated for **configurable** products — returns the attributes and selectable options that define the product's variants. |
| `combinations` | `String (JSON)` | JSON-encoded object mapping variant product IDs to their attribute option combinations. Each key is a variant ID and the value contains the attribute option IDs that define that variant. Only populated for **configurable** products. |
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

## Configurable Products

A **configurable product** is a product that has multiple variants based on attributes like color, size, or material. For example, a T-shirt that comes in 3 colors and 2 sizes would have 6 variants. When querying a configurable product, two additional fields are returned that are essential for building a variant selection UI:

### `superAttributeOptions`

This field returns a JSON-encoded string containing the configurable attributes and their selectable options. Each entry includes:

- `code` — the attribute code (e.g. `color`, `size`)
- `label` — the display label (e.g. `Color`, `Size`)
- `options` — an array of available values, each with an `id` and `label`

Use this field to render attribute dropdowns (e.g. color picker, size selector) on the product detail page.

### `combinations`

This field returns a JSON-encoded object that maps each **variant product ID** to its specific attribute option combination. For example:

```json
{"8": {"color": 3, "size": 7}, "9": {"color": 3, "size": 8}}
```

This means variant ID `8` is the product with color option `3` and size option `7`. When a customer selects a color and size from the dropdowns, use this mapping to resolve which variant ID to load (for pricing, stock, images, etc.).

### How they work together

1. Use `superAttributeOptions` to render the attribute dropdowns on your product page
2. When the customer selects options (e.g. Color: Blue, Size: M), match their selection against the `combinations` object to find the corresponding variant ID
3. Use that variant ID to display the correct price, stock status, and images for the selected variant

> For non-configurable product types (simple, grouped, bundle, etc.), both `superAttributeOptions` and `combinations` will be `null`.

## Downloadable Products

A **downloadable** product contains digital files that customers can download after purchase. Each downloadable product can have two types of sample files:

### `downloadableLinks`

These are the individual download links that make up the product (e.g. Track 1, Track 2 for a music album, or Chapter 1, Chapter 2 for an e-book). Each link has its own price and can optionally have a **sample file** attached for preview. The fields `sampleFile`, `sampleFileUrl`, and `sampleUrl` provide details about the sample associated with each link.

### `downloadableSamples`

These are **product-level samples** — general preview files for the entire product rather than a specific link. The `_id` from each sample node is used to download the sample via:

```
GET /api/shop/downloadable/download-sample/sample/{_id}
```

### Downloading purchased files

After a customer purchases a downloadable product, the purchased files can be downloaded using the `_id` from the [Get Downloadable Products](/api/graphql-api/shop/queries/get-customer-downloadable-products) query (not the product query). See the [Download Downloadable Product](/api/graphql-api/shop/queries/download-downloadable-product) page for full details.

> Sample downloads are free and do not require authentication. Purchased file downloads require customer authentication and have a limited number of downloads.

## Grouped Products

A **grouped product** bundles multiple simple products together, allowing customers to purchase them as a set. Unlike a bundle product where the customer selects options, a grouped product presents each child product with a default quantity that the customer can adjust before adding to cart.

### `groupedProducts`

This field returns the list of associated child products via the `groupedProducts` connection. Each node contains:

- `id` — the grouped product relationship ID
- `qty` — the default quantity for that child product in the group
- `sortOrder` — the display order of the child product
- `associatedProduct` — the full child product details including `id`, `name`, `sku`, `price`, `formattedPrice`, `specialPrice`, `formattedSpecialPrice`, and `images`

### Pricing behavior

A grouped product's own `price` is always `0` because it does not have a standalone price. Instead, the price range is derived from its child products:

- `minimumPrice` — the lowest priced child product
- `maximumPrice` — the highest priced child product

The customer's total depends on which child products they select and in what quantities.

> For non-grouped product types, the `groupedProducts` field will return an empty edges array.

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
