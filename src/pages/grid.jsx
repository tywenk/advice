import GridItem from "../components/advice-items/GridItem"
import { getAllAdviceData } from "@utils/adviceData"

const grid = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	return (
		<div className='grid grid-cols-4 gap-2 p-4'>
			{adviceAll.map((advice, i) => (
				<GridItem key={"adviceGrid" + i} advice={advice} />
			))}
		</div>
	)
}

export const getServerSideProps = async () => {
	const advice = await getAllAdviceData()

	return {
		props: {
			adviceAll: advice,
		},
	}
}

export default grid
