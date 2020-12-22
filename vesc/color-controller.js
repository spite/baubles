import { Controller } from "./controller.js";

class ColorController extends Controller {
  constructor(state, prop, min, max, step) {
    const input = document.createElement("input");
    input.type = "color";
    super(input, prop);
    this.valueInput = document.createElement("input");
    this.valueInput.type = "text";
    input.addEventListener("input", (e) => {
      const v = e.target.value;
      state[prop] = v;
    });
    this.valueInput.addEventListener("input", (e) => {
      const v = e.target.value;
      state[prop] = v;
    });
    this.input = input;
    this.div.append(this.valueInput);
  }

  setValue(v) {
    this.input.value = v;
    this.valueInput.value = v;
    this.relay(v);
  }
}

export { ColorController };
