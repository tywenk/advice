import fs from "fs/promises"
import path from "path"

//GET DATA FROM LOCAL
const formateAdviceData = async () => {
	const filePath = path.join(process.cwd(), "src", "data", "advice.json")
	const jsonData = await fs.readFile(filePath)
	const advice = await JSON.parse(jsonData)
	// console.log(advice)

	// SAVE JSON TO NEW FILE
	let myArray = advice.advice.map((str, index) => ({ text: str, id: index, stars: 0 }))
	const myObj = { advice: myArray }
	fs.writeFile("data-v4.json", JSON.stringify(myObj))
}

export default formateAdviceData
