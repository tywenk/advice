import { useState } from "react"
import HoverOptions from "./HoverOptions"

const ListItem = ({ advice, setAdvice }) => {
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
			className='p-1 transition ease-in-out md:gap-2 md:pl-6 hover:divide-none md:hover:divide-solid border-stone-50 rounded-xl md:grid md:grid-cols-10 hover:divide-x hover:divide-stone-300 hover:border-stone-300'
		>
			<li className='col-span-8'>{advice.text}</li>
			<div className='flex flex-col justify-center col-span-2 pl-3'>
				{isHover && <HoverOptions text={advice.text} advice={advice} setAdvice={setAdvice} />}
			</div>
		</div>
	)
}

export default ListItem
