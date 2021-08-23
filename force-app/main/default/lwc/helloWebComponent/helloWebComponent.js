import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    greeting = 'Trailblazer';
    currentDate = new Date().toDateString();

    handleGreetingChange(event){
        this.greeting = event.detail.value;
    }
    get capitalizedGreeting(){
        return `Hello ${this.greeting.toUpperCase()}!`;
    }
}