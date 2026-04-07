---
outline: false
examples:
  - id: get-cms-page-by-id
    title: Get Single CMS Page
    description: Retrieve a single CMS page by its IRI-style ID, including full translation details.
    query: |
      query getCmsPageDetail {
        page(id: "/api/shop/pages/1") {
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
    variables: |
      {}
    response: |
      {
        "data": {
          "page": {
            "id": "/api/shop/pages/1",
            "_id": 1,
            "layout": null,
            "createdAt": "2024-04-16T16:14:17+05:30",
            "updatedAt": "2024-04-16T16:14:17+05:30",
            "translation": {
              "id": "/api/shop/page_translations/1",
              "_id": 1,
              "pageTitle": "About Us",
              "urlKey": "about-us",
              "htmlContent": "<div class=\"static-container\"><div class=\"mb-5\">We are dedicated to providing high-quality products and services to our customers. Our team is passionate about innovation and customer satisfaction. We believe in transparency, integrity, and building long-term relationships with our users.</div></div>",
              "metaTitle": "about us",
              "metaDescription": "",
              "metaKeywords": "aboutus",
              "locale": "en"
            }
          }
        }
      }
    commonErrors:
      - error: PAGE_NOT_FOUND
        cause: No CMS page exists for the provided ID
        solution: Verify the page ID using the pages query before fetching a single page
      - error: INVALID_ID_FORMAT
        cause: The ID is not a valid IRI-style string
        solution: Use the full IRI format, e.g. "/api/shop/pages/1"
      - error: UNAUTHENTICATED
        cause: Request is missing a valid authentication token
        solution: Include a valid Bearer token in the Authorization header

---

# Single CMS Page

## About

The `page(id:)` query retrieves a single CMS (Content Management System) page by its IRI-style ID. Use this query to:

- Render a specific CMS page (e.g. About Us, Privacy Policy) in the storefront
- Retrieve the full HTML content of a page for display
- Access SEO metadata (meta title, description, keywords) for a specific page
- Fetch locale-specific translation data for a page
- Build dynamic page routes using `urlKey`
- Validate whether a page exists before rendering

This query returns a single page with its active locale translation. Use the `pages` query to list all available pages.

> **Note:** The `translation` field returns content for the locale specified in the request header. If a translation does not exist for the selected locale, the content will automatically fall back to the store's default language.

## Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `ID!` | ✅ Yes | IRI-style identifier of the page (e.g. `/api/shop/pages/1`). |

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

### 1. Render a CMS Page
Fetch a specific page by ID and render its `htmlContent` on a dedicated page route in the storefront.

### 2. SEO Head Tags
Use `metaTitle`, `metaDescription`, and `metaKeywords` from the translation to populate `<meta>` tags dynamically.

### 3. Page Validation
Query a page before rendering to check whether it exists; handle null responses with a 404 page.

### 4. Multi-language Content
Use the `locale` field in `translation` to display locale-aware page content in multilingual storefronts.

### 5. Dynamic Page Routing
Use `urlKey` to implement client-side routing so users access pages via human-readable URLs (e.g. `/about-us`).

## Best Practices

1. **Use the IRI format** — Always pass the full IRI string (e.g. `/api/shop/pages/1`) as the `id` argument
2. **Handle null gracefully** — If `page` returns `null`, show a 404 response to the user
3. **Sanitize `htmlContent`** — Always sanitize the `htmlContent` field before rendering to prevent XSS vulnerabilities
4. **Cache individual pages** — Cache page responses keyed by ID; invalidate the cache when content is updated
5. **Use `urlKey` for routing** — Build page URLs from `urlKey` for SEO-friendly, human-readable links
6. **Fetch only needed fields** — Omit `htmlContent` when only metadata (title, URL) is needed to reduce response size

## Related Resources

- [Get All CMS Pages](/api/graphql-api/shop/queries/get-pages) - Query all CMS pages
- [Theme Customisations](/api/graphql-api/shop/queries/theme-customisations) - Query storefront theme customisations
- [Pagination Guide](/api/graphql-api/pagination) - Cursor pagination documentation
- [Shop API Overview](/api/graphql-api/shop-api) - Overview of Shop API resources
