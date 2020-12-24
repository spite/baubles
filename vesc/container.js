import { NumberController } from "./number-controller.js";
import { ButtonController } from "./button-controller.js";
import { BooleanController } from "./boolean-controller.js";
import { FileController } from "./file-controller.js";
import { ColorController } from "./color-controller.js";
import { SelectController } from "./select-controller.js";

class Container {
  constructor(parent, title = "") {
    this.controllers = [];
    this.containers = [];
    this.state = null;
    this.parent = parent;
    this.div = document.createElement("div");
    this.div.className = "container";
    this.container = document.createElement("div");
    this.visible = false;
    this.container.style.display = "none";
    if (title) {
      // this.strip = document.createElement("span");
      // this.strip.className = "strip";
      // this.div.append(this.strip);
      this.title = document.createElement("p");
      this.title.textContent = title;
      this.div.append(this.title);
      this.title.addEventListener("click", (e) => {
        this.visible = !this.visible;
        this.container.style.display = this.visible ? "block" : "none";
      });
    }
    this.div.append(this.container);
  }

  add(state, prop) {
    if (typeof state !== "object") {
      const separator = document.createElement("p");
      separator.textContent = state;
      this.container.append(separator);
      return;
    }
    this.state = state;
    this.prop = prop;
    let controller;
    if (Array.isArray(arguments[2])) {
      controller = new SelectController(state, prop, arguments[2]);
    } else {
      const type = typeof state[prop];
      switch (type) {
        case "number":
          controller = new NumberController(
            state,
            prop,
            arguments[2],
            arguments[3],
            arguments[4]
          );
          controller.setValue(state[prop]);
          break;
        case "boolean":
          controller = new BooleanController(state, prop);
          controller.setValue(state[prop]);
          break;
        case "function":
          controller = new ButtonController(state, prop, "Click", state[prop]);
          break;
        default:
          console.log(`Type ${type} not supported for ${prop}`);
      }
    }
    controller.setValue(state[prop]);
    this.controllers.push(controller);
    this.parent.register(state, prop, controller);
    this.container.append(controller.div);
    return controller;
  }

  addFile(state, prop) {
    this.state = state;
    this.prop = prop;
    const controller = new FileController(state, prop);
    controller.setValue(state[prop]);
    this.controllers.push(controller);
    this.parent.register(state, prop, controller);
    this.container.append(controller.div);
    return controller;
  }

  addColor(state, prop) {
    this.state = state;
    this.prop = prop;
    const controller = new ColorController(state, prop);
    controller.setValue(state[prop]);
    this.controllers.push(controller);
    this.parent.register(state, prop, controller);
    this.container.append(controller.div);
    return controller;
  }

  addFolder(title) {
    const container = new Container(this.parent, title);
    this.containers.push(container);
    this.container.append(container.div);
    return container;
  }
}

export { Container };
