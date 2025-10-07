import BaseButton, { ButtonProps } from "./BaseButton";

export default function OutlineButton(props: ButtonProps) {
  return <BaseButton {...props} variant="outline" />;
}