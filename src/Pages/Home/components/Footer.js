import "./Footer.css";
import Logo from "../../../components/img/logo.svg";

function Footer() {
	return (
		<footer>
			<img src={Logo}></img>
			<div>
				<h3>Osnovne informacije</h3>
				<p>VASO ALIGRUDIĆ
					<br />
					Vasa Raičkovića
					<br />
					Br 2681000
				</p>
			</div>
			<div>
				<h3>Djelatnost </h3>
				<p>8532 Srednje stručno i tehničko obrazovanje</p>
			</div>
			<div>
				<h3>Kontakt</h3>
				<p>Tel : (+382) 020 237 120.0 </p>
			</div>
		</footer>
	);


}

export default Footer;
