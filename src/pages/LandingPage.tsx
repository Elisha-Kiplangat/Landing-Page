import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
    <NavBar />
    <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Survey Site</h1>
          <p className="text-lg mb-6">We value your feedback. Please take a moment to fill out our survey.</p>
          <a href="/survey" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Start Survey
          </a>
        </div>
      </div>

    <Footer />
    </>
  )
}

export default LandingPage