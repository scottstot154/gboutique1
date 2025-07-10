export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export enum ButtonColor {
  Default = "blue",
  Red = "red",
  Green = "green",
}

export const getButtonVariantClass = ({
  variant,
  color,
}: {
  variant: ButtonVariant;
  color: ButtonColor;
}) => {
  switch (variant) {
    case ButtonVariant.Primary:
      return `bg-${color}-600 hover:bg-${color}-700 text-white`;
    case ButtonVariant.Secondary:
      return `border-2 border-${color}-600 text-${color}-600 hover:bg-${color}-300 border-opacity-100`;
    case ButtonVariant.Tertiary:
      return `text-${color}-800 hover:bg-${color}-300 font-semibold`;
    default:
      return "";
  }
};

export const GButton = ({
  onClick,
  disabled = false,
  className = "",
  children,
  dataTestId,
  variant = ButtonVariant.Primary,
  color = ButtonColor.Default,
}: {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  dataTestId?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
}) => {
  const variantClass = getButtonVariantClass({ variant, color });
  return (
    <button
      className={`g-button ${variantClass}  px-6 py-3 rounded-xl ${className}`}
      onClick={onClick}
      data-testid={dataTestId}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
