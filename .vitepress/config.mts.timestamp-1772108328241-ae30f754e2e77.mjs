// .vitepress/config.mts
import { defineConfig } from "file:///home/users/yashvir.singh/www/html/Bagisto/bagisto-api-docs/node_modules/vitepress/dist/node/index.js";

// .vitepress/_redirects.ts
var redirects = {};
function makeRedirectHtml(to) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="${to}" />
    <script>window.location.replace("${to}");</script>
  </head>
  <body>
    <p>Redirecting to <a href="${to}">${to}</a>\u2026</p>
  </body>
</html>`;
}

// .vitepress/config.mts
import fs from "fs";
import path from "path";
import { loadEnv } from "file:///home/users/yashvir.singh/www/html/Bagisto/bagisto-api-docs/node_modules/vite/dist/node/index.js";
var config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    ignoreDeadLinks: true,
    lang: "en-US",
    title: "Bagisto",
    description: "Bagisto Developer Documentation",
    vite: {
      server: {
        host: "0.0.0.0"
      },
      define: {
        "import.meta.env.VITE_REST_API_URL": JSON.stringify(env.VITE_REST_API_URL),
        "import.meta.env.VITE_GRAPHQL_API_URL": JSON.stringify(env.VITE_GRAPHQL_API_URL)
      }
    },
    srcDir: "./src",
    themeConfig: {
      siteTitle: false,
      logo: {
        light: "/logo.png",
        dark: "/logo-dark.png"
      },
      nav: [
        { text: "Dev Docs", link: "https://devdocs.bagisto.com/" },
        { text: "User Guide", link: "https://docs.bagisto.com/" },
        { text: "Extensions", link: "https://bagisto.com/en/extensions/" },
        { text: "Community Forum", link: "https://forums.bagisto.com/" },
        { text: "Contact Us", link: "https://bagisto.com/en/contacts/" }
      ],
      editLink: {
        pattern: "https://github.com/bagisto/bagisto-api-docs/edit/master/src/:path",
        text: "Help us improve this page on Github."
      },
      lastUpdated: {
        text: "Last Updated",
        formatOptions: {
          dateStyle: "full"
        }
      },
      sidebar: [
        {
          text: "Bagisto APIs",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/api/introduction" },
            { text: "Setup", link: "/api/setup" },
            { text: "Authentication", link: "/api/authentication" },
            { text: "Storefront Keys", link: "/api/storefront-api-key-management-guide" },
            {
              text: "GraphQL API",
              collapsed: true,
              items: [
                { text: "Introduction", link: "/api/graphql-api/introduction" },
                { text: "Authentication", link: "/api/graphql-api/authentication" },
                {
                  text: "Shop API",
                  collapsed: false,
                  items: [
                    {
                      text: "Locales",
                      collapsed: false,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Locales", link: "/api/graphql-api/shop/locales/queries/locales" },
                            { text: "Single Locale", link: "/api/graphql-api/shop/locales/queries/single-locale" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Category",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Tree Categories", link: "/api/graphql-api/shop/queries/tree-categories" },
                            { text: "Categories", link: "/api/graphql-api/shop/queries/categories" },
                            { text: "Single Category", link: "/api/graphql-api/shop/queries/get-category" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Theme Customisations",
                      collapsed: false,
                      items: [
                        { text: "Theme Customisations", link: "/api/graphql-api/shop/queries/theme-customisations" },
                        { text: "Single Theme Customisation", link: "/api/graphql-api/shop/queries/single-theme-customisation" }
                      ]
                    },
                    {
                      text: "CMS Pages",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Pages", link: "/api/graphql-api/shop/queries/get-pages" },
                            { text: "Single Page", link: "/api/graphql-api/shop/queries/get-page" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Product",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Products", link: "/api/graphql-api/shop/queries/get-products" },
                            { text: "Search Products", link: "/api/graphql-api/shop/queries/search-products" },
                            { text: "Single Product", link: "/api/graphql-api/shop/queries/get-product" },
                            { text: "Get Product By Type", link: "/api/graphql-api/shop/queries/get-product-by-type" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Product Review",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Product Reviews", link: "/api/graphql-api/shop/queries/get-product-reviews" }
                          ]
                        },
                        {
                          text: "Mutations",
                          collapsed: false,
                          items: [
                            { text: "Create Product Review", link: "/api/graphql-api/shop/mutations/create-product-review" },
                            { text: "Update Product Review", link: "/api/graphql-api/shop/mutations/update-product-review" },
                            { text: "Delete Product Review", link: "/api/graphql-api/shop/mutations/delete-product-review" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Attribute",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Attributes", link: "/api/graphql-api/shop/queries/get-attributes" },
                            { text: "Single Attribute", link: "/api/graphql-api/shop/queries/get-attribute" },
                            { text: "Attribute Options", link: "/api/graphql-api/shop/queries/get-attribute-options" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Channel",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Channels", link: "/api/graphql-api/shop/queries/get-channels" },
                            { text: "Single Channel", link: "/api/graphql-api/shop/queries/get-channel" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Country",
                      collapsed: false,
                      items: [
                        { text: "Single Country", link: "/api/graphql-api/shop/queries/get-country" },
                        { text: "Countries", link: "/api/graphql-api/shop/queries/get-countries" },
                        { text: "Country States", link: "/api/graphql-api/shop/queries/get-country-states" },
                        { text: "Country State", link: "/api/graphql-api/shop/queries/get-country-state" }
                      ]
                    },
                    {
                      text: "Customer",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Get Customer Profile", link: "/api/graphql-api/shop/queries/get-customer-profile" },
                            { text: "Get Customer Orders", link: "/api/graphql-api/shop/queries/get-customer-orders" },
                            { text: "Get Customer Order", link: "/api/graphql-api/shop/queries/get-customer-order" },
                            { text: "Get Customer Order Shipments", link: "/api/graphql-api/shop/queries/get-customer-order-shipments" },
                            { text: "Get Customer Order Shipment", link: "/api/graphql-api/shop/queries/get-customer-order-shipment" },
                            { text: "Get Customer Invoices", link: "/api/graphql-api/shop/queries/get-customer-invoices" },
                            { text: "Get Customer Invoice", link: "/api/graphql-api/shop/queries/get-customer-invoice" },
                            { text: "Download Invoice", link: "/api/graphql-api/shop/queries/download-invoice" },
                            { text: "Get Downloadable Products", link: "/api/graphql-api/shop/queries/get-customer-downloadable-products" },
                            { text: "Get Downloadable Product", link: "/api/graphql-api/shop/queries/get-customer-downloadable-product" },
                            { text: "Get Customer Addresses", link: "/api/graphql-api/shop/queries/get-customer-addresses" }
                          ]
                        },
                        {
                          text: "Mutations",
                          collapsed: false,
                          items: [
                            { text: "Customer Registration", link: "/api/graphql-api/shop/mutations/customer-registration" },
                            { text: "Customer Login", link: "/api/graphql-api/shop/mutations/customer-login" },
                            { text: "Customer Verify Token", link: "/api/graphql-api/shop/mutations/customer-verify-token" },
                            { text: "Customer Logout", link: "/api/graphql-api/shop/mutations/customer-logout" },
                            { text: "Update Customer Profile", link: "/api/graphql-api/shop/mutations/update-customer-profile" },
                            { text: "Delete Customer Profile", link: "/api/graphql-api/shop/mutations/delete-customer-profile" },
                            { text: "Forgot Password", link: "/api/graphql-api/shop/mutations/forgot-password" },
                            { text: "Create Customer Address", link: "/api/graphql-api/shop/mutations/create-customer-address" },
                            { text: "Update Customer Address", link: "/api/graphql-api/shop/mutations/update-customer-address" },
                            { text: "Delete Customer Address", link: "/api/graphql-api/shop/mutations/delete-customer-address" },
                            { text: "Cancel Customer Order", link: "/api/graphql-api/shop/mutations/cancel-customer-order" },
                            { text: "Reorder Customer Order", link: "/api/graphql-api/shop/mutations/reorder-customer-order" },
                            { text: "Get Customer Reviews", link: "/api/graphql-api/shop/queries/get-customer-reviews" },
                            { text: "Get Customer Review", link: "/api/graphql-api/shop/queries/get-customer-review" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Cart",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Get Cart", link: "/api/graphql-api/shop/queries/get-cart" }
                          ]
                        },
                        {
                          text: "Mutations",
                          collapsed: false,
                          items: [
                            { text: "CreateCart", link: "/api/graphql-api/shop/mutations/create-cart" },
                            { text: "AddToCart", link: "/api/graphql-api/shop/mutations/add-to-cart" },
                            { text: "UpdateCartItem", link: "/api/graphql-api/shop/mutations/update-cart-item" },
                            { text: "RemoveCartItem", link: "/api/graphql-api/shop/mutations/remove-cart-item" },
                            { text: "ApplyCoupon", link: "/api/graphql-api/shop/mutations/apply-coupon" },
                            { text: "RemoveCoupon", link: "/api/graphql-api/shop/mutations/remove-coupon" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Checkout",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Get Addresses", link: "/api/graphql-api/shop/queries/get-addresses" },
                            { text: "Get Shipping Methods", link: "/api/graphql-api/shop/queries/get-shipping-methods" },
                            { text: "Get Payment Methods", link: "/api/graphql-api/shop/queries/get-payment-methods" }
                          ]
                        },
                        {
                          text: "Mutations",
                          collapsed: false,
                          items: [
                            { text: "Set Shipping Address", link: "/api/graphql-api/shop/mutations/set-shipping-address" },
                            { text: "Set Billing Address", link: "/api/graphql-api/shop/mutations/set-billing-address" },
                            { text: "Set Shipping Method", link: "/api/graphql-api/shop/mutations/set-shipping-method" },
                            { text: "Set Payment Method", link: "/api/graphql-api/shop/mutations/set-payment-method" },
                            { text: "Place Order", link: "/api/graphql-api/shop/mutations/place-order" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Wishlist",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Get Wishlists", link: "/api/graphql-api/shop/queries/get-wishlists" },
                            { text: "Get Wishlist Item", link: "/api/graphql-api/shop/queries/get-wishlist" }
                          ]
                        },
                        {
                          text: "Mutations",
                          collapsed: false,
                          items: [
                            { text: "Create Wishlist", link: "/api/graphql-api/shop/mutations/create-wishlist" },
                            { text: "Toggle Wishlist", link: "/api/graphql-api/shop/mutations/toggle-wishlist" },
                            { text: "Delete Wishlist", link: "/api/graphql-api/shop/mutations/delete-wishlist" },
                            { text: "Move to Cart", link: "/api/graphql-api/shop/mutations/move-wishlist-to-cart" },
                            { text: "Delete All Wishlists", link: "/api/graphql-api/shop/mutations/delete-all-wishlists" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Compare",
                      collapsed: true,
                      items: [
                        {
                          text: "Queries",
                          collapsed: false,
                          items: [
                            { text: "Get Compare Items", link: "/api/graphql-api/shop/queries/get-compare-items" },
                            { text: "Get Compare Item", link: "/api/graphql-api/shop/queries/get-compare-item" }
                          ]
                        },
                        {
                          text: "Mutations",
                          collapsed: false,
                          items: [
                            { text: "Create Compare Item", link: "/api/graphql-api/shop/mutations/create-compare-item" },
                            { text: "Delete Compare Item", link: "/api/graphql-api/shop/mutations/delete-compare-item" },
                            { text: "Delete All Compare Items", link: "/api/graphql-api/shop/mutations/delete-all-compare-items" }
                          ]
                        }
                      ]
                    },
                    {
                      text: "Contact Us",
                      collapsed: true,
                      items: [
                        {
                          text: "Mutations",
                          collapsed: false,
                          items: [
                            { text: "Create Contact Us", link: "/api/graphql-api/shop/mutations/create-contact-us" }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  text: "Admin API",
                  collapsed: false,
                  items: [
                    { text: "Coming Soon", link: "/api/graphql-api/admin-coming-soon" }
                  ]
                },
                { text: "Playground Guide", link: "/api/graphql-api/playground" },
                { text: "Best Practices", link: "/api/graphql-api/best-practices" },
                { text: "Integration Guides", link: "/api/graphql-api/integrations" }
              ]
            },
            {
              text: "Rest API",
              collapsed: true,
              items: [
                { text: "Introduction", link: "/api/rest-api/introduction" },
                {
                  text: "Shop API",
                  collapsed: false,
                  items: [
                    {
                      text: "Locales",
                      collapsed: false,
                      items: [
                        { text: "Get All Locales", link: "/api/rest-api/shop/locales/get-locales" },
                        { text: "Get Single Locale", link: "/api/rest-api/shop/locales/get-single-locale" }
                      ]
                    },
                    {
                      text: "Categories",
                      collapsed: false,
                      items: [
                        { text: "Get Categories", link: "/api/rest-api/shop/categories/get-categories" },
                        { text: "Get Category", link: "/api/rest-api/shop/categories/get-category" }
                      ]
                    },
                    {
                      text: "Theme Customizations",
                      collapsed: false,
                      items: [
                        { text: "Get Theme Customizations", link: "/api/rest-api/shop/theme-customizations/get-theme-customizations" },
                        { text: "Get Theme Customization", link: "/api/rest-api/shop/theme-customizations/get-theme-customization" }
                      ]
                    },
                    {
                      text: "Products",
                      collapsed: false,
                      items: [
                        { text: "Get Products", link: "/api/rest-api/shop/products/get-products" },
                        { text: "Get Product", link: "/api/rest-api/shop/products/get-product" },
                        { text: "Search Product", link: "/api/rest-api/shop/products/search-product" }
                      ]
                    },
                    {
                      text: "Product Review",
                      collapsed: false,
                      items: [
                        { text: "Get Product Reviews", link: "/api/rest-api/shop/product-reviews/get-product-reviews" },
                        { text: "Get Product Review", link: "/api/rest-api/shop/product-reviews/get-product-review" },
                        { text: "Create Product Review", link: "/api/rest-api/shop/product-reviews/create-product-review" },
                        { text: "Update Product Review", link: "/api/rest-api/shop/product-reviews/update-product-review" },
                        { text: "Delete Product Review", link: "/api/rest-api/shop/product-reviews/delete-product-review" }
                      ]
                    },
                    {
                      text: "Attribute",
                      collapsed: false,
                      items: [
                        { text: "Get Attributes", link: "/api/rest-api/shop/attributes/get-attributes" },
                        { text: "Single Attribute", link: "/api/rest-api/shop/attributes/get-attribute" },
                        { text: "Get Attribute Options", link: "/api/rest-api/shop/attributes/get-attribute-options" }
                      ]
                    },
                    {
                      text: "Channel",
                      collapsed: false,
                      items: [
                        { text: "Get Channels", link: "/api/rest-api/shop/channels/get-channels" },
                        { text: "Single Channel", link: "/api/rest-api/shop/channels/get-channel" }
                      ]
                    },
                    {
                      text: "Country and State",
                      collapsed: false,
                      items: [
                        { text: "Get Countries", link: "/api/rest-api/shop/countries/get-countries" },
                        { text: "Single Country", link: "/api/rest-api/shop/countries/get-country" },
                        { text: "Get Country States", link: "/api/rest-api/shop/countries/get-country-states" },
                        { text: "Single Country State", link: "/api/rest-api/shop/countries/get-country-state" }
                      ]
                    },
                    {
                      text: "Customer",
                      collapsed: false,
                      items: [
                        { text: "Registration", link: "/api/rest-api/shop/customers/customer-registration" },
                        { text: "Login", link: "/api/rest-api/shop/customers/customer-login" },
                        { text: "Verify Token", link: "/api/rest-api/shop/customers/customer-verify-token" },
                        { text: "Customer Logout", link: "/api/rest-api/shop/customers/customer-logout" },
                        { text: "Forgot Password", link: "/api/rest-api/shop/customers/forgot-password" },
                        { text: "Reset Password", link: "/api/rest-api/shop/customers/reset-password" },
                        { text: "Get Addresses", link: "/api/rest-api/shop/customers/get-customer-addresses" },
                        { text: "Create Address", link: "/api/rest-api/shop/customers/create-customer-address" },
                        { text: "Update Address", link: "/api/rest-api/shop/customers/update-customer-address" },
                        { text: "Delete Address", link: "/api/rest-api/shop/customers/delete-customer-address" },
                        { text: "Get Profile", link: "/api/rest-api/shop/customers/get-customer-profile" },
                        { text: "Update Profile", link: "/api/rest-api/shop/customers/update-customer-profile" },
                        { text: "Delete Profile", link: "/api/rest-api/shop/customers/delete-customer-profile" },
                        { text: "Get Orders", link: "/api/rest-api/shop/customer-orders/get-customer-orders" },
                        { text: "Get Order", link: "/api/rest-api/shop/customer-orders/get-customer-order" },
                        { text: "Get Invoices", link: "/api/rest-api/shop/customer-invoices/get-customer-invoices" },
                        { text: "Get Invoice", link: "/api/rest-api/shop/customer-invoices/get-customer-invoice" },
                        { text: "Download Invoice PDF", link: "/api/rest-api/shop/customer-invoices/download-customer-invoice-pdf" },
                        { text: "Get Downloadable Products", link: "/api/rest-api/shop/customer-downloadable-products/get-customer-downloadable-products" },
                        { text: "Get Downloadable Product", link: "/api/rest-api/shop/customer-downloadable-products/get-customer-downloadable-product" },
                        { text: "Get Customer Reviews", link: "/api/rest-api/shop/customer-reviews/get-customer-reviews" },
                        { text: "Get Customer Review", link: "/api/rest-api/shop/customer-reviews/get-customer-review" }
                      ]
                    },
                    {
                      text: "Cart",
                      collapsed: false,
                      items: [
                        { text: "Get Cart", link: "/api/rest-api/shop/cart/get-cart" },
                        { text: "Create Cart", link: "/api/rest-api/shop/cart/create-cart" },
                        { text: "Add to Cart", link: "/api/rest-api/shop/cart/add-to-cart" },
                        { text: "Update Cart Item", link: "/api/rest-api/shop/cart/update-cart-item" },
                        { text: "Remove Cart Item", link: "/api/rest-api/shop/cart/remove-cart-item" },
                        { text: "Apply Coupon", link: "/api/rest-api/shop/cart/apply-coupon" },
                        { text: "Remove Coupon", link: "/api/rest-api/shop/cart/remove-coupon" }
                      ]
                    },
                    {
                      text: "Checkout",
                      collapsed: false,
                      items: [
                        { text: "Get Addresses", link: "/api/rest-api/shop/checkout/get-addresses" },
                        { text: "Get Shipping Methods", link: "/api/rest-api/shop/checkout/get-shipping-methods" },
                        { text: "Get Payment Methods", link: "/api/rest-api/shop/checkout/get-payment-methods" },
                        { text: "Set Shipping Address", link: "/api/rest-api/shop/checkout/set-shipping-address" },
                        { text: "Set Billing Address", link: "/api/rest-api/shop/checkout/set-billing-address" },
                        { text: "Set Shipping Method", link: "/api/rest-api/shop/checkout/set-shipping-method" },
                        { text: "Set Payment Method", link: "/api/rest-api/shop/checkout/set-payment-method" },
                        { text: "Place Order", link: "/api/rest-api/shop/checkout/place-order" }
                      ]
                    }
                  ]
                },
                {
                  text: "Admin API",
                  collapsed: false,
                  items: [
                    { text: "Coming Soon", link: "/api/rest-api/admin-coming-soon" }
                  ]
                },
                { text: "Testing & Debugging", link: "/api/rest-api/testing-debugging" },
                { text: "Best Practices", link: "/api/rest-api/best-practices" }
              ]
            }
          ]
        }
      ],
      outline: {
        level: "deep"
      },
      footer: {
        message: 'Released under the <a href="https://opensource.org/licenses/mit" target="_blank" class="mit-license">MIT License</a>.',
        copyright: `Copyright \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} Webkul`
      },
      socialLinks: [
        { icon: "github", link: "https://github.com/bagisto/bagisto-api" }
      ],
      search: {
        provider: "local"
      }
    },
    buildEnd(siteConfig) {
      const outDir = siteConfig.outDir;
      Object.entries(redirects).forEach(([from, to]) => {
        if (from.includes("*")) {
          console.warn(`\u26A0\uFE0F Skipping wildcard redirect: ${from} -> ${to}`);
          return;
        }
        let filePath;
        if (from.endsWith(".html")) {
          filePath = path.join(outDir, from);
        } else {
          filePath = path.join(outDir, from, "index.html");
        }
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, makeRedirectHtml(to), "utf-8");
        console.log(`\u2705 Redirect created: ${from} -> ${to}`);
      });
    }
  };
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvX3JlZGlyZWN0cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3VzZXJzL3lhc2h2aXIuc2luZ2gvd3d3L2h0bWwvQmFnaXN0by9iYWdpc3RvLWFwaS1kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3VzZXJzL3lhc2h2aXIuc2luZ2gvd3d3L2h0bWwvQmFnaXN0by9iYWdpc3RvLWFwaS1kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91c2Vycy95YXNodmlyLnNpbmdoL3d3dy9odG1sL0JhZ2lzdG8vYmFnaXN0by1hcGktZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgeyByZWRpcmVjdHMsIG1ha2VSZWRpcmVjdEh0bWwgfSBmcm9tICcuL19yZWRpcmVjdHMnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5cbi8vIEhlbHBlcjogRXNjYXBlIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzAzOTsnXG4gIH1cbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvWyY8PlwiJ10vZywgKG0pID0+IG1hcFttXSlcbn1cblxuLy8gSGVscGVyOiBHZXQgbGFuZ3VhZ2UgY2xhc3MgZm9yIHN5bnRheCBoaWdobGlnaHRpbmdcbmZ1bmN0aW9uIGdldExhbmd1YWdlQ2xhc3MobGFiZWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGxhbmdNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgJ2dxbCc6ICdncmFwaHFsJyxcbiAgICAnZ3JhcGhxbCc6ICdncmFwaHFsJyxcbiAgICAnY3VybCc6ICdiYXNoJyxcbiAgICAnbm9kZSc6ICdqYXZhc2NyaXB0JyxcbiAgICAnbm9kZS5qcyc6ICdqYXZhc2NyaXB0JyxcbiAgICAnbm9kZWpzJzogJ2phdmFzY3JpcHQnLFxuICAgICdyZWFjdCc6ICdqc3gnLFxuICAgICdydWJ5JzogJ3J1YnknLFxuICAgICdwaHAnOiAncGhwJ1xuICB9XG4gIHJldHVybiBsYW5nTWFwW2xhYmVsLnRvTG93ZXJDYXNlKCldIHx8IGxhYmVsLnRvTG93ZXJDYXNlKClcbn1cblxuLy8gSGVscGVyOiBQYXJzZSB0YWJzIGNvbnRlbnRcbmZ1bmN0aW9uIHBhcnNlVGFic0NvbnRlbnQoY29udGVudDogc3RyaW5nKTogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyBjb2RlOiBzdHJpbmcgfT4ge1xuICBjb25zdCB0YWJzOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IGNvZGU6IHN0cmluZyB9PiA9IFtdXG4gIFxuICAvLyBTcGxpdCBieSA9PSB0byBmaW5kIGVhY2ggdGFiIHNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbnMgPSBjb250ZW50LnNwbGl0KC9ePT0gL20pXG4gIFxuICBmb3IgKGxldCBpID0gMTsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW2ldXG4gICAgLy8gRmlyc3QgbGluZSBpcyB0aGUgbGFiZWxcbiAgICBjb25zdCBsaW5lcyA9IHNlY3Rpb24uc3BsaXQoJ1xcbicpXG4gICAgY29uc3QgbGFiZWwgPSBsaW5lc1swXS50cmltKClcbiAgICBcbiAgICAvLyBGaW5kIGNvZGUgYmxvY2tcbiAgICBjb25zdCBjb2RlTWF0Y2ggPSBzZWN0aW9uLm1hdGNoKC9gYGBbXFx3XSpcXG4oW1xcc1xcU10qPylgYGAvKVxuICAgIGlmIChjb2RlTWF0Y2ggJiYgY29kZU1hdGNoWzFdKSB7XG4gICAgICB0YWJzLnB1c2goe1xuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGNvZGU6IGNvZGVNYXRjaFsxXS50cmltKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhYnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICAvLyBMb2FkIGVudiB2YXJpYWJsZXNcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJylcblxuICByZXR1cm4ge1xuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXG4gIGxhbmc6ICdlbi1VUycsXG4gIHRpdGxlOiBcIkJhZ2lzdG9cIixcbiAgZGVzY3JpcHRpb246IFwiQmFnaXN0byBEZXZlbG9wZXIgRG9jdW1lbnRhdGlvblwiLFxuICBcbiAgdml0ZToge1xuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnXG4gICAgfSxcbiAgICBkZWZpbmU6IHtcbiAgICAgICdpbXBvcnQubWV0YS5lbnYuVklURV9SRVNUX0FQSV9VUkwnOiBKU09OLnN0cmluZ2lmeShlbnYuVklURV9SRVNUX0FQSV9VUkwpLFxuICAgICAgJ2ltcG9ydC5tZXRhLmVudi5WSVRFX0dSQVBIUUxfQVBJX1VSTCc6IEpTT04uc3RyaW5naWZ5KGVudi5WSVRFX0dSQVBIUUxfQVBJX1VSTClcbiAgICB9XG4gIH0sXG5cbiAgc3JjRGlyOiAnLi9zcmMnLFxuXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcblxuICAgIGxvZ286IHtcbiAgICAgIGxpZ2h0OiAnL2xvZ28ucG5nJyxcbiAgICAgIGRhcms6ICcvbG9nby1kYXJrLnBuZycsXG4gICAgfSxcblxuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnRGV2IERvY3MnLCBsaW5rOiAnaHR0cHM6Ly9kZXZkb2NzLmJhZ2lzdG8uY29tLycgfSxcbiAgICAgIHsgdGV4dDogJ1VzZXIgR3VpZGUnLCBsaW5rOiAnaHR0cHM6Ly9kb2NzLmJhZ2lzdG8uY29tLycgfSxcbiAgICAgIHsgdGV4dDogJ0V4dGVuc2lvbnMnLCBsaW5rOiAnaHR0cHM6Ly9iYWdpc3RvLmNvbS9lbi9leHRlbnNpb25zLycgfSxcbiAgICAgIHsgdGV4dDogJ0NvbW11bml0eSBGb3J1bScsIGxpbms6ICdodHRwczovL2ZvcnVtcy5iYWdpc3RvLmNvbS8nIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vYmFnaXN0by5jb20vZW4vY29udGFjdHMvJyB9XG4gICAgXSxcblxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL2JhZ2lzdG8vYmFnaXN0by1hcGktZG9jcy9lZGl0L21hc3Rlci9zcmMvOnBhdGgnLFxuICAgICAgdGV4dDogJ0hlbHAgdXMgaW1wcm92ZSB0aGlzIHBhZ2Ugb24gR2l0aHViLidcbiAgICB9LFxuXG4gICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgIHRleHQ6ICdMYXN0IFVwZGF0ZWQnLFxuICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICBkYXRlU3R5bGU6ICdmdWxsJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdCYWdpc3RvIEFQSXMnLFxuICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvYXBpL2ludHJvZHVjdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvYXBpL3NldHVwJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0F1dGhlbnRpY2F0aW9uJywgbGluazogJy9hcGkvYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnU3RvcmVmcm9udCBLZXlzJywgbGluazogJy9hcGkvc3RvcmVmcm9udC1hcGkta2V5LW1hbmFnZW1lbnQtZ3VpZGUnIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0dyYXBoUUwgQVBJJyxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL2ludHJvZHVjdGlvbicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9hdXRoZW50aWNhdGlvbicgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdTaG9wIEFQSScsXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2NhbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogWyAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1F1ZXJpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0xvY2FsZXMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL2xvY2FsZXMvcXVlcmllcy9sb2NhbGVzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2luZ2xlIExvY2FsZScsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvbG9jYWxlcy9xdWVyaWVzL3NpbmdsZS1sb2NhbGUnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdRdWVyaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUcmVlIENhdGVnb3JpZXMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvdHJlZS1jYXRlZ29yaWVzJyB9LCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDYXRlZ29yaWVzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2NhdGVnb3JpZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdTaW5nbGUgQ2F0ZWdvcnknLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWNhdGVnb3J5JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdUaGVtZSBDdXN0b21pc2F0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUaGVtZSBDdXN0b21pc2F0aW9ucycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy90aGVtZS1jdXN0b21pc2F0aW9ucycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2luZ2xlIFRoZW1lIEN1c3RvbWlzYXRpb24nLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvc2luZ2xlLXRoZW1lLWN1c3RvbWlzYXRpb24nIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDTVMgUGFnZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdRdWVyaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdQYWdlcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtcGFnZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdTaW5nbGUgUGFnZScsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtcGFnZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQcm9kdWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUXVlcmllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUHJvZHVjdHMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LXByb2R1Y3RzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2VhcmNoIFByb2R1Y3RzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL3NlYXJjaC1wcm9kdWN0cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NpbmdsZSBQcm9kdWN0JywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1wcm9kdWN0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IFByb2R1Y3QgQnkgVHlwZScsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtcHJvZHVjdC1ieS10eXBlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1Byb2R1Y3QgUmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUXVlcmllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUHJvZHVjdCBSZXZpZXdzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1wcm9kdWN0LXJldmlld3MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ011dGF0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlIFByb2R1Y3QgUmV2aWV3JywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvY3JlYXRlLXByb2R1Y3QtcmV2aWV3JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIFByb2R1Y3QgUmV2aWV3JywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvdXBkYXRlLXByb2R1Y3QtcmV2aWV3JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVsZXRlIFByb2R1Y3QgUmV2aWV3JywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvZGVsZXRlLXByb2R1Y3QtcmV2aWV3JyB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQXR0cmlidXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUXVlcmllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQXR0cmlidXRlcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtYXR0cmlidXRlcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NpbmdsZSBBdHRyaWJ1dGUnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWF0dHJpYnV0ZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0F0dHJpYnV0ZSBPcHRpb25zJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1hdHRyaWJ1dGUtb3B0aW9ucycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDaGFubmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUXVlcmllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2hhbm5lbHMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWNoYW5uZWxzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2luZ2xlIENoYW5uZWwnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWNoYW5uZWwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2luZ2xlIENvdW50cnknLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWNvdW50cnknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvdW50cmllcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY291bnRyaWVzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDb3VudHJ5IFN0YXRlcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY291bnRyeS1zdGF0ZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvdW50cnkgU3RhdGUnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWNvdW50cnktc3RhdGUnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LCAgXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0N1c3RvbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUXVlcmllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IEN1c3RvbWVyIFByb2ZpbGUnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWN1c3RvbWVyLXByb2ZpbGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgQ3VzdG9tZXIgT3JkZXJzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1jdXN0b21lci1vcmRlcnMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgQ3VzdG9tZXIgT3JkZXInLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWN1c3RvbWVyLW9yZGVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IEN1c3RvbWVyIE9yZGVyIFNoaXBtZW50cycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY3VzdG9tZXItb3JkZXItc2hpcG1lbnRzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IEN1c3RvbWVyIE9yZGVyIFNoaXBtZW50JywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1jdXN0b21lci1vcmRlci1zaGlwbWVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBDdXN0b21lciBJbnZvaWNlcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY3VzdG9tZXItaW52b2ljZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgQ3VzdG9tZXIgSW52b2ljZScsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY3VzdG9tZXItaW52b2ljZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0Rvd25sb2FkIEludm9pY2UnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZG93bmxvYWQtaW52b2ljZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBEb3dubG9hZGFibGUgUHJvZHVjdHMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWN1c3RvbWVyLWRvd25sb2FkYWJsZS1wcm9kdWN0cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBEb3dubG9hZGFibGUgUHJvZHVjdCcsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY3VzdG9tZXItZG93bmxvYWRhYmxlLXByb2R1Y3QnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgQ3VzdG9tZXIgQWRkcmVzc2VzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1jdXN0b21lci1hZGRyZXNzZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTXV0YXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDdXN0b21lciBSZWdpc3RyYXRpb24nLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9jdXN0b21lci1yZWdpc3RyYXRpb24nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDdXN0b21lciBMb2dpbicsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvbXV0YXRpb25zL2N1c3RvbWVyLWxvZ2luJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ3VzdG9tZXIgVmVyaWZ5IFRva2VuJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvY3VzdG9tZXItdmVyaWZ5LXRva2VuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ3VzdG9tZXIgTG9nb3V0JywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvY3VzdG9tZXItbG9nb3V0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIEN1c3RvbWVyIFByb2ZpbGUnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy91cGRhdGUtY3VzdG9tZXItcHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RlbGV0ZSBDdXN0b21lciBQcm9maWxlJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvZGVsZXRlLWN1c3RvbWVyLXByb2ZpbGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdGb3Jnb3QgUGFzc3dvcmQnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9mb3Jnb3QtcGFzc3dvcmQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgQ3VzdG9tZXIgQWRkcmVzcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvbXV0YXRpb25zL2NyZWF0ZS1jdXN0b21lci1hZGRyZXNzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIEN1c3RvbWVyIEFkZHJlc3MnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy91cGRhdGUtY3VzdG9tZXItYWRkcmVzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RlbGV0ZSBDdXN0b21lciBBZGRyZXNzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvZGVsZXRlLWN1c3RvbWVyLWFkZHJlc3MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDYW5jZWwgQ3VzdG9tZXIgT3JkZXInLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9jYW5jZWwtY3VzdG9tZXItb3JkZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdSZW9yZGVyIEN1c3RvbWVyIE9yZGVyJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvcmVvcmRlci1jdXN0b21lci1vcmRlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBDdXN0b21lciBSZXZpZXdzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1jdXN0b21lci1yZXZpZXdzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IEN1c3RvbWVyIFJldmlldycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY3VzdG9tZXItcmV2aWV3JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUXVlcmllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IENhcnQnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWNhcnQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTXV0YXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDcmVhdGVDYXJ0JywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvY3JlYXRlLWNhcnQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdBZGRUb0NhcnQnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9hZGQtdG8tY2FydCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VwZGF0ZUNhcnRJdGVtJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvdXBkYXRlLWNhcnQtaXRlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JlbW92ZUNhcnRJdGVtJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvcmVtb3ZlLWNhcnQtaXRlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0FwcGx5Q291cG9uJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvYXBwbHktY291cG9uJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmVtb3ZlQ291cG9uJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvcmVtb3ZlLWNvdXBvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDaGVja291dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1F1ZXJpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBBZGRyZXNzZXMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWFkZHJlc3NlcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBTaGlwcGluZyBNZXRob2RzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC1zaGlwcGluZy1tZXRob2RzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IFBheW1lbnQgTWV0aG9kcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtcGF5bWVudC1tZXRob2RzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdNdXRhdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NldCBTaGlwcGluZyBBZGRyZXNzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvc2V0LXNoaXBwaW5nLWFkZHJlc3MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdTZXQgQmlsbGluZyBBZGRyZXNzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvc2V0LWJpbGxpbmctYWRkcmVzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NldCBTaGlwcGluZyBNZXRob2QnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9zZXQtc2hpcHBpbmctbWV0aG9kJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2V0IFBheW1lbnQgTWV0aG9kJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvc2V0LXBheW1lbnQtbWV0aG9kJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUGxhY2UgT3JkZXInLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9wbGFjZS1vcmRlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdXaXNobGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1F1ZXJpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBXaXNobGlzdHMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LXdpc2hsaXN0cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBXaXNobGlzdCBJdGVtJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9xdWVyaWVzL2dldC13aXNobGlzdCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTXV0YXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgV2lzaGxpc3QnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9jcmVhdGUtd2lzaGxpc3QnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdUb2dnbGUgV2lzaGxpc3QnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy90b2dnbGUtd2lzaGxpc3QnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdEZWxldGUgV2lzaGxpc3QnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9kZWxldGUtd2lzaGxpc3QnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdNb3ZlIHRvIENhcnQnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9tb3ZlLXdpc2hsaXN0LXRvLWNhcnQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdEZWxldGUgQWxsIFdpc2hsaXN0cycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvbXV0YXRpb25zL2RlbGV0ZS1hbGwtd2lzaGxpc3RzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvbXBhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdRdWVyaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgQ29tcGFyZSBJdGVtcycsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL3Nob3AvcXVlcmllcy9nZXQtY29tcGFyZS1pdGVtcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBDb21wYXJlIEl0ZW0nLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL3F1ZXJpZXMvZ2V0LWNvbXBhcmUtaXRlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTXV0YXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgQ29tcGFyZSBJdGVtJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvY3JlYXRlLWNvbXBhcmUtaXRlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RlbGV0ZSBDb21wYXJlIEl0ZW0nLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9zaG9wL211dGF0aW9ucy9kZWxldGUtY29tcGFyZS1pdGVtJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVsZXRlIEFsbCBDb21wYXJlIEl0ZW1zJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvZGVsZXRlLWFsbC1jb21wYXJlLWl0ZW1zJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvbnRhY3QgVXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdNdXRhdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NyZWF0ZSBDb250YWN0IFVzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvc2hvcC9tdXRhdGlvbnMvY3JlYXRlLWNvbnRhY3QtdXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQWRtaW4gQVBJJyxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDb21pbmcgU29vbicsIGxpbms6ICcvYXBpL2dyYXBocWwtYXBpL2FkbWluLWNvbWluZy1zb29uJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdQbGF5Z3JvdW5kIEd1aWRlJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvcGxheWdyb3VuZCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnQmVzdCBQcmFjdGljZXMnLCBsaW5rOiAnL2FwaS9ncmFwaHFsLWFwaS9iZXN0LXByYWN0aWNlcycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnSW50ZWdyYXRpb24gR3VpZGVzJywgbGluazogJy9hcGkvZ3JhcGhxbC1hcGkvaW50ZWdyYXRpb25zJyB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBcbiAgICAgICAgICAgIHRleHQ6ICdSZXN0IEFQSScsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1Nob3AgQVBJJyxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2NhbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFsgXG4gICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IEFsbCBMb2NhbGVzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9sb2NhbGVzL2dldC1sb2NhbGVzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBTaW5nbGUgTG9jYWxlJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9sb2NhbGVzL2dldC1zaW5nbGUtbG9jYWxlJyB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDYXRlZ29yaWVzJyxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IENhdGVnb3JpZXMnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NhdGVnb3JpZXMvZ2V0LWNhdGVnb3JpZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBDYXRlZ29yeScsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY2F0ZWdvcmllcy9nZXQtY2F0ZWdvcnknIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdUaGVtZSBDdXN0b21pemF0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBUaGVtZSBDdXN0b21pemF0aW9ucycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvdGhlbWUtY3VzdG9taXphdGlvbnMvZ2V0LXRoZW1lLWN1c3RvbWl6YXRpb25zJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgVGhlbWUgQ3VzdG9taXphdGlvbicsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvdGhlbWUtY3VzdG9taXphdGlvbnMvZ2V0LXRoZW1lLWN1c3RvbWl6YXRpb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBQcm9kdWN0cycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvcHJvZHVjdHMvZ2V0LXByb2R1Y3RzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgUHJvZHVjdCcsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvcHJvZHVjdHMvZ2V0LXByb2R1Y3QnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NlYXJjaCBQcm9kdWN0JywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9wcm9kdWN0cy9zZWFyY2gtcHJvZHVjdCcgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1Byb2R1Y3QgUmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IFByb2R1Y3QgUmV2aWV3cycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvcHJvZHVjdC1yZXZpZXdzL2dldC1wcm9kdWN0LXJldmlld3MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBQcm9kdWN0IFJldmlldycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvcHJvZHVjdC1yZXZpZXdzL2dldC1wcm9kdWN0LXJldmlldycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlIFByb2R1Y3QgUmV2aWV3JywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9wcm9kdWN0LXJldmlld3MvY3JlYXRlLXByb2R1Y3QtcmV2aWV3JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdVcGRhdGUgUHJvZHVjdCBSZXZpZXcnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL3Byb2R1Y3QtcmV2aWV3cy91cGRhdGUtcHJvZHVjdC1yZXZpZXcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RlbGV0ZSBQcm9kdWN0IFJldmlldycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvcHJvZHVjdC1yZXZpZXdzL2RlbGV0ZS1wcm9kdWN0LXJldmlldycgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0F0dHJpYnV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBBdHRyaWJ1dGVzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9hdHRyaWJ1dGVzL2dldC1hdHRyaWJ1dGVzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdTaW5nbGUgQXR0cmlidXRlJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9hdHRyaWJ1dGVzL2dldC1hdHRyaWJ1dGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBBdHRyaWJ1dGUgT3B0aW9ucycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvYXR0cmlidXRlcy9nZXQtYXR0cmlidXRlLW9wdGlvbnMnIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDaGFubmVsJyxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IENoYW5uZWxzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jaGFubmVscy9nZXQtY2hhbm5lbHMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NpbmdsZSBDaGFubmVsJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jaGFubmVscy9nZXQtY2hhbm5lbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NvdW50cnkgYW5kIFN0YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IENvdW50cmllcycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY291bnRyaWVzL2dldC1jb3VudHJpZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NpbmdsZSBDb3VudHJ5JywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jb3VudHJpZXMvZ2V0LWNvdW50cnknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBDb3VudHJ5IFN0YXRlcycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY291bnRyaWVzL2dldC1jb3VudHJ5LXN0YXRlcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2luZ2xlIENvdW50cnkgU3RhdGUnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NvdW50cmllcy9nZXQtY291bnRyeS1zdGF0ZScgfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0N1c3RvbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmVnaXN0cmF0aW9uJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jdXN0b21lcnMvY3VzdG9tZXItcmVnaXN0cmF0aW9uJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdMb2dpbicsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY3VzdG9tZXJzL2N1c3RvbWVyLWxvZ2luJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdWZXJpZnkgVG9rZW4nLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVycy9jdXN0b21lci12ZXJpZnktdG9rZW4nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0N1c3RvbWVyIExvZ291dCcsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY3VzdG9tZXJzL2N1c3RvbWVyLWxvZ291dCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRm9yZ290IFBhc3N3b3JkJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jdXN0b21lcnMvZm9yZ290LXBhc3N3b3JkJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdSZXNldCBQYXNzd29yZCcsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY3VzdG9tZXJzL3Jlc2V0LXBhc3N3b3JkJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgQWRkcmVzc2VzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jdXN0b21lcnMvZ2V0LWN1c3RvbWVyLWFkZHJlc3Nlcyd9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ3JlYXRlIEFkZHJlc3MnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVycy9jcmVhdGUtY3VzdG9tZXItYWRkcmVzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIEFkZHJlc3MnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVycy91cGRhdGUtY3VzdG9tZXItYWRkcmVzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVsZXRlIEFkZHJlc3MnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVycy9kZWxldGUtY3VzdG9tZXItYWRkcmVzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IFByb2ZpbGUnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVycy9nZXQtY3VzdG9tZXItcHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnVXBkYXRlIFByb2ZpbGUnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVycy91cGRhdGUtY3VzdG9tZXItcHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVsZXRlIFByb2ZpbGUnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVycy9kZWxldGUtY3VzdG9tZXItcHJvZmlsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IE9yZGVycycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY3VzdG9tZXItb3JkZXJzL2dldC1jdXN0b21lci1vcmRlcnMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBPcmRlcicsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY3VzdG9tZXItb3JkZXJzL2dldC1jdXN0b21lci1vcmRlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IEludm9pY2VzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jdXN0b21lci1pbnZvaWNlcy9nZXQtY3VzdG9tZXItaW52b2ljZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBJbnZvaWNlJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jdXN0b21lci1pbnZvaWNlcy9nZXQtY3VzdG9tZXItaW52b2ljZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnRG93bmxvYWQgSW52b2ljZSBQREYnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2N1c3RvbWVyLWludm9pY2VzL2Rvd25sb2FkLWN1c3RvbWVyLWludm9pY2UtcGRmJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgRG93bmxvYWRhYmxlIFByb2R1Y3RzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jdXN0b21lci1kb3dubG9hZGFibGUtcHJvZHVjdHMvZ2V0LWN1c3RvbWVyLWRvd25sb2FkYWJsZS1wcm9kdWN0cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IERvd25sb2FkYWJsZSBQcm9kdWN0JywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jdXN0b21lci1kb3dubG9hZGFibGUtcHJvZHVjdHMvZ2V0LWN1c3RvbWVyLWRvd25sb2FkYWJsZS1wcm9kdWN0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdHZXQgQ3VzdG9tZXIgUmV2aWV3cycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY3VzdG9tZXItcmV2aWV3cy9nZXQtY3VzdG9tZXItcmV2aWV3cycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IEN1c3RvbWVyIFJldmlldycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY3VzdG9tZXItcmV2aWV3cy9nZXQtY3VzdG9tZXItcmV2aWV3JyB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBDYXJ0JywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jYXJ0L2dldC1jYXJ0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdDcmVhdGUgQ2FydCcsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY2FydC9jcmVhdGUtY2FydCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnQWRkIHRvIENhcnQnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NhcnQvYWRkLXRvLWNhcnQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ1VwZGF0ZSBDYXJ0IEl0ZW0nLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NhcnQvdXBkYXRlLWNhcnQtaXRlbScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmVtb3ZlIENhcnQgSXRlbScsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY2FydC9yZW1vdmUtY2FydC1pdGVtJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdBcHBseSBDb3Vwb24nLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NhcnQvYXBwbHktY291cG9uJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdSZW1vdmUgQ291cG9uJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jYXJ0L3JlbW92ZS1jb3Vwb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDaGVja291dCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBBZGRyZXNzZXMnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NoZWNrb3V0L2dldC1hZGRyZXNzZXMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0dldCBTaGlwcGluZyBNZXRob2RzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jaGVja291dC9nZXQtc2hpcHBpbmctbWV0aG9kcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IFBheW1lbnQgTWV0aG9kcycsIGxpbms6ICcvYXBpL3Jlc3QtYXBpL3Nob3AvY2hlY2tvdXQvZ2V0LXBheW1lbnQtbWV0aG9kcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnU2V0IFNoaXBwaW5nIEFkZHJlc3MnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NoZWNrb3V0L3NldC1zaGlwcGluZy1hZGRyZXNzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdTZXQgQmlsbGluZyBBZGRyZXNzJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jaGVja291dC9zZXQtYmlsbGluZy1hZGRyZXNzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdTZXQgU2hpcHBpbmcgTWV0aG9kJywgbGluazogJy9hcGkvcmVzdC1hcGkvc2hvcC9jaGVja291dC9zZXQtc2hpcHBpbmctbWV0aG9kJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6ICdTZXQgUGF5bWVudCBNZXRob2QnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NoZWNrb3V0L3NldC1wYXltZW50LW1ldGhvZCd9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiAnUGxhY2UgT3JkZXInLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9zaG9wL2NoZWNrb3V0L3BsYWNlLW9yZGVyJyB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdBZG1pbiBBUEknLFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvbWluZyBTb29uJywgbGluazogJy9hcGkvcmVzdC1hcGkvYWRtaW4tY29taW5nLXNvb24nIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1Rlc3RpbmcgJiBEZWJ1Z2dpbmcnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS90ZXN0aW5nLWRlYnVnZ2luZycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnQmVzdCBQcmFjdGljZXMnLCBsaW5rOiAnL2FwaS9yZXN0LWFwaS9iZXN0LXByYWN0aWNlcycgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcblxuICAgIG91dGxpbmU6IHtcbiAgICAgIGxldmVsOiAnZGVlcCdcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnUmVsZWFzZWQgdW5kZXIgdGhlIDxhIGhyZWY9XCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibWl0LWxpY2Vuc2VcIj5NSVQgTGljZW5zZTwvYT4uJyxcbiAgICAgIGNvcHlyaWdodDogYENvcHlyaWdodCBcdTAwQTkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFdlYmt1bGBcbiAgICB9LFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYmFnaXN0by9iYWdpc3RvLWFwaScgfVxuICAgIF0sXG5cbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnXG4gICAgfVxuICB9LFxuXG4gIGJ1aWxkRW5kKHNpdGVDb25maWc6IGFueSkge1xuICAgIGNvbnN0IG91dERpciA9IHNpdGVDb25maWcub3V0RGlyXG5cbiAgICBPYmplY3QuZW50cmllcyhyZWRpcmVjdHMpLmZvckVhY2goKFtmcm9tLCB0b10pID0+IHtcbiAgICAgIGlmIChmcm9tLmluY2x1ZGVzKCcqJykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBcdTI2QTBcdUZFMEYgU2tpcHBpbmcgd2lsZGNhcmQgcmVkaXJlY3Q6ICR7ZnJvbX0gLT4gJHt0b31gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGZpbGVQYXRoXG5cbiAgICAgIGlmIChmcm9tLmVuZHNXaXRoKCcuaHRtbCcpKSB7XG4gICAgICAgIGZpbGVQYXRoID0gcGF0aC5qb2luKG91dERpciwgZnJvbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbGVQYXRoID0gcGF0aC5qb2luKG91dERpciwgZnJvbSwgJ2luZGV4Lmh0bWwnKVxuICAgICAgfVxuXG4gICAgICBmcy5ta2RpclN5bmMocGF0aC5kaXJuYW1lKGZpbGVQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIG1ha2VSZWRpcmVjdEh0bWwodG8pLCAndXRmLTgnKVxuICAgICAgY29uc29sZS5sb2coYFx1MjcwNSBSZWRpcmVjdCBjcmVhdGVkOiAke2Zyb219IC0+ICR7dG99YClcbiAgICB9KVxuICB9XG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3VzZXJzL3lhc2h2aXIuc2luZ2gvd3d3L2h0bWwvQmFnaXN0by9iYWdpc3RvLWFwaS1kb2NzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3VzZXJzL3lhc2h2aXIuc2luZ2gvd3d3L2h0bWwvQmFnaXN0by9iYWdpc3RvLWFwaS1kb2NzLy52aXRlcHJlc3MvX3JlZGlyZWN0cy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91c2Vycy95YXNodmlyLnNpbmdoL3d3dy9odG1sL0JhZ2lzdG8vYmFnaXN0by1hcGktZG9jcy8udml0ZXByZXNzL19yZWRpcmVjdHMudHNcIjtleHBvcnQgY29uc3QgcmVkaXJlY3RzID0ge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJlZGlyZWN0SHRtbCh0bzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGA8IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuICA8aGVhZD5cbiAgICA8bWV0YSBodHRwLWVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9XCIwOyB1cmw9JHt0b31cIiAvPlxuICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCIke3RvfVwiIC8+XG4gICAgPHNjcmlwdD53aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIiR7dG99XCIpOzwvc2NyaXB0PlxuICA8L2hlYWQ+XG4gIDxib2R5PlxuICAgIDxwPlJlZGlyZWN0aW5nIHRvIDxhIGhyZWY9XCIke3RvfVwiPiR7dG99PC9hPlx1MjAyNjwvcD5cbiAgPC9ib2R5PlxuPC9odG1sPmBcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRYLFNBQVMsb0JBQW9COzs7QUNBaEIsSUFBTSxZQUFZLENBQzNaO0FBRU8sU0FBUyxpQkFBaUIsSUFBWTtBQUN6QyxTQUFPO0FBQUE7QUFBQTtBQUFBLGlEQUdzQyxFQUFFO0FBQUEsa0NBQ2pCLEVBQUU7QUFBQSx1Q0FDRyxFQUFFO0FBQUE7QUFBQTtBQUFBLGlDQUdSLEVBQUUsS0FBSyxFQUFFO0FBQUE7QUFBQTtBQUcxQzs7O0FEWkEsT0FBTyxRQUFRO0FBRWYsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsZUFBZTtBQXdEeEIsSUFBTyxpQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUVqRCxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFFM0MsU0FBTztBQUFBLElBQ1AsaUJBQWlCO0FBQUEsSUFDakIsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBRWIsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLHFDQUFxQyxLQUFLLFVBQVUsSUFBSSxpQkFBaUI7QUFBQSxRQUN6RSx3Q0FBd0MsS0FBSyxVQUFVLElBQUksb0JBQW9CO0FBQUEsTUFDakY7QUFBQSxJQUNGO0FBQUEsSUFFQSxRQUFRO0FBQUEsSUFFUixhQUFhO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFFWCxNQUFNO0FBQUEsUUFDSixPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BRUEsS0FBSztBQUFBLFFBQ0gsRUFBRSxNQUFNLFlBQVksTUFBTSwrQkFBK0I7QUFBQSxRQUN6RCxFQUFFLE1BQU0sY0FBYyxNQUFNLDRCQUE0QjtBQUFBLFFBQ3hELEVBQUUsTUFBTSxjQUFjLE1BQU0scUNBQXFDO0FBQUEsUUFDakUsRUFBRSxNQUFNLG1CQUFtQixNQUFNLDhCQUE4QjtBQUFBLFFBQy9ELEVBQUUsTUFBTSxjQUFjLE1BQU0sbUNBQW1DO0FBQUEsTUFDakU7QUFBQSxNQUVBLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxNQUNSO0FBQUEsTUFFQSxhQUFhO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixlQUFlO0FBQUEsVUFDYixXQUFXO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxNQUVBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CO0FBQUEsWUFDbEQsRUFBRSxNQUFNLFNBQVMsTUFBTSxhQUFhO0FBQUEsWUFDcEMsRUFBRSxNQUFNLGtCQUFrQixNQUFNLHNCQUFzQjtBQUFBLFlBQ3RELEVBQUUsTUFBTSxtQkFBbUIsTUFBTSwyQ0FBMkM7QUFBQSxZQUM1RTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGdCQUNMLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxnQ0FBZ0M7QUFBQSxnQkFDOUQsRUFBRSxNQUFNLGtCQUFrQixNQUFNLGtDQUFrQztBQUFBLGdCQUNsRTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixXQUFXO0FBQUEsa0JBQ1gsT0FBTztBQUFBLG9CQUNEO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0o7QUFBQSwwQkFDQyxNQUFNO0FBQUEsMEJBQ04sV0FBVztBQUFBLDBCQUNYLE9BQU87QUFBQSw0QkFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLGdEQUFnRDtBQUFBLDRCQUN6RSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sc0RBQXNEO0FBQUEsMEJBQ3ZGO0FBQUEsd0JBQ0Y7QUFBQSxzQkFDRjtBQUFBLG9CQUNGO0FBQUEsb0JBQ0E7QUFBQSxzQkFDRSxNQUFNO0FBQUEsc0JBQ04sV0FBVztBQUFBLHNCQUNYLE9BQU87QUFBQSx3QkFDTDtBQUFBLDBCQUNFLE1BQU07QUFBQSwwQkFDTixXQUFXO0FBQUEsMEJBQ1gsT0FBTztBQUFBLDRCQUNMLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxnREFBZ0Q7QUFBQSw0QkFDakYsRUFBRSxNQUFNLGNBQWMsTUFBTSwyQ0FBMkM7QUFBQSw0QkFDdkUsRUFBRSxNQUFNLG1CQUFtQixNQUFNLDZDQUE2QztBQUFBLDBCQUNoRjtBQUFBLHdCQUNGO0FBQUEsc0JBQ0Y7QUFBQSxvQkFDRjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0wsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFEQUFxRDtBQUFBLHdCQUMzRixFQUFFLE1BQU0sOEJBQThCLE1BQU0sMkRBQTJEO0FBQUEsc0JBQ3pHO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNMO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLFNBQVMsTUFBTSwwQ0FBMEM7QUFBQSw0QkFDakUsRUFBRSxNQUFNLGVBQWUsTUFBTSx5Q0FBeUM7QUFBQSwwQkFDeEU7QUFBQSx3QkFDRjtBQUFBLHNCQUNGO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNMO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSw2Q0FBNkM7QUFBQSw0QkFDdkUsRUFBRSxNQUFNLG1CQUFtQixNQUFNLGdEQUFnRDtBQUFBLDRCQUNqRixFQUFFLE1BQU0sa0JBQWtCLE1BQU0sNENBQTRDO0FBQUEsNEJBQzVFLEVBQUUsTUFBTSx1QkFBdUIsTUFBTSxvREFBb0Q7QUFBQSwwQkFDM0Y7QUFBQSx3QkFDRjtBQUFBLHNCQUNGO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNMO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLG1CQUFtQixNQUFNLG9EQUFvRDtBQUFBLDBCQUN2RjtBQUFBLHdCQUNGO0FBQUEsd0JBQ0E7QUFBQSwwQkFDRSxNQUFNO0FBQUEsMEJBQ04sV0FBVztBQUFBLDBCQUNYLE9BQU87QUFBQSw0QkFDTCxFQUFFLE1BQU0seUJBQXlCLE1BQU0sd0RBQXdEO0FBQUEsNEJBQy9GLEVBQUUsTUFBTSx5QkFBeUIsTUFBTSx3REFBd0Q7QUFBQSw0QkFDL0YsRUFBRSxNQUFNLHlCQUF5QixNQUFNLHdEQUF3RDtBQUFBLDBCQUVqRztBQUFBLHdCQUNGO0FBQUEsc0JBQ0Y7QUFBQSxvQkFDRjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0w7QUFBQSwwQkFDRSxNQUFNO0FBQUEsMEJBQ04sV0FBVztBQUFBLDBCQUNYLE9BQU87QUFBQSw0QkFDTCxFQUFFLE1BQU0sY0FBYyxNQUFNLCtDQUErQztBQUFBLDRCQUMzRSxFQUFFLE1BQU0sb0JBQW9CLE1BQU0sOENBQThDO0FBQUEsNEJBQ2hGLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSxzREFBc0Q7QUFBQSwwQkFDM0Y7QUFBQSx3QkFDRjtBQUFBLHNCQUNGO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNMO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSw2Q0FBNkM7QUFBQSw0QkFDdkUsRUFBRSxNQUFNLGtCQUFrQixNQUFNLDRDQUE0QztBQUFBLDBCQUM5RTtBQUFBLHdCQUNGO0FBQUEsc0JBQ0Y7QUFBQSxvQkFDRjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0wsRUFBRSxNQUFNLGtCQUFrQixNQUFNLDRDQUE0QztBQUFBLHdCQUM1RSxFQUFFLE1BQU0sYUFBYSxNQUFNLDhDQUE4QztBQUFBLHdCQUN6RSxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sbURBQW1EO0FBQUEsd0JBQ25GLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxrREFBa0Q7QUFBQSxzQkFDbkY7QUFBQSxvQkFDRjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0w7QUFBQSwwQkFDRSxNQUFNO0FBQUEsMEJBQ04sV0FBVztBQUFBLDBCQUNYLE9BQU87QUFBQSw0QkFDTCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0scURBQXFEO0FBQUEsNEJBQzNGLEVBQUUsTUFBTSx1QkFBdUIsTUFBTSxvREFBb0Q7QUFBQSw0QkFDekYsRUFBRSxNQUFNLHNCQUFzQixNQUFNLG1EQUFtRDtBQUFBLDRCQUN2RixFQUFFLE1BQU0sZ0NBQWdDLE1BQU0sNkRBQTZEO0FBQUEsNEJBQzNHLEVBQUUsTUFBTSwrQkFBK0IsTUFBTSw0REFBNEQ7QUFBQSw0QkFDekcsRUFBRSxNQUFNLHlCQUF5QixNQUFNLHNEQUFzRDtBQUFBLDRCQUM3RixFQUFFLE1BQU0sd0JBQXdCLE1BQU0scURBQXFEO0FBQUEsNEJBQzNGLEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxpREFBaUQ7QUFBQSw0QkFDbkYsRUFBRSxNQUFNLDZCQUE2QixNQUFNLG1FQUFtRTtBQUFBLDRCQUM5RyxFQUFFLE1BQU0sNEJBQTRCLE1BQU0sa0VBQWtFO0FBQUEsNEJBQzVHLEVBQUUsTUFBTSwwQkFBMEIsTUFBTSx1REFBdUQ7QUFBQSwwQkFDakc7QUFBQSx3QkFFRjtBQUFBLHdCQUNBO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLHlCQUF5QixNQUFNLHdEQUF3RDtBQUFBLDRCQUMvRixFQUFFLE1BQU0sa0JBQWtCLE1BQU0saURBQWlEO0FBQUEsNEJBQ2pGLEVBQUUsTUFBTSx5QkFBeUIsTUFBTSx3REFBd0Q7QUFBQSw0QkFDL0YsRUFBRSxNQUFNLG1CQUFtQixNQUFNLGtEQUFrRDtBQUFBLDRCQUNuRixFQUFFLE1BQU0sMkJBQTJCLE1BQU0sMERBQTBEO0FBQUEsNEJBQ25HLEVBQUUsTUFBTSwyQkFBMkIsTUFBTSwwREFBMEQ7QUFBQSw0QkFDbkcsRUFBRSxNQUFNLG1CQUFtQixNQUFNLGtEQUFrRDtBQUFBLDRCQUNuRixFQUFFLE1BQU0sMkJBQTJCLE1BQU0sMERBQTBEO0FBQUEsNEJBQ25HLEVBQUUsTUFBTSwyQkFBMkIsTUFBTSwwREFBMEQ7QUFBQSw0QkFDbkcsRUFBRSxNQUFNLDJCQUEyQixNQUFNLDBEQUEwRDtBQUFBLDRCQUNuRyxFQUFFLE1BQU0seUJBQXlCLE1BQU0sd0RBQXdEO0FBQUEsNEJBQy9GLEVBQUUsTUFBTSwwQkFBMEIsTUFBTSx5REFBeUQ7QUFBQSw0QkFDakcsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFEQUFxRDtBQUFBLDRCQUMzRixFQUFFLE1BQU0sdUJBQXVCLE1BQU0sb0RBQW9EO0FBQUEsMEJBQzNGO0FBQUEsd0JBQ0Y7QUFBQSxzQkFDRjtBQUFBLG9CQUNGO0FBQUEsb0JBQ0E7QUFBQSxzQkFDRSxNQUFNO0FBQUEsc0JBQ04sV0FBVztBQUFBLHNCQUNYLE9BQU87QUFBQSx3QkFDTDtBQUFBLDBCQUNFLE1BQU07QUFBQSwwQkFDTixXQUFXO0FBQUEsMEJBQ1gsT0FBTztBQUFBLDRCQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0seUNBQXlDO0FBQUEsMEJBQ3JFO0FBQUEsd0JBRUY7QUFBQSx3QkFDQTtBQUFBLDBCQUNFLE1BQU07QUFBQSwwQkFDTixXQUFXO0FBQUEsMEJBQ1gsT0FBTztBQUFBLDRCQUNMLEVBQUUsTUFBTSxjQUFjLE1BQU0sOENBQThDO0FBQUEsNEJBQzFFLEVBQUUsTUFBTSxhQUFhLE1BQU0sOENBQThDO0FBQUEsNEJBQ3pFLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxtREFBbUQ7QUFBQSw0QkFDbkYsRUFBRSxNQUFNLGtCQUFrQixNQUFNLG1EQUFtRDtBQUFBLDRCQUNuRixFQUFFLE1BQU0sZUFBZSxNQUFNLCtDQUErQztBQUFBLDRCQUM1RSxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sZ0RBQWdEO0FBQUEsMEJBQ2hGO0FBQUEsd0JBQ0Y7QUFBQSxzQkFDRjtBQUFBLG9CQUNGO0FBQUEsb0JBQ0E7QUFBQSxzQkFDRSxNQUFNO0FBQUEsc0JBQ04sV0FBVztBQUFBLHNCQUNYLE9BQU87QUFBQSx3QkFDTDtBQUFBLDBCQUNFLE1BQU07QUFBQSwwQkFDTixXQUFXO0FBQUEsMEJBQ1gsT0FBTztBQUFBLDRCQUNMLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSw4Q0FBOEM7QUFBQSw0QkFDN0UsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHFEQUFxRDtBQUFBLDRCQUMzRixFQUFFLE1BQU0sdUJBQXVCLE1BQU0sb0RBQW9EO0FBQUEsMEJBQzNGO0FBQUEsd0JBQ0Y7QUFBQSx3QkFDQTtBQUFBLDBCQUNFLE1BQU07QUFBQSwwQkFDTixXQUFXO0FBQUEsMEJBQ1gsT0FBTztBQUFBLDRCQUNMLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSx1REFBdUQ7QUFBQSw0QkFDN0YsRUFBRSxNQUFNLHVCQUF1QixNQUFNLHNEQUFzRDtBQUFBLDRCQUMzRixFQUFFLE1BQU0sdUJBQXVCLE1BQU0sc0RBQXNEO0FBQUEsNEJBQzNGLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxxREFBcUQ7QUFBQSw0QkFDekYsRUFBRSxNQUFNLGVBQWUsTUFBTSw4Q0FBOEM7QUFBQSwwQkFDN0U7QUFBQSx3QkFDRjtBQUFBLHNCQUNGO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNMO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLGlCQUFpQixNQUFNLDhDQUE4QztBQUFBLDRCQUM3RSxFQUFFLE1BQU0scUJBQXFCLE1BQU0sNkNBQTZDO0FBQUEsMEJBQ2xGO0FBQUEsd0JBQ0Y7QUFBQSx3QkFDQTtBQUFBLDBCQUNFLE1BQU07QUFBQSwwQkFDTixXQUFXO0FBQUEsMEJBQ1gsT0FBTztBQUFBLDRCQUNMLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxrREFBa0Q7QUFBQSw0QkFDbkYsRUFBRSxNQUFNLG1CQUFtQixNQUFNLGtEQUFrRDtBQUFBLDRCQUNuRixFQUFFLE1BQU0sbUJBQW1CLE1BQU0sa0RBQWtEO0FBQUEsNEJBQ25GLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSx3REFBd0Q7QUFBQSw0QkFDdEYsRUFBRSxNQUFNLHdCQUF3QixNQUFNLHVEQUF1RDtBQUFBLDBCQUMvRjtBQUFBLHdCQUNGO0FBQUEsc0JBQ0Y7QUFBQSxvQkFDRjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0w7QUFBQSwwQkFDRSxNQUFNO0FBQUEsMEJBQ04sV0FBVztBQUFBLDBCQUNYLE9BQU87QUFBQSw0QkFDTCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sa0RBQWtEO0FBQUEsNEJBQ3JGLEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxpREFBaUQ7QUFBQSwwQkFDckY7QUFBQSx3QkFDRjtBQUFBLHdCQUNBO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLHVCQUF1QixNQUFNLHNEQUFzRDtBQUFBLDRCQUMzRixFQUFFLE1BQU0sdUJBQXVCLE1BQU0sc0RBQXNEO0FBQUEsNEJBQzNGLEVBQUUsTUFBTSw0QkFBNEIsTUFBTSwyREFBMkQ7QUFBQSwwQkFDdkc7QUFBQSx3QkFDRjtBQUFBLHNCQUNGO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNMO0FBQUEsMEJBQ0UsTUFBTTtBQUFBLDBCQUNOLFdBQVc7QUFBQSwwQkFDWCxPQUFPO0FBQUEsNEJBQ0wsRUFBRSxNQUFNLHFCQUFxQixNQUFNLG9EQUFvRDtBQUFBLDBCQUN6RjtBQUFBLHdCQUNGO0FBQUEsc0JBQ0Y7QUFBQSxvQkFDRjtBQUFBLGtCQUNOO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixXQUFXO0FBQUEsa0JBQ1gsT0FBTztBQUFBLG9CQUNMLEVBQUUsTUFBTSxlQUFlLE1BQU0scUNBQXFDO0FBQUEsa0JBQ3BFO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQSxFQUFFLE1BQU0sb0JBQW9CLE1BQU0sOEJBQThCO0FBQUEsZ0JBQ2hFLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxrQ0FBa0M7QUFBQSxnQkFDbEUsRUFBRSxNQUFNLHNCQUFzQixNQUFNLGdDQUFnQztBQUFBLGNBQ3RFO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFdBQVc7QUFBQSxjQUNYLE9BQU87QUFBQSxnQkFDTCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sNkJBQTZCO0FBQUEsZ0JBRTNEO0FBQUEsa0JBQ0UsTUFBTTtBQUFBLGtCQUNOLFdBQVc7QUFBQSxrQkFDWCxPQUFPO0FBQUEsb0JBQ0w7QUFBQSxzQkFDRSxNQUFNO0FBQUEsc0JBQ04sV0FBVztBQUFBLHNCQUNYLE9BQU87QUFBQSx3QkFDTCxFQUFFLE1BQU0sbUJBQW1CLE1BQU0seUNBQXlDO0FBQUEsd0JBQzFFLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwrQ0FBK0M7QUFBQSxzQkFDcEY7QUFBQSxvQkFDRjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0QsRUFBRSxNQUFNLGtCQUFrQixNQUFNLCtDQUErQztBQUFBLHdCQUMvRSxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sNkNBQTZDO0FBQUEsc0JBQ2pGO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNELEVBQUUsTUFBTSw0QkFBNEIsTUFBTSxtRUFBbUU7QUFBQSx3QkFDN0csRUFBRSxNQUFNLDJCQUEyQixNQUFNLGtFQUFrRTtBQUFBLHNCQUNqSDtBQUFBLG9CQUNGO0FBQUEsb0JBQ0E7QUFBQSxzQkFDRSxNQUFNO0FBQUEsc0JBQ04sV0FBVztBQUFBLHNCQUNYLE9BQU87QUFBQSx3QkFDRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sMkNBQTJDO0FBQUEsd0JBQ3pFLEVBQUUsTUFBTSxlQUFlLE1BQU0sMENBQTBDO0FBQUEsd0JBQ3ZFLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSw2Q0FBNkM7QUFBQSxzQkFDbkY7QUFBQSxvQkFDRjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0UsTUFBTTtBQUFBLHNCQUNOLFdBQVc7QUFBQSxzQkFDWCxPQUFPO0FBQUEsd0JBQ0QsRUFBRSxNQUFNLHVCQUF1QixNQUFNLHlEQUF5RDtBQUFBLHdCQUM5RixFQUFFLE1BQU0sc0JBQXNCLE1BQU0sd0RBQXdEO0FBQUEsd0JBQzVGLEVBQUUsTUFBTSx5QkFBeUIsTUFBTSwyREFBMkQ7QUFBQSx3QkFDbEcsRUFBRSxNQUFNLHlCQUF5QixNQUFNLDJEQUEyRDtBQUFBLHdCQUNsRyxFQUFFLE1BQU0seUJBQXlCLE1BQU0sMkRBQTJEO0FBQUEsc0JBQ3hHO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNELEVBQUUsTUFBTSxrQkFBa0IsTUFBTSwrQ0FBK0M7QUFBQSx3QkFDL0UsRUFBRSxNQUFNLG9CQUFvQixNQUFNLDhDQUE4QztBQUFBLHdCQUNoRixFQUFFLE1BQU0seUJBQXlCLE1BQU0sc0RBQXNEO0FBQUEsc0JBQ25HO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNELEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSwyQ0FBMkM7QUFBQSx3QkFDekUsRUFBRSxNQUFNLGtCQUFrQixNQUFNLDBDQUEwQztBQUFBLHNCQUNoRjtBQUFBLG9CQUNGO0FBQUEsb0JBQ0E7QUFBQSxzQkFDRSxNQUFNO0FBQUEsc0JBQ04sV0FBVztBQUFBLHNCQUNYLE9BQU87QUFBQSx3QkFDRCxFQUFFLE1BQU0saUJBQWlCLE1BQU0sNkNBQTZDO0FBQUEsd0JBQzVFLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSwyQ0FBMkM7QUFBQSx3QkFDM0UsRUFBRSxNQUFNLHNCQUFzQixNQUFNLGtEQUFrRDtBQUFBLHdCQUN0RixFQUFFLE1BQU0sd0JBQXdCLE1BQU0saURBQWlEO0FBQUEsc0JBQzdGO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNELEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxxREFBcUQ7QUFBQSx3QkFDbkYsRUFBRSxNQUFNLFNBQVMsTUFBTSw4Q0FBOEM7QUFBQSx3QkFDckUsRUFBRSxNQUFNLGdCQUFnQixNQUFNLHFEQUFxRDtBQUFBLHdCQUNuRixFQUFFLE1BQU0sbUJBQW1CLE1BQU0sK0NBQStDO0FBQUEsd0JBQ2hGLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSwrQ0FBK0M7QUFBQSx3QkFDaEYsRUFBRSxNQUFNLGtCQUFrQixNQUFNLDhDQUE4QztBQUFBLHdCQUM5RSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sc0RBQXFEO0FBQUEsd0JBQ3BGLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSx1REFBdUQ7QUFBQSx3QkFDdkYsRUFBRSxNQUFNLGtCQUFrQixNQUFNLHVEQUF1RDtBQUFBLHdCQUN2RixFQUFFLE1BQU0sa0JBQWtCLE1BQU0sdURBQXVEO0FBQUEsd0JBQ3ZGLEVBQUUsTUFBTSxlQUFlLE1BQU0sb0RBQW9EO0FBQUEsd0JBQ2pGLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSx1REFBdUQ7QUFBQSx3QkFDdkYsRUFBRSxNQUFNLGtCQUFrQixNQUFNLHVEQUF1RDtBQUFBLHdCQUN2RixFQUFFLE1BQU0sY0FBYyxNQUFNLHlEQUF5RDtBQUFBLHdCQUNyRixFQUFFLE1BQU0sYUFBYSxNQUFNLHdEQUF3RDtBQUFBLHdCQUNuRixFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sNkRBQTZEO0FBQUEsd0JBQzNGLEVBQUUsTUFBTSxlQUFlLE1BQU0sNERBQTREO0FBQUEsd0JBQ3pGLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxxRUFBcUU7QUFBQSx3QkFDM0csRUFBRSxNQUFNLDZCQUE2QixNQUFNLHVGQUF1RjtBQUFBLHdCQUNsSSxFQUFFLE1BQU0sNEJBQTRCLE1BQU0sc0ZBQXNGO0FBQUEsd0JBQ2hJLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSwyREFBMkQ7QUFBQSx3QkFDakcsRUFBRSxNQUFNLHVCQUF1QixNQUFNLDBEQUEwRDtBQUFBLHNCQUNyRztBQUFBLG9CQUNGO0FBQUEsb0JBQ0E7QUFBQSxzQkFDRSxNQUFNO0FBQUEsc0JBQ04sV0FBVztBQUFBLHNCQUNYLE9BQU87QUFBQSx3QkFDRCxFQUFFLE1BQU0sWUFBWSxNQUFNLG1DQUFtQztBQUFBLHdCQUM3RCxFQUFFLE1BQU0sZUFBZSxNQUFNLHNDQUFzQztBQUFBLHdCQUNuRSxFQUFFLE1BQU0sZUFBZSxNQUFNLHNDQUFzQztBQUFBLHdCQUNuRSxFQUFFLE1BQU0sb0JBQW9CLE1BQU0sMkNBQTJDO0FBQUEsd0JBQzdFLEVBQUUsTUFBTSxvQkFBb0IsTUFBTSwyQ0FBMkM7QUFBQSx3QkFDN0UsRUFBRSxNQUFNLGdCQUFnQixNQUFNLHVDQUF1QztBQUFBLHdCQUNyRSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sd0NBQXdDO0FBQUEsc0JBQzdFO0FBQUEsb0JBQ0Y7QUFBQSxvQkFDQTtBQUFBLHNCQUNFLE1BQU07QUFBQSxzQkFDTixXQUFXO0FBQUEsc0JBQ1gsT0FBTztBQUFBLHdCQUNELEVBQUUsTUFBTSxpQkFBaUIsTUFBTSw0Q0FBNEM7QUFBQSx3QkFDM0UsRUFBRSxNQUFNLHdCQUF3QixNQUFNLG1EQUFtRDtBQUFBLHdCQUN6RixFQUFFLE1BQU0sdUJBQXVCLE1BQU0sa0RBQWtEO0FBQUEsd0JBQ3ZGLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxtREFBbUQ7QUFBQSx3QkFDekYsRUFBRSxNQUFNLHVCQUF1QixNQUFNLGtEQUFrRDtBQUFBLHdCQUN2RixFQUFFLE1BQU0sdUJBQXVCLE1BQU0sa0RBQWtEO0FBQUEsd0JBQ3ZGLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxpREFBZ0Q7QUFBQSx3QkFDcEYsRUFBRSxNQUFNLGVBQWUsTUFBTSwwQ0FBMEM7QUFBQSxzQkFDN0U7QUFBQSxvQkFDRjtBQUFBLGtCQUNGO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixXQUFXO0FBQUEsa0JBQ1gsT0FBTztBQUFBLG9CQUNMLEVBQUUsTUFBTSxlQUFlLE1BQU0sa0NBQWtDO0FBQUEsa0JBQ2pFO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQSxFQUFFLE1BQU0sdUJBQXVCLE1BQU0sa0NBQWtDO0FBQUEsZ0JBQ3ZFLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSwrQkFBK0I7QUFBQSxjQUNqRTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUVBLFNBQVM7QUFBQSxRQUNQLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFFQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxXQUFXLG1CQUFlLG9CQUFJLEtBQUssR0FBRSxZQUFZLENBQUM7QUFBQSxNQUNwRDtBQUFBLE1BRUEsYUFBYTtBQUFBLFFBQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSx5Q0FBeUM7QUFBQSxNQUNuRTtBQUFBLE1BRUEsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTLFlBQWlCO0FBQ3hCLFlBQU0sU0FBUyxXQUFXO0FBRTFCLGFBQU8sUUFBUSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU07QUFDaEQsWUFBSSxLQUFLLFNBQVMsR0FBRyxHQUFHO0FBQ3RCLGtCQUFRLEtBQUssNENBQWtDLElBQUksT0FBTyxFQUFFLEVBQUU7QUFDOUQ7QUFBQSxRQUNGO0FBRUEsWUFBSTtBQUVKLFlBQUksS0FBSyxTQUFTLE9BQU8sR0FBRztBQUMxQixxQkFBVyxLQUFLLEtBQUssUUFBUSxJQUFJO0FBQUEsUUFDbkMsT0FBTztBQUNMLHFCQUFXLEtBQUssS0FBSyxRQUFRLE1BQU0sWUFBWTtBQUFBLFFBQ2pEO0FBRUEsV0FBRyxVQUFVLEtBQUssUUFBUSxRQUFRLEdBQUcsRUFBRSxXQUFXLEtBQUssQ0FBQztBQUN4RCxXQUFHLGNBQWMsVUFBVSxpQkFBaUIsRUFBRSxHQUFHLE9BQU87QUFDeEQsZ0JBQVEsSUFBSSw0QkFBdUIsSUFBSSxPQUFPLEVBQUUsRUFBRTtBQUFBLE1BQ3BELENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDQTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
