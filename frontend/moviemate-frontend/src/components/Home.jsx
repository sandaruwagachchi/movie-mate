import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center text-black'>
        Home
        <div className='justify-center items-center'>
            <Link className='font-bold p-4 m-4 bg-purple-500 rounded-md text-white' to={"/bills"}>Bill Page</Link>
            <Link className='font-bold p-4 bg-purple-500 rounded-md text-white' to={"/view"}>View Bills</Link>
            {/* <Link className='font-bold p-4 bg-purple-500 rounded-md text-white' to={"/bills"}>Bill Page</Link> */}
        </div>
    </div>
  )
}

export default Home