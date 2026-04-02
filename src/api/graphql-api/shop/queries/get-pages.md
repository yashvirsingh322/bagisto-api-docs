---
outline: false
examples:
  - id: get-cms-pages-basic
    title: Get All CMS Pages
    description: Retrieve all CMS pages with their translation details using cursor-based pagination.
    query: |
      query getCmsPagesDetails {
        pages {
          edges {
            node {
              id
              _id
              layout
              createdAt
              updatedAt
              translation {
                id
                _id
                pageTitle
                urlKey
                htmlContent
                metaTitle
                metaDescription
                metaKeywords
                locale
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
          "pages": {
            "edges": [
              {
                "node": {
                  "id": "/api/shop/pages/1",
                  "_id": 1,
                  "layout": "default",
                  "createdAt": "2024-01-10T08:00:00+00:00",
                  "updatedAt": "2024-06-15T12:30:00+00:00",
                  "translation": {
                    "id": "/api/shop/page_translations/1",
                    "_id": 1,
                    "pageTitle": "About Us",
                    "urlKey": "about-us",
                    "htmlContent": "<h1>About Us</h1><p>Welcome to our store.</p>",
                    "metaTitle": "About Us - Our Store",
                    "metaDescription": "Learn more about our company and values.",
                    "metaKeywords": "about us, company, store",
                    "locale": "en"
                  }
                }
              },
              {
                "node": {
                  "id": "/api/shop/pages/2",
                  "_id": 2,
                  "layout": "default",
                  "createdAt": "2024-01-12T09:00:00+00:00",
                  "updatedAt": "2024-06-20T10:00:00+00:00",
                  "translation": {
                    "id": "/api/shop/page_translations/2",
                    "_id": 2,
                    "pageTitle": "Privacy Policy",
                    "urlKey": "privacy-policy",
                    "htmlContent": "<h1>Privacy Policy</h1><p>Your privacy matters to us.</p>",
                    "metaTitle": "Privacy Policy",
                    "metaDescription": "Read our privacy policy to understand how we handle your data.",
                    "metaKeywords": "privacy, policy, data",
                    "locale": "en"
                  }
                }
              },
              {
                "node": {
                  "id": "/api/shop/pages/3",
                  "_id": 3,
                  "layout": "default",
                  "createdAt": "2024-01-15T10:00:00+00:00",
                  "updatedAt": "2024-07-01T08:45:00+00:00",
                  "translation": {
                    "id": "/api/shop/page_translations/3",
                    "_id": 3,
                    "pageTitle": "Terms & Conditions",
                    "urlKey": "terms-and-conditions",
                    "htmlContent": "<h1>Terms & Conditions</h1><p>Please read our terms carefully.</p>",
                    "metaTitle": "Terms & Conditions",
                    "metaDescription": "Terms and conditions governing use of our store.",
                    "metaKeywords": "terms, conditions, legal",
                    "locale": "en"
                  }
                }
              }
            ]
          }
        }
      }
    commonErrors:
      - error: UNAUTHENTICATED
        cause: Request is missing a valid authentication token
        solution: Include a valid Bearer token in the Authorization header
      - error: INTERNAL_SERVER_ERROR
        cause: Unexpected server-side error
        solution: Check server logs; retry the request or contact support

---

# CMS Pages

## About

The `pages` query retrieves a collection of all CMS (Content Management System) pages from your Bagisto store. Use this query to:

- List all static content pages (e.g. About Us, Privacy Policy, FAQ)
- Render CMS page listings in the storefront footer or navigation
- Build a sitemap of all content pages
- Access locale-specific page titles, slugs, and HTML content
- Retrieve SEO metadata (meta title, description, keywords) for each page
- Support multi-language storefronts with locale-aware translation data

This query returns all pages with their active locale translation. Use the `page(id:)` query to fetch a single page by ID.

> **Note:** The `translation` field returns content for the locale specified in the request header. If a translation does not exist for the selected locale, the content will automatically fall back to the store's default language.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `first` | `Int` | ❌ No | Number of results to return (forward pagination). |
| `after` | `String` | ❌ No | Cursor for forward pagination. Use with `first`. |
| `last` | `Int` | ❌ No | Number of results for backward pagination. |
| `before` | `String` | ❌ No | Cursor for backward pagination. Use with `last`. |

## Possible Returns

### Page Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `ID!` | IRI-style unique identifier (e.g. `/api/shop/pages/1`). |
| `_id` | `Int!` | Numeric database ID. |
| `layout` | `String` | Page layout template name (e.g. `default`). |
| `createdAt` | `DateTime!` | Timestamp when the page was created. |
| `updatedAt` | `DateTime!` | Timestamp when the page was last updated. |
| `translation` | `PageTranslation` | Active locale translation for this page. |

### PageTranslation Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `ID!` | IRI-style ID of the translation record. |
| `_id` | `Int!` | Numeric translation record ID. |
| `pageTitle` | `String!` | Display title of the CMS page. |
| `urlKey` | `String!` | URL slug used to access the page (e.g. `about-us`). |
| `htmlContent` | `String` | Full HTML body content of the page. |
| `metaTitle` | `String` | SEO meta title tag. |
| `metaDescription` | `String` | SEO meta description tag. |
| `metaKeywords` | `String` | SEO meta keywords. |
| `locale` | `String!` | Locale code for this translation (e.g. `en`, `fr`). |

## Use Cases

### 1. Footer Navigation Links
Fetch all CMS pages and use `urlKey` and `pageTitle` to build footer navigation links dynamically.

### 2. CMS Page Sitemap
Retrieve all pages to generate a sitemap or page index for SEO crawlers.

### 3. Legal Pages Listing
Filter the result client-side to display legal pages such as Privacy Policy and Terms & Conditions.

### 4. Multi-language Storefront
Use the `locale` field in `translation` to display locale-aware page titles and content.

### 5. Admin Content Overview
List all CMS pages in an admin dashboard for quick access and management.

## Best Practices

1. **Use `urlKey` for routing** — Build page URLs using `urlKey` rather than the numeric `_id` for human-readable and SEO-friendly URLs
2. **Cache responses** — CMS pages change infrequently; cache the response at the CDN or application level to reduce API calls
3. **Sanitize `htmlContent`** — Always sanitize the `htmlContent` field before rendering to prevent XSS vulnerabilities
4. **Use translations** — Always read content from the `translation` object to ensure locale-aware display
5. **Paginate for large stores** — Even though CMS pages are typically few, use `first` to limit payload size

## Related Resources

- [Get Single CMS Page](/api/graphql-api/shop/queries/get-page) - Query a single page by ID
- [Theme Customisations](/api/graphql-api/shop/queries/theme-customisations) - Query storefront theme customisations
- [Pagination Guide](/api/graphql-api/pagination) - Cursor pagination documentation
- [Shop API Overview](/api/graphql-api/shop-api) - Overview of Shop API resources
