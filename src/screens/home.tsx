import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import background from '../assets/images/space.png';
import pbsicon from '../assets/images/iconpbs.png';
import virtualmusickeyboard from '../assets/images/virtualmusickeyboardicon.png';
import chladniplate from '../assets/images/chladni_plate.png';
import './site.css';
import 'font-awesome/css/font-awesome.min.css';

const IntroPage = () => {
    return (
    <>
        <header className="container bg" style={ { padding: "128px 0px", backgroundImage: `url('${background}')` }}>
            <div className="top">
                <Navbar/>
            </div>
            <div className="center">
                <img src={pbsicon} alt='background'/>
            </div>
            <h1 className="margin jumbo text-white center">PettaBoyStudio</h1>
            <p className="xlarge text-white center">Hi, I am Sishir. Welcome to my page.</p>
        </header>
        <div className="padding-64 container">
            <div className="content">
                <div className="twothird">
                    <h1><a href='virtualmusickeyboard'>VirtualMusicKeyboard</a></h1>
                    <h5 className="padding-32">A music keyboard designed for the computer.</h5>
                </div>
                <div className="third center">
                    <img className="padding-64" src={virtualmusickeyboard} alt='keyboard'/>
                </div>
            </div>
        </div>
        <div className="row-padding light-grey padding-64 container">
            <div className="content">
                <div className="third center">
                    <img className="padding-64" src={chladniplate} alt='chladni-plate'/>
                </div>
                <div className="twothird">
                    <h1><a href="cymaticssimulator">Cymatics Simulator - Chladni</a></h1>
                    <h5 className="padding-32">Attempt at simulating cymatic patterns on a chladni plate. Inspired from <a href="https://www.youtube.com/watch?v=Q3oItpVa9fs">this video.</a></h5>
                </div>
            </div>
        </div>
        <div className="container black center padding-64">
            <h1 className="margin xlarge">More projects on the way!</h1>
        </div>
        <Footer />
    </>
    );
}

export default IntroPage