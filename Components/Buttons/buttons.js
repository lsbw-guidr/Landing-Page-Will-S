class InputValue {
    constructor(formLineElement){
      this.formLineElement = formLineElement;
      this.formLineElement.addEventListener('click', () => this.clickLine());
    }
    clickLine(){
      let inputs = document.querySelectorAll('.form-line');
      inputs.forEach(e => e.value = "");
      inputs.forEach(e => e.style.color = "black");
    }
}
  
let inputs = document.querySelectorAll('.form-line');
inputs.forEach( value => new InputValue(value));