class Example {
  constructor(ele) {
    // this.ele = ele;
    // let newHTMLEle = document.createElement("h1");
    // newHTMLEle.innerText = "Restful routes";
    // this.ele.appendChild(newHTMLEle);

    // with arrow function to preserve context
    // this.ele.addEventListener("click", () => this.handleClick());
    
    this.handleClick = this.handleClick.bind(this);
    this.ele.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    this.ele.children[0].innerText = "ouch";
    e.stopPropagation();
  }
}

export default Example;