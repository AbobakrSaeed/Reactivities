import { makeAutoObservable } from "mobx";

// this is for loading indicator practice
export default class UiStore {
    isLoading= false;

    constructor() {
        makeAutoObservable(this);
    }

    setLoading = () => {
        this.isLoading = true;
        console.log(this.isLoading);
    }
    
    stopLoading = () => {
        this.isLoading = false;
        console.log(this.isLoading);
    }
};