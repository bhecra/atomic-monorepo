import { Input as _Input } from "@ds/components/my-input";
import { Component } from "@atomico/react/preact";
export const Input: Component<typeof _Input>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-input": Component<typeof _Input>;
   }
}