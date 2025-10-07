import BaseButton, { PublicButtonProps } from "./BaseButton";

export default function OutlineButton(props: PublicButtonProps) {
  return <BaseButton {...props} variant="outline" />;
}