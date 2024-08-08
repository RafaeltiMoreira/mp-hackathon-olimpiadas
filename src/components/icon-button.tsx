import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button {...props} className={twMerge(
      " border  rounded-md p-1.5",
      props.disabled ? "opacity-50" : null,
    )} />
  )
}