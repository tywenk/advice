import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar } from "@utils/adviceData"
import { useState } from "react"

const HoverOptions = ({ text, stars, id }) => {
	const [starCount, setStarCount] = useState(stars)

	const handleStar = async () => {
		try {
			const updated = incrementStar(text, starCount, id)
			const res = await updated
			setStarCount((starCount) => starCount + 1)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='flex flex-row gap-2'>
			<CopyButton toCopy={text} />
			<button onClick={handleStar}>Star ({starCount})</button>
		</div>
	)
}

export default HoverOptions
