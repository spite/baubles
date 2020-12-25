import { Controller } from "./controller.js";

class NumberController extends Controller {
  constructor(state, prop, min = 0, max = 100, step = 1) {
    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.step = step;
    super(state, prop, input, prop);
    this.valueInput = document.createElement("input");
    input.addEventListener("input", (e) => {
      const v = parseFloat(e.target.value);
      state[prop] = v;
    });
    this.valueInput.addEventListener("input", (e) => {
      const v = parseFloat(e.target.value);
      state[prop] = v;
    });
    this.valueInput.type = "number";
    this.input = input;
    this.div.append(this.valueInput);
  }

  setValue(v) {
    this.input.value = v;
    v = parseFloat(this.input.value);
    this.valueInput.value = v;
    this.relay(v);
  }

  randomize() {
    // this.setValue(
    //   parseFloat(this.input.min) +
    //     Math.random() *
    //       (parseFloat(this.input.max) - parseFloat(this.input.min))
    // );
    this.state[this.prop] =
      parseFloat(this.input.min) +
      Math.random() * (parseFloat(this.input.max) - parseFloat(this.input.min));
  }
}

export { NumberController };
