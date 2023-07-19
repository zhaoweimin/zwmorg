import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WmButton: typeof components.Button;
  }
}
export {};
