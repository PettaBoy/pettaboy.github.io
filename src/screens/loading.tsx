import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer"

const Loading = () => {
    return (
        <>
        <header className="container black">
            <div className="top">
                <Navbar/>
            </div>
            <h1 className="center">Loading...</h1>
        </header>
        <div className="light-grey container center">
            <h5>Please wait...</h5>
        </div>
        <Footer/>
        </>
    )
}

export default Loading;