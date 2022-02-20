import { c as create_ssr_component, f as escape } from "../../chunks/index-75126819.js";
import { d as data } from "../../chunks/data-e31c61b9.js";
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1f0z4d0{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:0.75em;background:#fff;box-shadow:0 0 0 100vmax rgba(0, 0, 0, 0.9)}.overlay.svelte-1f0z4d0{position:absolute;inset:0}svg.svelte-1f0z4d0{width:1.2em;height:1.2em;margin-right:2em}header.svelte-1f0z4d0{display:flex;align-items:center;margin:0.75em}h1.svelte-1f0z4d0{margin:0}ul.svelte-1f0z4d0{margin:1.5em 0 0 0;padding:0;list-style:none}li.svelte-1f0z4d0{padding:0.75em}",
  map: null
};
function load({ params }) {
  return {
    props: data.find((x) => x.name === params.slug)
  };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name, risk, damage, count, casualties } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.risk === void 0 && $$bindings.risk && risk !== void 0)
    $$bindings.risk(risk);
  if ($$props.damage === void 0 && $$bindings.damage && damage !== void 0)
    $$bindings.damage(damage);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.casualties === void 0 && $$bindings.casualties && casualties !== void 0)
    $$bindings.casualties(casualties);
  $$result.css.add(css);
  return `<div class="${"overlay svelte-1f0z4d0"}"></div>
<section class="${"svelte-1f0z4d0"}"><header class="${"svelte-1f0z4d0"}"><a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${"svelte-1f0z4d0"}"><path d="${"M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"}"></path></svg></a>
        <h1 class="${"svelte-1f0z4d0"}">${escape(name)}</h1></header>

    <ul class="${"svelte-1f0z4d0"}"><li class="${"svelte-1f0z4d0"}"><strong>Risk:</strong> ${escape(risk)}</li>
        <li class="${"svelte-1f0z4d0"}"><strong>Total namage:</strong> ${escape(damage)}</li>
        <li class="${"svelte-1f0z4d0"}"><strong>Total number of floods:</strong> ${escape(count)}</li>
        <li class="${"svelte-1f0z4d0"}"><strong>Casualties:</strong> ${escape(casualties)}</li></ul>
</section>`;
});
export { U5Bslugu5D as default, load };
