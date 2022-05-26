import ListItem from "../components/advice-items/ListItem"
import fs from "fs/promises"
import path from "path"

const list = ({ adviceAll }) => {
	return (
		<div className='w-1/2'>
			{adviceAll.map((advice, i) => {
				return (
					<div key={"advice" + i}>
						<ListItem advice={advice} />
					</div>
				)
			})}
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

export default list
