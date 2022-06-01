import { useState } from "react"
import HoverOptions from "./HoverOptions"

const ListItem = ({ advice }) => {
	const [isHover, setIsHover] = useState(false)
	const [starCount, setStarCount] = useState(advice.stars)

	const mouseEnter = () => {
		setIsHover(true)
	}

	const mouseLeave = () => {
		setIsHover(false)
	}
	return (
		<div
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			className='gap-2 p-1 pl-3 border border-white rounded-lg md:grid md:grid-cols-8 hover:divide-x hover:divide-stone-300 hover:border-stone-300'
		>
			<li className='col-span-6'>{advice.text}</li>
			<div className='flex flex-col justify-end col-span-2 pl-3 truncate'>
				{isHover && <HoverOptions text={advice.text} stars={starCount} setStarCount={setStarCount} id={advice.id} />}
			</div>
		</div>
	)
}

export default ListItem
