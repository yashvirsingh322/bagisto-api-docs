import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Bagisto API Documentation","text":"GraphQL & REST APIs","tagline":"Complete API reference for Bagisto integration","actions":[{"theme":"brand","text":"Get Started →","link":"/api/introduction"},{"theme":"alt","text":"View on GitHub","link":"https://github.com/bagisto/bagisto-api"}],"image":{"src":"/logo-large.png","alt":"Bagisto"}},"features":[{"title":"GraphQL API","details":"Query exactly the data you need with a flexible GraphQL API. Perfect for modern frontend applications, mobile apps, and optimized API consumption.","icon":"⚙️","link":"/api/graphql-api/introduction"},{"title":"REST API","details":"Explore comprehensive REST endpoints for managing products, orders, customers, categories, and more. Easy integration with any programming language or framework.","icon":"🔗","link":"/api/rest-api/introduction"},{"title":"Authentication","details":"Secure your API requests with token-based authentication. Learn about Bearer tokens, Storefront API keys, and Laravel Sanctum integration for public, customer, and admin APIs.","icon":"🔐","link":"/api/authentication"},{"title":"Setup & Configuration","details":"Complete installation guide for Bagisto APIs. Choose between Quick Setup or Manual Installation, configure environment variables, verify installation, and troubleshoot common issues.","icon":"🛠️","link":"/api/setup"},{"title":"Storefront Key Management","details":"Generate, rotate, and manage your API keys securely. Monitor key usage, set rate limits, and implement security best practices for production environments.","icon":"🔑","link":"/api/storefront-api-key-management-guide"},{"title":"Integration Guides","details":"Best practices, real-world examples, and step-by-step guides for integrating Bagisto APIs into your application architecture.","icon":"📚","link":"/api/integrations"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1770102569000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
