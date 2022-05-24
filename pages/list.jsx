import ListItem from "../components/advice-items/ListItem"
import fs from "fs/promises"
import path from "path"

const list = (props) => {
	console.log(props.adviceAll)

	return (
		<div>
			{/* {adviceAll.advice.map((advice, i) => {
				return <ListItem key={"advice" + i} advice={advice} />
			})} */}
		</div>
	)
}

export const getStaticProps = async () => {
	const filePath = path.join(process.cwd(), "data", "advice.json")
	const jsonData = await fs.readFile(filePath)
	const advice = await JSON.parse(jsonData)

	console.log(advice)

	return {
		props: {
			adviceAll: advice.advice,
		},
	}
}

export default list
