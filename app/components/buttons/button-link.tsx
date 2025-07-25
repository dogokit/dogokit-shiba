import type { VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "react-router";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
}

const ButtonLink = ({
  prefetch = "intent",
  variant = "default",
  size = "default",
  className,
  children,
  disabled,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={cn(
        buttonVariants({ variant, size, className }),
        disabled && "pointer-events-none opacity-50"
      )}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
};
ButtonLink.displayName = "ButtonLink";

interface ButtonNavLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {}

const ButtonNavLink = ({
  prefetch = "intent",
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: ButtonNavLinkProps) => {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
};
ButtonNavLink.displayName = "ButtonNavLink";

interface ButtonLinkIconProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {}

function ButtonChildLink({ ...props }: ButtonLinkIconProps) {
  return (
    <Button asChild>
      <Link {...props}>Back to Home</Link>
    </Button>
  );
}

export { ButtonChildLink, ButtonLink, ButtonNavLink };
