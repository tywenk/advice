import Link from "next/link"

const Navbar = () => {
	return (
		<div className='flex justify-center w-full gap-10 bg-red-100'>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/list'>
				<a>List</a>
			</Link>
			<Link href='/grid'>
				<a>Grid</a>
			</Link>
			<Link href='/about'>?</Link>
		</div>
	)
}

export default Navbar
