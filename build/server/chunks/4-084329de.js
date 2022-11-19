import { r as redirect, i as invalid } from './index2-b4023ade.js';
import { b as base } from './paths-aa23c6e2.js';

const load = ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, `${base}/`);
  }
};
const actions = {
  login: async ({ request, locals }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);
    try {
      await locals.pb.collection("users").authWithPassword(data.username, data.password);
      redirect(301, `${base}/`);
    } catch (error) {
      console.error(error);
      return invalid(error.status, {
        error: true,
        status: error.status
      });
    }
  },
  register: async ({ request, locals }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);
    try {
      const { id } = await locals.pb.collection("users").create(data);
      await locals.pb.collection("users").authWithPassword(data.username, data.password);
      const payload = {
        link: id,
        isPaying: false,
        name: data.username,
        data: {}
      };
      await locals.pb.collection("qatar2022").create(payload);
      redirect(301, `${base}/`);
    } catch (error) {
      console.error(error);
      return invalid(error.status, {
        error: true,
        status: error.status
      });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-9da056e0.js')).default;
const file = '_app/immutable/components/pages/login/_page.svelte-1adb5b15.js';
const imports = ["_app/immutable/components/pages/login/_page.svelte-1adb5b15.js","_app/immutable/chunks/index-25fdf90a.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=4-084329de.js.map
