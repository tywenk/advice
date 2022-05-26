import CopyButton from "../buttons/CopyButton.jsx"

const GridItem = ({ advice }) => {
	return (
		<div className='p-2 bg-stone-200 rounded-xl'>
			<div>{advice}</div>
			<div>
				<CopyButton toCopy={advice.toString()} />
			</div>
		</div>
	)
}

export default GridItem
