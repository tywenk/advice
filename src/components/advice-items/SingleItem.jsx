import GridItem from "./GridItem"

const SingleItem = ({ advice }) => {
	if (!advice) return <></>

	return (
		<div className=''>
			<GridItem advice={advice} />
		</div>
	)
}

export default SingleItem
