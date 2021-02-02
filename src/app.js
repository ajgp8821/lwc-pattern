import { LightningElement } from "lwc";

export default class App extends LightningElement {
  handleChange(event){
    let entry = event.target.value;
    let lastChar = entry.slice(-1);
    console.log(entry, entry.slice(0,-1), lastChar, isFinite(lastChar));
    if(isFinite(lastChar) && lastChar!=' ') {
      console.log('segundo if');
      this.template.querySelector('[data-entry]').value = entry.slice(0,-1);
    }
  }

  handleChange2(event){
    let entry = event.target.value;
    let lastChar = entry.slice(-1);
    console.log(entry, entry.slice(0,-1), lastChar, isFinite(lastChar));
    if(isFinite(lastChar) && lastChar!=' ') {
      console.log('segundo if');
      this.template.querySelector('[data-entrys]').value = entry.slice(0,-1);
    }
  }
}
