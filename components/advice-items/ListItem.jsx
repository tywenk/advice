import { useState } from "react"
import HoverOptions from "./HoverOptions"

const ListItem = ({ advice }) => {
	const [isHover, setIsHover] = useState(false)

	const mouseEnter = () => {
		setIsHover(true)
		console.log("enter")
	}

	const mouseLeave = () => {
		setIsHover(false)
		console.log("exit")
	}
	return (
		<div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			<li className='hover:underline hover:cursor-pointer'>{advice}</li>
			{isHover && <HoverOptions toCopy={advice.toString()} />}
		</div>
	)
}

export default ListItem
