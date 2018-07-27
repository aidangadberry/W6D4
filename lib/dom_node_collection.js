class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }
  html(str = null) {
    if (str === null) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach((node) => node.innerHTML = str);
    }
  }
  
  empty() {
    this.html("");
  }
  
  append(el){
    if (typeof el === 'object' && !(el instanceof DOMNodeCollection)) {
      el = $l(el);
    }
    
    if (typeof el === 'string') {
      this.nodes.forEach((node) => node.innerHTML += el);
    } else if (typeof el === DOMNodeCollection) {
      this.nodes.forEach((nodeChild) => {
        el.nodes.forEach((elChild) => {
          nodeChild.appendChild(elChild.cloneNode(true));
        });
      });
    }
  }
  
  attr(attrName, value = null) {
    if (value === null) {
      const attrVals = this.nodes[0].getAttribute(attrName);
      if (attrVals === null) {
        return "";
      } else {
        return attrVals;
      }
    } else {
      this.nodes[0].setAttribute(attrName, value);
    }
  }
  
  addClass(className) {
    let prevClasses = this.attr("class");
    
    if (prevClasses === "") {
      this.attr("class", className);
    } else {
      this.attr("class", prevClasses.concat(" ", className));
    }
  }
  
  removeClass(className) {
    let prevClasses = this.attr("class").split(" ");
    let idx = prevClasses.indexOf(className);
    
    if (idx !== -1) {
      this.attr("class", prevClasses.slice(0, idx).concat(prevClasses.slice(idx + 1)).join(" "));
    }
  }
  
  children(){
    let result = [];
    
    for (var i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const nodeChildren = node.children;
      const nodeChildrenArray = Array.from(nodeChildren);
      result = result.concat(nodeChildrenArray);
    }
    
    return new DOMNodeCollection(result);
  }
  
  on(eventName, eventHandler) {
    this.addEventListener(eventName, eventHandler);
    
  }
}

module.exports = DOMNodeCollection;