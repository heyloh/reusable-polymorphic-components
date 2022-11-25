import { ElementType, forwardRef, ReactElement } from "react"

import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../types/polymorphic-component"

type TextProps = {
  color?: 'red' | 'green' | 'blue'
}

type TextComponent = <C extends ElementType>(
  props: PolymorphicComponentPropsWithRef<C, TextProps>
) => ReactElement | null

export const Text: TextComponent = forwardRef(
  <T extends ElementType = 'span'>({
  as,
  color,
  style,
  children,
  ...props
}: PolymorphicComponentProps<T, TextProps>,
  ref?: PolymorphicRef<T>
) => {
  const Component = as || 'span'
  const customStyles = color ? { style: { ...style, backgroundColor: color }} : {}
  return <Component {...props} {...customStyles} ref={ref}>{children}</Component>
})
