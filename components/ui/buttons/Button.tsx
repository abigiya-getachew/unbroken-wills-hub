import Link from "next/link";
import type { ComponentProps, ButtonHTMLAttributes } from "react";

type ButtonProps =
  | (ComponentProps<typeof Link> & { className?: string })
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

const buttonStyles =
  "inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700";

export default function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, className = "", children, ...linkProps } = props;

    return (
      <Link
        href={href}
        className={`${buttonStyles} ${className}`}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { className = "", children, ...buttonProps } = props;

  return (
    <button
      className={`${buttonStyles} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
