import { useState, useEffect } from "react"

const CopyButton = ({ toCopy }) => {
	const [isCopied, setIsCopied] = useState(false)

	useEffect(() => {
		let timer = setInterval(() => {
			setIsCopied(false)
		}, 1500)
		return () => clearInterval(timer)
	}, [isCopied])

	const handleCopy = () => {
		navigator.clipboard.writeText(toCopy)
		setIsCopied(true)
	}

	return (
		<button className='hover:underline' onClick={handleCopy}>
			{isCopied ? "Copied" : "Copy"}
		</button>
	)
}

export default CopyButton
