import BaseButton, { PublicButtonProps } from "./BaseButton";

export default function SecondaryButton(props: PublicButtonProps) {
  return <BaseButton {...props} variant="secondary" />;
}