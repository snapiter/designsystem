import BaseButton, { ButtonProps } from "./BaseButton";

export default function SecondaryButton(props: ButtonProps) {
  return <BaseButton {...props} variant="secondary" />;
}