import { r as redirect } from './index2-b4023ade.js';
import { b as base } from './paths-aa23c6e2.js';

const GET = ({ locals }) => {
  locals.pb.authStore.clear();
  locals.user = void 0;
  throw redirect(303, `${base}/`);
};

export { GET };
//# sourceMappingURL=_server-f614e0bd.js.map
