---
outline: false
examples:
  - id: tree-categories-basic
    title: Tree Categories - Basic
    description: Retrieve root and child categories with their basic hierarchical structure.
    query: |
      query treeCategories {
        treeCategories(parentId: 1) {
          id
          _id
          position
          status
          translation {
            name
            slug
            urlPath
          }
          children(first: 100) {
            edges {
              node {
                id
                _id
                position
                status
                translation {
                  name
                  slug
                  urlPath
                }
              }
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "treeCategories": [
            {
              "id": "/api/shop/categories/8",
              "_id": 8,
              "position": 2,
              "status": "1",
              "translation": {
                "name": "Electronics",
                "slug": "electronics",
                "urlPath": "electronics"
              },
              "children": {
                "edges": []
              }
            },
            {
              "id": "/api/shop/categories/23",
              "_id": 23,
              "position": 3,
              "status": "1",
              "translation": {
                "name": "Furniture",
                "slug": "furniture",
                "urlPath": ""
              },
              "children": {
                "edges": [
                  {
                    "node": {
                      "id": "/api/shop/categories/19",
                      "_id": 19,
                      "position": 7,
                      "status": "1",
                      "translation": {
                        "name": "Plastic Sofa",
                        "slug": "plastic-sofa",
                        "urlPath": ""
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "/api/shop/categories/20",
                      "_id": 20,
                      "position": 6,
                      "status": "1",
                      "translation": {
                        "name": "Wooden Sofa",
                        "slug": "wooden-sofa",
                        "urlPath": ""
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "/api/shop/categories/21",
                      "_id": 21,
                      "position": 5,
                      "status": "1",
                      "translation": {
                        "name": "Leather Sofa",
                        "slug": "leather-sofa",
                        "urlPath": ""
                      }
                    }
                  }
                ]
              }
            },
            {
              "id": "/api/shop/categories/22",
              "_id": 22,
              "position": 4,
              "status": "1",
              "translation": {
                "name": "Fashion",
                "slug": "fashion",
                "urlPath": ""
              },
              "children": {
                "edges": []
              }
            }
          ]
        }
      }
    commonErrors:
      - error: INVALID_PARENT_ID
        cause: Parent category ID format is invalid or does not exist
        solution: Provide a valid parent category ID

  - id: tree-categories-complete
    title: Tree Categories - Complete Details
    description: Retrieve categories with all fields including logos, banners, display mode, and translations.
    query: |
      query treeCategories {
        treeCategories(parentId: 1) {
          id
          _id
          position
          status
          logoPath
          displayMode
          _lft
          _rgt
          additional
          bannerPath
          createdAt
          updatedAt
          url
          logoUrl
          bannerUrl
          translation {
            name
            slug
            urlPath
          }
          children(first: 100) {
            edges {
              node {
                id
                _id
                position
                status
                translation {
                  name
                  slug
                  urlPath
                }
              }
            }
          }
          translations(first: 1) {
            edges {
              node {
                id
                _id
                categoryId
                name
                slug
                urlPath
                description
                metaTitle
                metaDescription
                metaKeywords
                localeId
                locale
              }
              cursor
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
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "treeCategories": [
            {
              "id": "/api/shop/categories/8",
              "_id": 8,
              "position": 2,
              "status": "1",
              "logoPath": "category/8/Vk59z6w128ExCrY3lwlSYWhVrYenucFhTuick0VD.webp",
              "displayMode": "products_and_description",
              "_lft": "14",
              "_rgt": "15",
              "additional": null,
              "bannerPath": null,
              "createdAt": "2024-04-19T13:36:12+05:30",
              "updatedAt": "2026-01-02T19:23:45+05:30",
              "url": "https://api-demo.bagisto.com/electronics",
              "logoUrl": "https://api-demo.bagisto.com/storage/category/8/Vk59z6w128ExCrY3lwlSYWhVrYenucFhTuick0VD.webp",
              "bannerUrl": null,
              "translation": {
                "name": "Electronics",
                "slug": "electronics",
                "urlPath": "electronics"
              },
              "children": {
                "edges": []
              },
              "translations": {
                "edges": [
                  {
                    "node": {
                      "id": "/api/shop/category_translations/60",
                      "_id": 60,
                      "categoryId": "8",
                      "name": "Electronics",
                      "slug": "electronics",
                      "urlPath": "electronics",
                      "description": "<p>Discover a wide range of cutting-edge electronics, from smartphones and laptops to home appliances and gadgets.</p>",
                      "metaTitle": "Electronics",
                      "metaDescription": "",
                      "metaKeywords": "electronics, electronics-keyboard",
                      "localeId": "1",
                      "locale": "en"
                    },
                    "cursor": "MA=="
                  }
                ],
                "pageInfo": {
                  "endCursor": "MA==",
                  "startCursor": "MA==",
                  "hasNextPage": true,
                  "hasPreviousPage": false
                },
                "totalCount": 2
              }
            },
            {
              "id": "/api/shop/categories/23",
              "_id": 23,
              "position": 3,
              "status": "1",
              "logoPath": "category/23/GuIZOJY3oW09ku4zqxIfKvtXho9gOnq4eCl0HmOW.webp",
              "displayMode": "products_and_description",
              "_lft": "18",
              "_rgt": "25",
              "additional": null,
              "bannerPath": null,
              "createdAt": "2025-09-03T12:43:50+05:30",
              "updatedAt": "2025-09-03T18:26:45+05:30",
              "url": "https://api-demo.bagisto.com/furniture",
              "logoUrl": "https://api-demo.bagisto.com/storage/category/23/GuIZOJY3oW09ku4zqxIfKvtXho9gOnq4eCl0HmOW.webp",
              "bannerUrl": null,
              "translation": {
                "name": "Furniture",
                "slug": "furniture",
                "urlPath": ""
              },
              "children": {
                "edges": [
                  {
                    "node": {
                      "id": "/api/shop/categories/19",
                      "_id": 19,
                      "position": 7,
                      "status": "1",
                      "translation": {
                        "name": "Plastic Sofa",
                        "slug": "plastic-sofa",
                        "urlPath": ""
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "/api/shop/categories/20",
                      "_id": 20,
                      "position": 6,
                      "status": "1",
                      "translation": {
                        "name": "Wooden Sofa",
                        "slug": "wooden-sofa",
                        "urlPath": ""
                      }
                    }
                  },
                  {
                    "node": {
                      "id": "/api/shop/categories/21",
                      "_id": 21,
                      "position": 5,
                      "status": "1",
                      "translation": {
                        "name": "Leather Sofa",
                        "slug": "leather-sofa",
                        "urlPath": ""
                      }
                    }
                  }
                ]
              },
              "translations": {
                "edges": [
                  {
                    "node": {
                      "id": "/api/shop/category_translations/195",
                      "_id": 195,
                      "categoryId": "23",
                      "name": "Furniture",
                      "slug": "furniture",
                      "urlPath": "",
                      "description": "<p>Discover our wide range of furniture designed to bring comfort, style, and functionality to every corner of your home.</p>",
                      "metaTitle": "",
                      "metaDescription": "",
                      "metaKeywords": "",
                      "localeId": "1",
                      "locale": "en"
                    },
                    "cursor": "MA=="
                  }
                ],
                "pageInfo": {
                  "endCursor": "MA==",
                  "startCursor": "MA==",
                  "hasNextPage": true,
                  "hasPreviousPage": false
                },
                "totalCount": 2
              }
            },
            {
              "id": "/api/shop/categories/22",
              "_id": 22,
              "position": 4,
              "status": "1",
              "logoPath": "category/22/MDbnYET88gzG1ipz3ClxiKSO2wOybEzESa0o0jHc.webp",
              "displayMode": "products_and_description",
              "_lft": "16",
              "_rgt": "17",
              "additional": null,
              "bannerPath": null,
              "createdAt": "2025-08-28T18:52:22+05:30",
              "updatedAt": "2026-01-02T19:24:08+05:30",
              "url": "https://api-demo.bagisto.com/fashion",
              "logoUrl": "https://api-demo.bagisto.com/storage/category/22/MDbnYET88gzG1ipz3ClxiKSO2wOybEzESa0o0jHc.webp",
              "bannerUrl": null,
              "translation": {
                "name": "Fashion",
                "slug": "fashion",
                "urlPath": ""
              },
              "children": {
                "edges": []
              },
              "translations": {
                "edges": [
                  {
                    "node": {
                      "id": "/api/shop/category_translations/186",
                      "_id": 186,
                      "categoryId": "22",
                      "name": "Fashion",
                      "slug": "fashion",
                      "urlPath": "",
                      "description": "<p>Explore the latest trends in fashion with our curated collection of clothing, accessories, and footwear.</p>",
                      "metaTitle": "",
                      "metaDescription": "",
                      "metaKeywords": "",
                      "localeId": "1",
                      "locale": "en"
                    },
                    "cursor": "MA=="
                  }
                ],
                "pageInfo": {
                  "endCursor": "MA==",
                  "startCursor": "MA==",
                  "hasNextPage": true,
                  "hasPreviousPage": false
                },
                "totalCount": 2
              }
            }
          ]
        }
      }
    commonErrors:
      - error: INVALID_PARENT_ID
        cause: Parent category ID is invalid or does not exist
        solution: Use a valid parent category ID

  - id: tree-categories-with-parent-filter
    title: Tree Categories - Filter by Parent ID
    description: Retrieve categories filtered by a specific parent ID to get a subtree.
    query: |
      query treeCategories {
        treeCategories(parentId: 23) {
          id
          _id
          position
          status
          logoPath
          displayMode
          translation {
            name
            slug
            urlPath
          }
          children(first: 50) {
            edges {
              node {
                id
                _id
                position
                status
                translation {
                  name
                  slug
                  urlPath
                }
              }
            }
          }
        }
      }
    variables: |
      {}
    response: |
      {
        "data": {
          "treeCategories": [
            {
              "id": "/api/shop/categories/21",
              "_id": 21,
              "position": 5,
              "status": "1",
              "logoPath": "category/21/Q8Z5RUYiBwPVKVkJNJ0XOfWitDiqP7admksTYxKm.webp",
              "displayMode": "products_and_description",
              "translation": {
                "name": "Leather Sofa",
                "slug": "leather-sofa",
                "urlPath": ""
              },
              "children": {
                "edges": []
              }
            },
            {
              "id": "/api/shop/categories/20",
              "_id": 20,
              "position": 6,
              "status": "1",
              "logoPath": "category/20/WO71UuFFtbSRbjZVr7QUbNuMZM4PRSIAjHSLqUUY.webp",
              "displayMode": "products_and_description",
              "translation": {
                "name": "Wooden Sofa",
                "slug": "wooden-sofa",
                "urlPath": ""
              },
              "children": {
                "edges": []
              }
            },
            {
              "id": "/api/shop/categories/19",
              "_id": 19,
              "position": 7,
              "status": "1",
              "logoPath": "category/19/pmfWVVuhj7VK4dXFZG1ZlBeaUPwLrE4Ua99oer9l.webp",
              "displayMode": "products_and_description",
              "translation": {
                "name": "Plastic Sofa",
                "slug": "plastic-sofa",
                "urlPath": ""
              },
              "children": {
                "edges": []
              }
            }
          ]
        }
      }
    commonErrors:
      - error: INVALID_PARENT_ID
        cause: Parent category ID is invalid
        solution: Provide a valid parent category ID that exists in the system
---

# Tree Categories

## About

The `treeCategories` query retrieves categories in a hierarchical tree structure, useful for navigation menus and category browsing. This query is essential for:

- Building category navigation menus
- Displaying category hierarchies for storefront
- Managing nested category structures
- Fetching categories with their parent-child relationships
- Building breadcrumb navigation
- Creating category tree widgets

The query returns an array of categories (not a paginated connection) with nested children and translations. Use the `parentId` argument to filter categories by their parent.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `parentId` | `Int` | ✅ Yes | The numeric ID of the parent category to filter by. Specifies which level of the tree to retrieve. |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `treeCategories` | `[Category!]!` | Array of category objects matching the parent ID filter. |

## Category Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `String!` | Unique identifier in format `/api/shop/categories/{id}` |
| `_id` | `Int!` | Numeric identifier for the category |
| `position` | `Int!` | Display order position of the category |
| `status` | `String!` | Status of the category ("1" for active, "0" for inactive) |
| `logoPath` | `String` | File path to the category logo |
| `displayMode` | `String` | Display mode (e.g., "products_and_description", "products_only") |
| `_lft` | `String` | Left pointer for nested set tree structure |
| `_rgt` | `String` | Right pointer for nested set tree structure |
| `additional` | `Mixed` | Additional category attributes |
| `bannerPath` | `String` | File path to the category banner |
| `createdAt` | `String!` | Creation timestamp (ISO 8601 format) |
| `updatedAt` | `String!` | Last update timestamp (ISO 8601 format) |
| `url` | `String` | Full URL to the category page |
| `logoUrl` | `String` | Full URL to the category logo image |
| `bannerUrl` | `String` | Full URL to the category banner image |
| `translation` | `CategoryTranslation` | Default translation object with name, slug, and urlPath |
| `translations` | `Connection` | Paginated translations for all locales |
| `children` | `Connection` | Paginated child categories with their details |

## Common Use Cases

### Get Root Categories for Main Menu

```graphql
query GetRootCategories {
  treeCategories(parentId: 1) {
    id
    _id
    position
    status
    translation {
      name
      slug
      urlPath
    }
    logoUrl
    children(first: 50) {
      edges {
        node {
          id
          position
          translation {
            name
            slug
          }
        }
      }
    }
  }
}
```

### Get Category Tree with Full Details

```graphql
query GetCategoryTree {
  treeCategories(parentId: 1) {
    id
    _id
    position
    status
    logoPath
    logoUrl
    bannerUrl
    displayMode
    url
    translation {
      name
      slug
      description
    }
    children(first: 100) {
      edges {
        node {
          id
          position
          translation {
            name
            slug
            urlPath
          }
        }
      }
    }
  }
}
```

### Get Specific Subtree by Parent

```graphql
query GetCategorySubtree {
  treeCategories(parentId: 2) {
    id
    position
    translation {
      name
      slug
    }
    children(first: 50) {
      edges {
        node {
          id
          position
          translation {
            name
            slug
            urlPath
          }
        }
      }
    }
  }
}
```

### Get Categories with Translations

```graphql
query GetCategoriesWithTranslations {
  treeCategories(parentId: 1) {
    id
    position
    translation {
      name
      slug
      description
    }
    translations(first: 10) {
      edges {
        node {
          locale
          name
          slug
          description
        }
      }
      totalCount
    }
    children(first: 100) {
      edges {
        node {
          id
          position
          translation {
            name
          }
        }
      }
    }
  }
}
```

## Error Handling

### Invalid Parent ID - Non-integer Value

```json
{
  "errors": [
    {
      "message": "Int cannot represent non-integer value: dffddf"
    }
  ]
}
```

### Invalid Parent ID - String Instead of Integer

```json
{
  "errors": [
    {
      "message": "Int cannot represent non-integer value: \"1111\""
    }
  ]
}
```

### Parent ID Not Found

```json
{
  "data": {
    "treeCategories": []
  }
}
```

## Best Practices

1. **Always Provide parentId** - The parentId parameter is required
2. **Use First for Children Pagination** - Limit child categories with the `first` argument (e.g., `first: 100`)
3. **Request Only Needed Fields** - Reduce payload by selecting specific fields
4. **Cache Navigation Data** - Categories change infrequently; implement caching
5. **Handle Status Filtering** - Filter by status="1" on client side if needed
6. **Use Translation Fields** - Include translation data for multi-language support
7. **Paginate Nested Collections** - Use `first` argument for children and translations
8. **Use Position Field** - Order results by position field for proper display

## Related Resources

- [Get Single Category](/api/graphql-api/shop/queries/get-category) - Retrieve a single category by ID
- [Get Categories](/api/graphql-api/shop/queries/categories) - List all categories with pagination
- [Pagination Guide](/api/graphql-api/pagination) - Cursor pagination documentation
- [Shop API Overview](/api/graphql-api/shop-api) - Overview of Shop API resources
