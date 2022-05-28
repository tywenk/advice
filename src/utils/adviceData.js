import initFirebase from "../firebase/initFirebase"
import { getDatabase, ref, get, update } from "firebase/database"

initFirebase()
const db = getDatabase()

export const getAllAdviceData = async () => {
	let advice = []
	const adviceRef = ref(db, "advice")
	try {
		const snapshot = await get(adviceRef)
		advice = snapshot.exists() ? snapshot.val() : console.log("No data")
	} catch (err) {
		console.log(err)
	}

	return advice
}

export const incrementStar = (text, stars, id) => {
	const updates = {}
	updates["/advice/" + id] = {
		text: text,
		stars: stars + 1,
		id: id,
	}

	return update(ref(db), updates)
}
