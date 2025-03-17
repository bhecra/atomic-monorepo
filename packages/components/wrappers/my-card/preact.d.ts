import { Card as _Card } from "@ds/components/my-card";
import { Component } from "@atomico/react/preact";
export const Card: Component<typeof _Card>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-card": Component<typeof _Card>;
   }
}