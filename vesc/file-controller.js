import { Controller } from "./controller.js";

class FileController extends Controller {
  constructor(state, prop) {
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener(
      "change",
      (e) => {
        const files = this.input.files;
        if (files.length) {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (f) => {
            state[prop] = f.target.result;
            this.relay(f.target.result);
          };
          reader.readAsDataURL(file);
        }
      },
      false
    );
    super(input, prop);
    this.input = input;
  }
}

export { FileController };
