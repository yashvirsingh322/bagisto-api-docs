import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Admin API","description":"","frontmatter":{},"headers":[],"relativePath":"api/rest-api/admin-coming-soon.md","filePath":"api/rest-api/admin-coming-soon.md","lastUpdated":1770102569000}');
const _sfc_main = { name: "api/rest-api/admin-coming-soon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="admin-api" tabindex="-1">Admin API <a class="header-anchor" href="#admin-api" aria-label="Permalink to &quot;Admin API&quot;">​</a></h1><h2 id="coming-soon" tabindex="-1">Coming Soon <a class="header-anchor" href="#coming-soon" aria-label="Permalink to &quot;Coming Soon&quot;">​</a></h2><p>The comprehensive Admin API documentation is coming soon. This section will include detailed guides for:</p><ul><li><strong>Products</strong>: Create, read, update, and delete products with full attribute management</li><li><strong>Categories</strong>: Manage product categories and hierarchies</li><li><strong>Customers</strong>: Customer management and administration</li><li><strong>Orders</strong>: Order management, fulfillment, and tracking</li><li><strong>Attributes</strong>: Attribute creation and configuration</li><li><strong>Inventory</strong>: Stock management and warehouse operations</li><li><strong>Promotions</strong>: Create and manage discounts and promotional campaigns</li><li><strong>Reports</strong>: Access business intelligence and analytics reports</li><li><strong>Mutations</strong>: Advanced operations for admin-level modifications</li></ul><p>Stay tuned for comprehensive documentation and examples!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/rest-api/admin-coming-soon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adminComingSoon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  adminComingSoon as default
};
