import { useState, useEffect } from "react"
import { BiUpArrowAlt } from "react-icons/bi"

const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 500) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})
	}, [])
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
	return (
		<div className='relative '>
			{showTopBtn && (
				<div
					className='fixed inline-flex items-center p-1 rounded-lg cursor-pointer bg-stone-50 bottom-14 right-10 text-stone-500 hover:underline'
					onClick={goToTop}
				>
					Scroll to top <BiUpArrowAlt />
				</div>
			)}
		</div>
	)
}
export default ScrollToTop
