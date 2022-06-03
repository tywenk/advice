import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar, decrementStar } from "@utils/adviceData"
import { useState, useEffect } from "react"
import { useUser } from "../../contexts/UserContext"
import { useLocalStorage, useLocalStorageUpdate } from "@contexts/LocalStorageContext"
import Link from "next/link"

const HoverOptions = ({ text, advice, setAdvice }) => {
	const [url, setUrl] = useState(null)
	const [isStarred, setIsStarred] = useState(false)
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
				await incrementStar(text, advice.stars, advice.id)

				saveData = { ...localData, ["advice" + advice.id]: true }
				localStorage.setItem(userId, JSON.stringify(saveData))
				setSaveData(saveData)
				setIsStarred(true)
				setAdvice(advice.id, 1)
			} else {
				await decrementStar(text, advice.stars, advice.id)
				saveData = { ...localData, ["advice" + advice.id]: false }
				saveData = { ...localData, ["advice" + advice.id]: true }
				localStorage.setItem(userId, JSON.stringify(saveData))
				setIsStarred(false)
				setAdvice(advice.id, -1)
			}
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
						{isStarred ? (
							<span>unstar({kFormatter(advice.stars)})</span>
						) : (
							<span>star({kFormatter(advice.stars)})</span>
						)}
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
			<div className='ml-2'>
				<CopyButton toCopy={url} />
			</div>
		</div>
	)
}

export default HoverOptions
