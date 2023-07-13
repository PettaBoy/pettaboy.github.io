import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import pianogif from "../assets/images/piano.gif";
import "./site.css";
import "font-awesome/css/font-awesome.min.css";

const VirtualMusicKeyboard = () => {
  return (
    <>
    <header className="container black" style={{padding: "128px 0px"}}>
      <div className="top">
        <Navbar/>
      </div>
      <div className="center">
        <img src={pianogif} alt=""/>
      </div>
      <h1 className="margin jumbo text-white center">VirtualMusicKeyboard</h1>
      <p className="xlarge text-white center">A music keyboard designed for the computer.</p>
    </header>
    <div className="row-padding padding-64 container">
      <div className="content">
        <p>Are you a music lover? Do you really want to play a music keyboard but cannot afford one?</p>
        <p>If your answers are yes, then you'll surely like this software!</p>
        <p>Virtual Music Keyboard, as its name suggests, emulates a real-life music keyboard on a computer system. You can play the
        keyboard either with your mouse or your computer keyboard.
        </p>  
      </div>
    </div>
    <div className="container black center padding-64">
      <a href="https://www.github.com/PettaBoy/VirtualMusicKeyboard" target="_blank" rel="noreferrer"><h1 className="margin xlarge">Download here!</h1></a>
      <br/>
      <p>Source code available at the above link as well!</p>
    </div>
    <Footer />
    </>
  );
}

export default VirtualMusicKeyboard;