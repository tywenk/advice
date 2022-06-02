import GridItem from "../components/advice-items/GridItem"
import { getAllAdviceData } from "@utils/adviceData"
import BodyLayout from "@components/layouts/BodyLayout"
import FilterItems from "@components/buttons/FilterItems"
import { useState, useMemo } from "react"

const Grid = ({ adviceAll }) => {
	const [starFilter, setStarFilter] = useState("none") //"asc", "desc"
	const [lengthFilter, setLengthFilter] = useState("none")
	const [filteredAdvice, setFilteredAdvice] = useState(adviceAll)

	const adviceByStar = useMemo(() => {
		return [...adviceAll].sort((a, b) => {
			if (a.stars > b.stars) {
				return -1
			}
			if (a.stars < b.stars) {
				return 1
			}
			return 0
		})
	}, [adviceAll])

	const adviceByLength = useMemo(() => {
		return [...adviceAll].sort((a, b) => {
			if (a.text.length > b.text.length) {
				return 1
			}
			if (a.text.length < b.text.length) {
				return -1
			}
			return 0
		})
	}, [adviceAll])

	const handleClear = () => {
		setStarFilter("none")
		setLengthFilter("none")
		setFilteredAdvice(adviceAll)
	}

	const handleStarToggle = () => {
		if (lengthFilter !== "none") setLengthFilter("none")

		switch (starFilter) {
			case "none":
				setStarFilter("asc")
				setFilteredAdvice(adviceByStar)
				break
			case "asc":
				setStarFilter("desc")
				setFilteredAdvice(adviceByStar.reverse())
				break
			case "desc":
				setStarFilter("none")
				setFilteredAdvice(adviceAll)
				break
			default:
				break
		}
	}

	const handleLengthToggle = () => {
		if (starFilter !== "none") setStarFilter("none")

		switch (lengthFilter) {
			case "none":
				setLengthFilter("asc")
				setFilteredAdvice(adviceByLength)
				break
			case "asc":
				setLengthFilter("desc")
				setFilteredAdvice(adviceByLength.reverse())
				break
			case "desc":
				setLengthFilter("none")
				setFilteredAdvice(adviceAll)
				break
			default:
				break
		}
	}

	if (filteredAdvice.length < 0) return <div>Loading...</div>

	let gridClass = "grid grid-cols-2 gap-2 md:grid-cols-3"

	return (
		<BodyLayout>
			<FilterItems
				starToggle={handleStarToggle}
				lengthToggle={handleLengthToggle}
				starFilter={starFilter}
				lengthFilter={lengthFilter}
				handleClear={handleClear}
			/>
			<div className={gridClass}>
				{filteredAdvice.map((advice, i) => (
					<GridItem key={"adviceGrid" + i} advice={advice} />
				))}
			</div>
		</BodyLayout>
	)
}

export const getServerSideProps = async () => {
	const adviceAll = await getAllAdviceData()

	return {
		props: {
			adviceAll,
		},
	}
}

export default Grid
