
import Navigation from './../components/Navigation';
import Footer from './../components/Footer';

const Tickets = () => {
  return (
    <div>
      <Navigation/>
        <div className="h-[70vh] flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-800">Tickets Page</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Tickets