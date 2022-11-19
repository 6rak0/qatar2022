import { s as serializeNonPOJOs } from './helpers-fe37d827.js';

const load = ({ locals }) => {
  if (locals.user) {
    return {
      user: serializeNonPOJOs(locals.user),
      link: serializeNonPOJOs(locals.link)
    };
  }
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-cc4566ff.js')).default;
const file = '_app/immutable/components/pages/_layout.svelte-287a228c.js';
const imports = ["_app/immutable/components/pages/_layout.svelte-287a228c.js","_app/immutable/chunks/index-25fdf90a.js","_app/immutable/chunks/paths-6cd3a76e.js"];
const stylesheets = ["_app/immutable/assets/_layout-5c339122.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server as server, stylesheets };
//# sourceMappingURL=0-8a6fb86a.js.map
