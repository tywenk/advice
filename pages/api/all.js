// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs/promises"
import path from "path"

export default async function handler(req, res) {
	const filePath = path.join(process.cwd(), "data", "advice.json")
	const jsonData = await fs.readFile(filePath)
	const advice = await JSON.parse(jsonData)

	res.status(200).json(advice)
}
