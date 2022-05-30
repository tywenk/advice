import CopyButton from "../buttons/CopyButton.jsx"
import HoverOptions from "@components/advice-items/HoverOptions"

const GridItem = ({ advice }) => {
	return (
		<div className='p-2 bg-stone-200 rounded-xl'>
			<div>{advice.text}</div>
			<div>
				<HoverOptions text={advice.text} stars={advice.stars} id={advice.id} />
			</div>
		</div>
	)
}

export default GridItem
