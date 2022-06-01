import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar } from "@utils/adviceData"
import { useState, useEffect } from "react"
import { useUser } from "../../contexts/UserContext"

const HoverOptions = ({ text, stars, setStarCount, id }) => {
	const [url, setUrl] = useState(null)
	const [isStarred, setIsStarred] = useState(false)
	const userId = useUser()

	useEffect(() => {
		setUrl(window?.location?.hostname.toString() + "/" + id.toString())
	})

	const handleStar = async () => {
		try {
			const updated = incrementStar(text, stars, id)
			await updated
			setStarCount((starCount) => starCount + 1)
			const localData = JSON.parse(localStorage.getItem(userId))
			const saveData = { ...localData, [id]: true }
			localStorage.setItem(userId, JSON.stringify(saveData))
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
					{isStarred ? <span>Unstar</span> : <span>Star ({kFormatter(stars)})</span>}
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
