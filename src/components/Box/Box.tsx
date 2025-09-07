/**
 * Box Component
 *
 * A highly customizable and modifiable Box component built with Tailwind CSS.
 * This component provides a flexible container with extensive styling options
 * for layout, spacing, colors, borders, shadows, and more.
 *
 * @example
 * // Basic usage
 * <Box>Hello World</Box>
 *
 * @example
 * // Flexbox layout
 * <Box display="flex" direction="col" align="center" justify="center">
 *   <div>Centered content</div>
 * </Box>
 *
 * @example
 * // Styled container
 * <Box
 *   background="primary"
 *   padding="lg"
 *   borderRadius="md"
 *   shadow="lg"
 *   className="w-full max-w-md"
 * >
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </Box>
 *
 * @example
 * // Custom element
 * <Box as="section" background="muted" padding="xl">
 *   <h1>Section Title</h1>
 * </Box>
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const boxVariants = cva('box-border', {
  variants: {
    // Layout variants
    display: {
      block: 'block',
      inline: 'inline',
      'inline-block': 'inline-block',
      flex: 'flex',
      'inline-flex': 'inline-flex',
      grid: 'grid',
      'inline-grid': 'inline-grid',
      hidden: 'hidden',
    },

    // Position variants
    position: {
      static: 'static',
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
    },

    // Flexbox variants
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse',
    },

    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },

    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },

    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },

    // Spacing variants
    padding: {
      none: 'p-0',
      xs: 'p-1',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
      '2xl': 'p-12',
      '3xl': 'p-16',
    },

    margin: {
      none: 'm-0',
      xs: 'm-1',
      sm: 'm-2',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
      '2xl': 'm-12',
      '3xl': 'm-16',
      auto: 'm-auto',
    },

    // Size variants
    width: {
      auto: 'w-auto',
      full: 'w-full',
      screen: 'w-screen',
      min: 'w-min',
      max: 'w-max',
      fit: 'w-fit',
      '1/2': 'w-1/2',
      '1/3': 'w-1/3',
      '2/3': 'w-2/3',
      '1/4': 'w-1/4',
      '3/4': 'w-3/4',
      '1/5': 'w-1/5',
      '2/5': 'w-2/5',
      '3/5': 'w-3/5',
      '4/5': 'w-4/5',
    },

    height: {
      auto: 'h-auto',
      full: 'h-full',
      screen: 'h-screen',
      min: 'h-min',
      max: 'h-max',
      fit: 'h-fit',
      '1/2': 'h-1/2',
      '1/3': 'h-1/3',
      '2/3': 'h-2/3',
      '1/4': 'h-1/4',
      '3/4': 'h-3/4',
      '1/5': 'h-1/5',
      '2/5': 'h-2/5',
      '3/5': 'h-3/5',
      '4/5': 'h-4/5',
    },

    // Background variants
    background: {
      transparent: 'bg-transparent',
      white: 'bg-white',
      black: 'bg-black',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      muted: 'bg-muted',
      destructive: 'bg-destructive',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500',
    },

    // Border variants
    border: {
      none: 'border-0',
      thin: 'border',
      medium: 'border-2',
      thick: 'border-4',
    },

    borderColor: {
      default: 'border-border',
      primary: 'border-primary',
      secondary: 'border-secondary',
      accent: 'border-accent',
      destructive: 'border-destructive',
      muted: 'border-muted',
      success: 'border-green-500',
      warning: 'border-yellow-500',
      info: 'border-blue-500',
    },

    borderRadius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    },

    // Shadow variants
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      inner: 'shadow-inner',
    },

    // Overflow variants
    overflow: {
      visible: 'overflow-visible',
      hidden: 'overflow-hidden',
      scroll: 'overflow-scroll',
      auto: 'overflow-auto',
    },

    // Z-index variants
    zIndex: {
      auto: 'z-auto',
      '0': 'z-0',
      '10': 'z-10',
      '20': 'z-20',
      '30': 'z-30',
      '40': 'z-40',
      '50': 'z-50',
    },
  },
  defaultVariants: {
    display: 'block',
    position: 'static',
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'start',
    padding: 'none',
    margin: 'none',
    width: 'auto',
    height: 'auto',
    background: 'transparent',
    border: 'none',
    borderColor: 'default',
    borderRadius: 'none',
    shadow: 'none',
    overflow: 'visible',
    zIndex: 'auto',
  },
});

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  /**
   * The content to display inside the box
   */
  children?: React.ReactNode;

  /**
   * The HTML element to render as
   * @default 'div'
   */
  as?: keyof React.JSX.IntrinsicElements;

  /**
   * Additional CSS classes
   */
  className?: string;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      as: Component = 'div',
      className,
      display,
      position,
      direction,
      wrap,
      justify,
      align,
      padding,
      margin,
      width,
      height,
      background,
      border,
      borderColor,
      borderRadius,
      shadow,
      overflow,
      zIndex,
      ...props
    },
    ref
  ) => {
    const ComponentElement = Component as React.ElementType;

    return (
      <ComponentElement
        {...props}
        ref={ref}
        className={cn(
          boxVariants({
            display,
            position,
            direction,
            wrap,
            justify,
            align,
            padding,
            margin,
            width,
            height,
            background,
            border,
            borderColor,
            borderRadius,
            shadow,
            overflow,
            zIndex,
            className,
          })
        )}
      >
        {children}
      </ComponentElement>
    );
  }
);

Box.displayName = 'Box';

export { Box, boxVariants };
