import GridItem from "../components/advice-items/GridItem"
import getAdviceData from "../utils/getAdviceData"

const grid = ({ adviceAll }) => {
	return (
		<div className='grid grid-cols-4 gap-2 p-4'>
			{adviceAll.map((advice, i) => (
				<GridItem key={"adviceGrid" + i} advice={advice} />
			))}
		</div>
	)
}

export const getServerSideProps = async () => {
	const advice = await getAdviceData()

	return {
		props: {
			adviceAll: advice,
		},
	}
}

export default grid
