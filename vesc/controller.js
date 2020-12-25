import { debounce } from "./debounce.js";

class Controller {
  constructor(state, prop, control, label) {
    this.debouncedOnChange = (v) => {
      this.onChangeFn(v);
    };
    this.state = state;
    this.prop = prop;

    this.div = document.createElement("div");
    this.div.className = "controller";
    this.label = document.createElement("span");
    this.label.className = "label";
    this.label.textContent = label;
    this.strip = document.createElement("span");
    this.strip.className = "strip";
    this.div.append(this.strip);
    this.div.append(this.label);
    this.control = control;
    this.div.append(this.control);
    this.div.style.zIndex = 1000;
    this.onChangeFn = null;

    this.relayRequested = false;
    this.value = undefined;
  }

  onChange(fn) {
    this.onChangeFn = fn;
    this.relay(this.value);
    return this;
  }

  setText(label) {
    this.label.textContent = label;
    return this;
  }

  setDescription(description) {
    this.div.setAttribute("title", description);
    return this;
  }

  setValue(v) {
    this.value = v;
  }

  randomize() {
    // noop
  }

  relay(v) {
    this.value = v;
    if (this.onChangeFn) {
      this.debouncedOnChange(this.value);
      // if (this.relayRequested) {
      //   return;
      // }
      // this.relayRequested = true;
      // requestAnimationFrame(() => {
      //   this.onChangeFn(this.value);
      //   this.relayRequested = false;
      // });
    }
  }
}

export { Controller };
