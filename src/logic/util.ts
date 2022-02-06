export const timeout = (func: () => void, ms: number): Promise<void> => (
	new Promise((resolve) => (
		setTimeout(() => {
			func()
			resolve()
		}, ms)
	))
)
