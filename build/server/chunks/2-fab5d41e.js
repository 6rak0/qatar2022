import { r as redirect } from './index2-b4023ade.js';
import { b as base } from './paths-aa23c6e2.js';

const load = async ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, `${base}/login`);
  }
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./layout.svelte-283e2416.js')).default;
const file = '_app/immutable/components/layout.svelte-829d2782.js';
const imports = ["_app/immutable/components/layout.svelte-829d2782.js","_app/immutable/chunks/index-25fdf90a.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server as server, stylesheets };
//# sourceMappingURL=2-fab5d41e.js.map
