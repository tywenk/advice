import GridItem from "../components/advice-items/GridItem"
import { getAllAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"
import FilterItems from "@components/buttons/FilterItems"

const Grid = ({ adviceAll }) => {
	if (adviceAll.length < 0) return <div>Loading...</div>

	const handleStarToggle = () => {}

	const handleLengthToggle = () => {}

	return (
		<BodyLayout>
			<FilterItems starToggle={handleStarToggle} lengthToggle={handleLengthToggle} />
			<div className='grid grid-cols-2 gap-2 md:grid-cols-3 '>
				{adviceAll.map((advice, i) => (
					<GridItem key={"adviceGrid" + i} advice={advice} />
				))}
			</div>
		</BodyLayout>
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
