import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar } from "@utils/adviceData"

const HoverOptions = ({ text, stars, id }) => {
	const handleStar = () => {
		const updated = incrementStar(text, stars, id)
		console.log(updated)
	}

	return (
		<div className='flex flex-row gap-2'>
			<CopyButton toCopy={text} />
			<button onClick={handleStar}>Likes ({stars})</button>
		</div>
	)
}

export default HoverOptions
