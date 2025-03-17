// Export all components
export { Button } from "./my-button/element";
export { Input } from "./my-input/element";
export { Card } from "./my-card/element";

// This file can also contain shared utilities, types or theme variables
export const theme = {
    colors: {
        primary: "#3498db",
        secondary: "#f1f1f1",
        text: "#333",
        background: "#ffffff"
    },
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px"
    }
}; 