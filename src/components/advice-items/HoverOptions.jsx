import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar } from "@utils/adviceData"
import { useState } from "react"

const HoverOptions = ({ text, stars, setStarCount, id }) => {
	const handleStar = async () => {
		try {
			const updated = incrementStar(text, stars, id)
			await updated
			setStarCount((starCount) => starCount + 1)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='flex flex-row gap-2'>
			<CopyButton toCopy={text} />
			<button onClick={handleStar}>Star ({stars})</button>
			<a
				href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
				title='Share on twitter'
				data-show-count='false'
				rel='noopener'
			>
				Tweet
			</a>
		</div>
	)
}

export default HoverOptions
