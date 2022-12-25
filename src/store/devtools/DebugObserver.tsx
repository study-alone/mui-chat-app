import { useEffect, useMemo } from 'react'
import { useRecoilSnapshot, useRecoilCallback } from 'recoil'
import { ReactComponent as RecoilLogo } from '@assets/recoil_logo.svg'

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const gutter = '20px'
const positionDict = {
	'top-left': { top: gutter, left: gutter },
	'top-right': { top: gutter, right: gutter },
	'bottom-left': { bottom: gutter, left: gutter },
	'bottom-right': { bottom: gutter, right: gutter },
}

export const DebugObserver: React.FC<{ position: Position }> = ({ position }) => {
	const snapshot = useRecoilSnapshot()

	const getPosition = useMemo(() => {
		return positionDict[position]
	}, [position])

	const onClick = useRecoilCallback(
		({ snapshot }) =>
			async () => {
				console.debug('Atom values:')
				for (const node of snapshot.getNodes_UNSTABLE()) {
					const value = await snapshot.getPromise(node)
					console.debug(node.key, value)
				}
			},
		[],
	)

	useEffect(() => {
		console.debug('The following atoms were modified:')
		for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
			console.debug(node.key, snapshot.getLoadable(node))
		}
	}, [snapshot])

	return (
		<button
			style={{
				position: 'absolute',
				...getPosition,
				zIndex: 3000,
				backgroundColor: 'navy',
				padding: '10px',
				borderRadius: '6px',
				boxShadow: '3px 3px 6px 1px rgba(0, 0, 0, 0.3)',
				width: '80px',
			}}
			onClick={onClick}>
			<RecoilLogo />
		</button>
	)
}
