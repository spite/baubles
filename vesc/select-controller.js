import { Controller } from "./controller.js";

class SelectController extends Controller {
  constructor(state, prop, options = []) {
    const input = document.createElement("select");
    for (const option of options) {
      const o = document.createElement("option");
      if (typeof o === "object") {
        o.value = option[0];
        o.textContent = option[1];
      } else {
        o.value = option;
        o.textContent = option;
      }
      input.append(o);
    }
    super(state, prop, input, prop);
    input.addEventListener("input", (e) => {
      const v = e.target.value;
      state[prop] = v;
    });
    this.input = input;
  }

  setValue(v) {
    this.input.value = v;
    v = this.input.value;
    this.relay(v);
  }

  randomize() {
    this.input.selectedIndex = Math.floor(
      Math.random() * this.input.options.length
    );
    this.state[this.prop] = this.input.options[this.input.selectedIndex].value;
  }
}

export { SelectController };
