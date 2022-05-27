import initFirebase from "../firebase/initFirebase"
import { getDatabase, ref, onValue } from "firebase/database"

const getAdviceData = async () => {
	let advice
	initFirebase()
	const db = getDatabase()
	const adviceRef = ref(db, "advice")
	onValue(adviceRef, (snapshot) => {
		advice = snapshot.val()
	})

	return advice
}

export default getAdviceData
