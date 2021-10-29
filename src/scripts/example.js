class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = "<h1> Hello </h1>";

    // with arrow function to preserve context
    // this.ele.addEventListener("click", () => this.handleClick());
    
    this.handleClick = this.handleClick.bind(this);
    this.ele.addEventListener("click", this.handleClick);

  }

  handleClick() {
    this.ele.children[0].innerText = "ouch";
  }
}

export default Example;