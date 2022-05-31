import RandomItem from "@components/advice-items/RandomItem"
import BodyLayout from "@components/layouts/BodyLayout"

export default function Home({ advice }) {
	return (
		<BodyLayout>
			<RandomItem advice={advice} />
		</BodyLayout>
	)
}

export const getStaticProps = async () => {
	return {
		props: { advice: {} },
	}
}
