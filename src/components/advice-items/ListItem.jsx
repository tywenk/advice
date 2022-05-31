import { useState } from "react"
import HoverOptions from "./HoverOptions"

const ListItem = ({ advice }) => {
	const [isHover, setIsHover] = useState(false)

	const mouseEnter = () => {
		setIsHover(true)
	}

	const mouseLeave = () => {
		setIsHover(false)
	}
	return (
		<div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='grid grid-cols-8'>
			<li className='col-span-7 hover:underline'>{advice.text}</li>
			<div className='col-span-1'>
				{isHover && <HoverOptions text={advice.text} stars={advice.stars} id={advice.id} />}
			</div>
		</div>
	)
}

export default ListItem
