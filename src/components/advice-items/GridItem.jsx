import HoverOptions from "@components/advice-items/HoverOptions"
import { useState } from "react"

const GridItem = ({ advice }) => {
	const [starCount, setStarCount] = useState(advice?.stars)

	if (!advice) return <></>

	return (
		<div className='flex flex-col justify-between gap-2 p-2 transition ease-in-out border grow bg-stone-200 rounded-xl border-stone-300 hover:bg-yellow-200 hover:border-yellow-400 hover:shadow-yellow-200 hover:shadow-lg'>
			<div>{advice.text}</div>
			<div className='grid content-start'>
				<HoverOptions text={advice.text} stars={starCount} setStarCount={setStarCount} id={advice.id} />
			</div>
		</div>
	)
}

export default GridItem
