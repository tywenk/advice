import RandomItem from "@components/advice-items/RandomItem"

export default function Home({ advice }) {
	return (
		<div className='flex justify-center w-full'>
			<div className='flex flex-col w-1/2 gap-4'>
				<RandomItem advice={advice} />
			</div>
		</div>
	)
}

export const getStaticProps = async () => {
	return {
		props: { advice: {} },
	}
}
