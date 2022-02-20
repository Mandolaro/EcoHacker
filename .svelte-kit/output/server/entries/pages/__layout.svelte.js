import { n as noop, a as safe_not_equal, g as getContext, c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape } from "../../chunks/index-75126819.js";
import { d as data } from "../../chunks/data-e31c61b9.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-cbsqe8{font-family:Verdana, Geneva, Tahoma, sans-serif}section.svelte-cbsqe8{width:100%;max-width:768px;margin:0 auto;display:flex;flex-direction:column}ul.svelte-cbsqe8{list-style:none;margin-top:2em;padding:0}li.svelte-cbsqe8{margin-top:-1px;border:1px solid #ddd;background:#eee;display:flex}a.svelte-cbsqe8{text-decoration:none;color:#000;flex-grow:1}h1.svelte-cbsqe8{display:flex;align-items:center;margin:0.75em}a.svelte-cbsqe8:hover{background:rgba(0, 0, 0, 0.12)}input.svelte-cbsqe8,a.svelte-cbsqe8{padding:0.5em}input.svelte-cbsqe8{margin-top:4em}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $filter, $$unsubscribe_filter;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const filter = writable("");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  $$result.css.add(css);
  $$unsubscribe_filter();
  $$unsubscribe_page();
  return `<div class="${"svelte-cbsqe8"}"><h1 class="${"svelte-cbsqe8"}">Welcome to FloodGuide, a list on flood risk around the world </h1></div>
<section class="${"svelte-cbsqe8"}"><datalist id="${"countries"}" class="${"svelte-cbsqe8"}">${each(data, (item) => {
    return `<option${add_attribute("value", item.name, 0)} class="${"svelte-cbsqe8"}"></option>`;
  })}</datalist>

    <input type="${"text"}" list="${"countries"}" placeholder="${"Search..."}" class="${"svelte-cbsqe8"}"${add_attribute("value", $filter, 0)}>
    <ul class="${"svelte-cbsqe8"}">${each(data.filter((item) => item.name.includes($filter)), (item) => {
    return `<li class="${"svelte-cbsqe8"}"><a${add_attribute("href", `/${item.name}`, 0)} class="${"svelte-cbsqe8"}">${escape(item.name)}</a></li>`;
  })}</ul></section>

<div class="${"svelte-cbsqe8"}">${slots.default ? slots.default({}) : ``}</div>
<div class="${"svelte-cbsqe8"}"><h1 class="${"svelte-cbsqe8"}">You can help by either fight flooding by either <a href="${"placeholder.com"}" class="${"svelte-cbsqe8"}">donating</a> or <a href="${"placeholder.com"}" class="${"svelte-cbsqe8"}">answering our quiz </a></h1></div>`;
});
export { _layout as default };
