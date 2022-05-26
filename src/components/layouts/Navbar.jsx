import Link from "next/link"

const Navbar = () => {
	return (
		<div className='bg-red-100 w-full flex justify-around'>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/list'>
				<a>List</a>
			</Link>
			<Link href='/grid'>
				<a>Grid</a>
			</Link>
		</div>
	)
}

export default Navbar
