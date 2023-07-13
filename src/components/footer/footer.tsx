import './footer.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer className="container padding-64 center opacity">
            <p className="xlarge padding-32">
                <a href="https://www.github.com/PettaBoy"><i className="fa fa-github hover-opacity"/></a>&nbsp;
                <a href="https://www.linkedin.com/in/sishir-sivakumar"><i className="fa fa-linkedin hover-opacity"/></a>&nbsp;
                <a href="https://www.twitter.com/PettaBoy2dot0"><i className="fa fa-twitter hover-opacity"/></a>&nbsp;
                <a href="https://www.instagram.com/__definitelynotsishirsivakumar/"><i className="fa fa-instagram hover-opacity"/></a>
            </p>
        <p className="medium"><i className="fa fa-copyright hover-opacity"/>2021, Sishir Sivakumar.</p>
    </footer>
    )
}

export default Footer;