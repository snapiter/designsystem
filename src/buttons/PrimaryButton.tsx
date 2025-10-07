import BaseButton, { PublicButtonProps } from "./BaseButton";

export default function PrimaryButton(props: PublicButtonProps) {
  return <BaseButton {...props} variant="primary" />;
}