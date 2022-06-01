import CopyButton from "@components/buttons/CopyButton.jsx"
import { incrementStar } from "@utils/adviceData"
import { useState, useEffect } from "react"

const HoverOptions = ({ text, stars, setStarCount, id }) => {
	const [url, setUrl] = useState(null)

	useEffect(() => {
		setUrl(window?.location?.hostname.toString() + "/" + id.toString())
	})

	const handleStar = async () => {
		try {
			const updated = incrementStar(text, stars, id)
			await updated
			setStarCount((starCount) => starCount + 1)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='flex flex-row gap-2 text-sm'>
			<CopyButton toCopy={text + " " + url} />
			<button className='hover:underline' onClick={handleStar}>
				Star ({stars})
			</button>
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
	)
}

export default HoverOptions
