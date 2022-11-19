import { c as create_ssr_component, d as subscribe, i as is_promise, n as noop, f as each, e as escape } from './index-21273a78.js';
import { p as predictions } from './stores-4a965db3.js';
import './index3-349002ba.js';
import './pocketbase.es-4a3a4783.js';
import './helpers-fe37d827.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $predictions, $$unsubscribe_predictions;
  $$unsubscribe_predictions = subscribe(predictions, (value) => $predictions = value);
  $$unsubscribe_predictions();
  return `<div class="${"overflow-x-auto"}"><table class="${"table table-compact table-zebra w-full"}"><thead><tr><th>nombre</th>
				<th>1</th>
				<th>2</th>
				<th>3</th>
				<th>4</th>
				<th>puntos</th></tr></thead>
		<tbody>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
				<p>...waiting</p>
			`;
    }
    return function(predictions2) {
      return `
				${each(predictions2, (item) => {
        return `<tr><td>${escape(item.name)}</td>
						<td>${escape(item.data[1])}</td>
						<td>${escape(item.data[2])}</td>
						<td>${escape(item.data[3])}</td>
						<td>${escape(item.data[4])}</td>
						<td>10</td>
					</tr>`;
      })}
			`;
    }(__value);
  }($predictions)}</tbody>
		</table></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2c379f4a.js.map
