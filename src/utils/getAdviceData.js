import initFirebase from "../firebase/initFirebase"
import { getDatabase, ref, onValue, get } from "firebase/database"
import formateAdviceData from "./formateAdviceData"

const getAdviceData = async () => {
	// formateAdviceData()
	let advice
	initFirebase()
	const db = getDatabase()
	const adviceRef = ref(db, "advice")
	try {
		const snapshot = await get(adviceRef)
		advice = snapshot.exists() ? snapshot.val() : console.log("No data")
	} catch (err) {
		console.log(err)
	}

	return advice
}

export default getAdviceData
