import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren
} from "react"

type AsProp<C extends ElementType> = {
  as?: C
}
type PropsWithAsProp<C extends ElementType, P> = P & AsProp<C>
type PropsToOmit<C extends ElementType, P> = keyof PropsWithAsProp<C, P>
export type PolymorphicComponentProps<C extends ElementType, P = {}> =
  PropsWithChildren<PropsWithAsProp<C, P>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, P>>

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"]
export type PolymorphicComponentPropsWithRef<C extends ElementType, P> =
  PolymorphicComponentProps<C, P> & {
    ref?: PolymorphicRef<C>
  }
