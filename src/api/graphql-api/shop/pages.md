# Shop API - CMS Pages

Retrieve CMS (Content Management System) pages from your Bagisto store, including their HTML content, SEO metadata, and locale-specific translations.

## Overview

CMS Pages allow store administrators to create and manage static content pages such as About Us, Privacy Policy, Terms & Conditions, and more. This API exposes two queries:

| Query | Description |
|-------|-------------|
| `pages` | Retrieve all CMS pages (paginated) |
| `page(id:)` | Retrieve a single CMS page by IRI ID |

---

## Get All CMS Pages

Retrieve all CMS pages with their translation details.

```graphql
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
```

---

## Get Single CMS Page

Retrieve a single CMS page by its IRI-style ID.

```graphql
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
```

---

## Fields Reference

### Page Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | IRI-style unique identifier (e.g. `/api/shop/pages/1`) |
| `_id` | Int | Numeric database ID |
| `layout` | String | Page layout template (e.g. `default`) |
| `createdAt` | DateTime | Timestamp when the page was created |
| `updatedAt` | DateTime | Timestamp when the page was last updated |
| `translation` | PageTranslation | Active locale translation for this page |

### PageTranslation Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | IRI-style ID of the translation record |
| `_id` | Int | Numeric translation record ID |
| `pageTitle` | String | Display title of the CMS page |
| `urlKey` | String | URL slug (e.g. `about-us`) |
| `htmlContent` | String | Full HTML body content of the page |
| `metaTitle` | String | SEO meta title |
| `metaDescription` | String | SEO meta description |
| `metaKeywords` | String | SEO meta keywords |
| `locale` | String | Locale code (e.g. `en`, `fr`) |

---

## Related Resources
- [Categories](/api/graphql-api/shop/categories)
- [Products](/api/graphql-api/shop/products)
- [Theme Customisations](/api/graphql-api/shop/queries/theme-customisations)
