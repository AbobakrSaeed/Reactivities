import { createContext } from "react";
import CounterStore from "./counterStore";
import UiStore from "./uiStore";


export const store={ counterStore : new CounterStore(), uiStore: new UiStore() };

export const StoreContext= createContext(store);