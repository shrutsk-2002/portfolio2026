/* @ds-bundle: {"format":3,"namespace":"ShrutiKalamdaniDesignSystem_8906b5","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"WorkCard","sourcePath":"components/content/WorkCard.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Avatar","sourcePath":"components/media/Avatar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"46a18360d527","components/actions/TextLink.jsx":"20ae86140cf4","components/content/Eyebrow.jsx":"65e8acedc820","components/content/Tag.jsx":"c72d1a39cf6b","components/content/WorkCard.jsx":"bf981f9319dd","components/forms/Field.jsx":"c8a957037457","components/media/Avatar.jsx":"65c8b858be13","ui_kits/portfolio/AboutScreen.jsx":"6babad262f50","ui_kits/portfolio/App.jsx":"ac754fee7417","ui_kits/portfolio/CaseStudyScreen.jsx":"965c0bc80cd3","ui_kits/portfolio/HomeScreen.jsx":"7aac7da33247","ui_kits/portfolio/WorkScreen.jsx":"6998a22fe018","ui_kits/portfolio/data.js":"708b1a5627be","ui_kits/portfolio/kit.jsx":"3b2191b7a826"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShrutiKalamdaniDesignSystem_8906b5 = window.ShrutiKalamdaniDesignSystem_8906b5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* injects component CSS once */
function useSheet(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-btn{
  --_pad-y:12px; --_pad-x:22px; --_fs:15px;
  display:inline-flex; align-items:center; justify-content:center; gap:9px;
  font-family:var(--font-sans); font-weight:600; font-size:var(--_fs);
  letter-spacing:0.01em; line-height:1; cursor:pointer; text-decoration:none;
  padding:var(--_pad-y) var(--_pad-x); border-radius:var(--radius-pill);
  border:1px solid transparent; transition:background var(--dur-fast) var(--ease-out),
    color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out),
    transform var(--dur-fast) var(--ease-out); white-space:nowrap; user-select:none;
}
.sk-btn:active{ transform:translateY(1px); }
.sk-btn--sm{ --_pad-y:8px; --_pad-x:16px; --_fs:13px; }
.sk-btn--lg{ --_pad-y:16px; --_pad-x:30px; --_fs:17px; }
.sk-btn--block{ display:flex; width:100%; }

.sk-btn--primary{ background:var(--accent); color:var(--paper); }
.sk-btn--primary:hover{ background:var(--accent-ink); color:var(--paper); }
.sk-btn--primary:active{ background:var(--accent-deep); }

.sk-btn--secondary{ background:transparent; color:var(--ink); border-color:var(--ink); }
.sk-btn--secondary:hover{ background:var(--ink); color:var(--paper); }

.sk-btn--ghost{ background:transparent; color:var(--accent-ink); padding-left:8px; padding-right:8px; border-radius:var(--radius-sm); }
.sk-btn--ghost:hover{ color:var(--accent-deep); background:var(--accent-tint); }

.sk-btn[aria-disabled="true"], .sk-btn:disabled{
  opacity:0.4; pointer-events:none; cursor:default;
}
.sk-btn__icon{ display:inline-flex; width:1.05em; height:1.05em; }
.sk-btn__icon svg{ width:100%; height:100%; }
`;

/**
 * Primary action control. Renders an <a> when `href` is set, else a <button>.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  href,
  fullWidth = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  useSheet("sk-button-css", CSS);
  const cls = ["sk-btn", `sk-btn--${variant}`, size !== "md" ? `sk-btn--${size}` : "", fullWidth ? "sk-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("span", {
    className: "sk-btn__icon"
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "sk-btn__icon"
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSheet(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-textlink{
  display:inline-flex; align-items:center; gap:7px;
  font-family:var(--font-sans); font-weight:600; font-size:14px;
  color:var(--accent-ink); text-decoration:none; cursor:pointer;
  letter-spacing:0.01em; line-height:1.3;
  border-bottom:1px solid transparent; padding-bottom:1px;
  transition:color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.sk-textlink:hover{ color:var(--accent-deep); border-color:currentColor; }
.sk-textlink__arrow{ display:inline-block; transition:transform var(--dur-base) var(--ease-out); }
.sk-textlink:hover .sk-textlink__arrow{ transform:translateX(3px); }
.sk-textlink--muted{ color:var(--ink-2); }
.sk-textlink--muted:hover{ color:var(--ink); }
`;
const Arrow = () => /*#__PURE__*/React.createElement("span", {
  className: "sk-textlink__arrow",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 14 14",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7h8M7.5 3.5 11 7l-3.5 3.5",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

/**
 * Inline text link with an optional animated arrow. Tertiary navigation.
 */
function TextLink({
  children,
  href = "#",
  arrow = true,
  muted = false,
  className = "",
  ...rest
}) {
  useSheet("sk-textlink-css", CSS);
  const cls = ["sk-textlink", muted ? "sk-textlink--muted" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), children, arrow && /*#__PURE__*/React.createElement(Arrow, null));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSheet(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-eyebrow-c{
  display:inline-flex; align-items:center; gap:10px;
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:600;
  letter-spacing:var(--tracking-wider); text-transform:uppercase; color:var(--text-muted);
}
.sk-eyebrow-c__tick{ width:18px; height:1px; background:var(--accent); flex:none; }
.sk-eyebrow-c--accent{ color:var(--accent-ink); }
`;

/**
 * Spaced uppercase label that introduces a section. Optional accent tick.
 */
function Eyebrow({
  children,
  tick = true,
  accent = false,
  className = "",
  ...rest
}) {
  useSheet("sk-eyebrow-css", CSS);
  const cls = ["sk-eyebrow-c", accent ? "sk-eyebrow-c--accent" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    className: "sk-eyebrow-c__tick",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSheet(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-tag{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-sans); font-size:12.5px; font-weight:500;
  line-height:1; padding:6px 12px; border-radius:var(--radius-pill);
  border:1px solid var(--line-2); color:var(--ink-2); background:transparent;
  letter-spacing:0.01em; white-space:nowrap;
}
.sk-tag--solid{ background:var(--paper-2); border-color:transparent; color:var(--ink); }
.sk-tag--accent{ background:var(--accent-soft); border-color:transparent; color:var(--accent-deep); }
.sk-tag--dot::before{ content:""; width:6px; height:6px; border-radius:50%; background:currentColor; flex:none; }
`;

/**
 * Small label / chip for skills, roles, filters. Static (non-interactive).
 */
function Tag({
  children,
  variant = "outline",
  dot = false,
  className = "",
  ...rest
}) {
  useSheet("sk-tag-css", CSS);
  const cls = ["sk-tag", variant !== "outline" ? `sk-tag--${variant}` : "", dot ? "sk-tag--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/WorkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSheet(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-work{
  display:block; text-decoration:none; color:inherit; cursor:pointer;
  border-radius:var(--radius-lg); overflow:hidden;
}
.sk-work__media{
  position:relative; aspect-ratio:4/3; background:var(--paper-3);
  border:1px solid var(--line); border-radius:var(--radius-lg); overflow:hidden;
}
.sk-work__img{
  width:100%; height:100%; object-fit:cover; display:block;
  transition:transform var(--dur-slow) var(--ease-out);
}
.sk-work:hover .sk-work__img{ transform:scale(1.035); }
.sk-work__ph{
  position:absolute; inset:0; display:grid; place-items:center;
  font-family:var(--font-serif); font-style:italic; font-size:44px;
  color:var(--ink-4); letter-spacing:-0.03em;
}
.sk-work__idx{
  position:absolute; top:14px; left:14px; font-family:var(--font-mono);
  font-size:12px; color:var(--paper); background:rgba(26,23,20,0.55);
  padding:3px 9px; border-radius:var(--radius-pill); backdrop-filter:blur(4px);
}
.sk-work__body{ padding:18px 4px 4px; display:flex; flex-direction:column; gap:8px; }
.sk-work__top{ display:flex; align-items:baseline; justify-content:space-between; gap:16px; }
.sk-work__title{
  font-family:var(--font-serif); font-size:var(--text-xl); font-weight:400;
  letter-spacing:-0.015em; color:var(--ink); line-height:1.2; margin:0;
  transition:color var(--dur-fast) var(--ease-out);
}
.sk-work:hover .sk-work__title{ color:var(--accent-ink); }
.sk-work__year{ font-family:var(--font-mono); font-size:13px; color:var(--ink-3); flex:none; }
.sk-work__role{ font-family:var(--font-sans); font-size:14px; color:var(--ink-2); margin:0; }
`;

/**
 * Project card for a portfolio index: thumbnail (or initial placeholder),
 * index number, title, role/meta and year. Whole card is a link.
 */
function WorkCard({
  title,
  role,
  year,
  index,
  image,
  href = "#",
  className = "",
  ...rest
}) {
  useSheet("sk-workcard-css", CSS);
  const initial = (title || "•").trim().charAt(0).toUpperCase();
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: ["sk-work", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sk-work__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    className: "sk-work__img",
    src: image,
    alt: title || ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "sk-work__ph",
    "aria-hidden": "true"
  }, initial), index != null && /*#__PURE__*/React.createElement("span", {
    className: "sk-work__idx"
  }, index)), /*#__PURE__*/React.createElement("div", {
    className: "sk-work__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sk-work__top"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "sk-work__title"
  }, title), year && /*#__PURE__*/React.createElement("span", {
    className: "sk-work__year"
  }, year)), role && /*#__PURE__*/React.createElement("p", {
    className: "sk-work__role"
  }, role)));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WorkCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSheet(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-field{ display:flex; flex-direction:column; gap:8px; }
.sk-field__label{
  font-family:var(--font-sans); font-size:13px; font-weight:600;
  color:var(--ink-2); letter-spacing:0.01em;
}
.sk-field__req{ color:var(--accent-ink); margin-left:2px; }
.sk-field__control{
  font-family:var(--font-serif); font-size:17px; color:var(--ink);
  background:var(--white); border:1px solid var(--line-2);
  border-radius:var(--radius-md); padding:12px 14px; width:100%;
  transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
textarea.sk-field__control{ min-height:104px; resize:vertical; line-height:1.5; }
.sk-field__control::placeholder{ color:var(--ink-4); }
.sk-field__control:hover{ border-color:var(--ink-3); }
.sk-field__control:focus{ outline:none; border-color:var(--accent); box-shadow:var(--shadow-focus); }
.sk-field__control:disabled{ background:var(--paper-2); color:var(--ink-4); cursor:not-allowed; }
.sk-field__hint{ font-family:var(--font-sans); font-size:12.5px; color:var(--ink-3); }
.sk-field--error .sk-field__control{ border-color:var(--negative); }
.sk-field--error .sk-field__hint{ color:var(--negative); }
`;

/**
 * Labeled text field. Renders a <textarea> when multiline, else an <input>.
 */
function Field({
  label,
  hint,
  error,
  required = false,
  multiline = false,
  type = "text",
  id,
  className = "",
  ...rest
}) {
  useSheet("sk-field-css", CSS);
  const fid = id || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const Control = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    className: ["sk-field", error ? "sk-field--error" : "", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "sk-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "sk-field__req"
  }, "*")), /*#__PURE__*/React.createElement(Control, _extends({
    id: fid,
    className: "sk-field__control",
    type: multiline ? undefined : type
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "sk-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/media/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSheet(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-avatar{
  display:inline-flex; align-items:center; justify-content:center;
  border-radius:50%; overflow:hidden; flex:none;
  background:var(--accent); color:var(--paper);
  font-family:var(--font-serif); font-style:italic; letter-spacing:-0.03em;
  border:2px solid var(--white);
}
.sk-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.sk-avatar--sm{ width:36px; height:36px; font-size:16px; }
.sk-avatar--md{ width:52px; height:52px; font-size:23px; }
.sk-avatar--lg{ width:84px; height:84px; font-size:38px; }
.sk-avatar--square{ border-radius:var(--radius-md); }
`;

/**
 * Round (or squared) avatar — shows an image, else the initials on accent.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  square = false,
  className = "",
  ...rest
}) {
  useSheet("sk-avatar-css", CSS);
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const cls = ["sk-avatar", `sk-avatar--${size}`, square ? "sk-avatar--square" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, initials || "•"));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Avatar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
/* About + contact. */
const _DSa = window.ShrutiKalamdaniDesignSystem_8906b5;
const {
  useState: _useStateA
} = React;
function AboutScreen({
  go
}) {
  const data = window.PORTFOLIO_DATA;
  const p = data.person;
  const [sent, setSent] = _useStateA(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "pf-section pf-section--head"
  }, /*#__PURE__*/React.createElement(_DSa.Eyebrow, null, "About"), /*#__PURE__*/React.createElement("h1", {
    className: "pf-about__statement"
  }, "I help design teams do their best work \u2014 then build the systems that make it repeatable.")), /*#__PURE__*/React.createElement("section", {
    className: "pf-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-about__media"
  }, /*#__PURE__*/React.createElement(window.MediaBlock, {
    label: "Portrait",
    ratio: "4/5",
    initial: "SK"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__discs"
  }, ["Design Systems", "Team Leadership", "0→1 Product", "Fintech", "Research"].map(d => /*#__PURE__*/React.createElement(_DSa.Tag, {
    key: d
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "pf-about__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-prose sk-measure"
  }, p.bio.map((para, k) => /*#__PURE__*/React.createElement("p", {
    key: k
  }, para))), /*#__PURE__*/React.createElement("div", {
    className: "pf-exp"
  }, /*#__PURE__*/React.createElement(_DSa.Eyebrow, {
    tick: false
  }, "Experience"), /*#__PURE__*/React.createElement("ul", {
    className: "pf-exp__list"
  }, data.experience.map((e, k) => /*#__PURE__*/React.createElement("li", {
    className: "pf-exp__row",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-exp__role"
  }, e.role), /*#__PURE__*/React.createElement("span", {
    className: "pf-exp__org"
  }, e.org), /*#__PURE__*/React.createElement("span", {
    className: "pf-exp__period"
  }, e.period))))))), /*#__PURE__*/React.createElement("section", {
    className: "pf-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-contact__intro"
  }, /*#__PURE__*/React.createElement(_DSa.Eyebrow, null, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-contact__title"
  }, "Have something in mind?"), /*#__PURE__*/React.createElement("p", {
    className: "sk-meta",
    style: {
      fontSize: "var(--text-base)",
      lineHeight: 1.6
    }
  }, "Advisory, fractional design leadership, or a quick conversation \u2014 I read everything.")), /*#__PURE__*/React.createElement("form", {
    className: "pf-form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(_DSa.Field, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(_DSa.Field, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(_DSa.Field, {
    label: "Message",
    multiline: true,
    placeholder: "A sentence or two about the project\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-form__foot"
  }, /*#__PURE__*/React.createElement(_DSa.Button, {
    type: "submit",
    variant: "primary",
    size: "lg"
  }, sent ? "Thanks — I'll be in touch" : "Send message")))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
/* Router + shell. */
const {
  useState: _useStateApp,
  useEffect: _useEffectApp
} = React;
function App() {
  const [route, setRoute] = _useStateApp({
    name: "home"
  });
  const go = r => {
    setRoute(r);
    const scroller = document.querySelector(".pf-scroll");
    if (scroller) scroller.scrollTop = 0;
  };
  let screen;
  if (route.name === "work") screen = /*#__PURE__*/React.createElement(window.WorkScreen, {
    go: go
  });else if (route.name === "case") screen = /*#__PURE__*/React.createElement(window.CaseStudyScreen, {
    go: go,
    id: route.id
  });else if (route.name === "about") screen = /*#__PURE__*/React.createElement(window.AboutScreen, {
    go: go
  });else screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
    go: go
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-app"
  }, /*#__PURE__*/React.createElement(window.Nav, {
    route: route.name,
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-scroll"
  }, screen, /*#__PURE__*/React.createElement(window.Footer, {
    go: go
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
/* Case study — single project detail. */
const _DSc = window.ShrutiKalamdaniDesignSystem_8906b5;
function CaseStudyScreen({
  go,
  id
}) {
  const data = window.PORTFOLIO_DATA;
  const i = data.projects.findIndex(p => p.id === id);
  const proj = data.projects[i] || data.projects[0];
  const next = data.projects[(i + 1) % data.projects.length];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "pf-case"
  }, /*#__PURE__*/React.createElement(_DSc.TextLink, {
    href: "#work",
    muted: true,
    arrow: false,
    onClick: e => {
      e.preventDefault();
      go({
        name: "work"
      });
    }
  }, "\u2190 All work"), /*#__PURE__*/React.createElement("div", {
    className: "pf-case__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sk-index"
  }, proj.index), /*#__PURE__*/React.createElement("h1", {
    className: "pf-case__title"
  }, proj.title), /*#__PURE__*/React.createElement("div", {
    className: "pf-case__meta"
  }, /*#__PURE__*/React.createElement("span", null, proj.role), /*#__PURE__*/React.createElement("span", {
    className: "pf-dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, proj.year)), /*#__PURE__*/React.createElement("p", {
    className: "sk-lead sk-measure"
  }, proj.summary)), /*#__PURE__*/React.createElement("div", {
    className: "pf-metrics"
  }, proj.metrics.map((m, k) => /*#__PURE__*/React.createElement("div", {
    className: "pf-metric",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-metric__value"
  }, m.value), /*#__PURE__*/React.createElement("span", {
    className: "pf-metric__label"
  }, m.label)))), /*#__PURE__*/React.createElement(window.MediaBlock, {
    label: "Case imagery",
    ratio: "16/9"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-case__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-case__prose"
  }, /*#__PURE__*/React.createElement(_DSc.Eyebrow, null, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, proj.overview)), /*#__PURE__*/React.createElement("aside", {
    className: "pf-case__side"
  }, /*#__PURE__*/React.createElement(_DSc.Eyebrow, {
    tick: false
  }, "What I did"), /*#__PURE__*/React.createElement("div", {
    className: "pf-tags"
  }, proj.contributions.map(c => /*#__PURE__*/React.createElement(_DSc.Tag, {
    key: c,
    variant: "solid"
  }, c))))), /*#__PURE__*/React.createElement("div", {
    className: "pf-twoup"
  }, /*#__PURE__*/React.createElement(window.MediaBlock, {
    label: "Detail",
    ratio: "4/3"
  }), /*#__PURE__*/React.createElement(window.MediaBlock, {
    label: "Detail",
    ratio: "4/3"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#" + next.id,
    className: "pf-next",
    onClick: e => {
      e.preventDefault();
      go({
        name: "case",
        id: next.id
      });
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sk-eyebrow"
  }, "Next project"), /*#__PURE__*/React.createElement("span", {
    className: "pf-next__title"
  }, next.title), /*#__PURE__*/React.createElement("span", {
    className: "pf-next__arrow",
    "aria-hidden": "true"
  }, "\u2192"))));
}
window.CaseStudyScreen = CaseStudyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
/* Home screen — hero statement + selected work. */
const _DSh = window.ShrutiKalamdaniDesignSystem_8906b5;
function HomeScreen({
  go
}) {
  const data = window.PORTFOLIO_DATA;
  const p = data.person;
  const featured = data.projects.slice(0, 4);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "pf-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__text"
  }, /*#__PURE__*/React.createElement(_DSh.Eyebrow, null, p.role, " \xB7 ", p.location), /*#__PURE__*/React.createElement("h1", {
    className: "pf-hero__title"
  }, p.tagline), /*#__PURE__*/React.createElement("p", {
    className: "sk-lead",
    style: {
      maxWidth: "44ch"
    }
  }, "A decade in consumer fintech \u2014 most recently leading design at Upstox."), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__actions"
  }, /*#__PURE__*/React.createElement(_DSh.Button, {
    variant: "primary",
    size: "lg",
    href: "#work",
    onClick: e => {
      e.preventDefault();
      go({
        name: "work"
      });
    }
  }, "View selected work"), /*#__PURE__*/React.createElement(_DSh.TextLink, {
    href: "#about",
    onClick: e => {
      e.preventDefault();
      go({
        name: "about"
      });
    }
  }, "More about me"))), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__media"
  }, /*#__PURE__*/React.createElement(window.MediaBlock, {
    label: "Portrait",
    ratio: "4/5",
    initial: "SK"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "pf-section"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    eyebrow: "Selected Work",
    title: "Six that say the most",
    action: /*#__PURE__*/React.createElement(_DSh.TextLink, {
      href: "#work",
      onClick: e => {
        e.preventDefault();
        go({
          name: "work"
        });
      }
    }, "All work")
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-grid pf-grid--2"
  }, featured.map(proj => /*#__PURE__*/React.createElement(_DSh.WorkCard, {
    key: proj.id,
    index: proj.index,
    title: proj.title,
    role: proj.role + " · " + proj.year,
    href: "#" + proj.id,
    onClick: e => {
      e.preventDefault();
      go({
        name: "case",
        id: proj.id
      });
    }
  })))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkScreen.jsx
try { (() => {
/* Work index — filterable grid of all projects. */
const _DSw = window.ShrutiKalamdaniDesignSystem_8906b5;
const {
  useState: _useStateW
} = React;
function WorkScreen({
  go
}) {
  const data = window.PORTFOLIO_DATA;
  const [filter, setFilter] = _useStateW("All");
  const projects = filter === "All" ? data.projects : data.projects.filter(p => p.disciplines.includes(filter));
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "pf-section pf-section--head"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    eyebrow: "Work \xB7 2019\u20132024",
    title: "Selected work",
    intro: "A mix of zero-to-one product bets and the systems and teams that scaled them. Filter by discipline."
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-filters"
  }, data.disciplines.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    className: "pf-filter" + (filter === d ? " is-active" : ""),
    onClick: () => setFilter(d)
  }, d)))), /*#__PURE__*/React.createElement("section", {
    className: "pf-section pf-section--flush"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-grid pf-grid--3"
  }, projects.map(proj => /*#__PURE__*/React.createElement(_DSw.WorkCard, {
    key: proj.id,
    index: proj.index,
    title: proj.title,
    role: proj.role + " · " + proj.year,
    href: "#" + proj.id,
    onClick: e => {
      e.preventDefault();
      go({
        name: "case",
        id: proj.id
      });
    }
  })))));
}
window.WorkScreen = WorkScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
/* Portfolio content — fictional but realistic sample data for a design
   leader's portfolio. Replace with real project data when available. */
window.PORTFOLIO_DATA = {
  person: {
    name: "Shruti Kalamdani",
    role: "Design Leader",
    tagline: "I build design teams and the systems that let them ship fast without losing the plot.",
    location: "Mumbai, India",
    email: "hello@shrutikalamdani.com",
    bio: ["I'm a design leader with a decade in consumer fintech. Most recently I led design at Upstox — one of India's largest stock trading and investing platforms — where I grew the team from a handful of designers to twenty across product, systems and research.", "My work sits where craft meets scale: shaping zero-to-one product bets, then building the design systems, rituals and hiring bar that keep quality high as a team grows. I care about clarity, trust, and shipping."]
  },
  disciplines: ["All", "Design Systems", "0→1 Product", "Team Leadership", "Fintech", "Research"],
  projects: [{
    id: "upstox-kyc",
    index: "01",
    title: "Upstox Onboarding & KYC",
    role: "Design Lead",
    year: "2023",
    disciplines: ["0→1 Product", "Fintech"],
    summary: "Rebuilt account opening from nine steps to four, lifting completion and cutting time-to-first-trade.",
    metrics: [{
      value: "−38%",
      label: "drop-off in KYC"
    }, {
      value: "9 → 4",
      label: "steps to open"
    }, {
      value: "1.2M",
      label: "accounts / yr"
    }],
    overview: "Opening a brokerage account in India means clearing identity, bank and regulatory checks. Ours had grown into a nine-step maze with a high abandon rate. I led a small team to rethink the flow end to end — sequencing checks by effort, deferring what could wait, and designing for the moment of doubt.",
    contributions: ["Flow architecture", "Team direction", "Regulatory partnership", "Prototyping"]
  }, {
    id: "bolt-ds",
    index: "02",
    title: "Bolt — Upstox Design System",
    role: "Founder & Lead",
    year: "2020–2022",
    disciplines: ["Design Systems", "Team Leadership"],
    summary: "Founded the company's first design system, adopted across web, iOS and Android by four product squads.",
    metrics: [{
      value: "3",
      label: "platforms unified"
    }, {
      value: "240+",
      label: "components"
    }, {
      value: "4",
      label: "squads adopted"
    }],
    overview: "As the product surface multiplied, every squad was rebuilding the same patterns slightly differently. I founded Bolt to give the org one source of truth — tokens, components, and the governance to keep it alive — and embedded it into how teams shipped.",
    contributions: ["Token architecture", "Governance model", "Adoption program", "Hiring"]
  }, {
    id: "options",
    index: "03",
    title: "Options Trading Redesign",
    role: "Design Lead",
    year: "2021",
    disciplines: ["Fintech", "Research"],
    summary: "Made a notoriously complex product legible for first-time options traders without dumbing it down.",
    metrics: [{
      value: "+22%",
      label: "first-trade rate"
    }, {
      value: "4.6★",
      label: "store rating"
    }, {
      value: "30+",
      label: "user studies"
    }],
    overview: "Options scare most retail investors — and rightly so. The redesign focused on progressive disclosure: surfacing risk plainly, guiding strategy selection, and never hiding what a trade could cost. Deep research with novice and pro traders set the direction.",
    contributions: ["Research direction", "Information design", "Risk visualization", "Hand-off"]
  }, {
    id: "portfolio-dash",
    index: "04",
    title: "Portfolio Dashboard",
    role: "Design Lead",
    year: "2023",
    disciplines: ["Fintech", "0→1 Product"],
    summary: "A calm home screen that answers 'how am I doing?' before the user has to ask.",
    metrics: [{
      value: "2.1×",
      label: "daily opens"
    }, {
      value: "−40%",
      label: "support tickets"
    }, {
      value: "8wk",
      label: "to ship"
    }],
    overview: "The old portfolio view was a wall of numbers. We reframed it around a single question — how am I doing, and why — using restraint, hierarchy and one honest accent of color to draw the eye to what changed.",
    contributions: ["Concept", "Data hierarchy", "Motion", "Team direction"]
  }, {
    id: "org-scaling",
    index: "05",
    title: "Scaling Design 4 → 20",
    role: "Head of Design",
    year: "2020–2024",
    disciplines: ["Team Leadership"],
    summary: "Grew, structured and levelled a twenty-person design org while raising the craft bar.",
    metrics: [{
      value: "20",
      label: "designers"
    }, {
      value: "5",
      label: "squads supported"
    }, {
      value: "92%",
      label: "retention"
    }],
    overview: "Scaling a team is a design problem of its own. I built the hiring rubric, the levelling framework, the critique culture and the rituals that let twenty people move in one direction — and kept enough hands on real work to stay credible.",
    contributions: ["Hiring & levelling", "Critique culture", "Mentorship", "Operating rhythm"]
  }, {
    id: "mutual-funds",
    index: "06",
    title: "Mutual Funds 0→1",
    role: "Principal Designer",
    year: "2019",
    disciplines: ["0→1 Product", "Fintech"],
    summary: "Launched a new investing product for first-timers, from blank page to in-market in two quarters.",
    metrics: [{
      value: "0→1",
      label: "new product"
    }, {
      value: "2Q",
      label: "to market"
    }, {
      value: "150K",
      label: "first-yr users"
    }],
    overview: "A greenfield bet aimed at Indians making their first investment ever. The challenge was trust: explaining funds without jargon, and making a small first step feel safe. I owned design from concept through launch.",
    contributions: ["Product concept", "Content & education", "End-to-end UI", "Launch"]
  }],
  experience: [{
    org: "Upstox",
    role: "Head of Design",
    period: "2020–2024"
  }, {
    org: "Upstox",
    role: "Design Lead",
    period: "2018–2020"
  }, {
    org: "Independent",
    role: "Product Design Consultant",
    period: "2016–2018"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit.jsx
try { (() => {
/* Kit-local building blocks shared across the portfolio screens.
   Composes the design-system primitives; exports to window for the
   other babel scripts. */
const DS = window.ShrutiKalamdaniDesignSystem_8906b5;

/* A neutral image placeholder — no invented imagery. The user drops
   real photography in by setting `src`. */
function MediaBlock({
  src,
  label = "Image",
  ratio = "16/10",
  initial,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-media",
    style: {
      aspectRatio: ratio,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label
  }) : initial ? /*#__PURE__*/React.createElement("span", {
    className: "pf-media__initial",
    "aria-hidden": "true"
  }, initial) : /*#__PURE__*/React.createElement("span", {
    className: "pf-media__label"
  }, label));
}
function Nav({
  route,
  go
}) {
  const link = (name, children) => /*#__PURE__*/React.createElement("a", {
    href: "#" + name,
    className: "pf-nav__link" + (route === name ? " is-active" : ""),
    onClick: e => {
      e.preventDefault();
      go({
        name
      });
    }
  }, children);
  return /*#__PURE__*/React.createElement("header", {
    className: "pf-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "pf-nav__brand",
    onClick: e => {
      e.preventDefault();
      go({
        name: "home"
      });
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-nav__mark"
  }, "SK"), /*#__PURE__*/React.createElement("span", {
    className: "pf-nav__word"
  }, "Shruti Kalamdani")), /*#__PURE__*/React.createElement("nav", {
    className: "pf-nav__links"
  }, link("work", "Work"), link("about", "About"), /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    variant: "secondary",
    href: "#about",
    onClick: e => {
      e.preventDefault();
      go({
        name: "about"
      });
    }
  }, "Get in touch")));
}
function Footer({
  go
}) {
  const d = window.PORTFOLIO_DATA.person;
  return /*#__PURE__*/React.createElement("footer", {
    className: "pf-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-footer__top"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-footer__cta"
  }, "Let's make something worth shipping."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "primary",
    size: "lg",
    href: "mailto:" + d.email
  }, d.email)), /*#__PURE__*/React.createElement("div", {
    className: "pf-footer__base"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-nav__mark pf-nav__mark--sm"
  }, "SK"), /*#__PURE__*/React.createElement("span", {
    className: "sk-meta"
  }, "\xA9 ", new Date().getFullYear(), " ", d.name, " \xB7 ", d.location), /*#__PURE__*/React.createElement("span", {
    className: "sk-meta"
  }, "Designed in-house")));
}
function SectionHead({
  eyebrow,
  title,
  intro,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-sectionhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "pf-sectionhead__title"
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    className: "sk-lead sk-measure",
    style: {
      marginTop: "var(--space-4)"
    }
  }, intro)), action);
}
Object.assign(window, {
  MediaBlock,
  Nav,
  Footer,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.WorkCard = __ds_scope.WorkCard;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Avatar = __ds_scope.Avatar;

})();
