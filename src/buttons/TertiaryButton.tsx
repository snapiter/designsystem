import BaseButton, { PublicButtonProps } from "./BaseButton";

export default function TertiaryButton(props: PublicButtonProps) {
  return <BaseButton {...props} variant="tertiary" />;
}