import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar, decrementStar } from "@utils/adviceData"
import { useState, useEffect } from "react"
import { useUser } from "../../contexts/UserContext"

const HoverOptions = ({ text, stars, setStarCount, id, localSaveData, setSaveData }) => {
	const [url, setUrl] = useState(null)
	const [isStarred, setIsStarred] = useState(false)
	const userId = useUser()

	useEffect(() => {
		setUrl(window?.location?.hostname.toString() + "/" + id.toString())
	}, [])

	useEffect(() => {
		// console.log(localSaveData["advice" + id])
		if (localSaveData && localSaveData["advice" + id]) {
			setIsStarred(true)
		}
	}, [localSaveData, id])

	const handleStar = async () => {
		try {
			const localData = JSON.parse(localStorage.getItem(userId))
			let saveData
			if (!isStarred) {
				await incrementStar(text, stars, id)
				setStarCount((starCount) => (starCount += 1))
				saveData = { ...localData, ["advice" + id]: true }
				setIsStarred(true)
			} else {
				await decrementStar(text, stars, id)
				setStarCount((starCount) => (starCount -= 1))
				saveData = { ...localData, ["advice" + id]: false }
				setIsStarred(false)
			}
			localStorage.setItem(userId, JSON.stringify(saveData))
			setSaveData(saveData)
		} catch (err) {
			console.log(err)
		}
	}

	const kFormatter = (num) => {
		return Math.abs(num) > 999
			? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
			: Math.sign(num) * Math.abs(num)
	}

	return (
		<div className='flex flex-row gap-2 text-sm transition ease-in-out text-stone-500 hover:text-black'>
			<div>
				<CopyButton toCopy={text + " " + url} />
			</div>
			<div>
				<button className='hover:underline' onClick={handleStar}>
					{isStarred ? <span>Unstar ({kFormatter(stars)})</span> : <span>Star ({kFormatter(stars)})</span>}
				</button>
			</div>
			<div>
				{url && (
					<a
						className='hover:underline'
						href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
						title='Share on twitter'
						data-show-count='false'
						target='_blank'
						rel='noopener noreferrer'
					>
						Tweet
					</a>
				)}
			</div>
		</div>
	)
}

export default HoverOptions
