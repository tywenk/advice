import fs from "fs/promises"
import path from "path"

export default async function getAdviceData() {
	const filePath = path.join(process.cwd(), "data", "advice-v2.json")
	const jsonData = await fs.readFile(filePath)
	const advice = await JSON.parse(jsonData)
	console.log(advice)
	return advice

	// let myArray = advice.advice.map((str, index) => ({ text: str, id: index + 1 }))
	// const myObj = { advice: myArray }
	// fs.writeFile("data-v2.json", JSON.stringify(myObj))
}
