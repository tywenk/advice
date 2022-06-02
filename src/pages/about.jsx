import BodyLayout from "@components/layouts/BodyLayout"
import initFirebase from "../firebase/initFirebase"

initFirebase()

const About = () => {
	return (
		<BodyLayout>
			<div className='flex flex-col gap-3'>
				<div>
					On my 68th birthday, I decided to give my young adult son some advice. I am not a frequent advice giver but I
					was able to write down 68 bits. To my surprise, I had more to say than I thought so the next year I did
					another big batch. This got my mind going, so the following year, on my 70th birthday I rounded out the advice
					collection with an even total of 365 bits – a year’s worth of advice. I am primarily channeling the wisdom of
					the ages.
				</div>
				<div>
					I am offering advice I have heard from others, or learned somewhere in the past, or was reminded from my own
					experience. I doubt any of it is truly original, although I have tried to put everything in my own words. I
					call these bits “seeds” because each one of them could easily be expanded into a long essay. Indeed I have
					spent most of the time writing them trying to make these as telegraphic and as compact as possible. You the
					reader are encouraged to expand them as you read. If you find these proverbs align with your experience, share
					them with someone younger than you.
				</div>
				<div>– Kevin Kelly, Pacifica, California, 2022.</div>
			</div>
		</BodyLayout>
	)
}

export default about
