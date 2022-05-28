// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getAdviceData from "../utils/getAdviceData"

export default async function handler(req, res) {
	const advice = getAdviceData()

	res.status(200).json(advice)
}
