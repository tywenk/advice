import { useRouter } from "next/router"
import { getOneAdviceData } from "@utils/adviceData"
import { useState, useEffect } from "react"
import GridItem from "./GridItem"

const SingleItem = () => {
	const [advice, setAdvice] = useState({})
	const router = useRouter()

	const { id } = router.query

	useEffect(() => {
		const fetch = async () => {
			const a = await getOneAdviceData(id)
			setAdvice(a)
		}
		if (id) {
			fetch()
		}
	}, [id])

	return (
		<div className=''>
			<GridItem advice={advice} />
		</div>
	)
}

export default SingleItem
