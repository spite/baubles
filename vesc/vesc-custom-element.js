class VescElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    this.shadow = shadow;
    const style = document.createElement("style");
    style.textContent = `@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap');
    :host { all: unset; width: 300px; --padding: 6px; --height: 20px; overflow: auto}
    *{font-family: sans-serif, 'Source Code Pro', monospace; background-color: black; color: white; margin: 0; padding: 0; box-sizing: border-box; font-size: 12px; }
    div.container {
      max-height: 100vh;
      overflow: auto;
      padding: 2px;
      border-top: 1px solid #aaa;
      border-left: 1px solid #aaa;
      border-bottom: 1px solid #404040;
    }
    div.container p{padding: var(--padding); font-weight: bold; border-bottom: 1px solid #222; cursor: pointer; }
    div.controller {display: flex; flex-direction: row; align-items: center; border-bottom: 1px solid #101010; }
    div.controller * {color: #eee;}
    div.controller span.strip, div.container span.strip{ flex: 0 0 var(--padding); background-color: red; height: var(--height);}
    div.controller span.label{ height: var(--height); padding: 2px var(--padding); flex: 0 0 100px;  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
    div.controller input[type=range], div.controller input[type=button]{flex: 1 1 100%; width: 100%; }
    div.controller input[type=number], 
    div.controller input[type=text] {
      outline: none;
      border: none;
      background-color: #282828;
      height: var(--height);
      margin-left: 1px;
      padding: 0 5px;
    }

    div.controller input[type=number] {
      flex: 0 0 40px;
      width: 40px; 
    }

    div.controller input[type=text] {
      flex: 1;
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }

    input[type=button] {
      border: none;
      background-color: #282828;
      border-radius: 4px;
      cursor: pointer;
      height: var(--height);
    }
    input[type=button]:hover {
      background-color: #404040;
    }
    
    [type=range], [type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    input[type=range]:hover {
      background-color: #404040;
    }
    input[type=range] {
      width: 100%;
      height: var(--height);
      background: #282828;
      border-radius: 4px;
      position: relative;
      outline: none;
      padding: 0 2px;
    }
    input[type=range]::-webkit-slider-thumb {
      width: 5px;
      height: calc(var(--height) - 4px);
      background: #b70000;
      border-radius: 6px;
    }

    input[type=file]::-webkit-file-upload-button {
      display: inline-block;
      background-color: #282828;
      border-radius: 4px;
      border: none;
      color: white;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      width: 100%;
      height: var(--height);
    }
    input[type=file]:hover {
      background-color: #404040;
    }
    input[type=file]:active {
      background-color: #404040;
    }
    
    input[type=checkbox] {
      width: 1.5em;
      height: 1.5em;
      cursor: pointer;
      visibility: hidden;
    }
    
    input[type=checkbox]:after {
      content: " ";
      background-color: #282828;
      display: inline-block;
      color: #00BFF0;
      width: 100%;
      height: 100%;
      visibility: visible;
      border: none;
      border-radius: 4px;
    }
    
    input[type=checkbox]:checked:after {
      content: "";
      background-color: #b70000;
    }

    select {
      width: 100%;
      height: var(--height);
    }

    input[type=color] {
      border: none;
    }
    `;
    this.shadow.append(style);
  }

  connectedCallback() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length)
          //console.info("Node added: ", mutation.addedNodes[0]);
          for (const node of mutation.addedNodes) {
            this.shadow.append(node);
          }
      });
    });

    observer.observe(this, { childList: true });
  }
}

customElements.define("vesc-element", VescElement);

export { VescElement };
