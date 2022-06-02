import { useState, useEffect } from "react"
import { TbLink, TbUnlink } from "react-icons/tb"

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
		<button className='align-baseline hover:underline' onClick={handleCopy}>
			{isCopied ? "copied" : "link"}
		</button>
	)
}

export default CopyButton
