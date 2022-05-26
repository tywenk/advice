import CopyButton from "../buttons/CopyButton.jsx"

const GridItem = ({ advice }) => {
	return (
		<div className='p-2 bg-stone-200 rounded-xl'>
			<div>{advice.text}</div>
			<div>
				<CopyButton toCopy={advice.text.toString()} />
			</div>
		</div>
	)
}

export default GridItem
