import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar, decrementStar } from "@utils/adviceData"
import { useState, useEffect } from "react"
import { useUser } from "../../contexts/UserContext"
import { useLocalStorage, useLocalStorageUpdate } from "@contexts/LocalStorageContext"
import Link from "next/link"
import { TbArrowRight } from "react-icons/tb"
import { AiOutlineStar, AiFillStar, AiOutlineTwitter } from "react-icons/ai"

const HoverOptions = ({ text, advice }) => {
	const [url, setUrl] = useState(null)
	const [isStarred, setIsStarred] = useState(false)
	const [starCount, setStarCount] = useState(advice.stars)
	const userId = useUser()
	const localSaveData = useLocalStorage()
	const setSaveData = useLocalStorageUpdate()

	useEffect(() => {
		setUrl(window?.location?.hostname.toString() + "/" + advice.id.toString())
		if (localSaveData && localSaveData["advice" + advice.id]) {
			setIsStarred(true)
		}
	}, [localSaveData, advice.id])

	const handleStar = async () => {
		try {
			const localData = JSON.parse(localStorage.getItem(userId))
			let saveData
			if (!isStarred) {
				await incrementStar(text, starCount, advice.id)
				setStarCount((starCount) => (starCount += 1))
				saveData = { ...localData, ["advice" + advice.id]: true }
				setIsStarred(true)
			} else {
				await decrementStar(text, starCount, advice.id)
				setStarCount((starCount) => (starCount -= 1))
				saveData = { ...localData, ["advice" + advice.id]: false }
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
		<div className='flex flex-row justify-between font-mono text-xs align-madvice.iddle transition ease-in-out text-stone-500 hover:text-black'>
			<div className='inline-flex flex-row items-center gap-2 transition ease-in-out text-stone-500 hover:text-black'>
				<div>
					<button className=' hover:underline' onClick={handleStar}>
						{isStarred ? <span>unstar({kFormatter(starCount)})</span> : <span>star({kFormatter(starCount)})</span>}
					</button>
				</div>
				<div>
					{url && (
						<a
							className='hover:underline '
							href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
							title='Share on twitter'
							data-show-count='false'
							target='_blank'
							rel='noopener noreferrer'
						>
							{/* <AiOutlineTwitter /> */}
							tweet
						</a>
					)}
				</div>
				<div className='hover:underline'>
					<Link href={`/${advice.id}`}>open</Link>
				</div>
			</div>
			<div>
				<CopyButton toCopy={url} />
			</div>
		</div>
	)
}

export default HoverOptions
