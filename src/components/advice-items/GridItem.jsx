import HoverOptions from "@components/advice-items/HoverOptions"
import { useState } from "react"

const GridItem = ({ advice }) => {
	const [starCount, setStarCount] = useState(advice?.stars)

	if (!advice) return <></>

	return (
		<div className='p-2 bg-stone-200 rounded-xl'>
			<div>{advice.text}</div>
			<div>
				<HoverOptions text={advice.text} stars={starCount} setStarCount={setStarCount} id={advice.id} />
			</div>
		</div>
	)
}

export default GridItem
