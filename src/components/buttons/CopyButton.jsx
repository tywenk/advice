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
		<button className='text-lg hover:underline' onClick={handleCopy}>
			{isCopied ? <TbUnlink className='text-green-600' /> : <TbLink />}
		</button>
	)
}

export default CopyButton
