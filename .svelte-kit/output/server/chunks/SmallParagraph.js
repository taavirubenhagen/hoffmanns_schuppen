import { c as create_ssr_component, d as add_attribute, v as validate_component } from "./index2.js";
import "./index3.js";
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { textClass = "" } = $$props;
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0) $$bindings.textClass(textClass);
  return `<t${add_attribute("class", textClass, 0)}>${slots.default ? slots.default({}) : ``}</t>`;
});
const SmallParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  SmallParagraph as S
};
