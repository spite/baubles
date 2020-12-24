// Vesc

import { VescElement } from "./vesc-custom-element.js";
import { Container } from "./container.js";

// number
// boolean
// button
// string
// select
// color
// file
// vec2 (pad)
// vec3
// range
// function / slope

class Vesc {
  constructor() {
    this.containers = [];
    this.handlers = new Map();
    this.proxies = new Map();
    this.base = document.createElement("vesc-element");
    this.base.style.position = "absolute";
    document.body.append(this.base);
  }

  addFolder(title) {
    const container = new Container(this, title);
    this.containers.push(container);
    this.base.append(container.div);
    return container;
  }

  register(state, prop, controller) {
    let ref = this.handlers.get(state);
    if (ref) {
      ref.push({ prop, controller });
      return;
    }
    this.handlers.set(state, [{ prop, controller }]);
  }

  update(target, prop, value) {
    const proxy = this.proxies.get(target);
    const handlers = this.handlers.get(proxy);
    if (!handlers) {
      return;
    }
    for (const handler of handlers.values()) {
      if (handler.prop === prop) {
        handler.controller.setValue(value);
      }
    }
  }

  createProxy(obj) {
    const self = this;
    const handler = {
      get: function (target, prop, receiver) {
        return target[prop];
      },
      set: function (target, prop, value) {
        self.update(target, prop, value);
        target[prop] = value;
        return true;
      },
    };

    let o = obj || {};
    const proxy = new Proxy(o, handler);
    this.proxies.set(o, proxy);
    return proxy;
  }

  randomize(fields) {
    for (const handler of this.handlers) {
      for (const entry of handler[1]) {
        if (fields.indexOf(entry.prop) !== -1) {
          entry.controller.randomize();
        }
      }
    }
  }
}

export { Vesc };
