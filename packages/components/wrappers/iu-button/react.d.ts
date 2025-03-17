import { IuButton as _IuButton } from "@ds/components/iu-button";
import { Component } from "@atomico/react";
export const IuButton: Component<typeof _IuButton>;
declare namespace JSX {
   interface IntrinsicElements{
      "atomico-iu-button": Component<typeof _IuButton>;
   }
}