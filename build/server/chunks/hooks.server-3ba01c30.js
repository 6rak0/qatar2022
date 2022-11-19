import { E } from './pocketbase.es-4a3a4783.js';

const POCKETBASE_URL = "https://werawisifur.net/pocketbase";
const handle = async ({ event, resolve }) => {
  event.locals.pb = new E(POCKETBASE_URL);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  if (event.locals.pb.authStore.isValid) {
    event.locals.user = event.locals.pb.authStore.model;
    event.locals.link = await event.locals.pb.collection("qatar2022").getFirstListItem(`link="${event.locals.user.id}"`);
  }
  const response = await resolve(event);
  response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: true }));
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-3ba01c30.js.map
