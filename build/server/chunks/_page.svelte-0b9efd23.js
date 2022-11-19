import { c as create_ssr_component, d as subscribe, f as each, v as validate_component } from './index-21273a78.js';
import { m as matches } from './stores-4a965db3.js';
import { M as Match } from './Match-fd560c1b.js';
import './index3-349002ba.js';
import './pocketbase.es-4a3a4783.js';
import './helpers-fe37d827.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $matches, $$unsubscribe_matches;
  $$unsubscribe_matches = subscribe(matches, (value) => $matches = value);
  let { data } = $$props;
  const filteredMatches = $matches.filter((match) => match.stage_name === "Semi-final");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_matches();
  return `<section class="${"grid md:grid-cols-2 place-items-center"}">${each(filteredMatches, (match) => {
    return `${validate_component(Match, "Match").$$render($$result, { match, link: data.link.data }, {}, {})}`;
  })}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0b9efd23.js.map
