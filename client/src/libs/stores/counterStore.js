import { makeAutoObservable } from "mobx";

export default class CounterStore {
  title = "Counter store";
  count = 44;
  events = [`Initial count is ${this.count}`];
  constructor() {
    // makeObservable(this, {
    //   title: observable,
    //   count: observable,
    //   increment: action,
    //   decrement: action
    // });

    //or
    makeAutoObservable(this); // shorter way
  }

  increment = () => {
    this.count++;
    this.events.push(`Incremented by 1. Count is now ${this.count}`);
  };
  decrement = () => {
    this.count--;
    this.events.push(`Decremented by 1. Count is now ${this.count}`);
  };

  // computed property
  get eventCount() {
    return this.events.length;
  }
}
