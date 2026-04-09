---
outline: false
examples:
  - id: get-channel-by-id-basic
    title: Get Channel by ID - Basic
    description: Retrieve basic information for a single channel by its ID.
    query: |
      query getChannelByID($id: ID!) {
        channel(id: $id) {
          id
          _id
          code
          hostname
          timezone
        }
      }
    variables: |
      {
        "id": "/api/shop/channels/1"
      }
    response: |
      {
        "data": {
          "channel": {
            "id": "/api/shop/channels/1",
            "_id": 1,
            "code": "default",
            "hostname": "https://api-demo.bagisto.com",
            "timezone": null
          }
        }
      }
    commonErrors:
      - error: CHANNEL_NOT_FOUND
        cause: Channel with given ID does not exist
        solution: Verify the channel ID is correct
      - error: INVALID_ID_FORMAT
        cause: Invalid channel ID format
        solution: Use a valid channel ID like /api/shop/channels/1

  - id: get-channel-complete
    title: Get Channel - Complete Details
    description: Retrieve complete channel information including logos, themes, and all translations.
    query: |
      query getChannelByID($id: ID!) {
        channel(id: $id) {
          id
          _id
          code
          timezone
          theme
          hostname
          logo
          favicon
          isMaintenanceOn
          allowedIps
          createdAt
          updatedAt
          logoUrl
          faviconUrl
          translation {
            id
            _id
            channelId
            locale
            name
            description
            maintenanceModeText
            createdAt
            updatedAt
          }
          translations {
            edges {
              node {
                id
                _id
                channelId
                locale
                name
                description
                maintenanceModeText
                createdAt
                updatedAt
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
      {
        "id": "/api/shop/channels/1"
      }
    response: |
      {
        "data": {
          "channel": {
            "id": "/api/shop/channels/1",
            "_id": 1,
            "code": "default",
            "timezone": null,
            "theme": "default",
            "hostname": "https://api-demo.bagisto.com",
            "logo": "channels/default-logo.png",
            "favicon": "channels/default-favicon.ico",
            "isMaintenanceOn": "0",
            "allowedIps": "",
            "createdAt": null,
            "updatedAt": "2026-04-07T13:10:17+05:30",
            "logoUrl": "https://api-demo.bagisto.com/storage/channels/default-logo.png",
            "faviconUrl": "https://api-demo.bagisto.com/storage/channels/default-favicon.ico",
            "translation": {
              "id": "/api/shop/channel_translations/1",
              "_id": 1,
              "channelId": "1",
              "locale": "en",
              "name": "bagisto store",
              "description": "",
              "maintenanceModeText": "",
              "createdAt": null,
              "updatedAt": "2026-04-07T13:10:17+05:30"
            },
            "translations": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/channel_translations/1",
                    "_id": 1,
                    "channelId": "1",
                    "locale": "en",
                    "name": "bagisto store",
                    "description": "",
                    "maintenanceModeText": "",
                    "createdAt": null,
                    "updatedAt": "2026-04-07T13:10:17+05:30"
                  },
                  "cursor": "MA=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/5",
                    "_id": 5,
                    "channelId": "1",
                    "locale": "es",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null,
                    "createdAt": null,
                    "updatedAt": null
                  },
                  "cursor": "MQ=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/2",
                    "_id": 2,
                    "channelId": "1",
                    "locale": "fr",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null,
                    "createdAt": null,
                    "updatedAt": null
                  },
                  "cursor": "Mg=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/3",
                    "_id": 3,
                    "channelId": "1",
                    "locale": "nl",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null,
                    "createdAt": null,
                    "updatedAt": null
                  },
                  "cursor": "Mw=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/4",
                    "_id": 4,
                    "channelId": "1",
                    "locale": "tr",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null,
                    "createdAt": null,
                    "updatedAt": null
                  },
                  "cursor": "NA=="
                }
              ],
              "pageInfo": {
                "endCursor": "NA==",
                "startCursor": "MA==",
                "hasNextPage": false,
                "hasPreviousPage": false
              },
              "totalCount": 5
            }
          }
        }
      }
    commonErrors:
      - error: CHANNEL_NOT_FOUND
        cause: Channel with given ID does not exist
        solution: Verify the channel ID and check if it's active
      - error: UNAUTHORIZED
        cause: User is not authenticated
        solution: Provide valid authentication credentials

  - id: get-channel-with-branding
    title: Get Channel with Branding Assets
    description: Retrieve channel branding information including logos, favicons, and theme configuration.
    query: |
      query getChannelByID($id: ID!) {
        channel(id: $id) {
          id
          _id
          code
          hostname
          theme
          logo
          favicon
          logoUrl
          faviconUrl
          translation {
            name
            description
          }
        }
      }
    variables: |
      {
        "id": "/api/shop/channels/1"
      }
    response: |
      {
        "data": {
          "channel": {
            "id": "/api/shop/channels/1",
            "_id": 1,
            "code": "default",
            "hostname": "https://api-demo.bagisto.com",
            "theme": "default",
            "logo": "channels/default-logo.png",
            "favicon": "channels/default-favicon.ico",
            "logoUrl": "https://api-demo.bagisto.com/storage/channels/default-logo.png",
            "faviconUrl": "https://api-demo.bagisto.com/storage/channels/default-favicon.ico",
            "translation": {
              "name": "bagisto store",
              "description": ""
            }
          }
        }
      }
    commonErrors:
      - error: MISSING_BRANDING_ASSETS
        cause: Channel logo or favicon is not configured
        solution: Upload branding assets in admin panel

  - id: get-channel-maintenance-details
    title: Get Channel Maintenance Mode Details
    description: Retrieve channel maintenance mode status and configuration with custom messages.
    query: |
      query getChannelByID($id: ID!) {
        channel(id: $id) {
          id
          _id
          code
          hostname
          isMaintenanceOn
          allowedIps
          translation {
            locale
            name
            maintenanceModeText
          }
          translations {
            edges {
              node {
                locale
                maintenanceModeText
              }
            }
            totalCount
          }
        }
      }
    variables: |
      {
        "id": "/api/shop/channels/1"
      }
    response: |
      {
        "data": {
          "channel": {
            "id": "/api/shop/channels/1",
            "_id": 1,
            "code": "default",
            "hostname": "https://api-demo.bagisto.com",
            "isMaintenanceOn": "1",
            "allowedIps": "192.168.45.51",
            "translation": {
              "locale": "en",
              "name": "bagisto store",
              "maintenanceModeText": "Maintenance Mode"
            },
            "translations": {
              "edges": [
                {
                  "node": {
                    "locale": "en",
                    "maintenanceModeText": "Maintenance Mode"
                  }
                },
                {
                  "node": {
                    "locale": "es",
                    "maintenanceModeText": null
                  }
                },
                {
                  "node": {
                    "locale": "fr",
                    "maintenanceModeText": null
                  }
                },
                {
                  "node": {
                    "locale": "nl",
                    "maintenanceModeText": null
                  }
                },
                {
                  "node": {
                    "locale": "tr",
                    "maintenanceModeText": null
                  }
                }
              ],
              "totalCount": 5
            }
          }
        }
      }
    commonErrors:
      - error: INVALID_IP_FORMAT
        cause: Allowed IPs format is invalid
        solution: Use comma-separated IPs or CIDR notation

  - id: get-channel-with-relationships
    title: Get Channel with Relationships
    description: Retrieve a channel with its related locales, currencies, default locale, and base currency.
    query: |
      query getChannelByID($id: ID!) {
        channel(id: $id) {
          id
          _id
          code
          hostname
          theme
          timezone
          homeSeo
          logoUrl
          faviconUrl
          locales {
            edges {
              node {
                id
                _id
                code
                name
                direction
              }
            }
          }
          currencies {
            edges {
              node {
                id
                _id
                code
                name
                symbol
              }
            }
          }
          defaultLocale {
            id
            _id
            code
            name
            direction
          }
          baseCurrency {
            id
            _id
            code
            name
            symbol
          }
        }
      }
    variables: |
      {
        "id": "/api/shop/channels/1"
      }
    response: |
      {
        "data": {
          "channel": {
            "id": "/api/shop/channels/1",
            "_id": 1,
            "code": "default",
            "hostname": "https://api-demo.bagisto.com",
            "theme": "default",
            "timezone": null,
            "homeSeo": {
              "meta_title": "Demo store",
              "meta_keywords": "Demo store meta keyword",
              "meta_description": "Demo store meta description"
            },
            "logoUrl": null,
            "faviconUrl": null,
            "locales": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/locales/1",
                    "_id": 1,
                    "code": "en",
                    "name": "English",
                    "direction": "ltr"
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/locales/10",
                    "_id": 10,
                    "code": "AR",
                    "name": "Arabic",
                    "direction": "rtl"
                  }
                }
              ]
            },
            "currencies": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/currencies/1",
                    "_id": 1,
                    "code": "USD",
                    "name": "US Dollar",
                    "symbol": "$"
                  }
                },
                {
                  "node": {
                    "id": "/api/shop/currencies/3",
                    "_id": 3,
                    "code": "AED",
                    "name": "Dirham",
                    "symbol": "د.إ"
                  }
                }
              ]
            },
            "defaultLocale": {
              "id": "/api/shop/locales/1",
              "_id": 1,
              "code": "en",
              "name": "English",
              "direction": "ltr"
            },
            "baseCurrency": {
              "id": "/api/shop/currencies/1",
              "_id": 1,
              "code": "USD",
              "name": "US Dollar",
              "symbol": "$"
            }
          }
        }
      }
    commonErrors:
      - error: CHANNEL_NOT_FOUND
        cause: Channel with given ID does not exist
        solution: Verify the channel ID is correct
      - error: UNAUTHORIZED
        cause: User is not authenticated
        solution: Provide valid authentication credentials

  - id: get-channel-with-translations
    title: Get Channel with All Translations
    description: Retrieve channel with complete translation information for all languages.
    query: |
      query getChannelByID($id: ID!) {
        channel(id: $id) {
          id
          _id
          code
          hostname
          timezone
          translations {
            edges {
              node {
                id
                locale
                name
                description
                maintenanceModeText
              }
              cursor
            }
            pageInfo {
              hasNextPage
              endCursor
            }
            totalCount
          }
        }
      }
    variables: |
      {
        "id": "/api/shop/channels/1"
      }
    response: |
      {
        "data": {
          "channel": {
            "id": "/api/shop/channels/1",
            "_id": 1,
            "code": "default",
            "hostname": "https://api-demo.bagisto.com",
            "timezone": null,
            "translations": {
              "edges": [
                {
                  "node": {
                    "id": "/api/shop/channel_translations/1",
                    "locale": "en",
                    "name": "bagisto store",
                    "description": "",
                    "maintenanceModeText": ""
                  },
                  "cursor": "MA=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/5",
                    "locale": "es",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null
                  },
                  "cursor": "MQ=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/2",
                    "locale": "fr",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null
                  },
                  "cursor": "Mg=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/3",
                    "locale": "nl",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null
                  },
                  "cursor": "Mw=="
                },
                {
                  "node": {
                    "id": "/api/shop/channel_translations/4",
                    "locale": "tr",
                    "name": "Default",
                    "description": null,
                    "maintenanceModeText": null
                  },
                  "cursor": "NA=="
                }
              ],
              "pageInfo": {
                "hasNextPage": false,
                "endCursor": "NA=="
              },
              "totalCount": 5
            }
          }
        }
      }
    commonErrors:
      - error: NO_TRANSLATIONS
        cause: Channel has no translations configured
        solution: Add translations in the admin panel

---

# Get Channel

## About

The `channel` query retrieves detailed information about a single channel by its ID. Use this query to:

- Display channel-specific information and branding
- Fetch channel configuration for your application
- Get channel translations for multi-language support
- Check maintenance mode status and allowed IPs
- Retrieve channel themes and display settings
- Access channel logos and branding assets
- Build channel-specific pages and configurations
- Handle channel-based routing and localization

This query returns comprehensive channel data including logos, favicons, themes, all translations, and maintenance mode settings.

## Arguments

| Argument | Type | Description |
|----------|------|-------------|
| `id` | `ID!` | Channel ID in format `/api/shop/channels/{id}` or numeric ID. |

## Possible Returns

| Field | Type | Description |
|-------|------|-------------|
| `id` | `ID!` | Unique channel API identifier. |
| `_id` | `Int!` | Numeric channel ID. |
| `code` | `String!` | Unique channel code (e.g., 'default', 'mobile'). |
| `timezone` | `String!` | Channel timezone (e.g., 'UTC', 'US/Eastern'). |
| `theme` | `String` | Theme name assigned to this channel. |
| `hostname` | `String!` | Channel hostname/domain. |
| `logo` | `String` | File path to channel logo. |
| `favicon` | `String` | File path to channel favicon. |
| `isMaintenanceOn` | `Boolean!` | Whether maintenance mode is enabled. |
| `allowedIps` | `String` | Comma-separated IPs allowed during maintenance (CIDR notation supported). |
| `createdAt` | `DateTime!` | Channel creation timestamp. |
| `updatedAt` | `DateTime!` | Last update timestamp. |
| `logoUrl` | `String` | Full URL to channel logo image. |
| `faviconUrl` | `String` | Full URL to channel favicon image. |
| `translation` | `ChannelTranslation!` | Default locale translation. |
| `translation.id` | `ID!` | Translation identifier. |
| `translation._id` | `Int!` | Numeric translation ID. |
| `translation.channelId` | `Int!` | Associated channel ID. |
| `translation.locale` | `String!` | Language locale code (e.g., 'en', 'ar', 'fr'). |
| `translation.name` | `String!` | Channel name in current language. |
| `translation.description` | `String` | Channel description. |
| `translation.maintenanceModeText` | `String` | Custom maintenance mode message. |
| `translation.createdAt` | `DateTime!` | Translation creation timestamp. |
| `translation.updatedAt` | `DateTime!` | Translation update timestamp. |
| `homeSeo` | `String` | JSON string containing SEO metadata (meta_title, meta_description, meta_keywords). |
| `locales` | `LocaleCollection!` | All locales (languages) enabled for this channel. |
| `currencies` | `CurrencyCollection!` | All currencies enabled for this channel. |
| `defaultLocale` | `Locale!` | The default locale used when no language is explicitly selected. |
| `baseCurrency` | `Currency!` | The base currency used for pricing on this channel. |
| `translations` | `ChannelTranslationCollection!` | All available translations. |
| `translations.edges` | `[Edge!]!` | Translation edges with cursors. |
| `translations.edges.node` | `ChannelTranslation!` | Individual translation. |
| `translations.edges.cursor` | `String!` | Pagination cursor for this translation. |
| `translations.pageInfo` | `PageInfo!` | Pagination information. |
| `translations.pageInfo.hasNextPage` | `Boolean!` | More translations available. |
| `translations.pageInfo.hasPreviousPage` | `Boolean!` | Previous translations available. |
| `translations.pageInfo.startCursor` | `String` | First translation cursor. |
| `translations.pageInfo.endCursor` | `String` | Last translation cursor. |
| `translations.totalCount` | `Int!` | Total translations for this channel. |

## Channel Relationships

The **Get Channel with Relationships** variant fetches the channel along with its associated configuration objects — locales, currencies, default locale, and base currency. These are not simple scalar fields; they are linked resources that define how the channel behaves for different regions and markets.

| Relationship | Type | Description |
|---|---|---|
| `locales` | Collection | All languages enabled for this channel. Use this to build a language switcher or determine which locales the channel supports. |
| `currencies` | Collection | All currencies enabled for this channel. Use this to display price selectors or determine accepted currencies. |
| `defaultLocale` | Single object | The fallback language used when no locale is explicitly selected by the user. |
| `baseCurrency` | Single object | The primary currency used for pricing and calculations on this channel. |

**When to use this variant:**
- Building a storefront that needs to know which languages and currencies are available
- Rendering a locale or currency switcher in the header
- Determining the channel's default display language for first-time visitors
- Resolving the base currency before formatting prices

## IP Allowlist Format

The `allowedIps` field supports multiple formats:

| Format | Example | Description |
|--------|---------|-------------|
| Single IP | `192.168.1.1` | Exact IP address |
| Multiple IPs | `192.168.1.1,192.168.1.2` | Comma-separated addresses |
| CIDR Notation | `192.168.1.0/24` | Subnet range |
| Mixed | `127.0.0.1,10.0.0.0/8` | Combination of formats |

## Use Cases

### 1. Channel Detail Page
Use the "Complete Details" example to display full channel information with all metadata.

### 2. Branding Configuration
Use the "With Branding Assets" example to get logos and favicons for dynamic theming.

### 3. Maintenance Mode
Use the "Maintenance Details" example to check if channel is under maintenance and display appropriate messages.

### 4. Multi-Language Support
Use the "With All Translations" example to display channel information in all languages.

### 5. Channel Relationships (Locales, Currencies)
Use the "With Relationships" example to get all locales, currencies, default locale, and base currency associated with the channel.

### 6. Channel Routing
Use the basic query to get channel hostname and timezone for routing and localization.

## Best Practices

1. **Cache Channel Data** - Channels change infrequently, cache the response per channel
2. **Check Maintenance Mode** - Always verify `isMaintenanceOn` status before displaying content
3. **Include Translations** - Fetch all translations for multi-language support
4. **Validate IP Allowlist** - Verify user IP against `allowedIps` during maintenance
5. **Use Correct ID Format** - Use `/api/shop/channels/{id}` format when available
6. **Apply Theme Dynamically** - Use `theme` field to load theme-specific CSS/configuration
7. **Display Localized Messages** - Use translations for maintenance messages in user's language

## Maintenance Mode Details

During maintenance mode:
- Set `isMaintenanceOn` to `true`
- Configure `allowedIps` to allow specific IP addresses
- Display localized `maintenanceModeText` to users
- Redirect non-allowed users to maintenance page
- Support CIDR notation for flexible IP ranges

## Related Resources

- [Channels](/api/graphql-api/shop/queries/get-channels) - Get all channels with pagination
- [Pagination Guide](/api/graphql-api/pagination) - Cursor pagination documentation
- [Shop API Overview](/api/graphql-api/shop-api) - Overview of Shop API resources
