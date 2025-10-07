import BaseButton, { ButtonProps } from "./BaseButton";

export default function PrimaryButton(props: ButtonProps) {
  return <BaseButton {...props} variant="primary" />;
}