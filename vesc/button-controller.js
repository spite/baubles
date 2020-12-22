import { Controller } from "./controller.js";

class ButtonController extends Controller {
  constructor(state, prop, action, fn) {
    const input = document.createElement("input");
    input.type = "button";
    input.value = prop;
    input.addEventListener("click", (e) => {
      fn();
    });
    super(input, "");
    this.input = input;
  }

  setText(v) {
    this.input.value = v;
  }
}

export { ButtonController };
