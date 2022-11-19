import { c as create_ssr_component } from './index-21273a78.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<section class="${"grid place-items-center"}" style="${"min-height: 666px;"}">${(form == null ? void 0 : form.success) ? `<div class="${"alert alert-success shadow-lg"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"stroke-current flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
				<span>Gracias, tus datos han sido enviados correctamente [c\xF3digo 201]</span></div></div>` : `${(form == null ? void 0 : form.error) ? `<div class="${"alert alert-error shadow-lg"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"stroke-current flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
				${(form == null ? void 0 : form.status) == 400 ? `<span>Petici\xF3n no v\xE1lida, revisa los datos enviados [c\xF3digo 400]
					</span>` : `<span>Servidor no disponible, comun\xEDcate con un administrador [c\xF3digo 503] </span>`}</div></div>` : ``}`}
	${`<form action="${"?/login"}" method="${"POST"}" class="${"container text-center grid place-items-center"}"><input type="${"text"}" placeholder="${"usuario"}" class="${"input input-bordered input-primary w-full max-w-xs my-3"}" name="${"username"}">
			<input type="${"password"}" placeholder="${"contrase\xF1a"}" class="${"input input-bordered input-primary w-full max-w-xs my-3"}" name="${"password"}">
			<button class="${"btn btn-primary my-3"}">login</button>
			<button class="${"link link-primary-content my-3"}">\xBFtodav\xEDa no tienes cuenta? reg\xEDstrate</button></form>`}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9da056e0.js.map
