import './main.css';function r(e) {
  const { className: t, ...n } = e;
  return /* @__PURE__ */ React.createElement("button", { className: `${t}`, ...n });
}
const a = () => /* @__PURE__ */ React.createElement("h2", { className: "bg-blue-300" }, "Hello"), l = (e) => /* @__PURE__ */ React.createElement("h1", { className: "bg-green-400 p-2 rounded-3xl" }, "Hey there ", e);
function s(e) {
  return `Hello ${e}!`;
}
const c = (e) => e > 10;
export {
  r as Button,
  l as HelloMessage,
  a as HomePage,
  s as helloAnything,
  c as isBiggerThanTen
};
