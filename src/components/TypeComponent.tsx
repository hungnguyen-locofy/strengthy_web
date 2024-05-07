import { Button } from "@mui/material";

// Define an enum for color options
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

enum Numbers {
  Zero,
  One,
  Two,
}

const Appearances = {
  primary: "primary",
  stroke: "stroke",
  flat: "flat",
};

// Define a union type for size options
type Size = "small" | "medium" | "large";

type Union = 1 | "2" | false | { key: "value" };

interface ButtonProps {
  // TODO: enum type not working now
  color: Color; // Prop with enum type
  size?: Size; // Optional prop with size union type
  label: "Primary" | "Secondary"; // Prop with string literal union
  price: string | number; // String or number
  appearances: keyof typeof Appearances; // Key of object
  union: Union; // Different types in union
  numbers: Numbers;
}

const TSComponent = ({ color, size, label, price }: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: color,
    fontSize: size ? (size === "large" ? 20 : 16) : 14, // Conditional styles based on size
  };

  return (
    <Button style={buttonStyle}>
      {label} {price}
    </Button>
  );
};

export default TSComponent;
