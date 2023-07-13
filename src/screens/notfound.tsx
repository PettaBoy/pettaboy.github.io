import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

const NotFound = () => {
    return (
        <>
        <header className="container black">
            <div className="top">
                <Navbar/>
            </div>
            <h1 className="center">404</h1>
        </header>
        <div className="light-grey container center">
            <h5>Sorry; Not Found!</h5>
        </div>
        <Footer/>
        </>
    )
}

export default NotFound;