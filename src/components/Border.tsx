import { ElementType, ReactElement, forwardRef } from "react"
import { RainbowColors } from "../types/colors"
import { BorderStyle } from "../types/css"
import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "../types/polymorphic-component"

type BorderProps = {
  color?: RainbowColors
  width?: number
  variant?: BorderStyle
}

type BorderComponent = <T extends ElementType>(
  props: PolymorphicComponentPropsWithRef<T, BorderProps>
) => ReactElement | null

export const Border: BorderComponent = forwardRef(<T extends ElementType = 'div'>({
  as,
  color,
  width,
  styles,
  variant,
  children,
  ...props
}: PolymorphicComponentProps<T, BorderProps>,
  ref?: PolymorphicRef<T>
) => {
  const Component = as || 'div'
  const customStyles = {
    style: {
      ...styles,
      borderColor: color || 'black',
      borderWidth: width || 1,
      borderStyle: variant || 'solid',
      padding: 16,
    }
  }
  return <Component {...props} {...customStyles} ref={ref}>{children}</Component>
})
