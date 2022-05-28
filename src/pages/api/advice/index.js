// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllAdviceData } from "@utils/adviceData"

export default async function handler(req, res) {
	const advice = getAllAdviceData()

	res.status(200).json(advice)
}
