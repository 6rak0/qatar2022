import { r as redirect } from './index2-b4023ade.js';
import { b as base } from './paths-aa23c6e2.js';

const load = async ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, `${base}/login`);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
const component = async () => (await import('./_page.svelte-2c379f4a.js')).default;
const file = '_app/immutable/components/pages/tabla/_page.svelte-4ae5b274.js';
const imports = ["_app/immutable/components/pages/tabla/_page.svelte-4ae5b274.js","_app/immutable/chunks/index-25fdf90a.js","_app/immutable/chunks/stores-b127964f.js","_app/immutable/chunks/index-0f07bc57.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=10-c336c61c.js.map
