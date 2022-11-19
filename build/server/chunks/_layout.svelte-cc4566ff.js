import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from './index-21273a78.js';
import { b as base } from './paths-aa23c6e2.js';

const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div class="${"navbar bg-base-100"}"><div class="${"navbar-start"}"><div class="${"dropdown z-50"}"><label tabindex="${"0"}" class="${"btn btn-ghost lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h8m-8 6h16"}"></path></svg></label>
            <ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a${add_attribute("href", `${base}/partidos/primera-fase`, 0)}>grupos</a></li>
                <li><a${add_attribute("href", `${base}/partidos/ronda-de-16`, 0)}>8vos</a></li>
                <li><a${add_attribute("href", `${base}/partidos/cuartos-de-final`, 0)}>4tos</a></li>
                <li><a${add_attribute("href", `${base}/partidos/semifinal`, 0)}>semifinal</a></li>
                <li><a${add_attribute("href", `${base}/partidos/final`, 0)}>final</a></li></ul></div>
        <a${add_attribute("href", `${base}/`, 0)} class="${"btn btn-ghost normal-case text-xl"}">Qatar 2022</a></div>
    <div class="${"navbar-center hidden lg:flex z-50"}"><ul class="${"menu menu-horizontal p-0"}"><li><a${add_attribute("href", `${base}/partidos/primera-fase`, 0)}>grupos</a></li>
            <li><a${add_attribute("href", `${base}/partidos/ronda-de-16`, 0)}>8vos</a></li>
            <li><a${add_attribute("href", `${base}/partidos/cuartos-de-final`, 0)}>4tos</a></li>
            <li><a${add_attribute("href", `${base}/partidos/semifinal`, 0)}>semifinal</a></li>
            <li><a${add_attribute("href", `${base}/partidos/final`, 0)}>final</a></li></ul></div>
    <div class="${"navbar-end"}">${user ? `<div class="${"dropdown dropdown-end"}"><label tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar"}"><div class="${"avatar placeholder"}"><div class="${"bg-neutral-focus text-neutral-content rounded-full w-8"}"><span class="${"text-xs"}">${escape(user.username[0])}</span></div></div></label>
                <ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a${add_attribute("href", `${base}/logout`, 0)}>salir</a></li></ul></div>` : `<a${add_attribute("href", `${base}/login`, 0)}>login</a>`}</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render($$result, { user: data == null ? void 0 : data.user }, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-cc4566ff.js.map
