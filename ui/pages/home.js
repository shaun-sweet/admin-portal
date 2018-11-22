import Link from 'next/link'

const Home = props => {
	return (
    <div>
      <h1>Home page!</h1>
      <p><Link href='/'><a>Back to the root page!</a></Link></p>
      this is the home page!
    </div>
	)
}

export default Home