const DOMNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else {
    const els = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(els);
  }
  return els;
};