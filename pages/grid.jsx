import GridItem from "../components/advice-items/GridItem"
import fs from "fs/promises"
import path from "path"

const grid = ({ adviceAll }) => {
	return (
		<div className='grid grid-cols-4 gap-2 p-4'>
			{adviceAll.map((advice, i) => (
				<GridItem key={"adviceGrid" + i} advice={advice} />
			))}
		</div>
	)
}

export const getStaticProps = async () => {
	const filePath = path.join(process.cwd(), "data", "advice.json")
	const jsonData = await fs.readFile(filePath)
	const advice = await JSON.parse(jsonData)

	return {
		props: {
			adviceAll: advice.advice,
		},
	}
}

export default grid
