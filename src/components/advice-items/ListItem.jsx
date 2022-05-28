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
		<div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			<li className='hover:underline hover:cursor-pointer'>{advice.text}</li>
			{isHover && <HoverOptions text={advice.text} stars={advice.stars} id={advice.id} />}
		</div>
	)
}

export default ListItem
