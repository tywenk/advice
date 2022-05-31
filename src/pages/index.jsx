import RandomItem from "@components/advice-items/RandomItem"
import BodyLayout from "@components/layouts/BodyLayout"
import { shuffle } from "lodash"

export default function Home({ arr }) {
	return (
		<BodyLayout>
			<RandomItem arr={arr} />
		</BodyLayout>
	)
}

export const getServerSideProps = async () => {
	const lengthAdvice = 401

	const randomArray = () => {
		let arr = []
		//402 is number of advice
		for (let i = 0; i <= lengthAdvice; i++) {
			arr.push(i)
		}

		return shuffle(arr)
	}

	const arr = randomArray()

	return {
		props: { arr: arr },
	}
}
