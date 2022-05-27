// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initFirebase from "../firebase/initFirebase"
import { getDatabase, ref, onValue } from "firebase/database"

export default async function handler(req, res) {
	let advice
	initFirebase()
	const db = getDatabase()
	console.log(process.env.BASE_API_URL)
	const adviceRef = ref(db, "advice")
	onValue(adviceRef, (snapshot) => {
		advice = snapshot.val()
	})

	res.status(200).json(advice)
}
