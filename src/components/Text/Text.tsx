import React from 'react';
import { cn } from '../../lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The text content to display
   */
  children: React.ReactNode;

  /**
   * The HTML element to render as
   * @default 'p'
   */
  as?:
    | 'p'
    | 'span'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'strong'
    | 'em'
    | 'small';

  /**
   * Text size variant
   * @default 'base'
   */
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';

  /**
   * Font weight
   * @default 'normal'
   */
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';

  /**
   * Text color variant
   * @default 'foreground'
   */
  color?:
    | 'foreground'
    | 'muted'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'info';

  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Text decoration
   */
  decoration?: 'none' | 'underline' | 'line-through' | 'overline';

  /**
   * Text transform
   */
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';

  /**
   * Text truncation
   */
  truncate?: boolean;

  /**
   * Number of lines to clamp (for multiline truncation)
   */
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Predefined text variants for common use cases
   */
  variant?:
    | 'body'
    | 'caption'
    | 'heading'
    | 'subheading'
    | 'label'
    | 'error'
    | 'success'
    | 'muted';

  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

const weightClasses = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

const colorClasses = {
  foreground: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  accent: 'text-accent-foreground',
  destructive: 'text-destructive',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

const decorationClasses = {
  none: 'no-underline',
  underline: 'underline',
  'line-through': 'line-through',
  overline: 'overline',
};

const transformClasses = {
  none: 'normal-case',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

const variantClasses = {
  body: 'text-base text-foreground',
  caption: 'text-sm text-muted-foreground',
  heading: 'text-2xl font-bold text-foreground',
  subheading: 'text-lg font-semibold text-foreground',
  label: 'text-sm font-medium text-foreground',
  error: 'text-sm text-destructive',
  success: 'text-sm text-green-600',
  muted: 'text-sm text-muted-foreground',
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      as: Component = 'p',
      size = 'base',
      weight = 'normal',
      color = 'foreground',
      align = 'left',
      decoration = 'none',
      transform = 'none',
      truncate = false,
      lineClamp,
      variant,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'leading-normal';

    const variantClass = variant ? variantClasses[variant] : '';

    const sizeClass = !variant ? sizeClasses[size] : '';
    const weightClass = !variant ? weightClasses[weight] : '';
    const colorClass = !variant ? colorClasses[color] : '';

    const alignClass = alignClasses[align];
    const decorationClass = decorationClasses[decoration];
    const transformClass = transformClasses[transform];

    const truncateClass = truncate ? 'truncate' : '';
    const lineClampClass = lineClamp ? `line-clamp-${lineClamp}` : '';

    const classes = cn(
      baseClasses,
      variantClass,
      sizeClass,
      weightClass,
      colorClass,
      alignClass,
      decorationClass,
      transformClass,
      truncateClass,
      lineClampClass,
      className
    );

    return React.createElement(
      Component,
      {
        ...props,
        ref,
        className: classes,
      },
      children
    );
  }
);

Text.displayName = 'Text';
