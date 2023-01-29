import React, { Fragment, useMemo } from 'react'

type OptionalWrapperProps<T extends React.ElementType> = {
	children?: React.ReactNode
	component: T
	condition: boolean
} & Omit<React.ComponentPropsWithoutRef<T>, keyof T>

/**
 *
 * @example
 * ```ts
 * const Child: React.FC<{ wow: 'a' | 'b' | 'c' }> = () => <></>
 *
 * const Comp: React.FC<React.PropsWithChildren> = ({ children }) => {
 *      return (
 *          <OptionalWrapper component={Child} wow="a" condition={true}>
 *              {children}
 *          </OptionalWrapper>
 *      )
 * }
 * ```
 */

export const OptionalWrapper = <T extends React.ElementType>({
	children,
	component: Component,
	condition,
	...componentProps
}: OptionalWrapperProps<T>) => {
	const Wrapper = useMemo(() => (condition ? Component : Fragment), [Component, condition])

	return <Wrapper {...componentProps}>{children}</Wrapper>
}
