import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}

export function sayHello(){
  console.log("Hello from Import Maps!");
  alert("Hello from Import Maps!");
}