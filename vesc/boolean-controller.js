import { Controller } from "./controller.js";

class BooleanController extends Controller {
  constructor(state, prop) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change", (e) => {
      const v = e.target.checked;
      state[prop] = v;
      this.relay(v);
    });
    super(state, prop, input, prop);
    this.input = input;
  }

  setValue(v) {
    this.input.checked = v;
    v = this.input.checked;
    this.relay(v);
  }

  randomize() {
    this.state[this.prop] = Math.random() > 0.5;
  }
}

export { BooleanController };
