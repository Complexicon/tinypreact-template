import { preact, hooks } from './preact.js';

const Fragment = preact.Fragment;

const {
	useState
} = hooks;

function Landing() {
	return (
		<>
			<h1>Cover your page.</h1>
			<p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
			<p className="lead">
				<a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
			</p>
		</>
	)
}

function Content2() {
	return (
		<>
			<h1>Zweiter Content</h1>
			<p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
		</>
	)
}

function Logo() {
	return null;
}

function Header({ children }) {
	const [active, setActive] = useState(children.find(v => v.default));
	return (
		<>
			<header className="mb-auto">
				<div>
					<h3 className="float-md-start mb-0 d-flex align-items-center clickable" onClick={() => setActive(children.find(v => v.default))}>
						<span className="px-2"><Logo /></span>Cover
					</h3>
					<nav className="nav nav-masthead justify-content-center float-md-end">
						{children.map(function (link, index) {
							return (
								<Fragment key={index}>
									<a
										onClick={() => setActive(link)}
										className={`nav-link clickable ${link.name === active.name ? 'active' : ''}`}
									>
										{link.name}
									</a>
								</Fragment>
							)
						})}
					</nav>
				</div>
			</header>
			<main className="px-3">
				{active && active.component}
			</main>
		</>
	)
}

function Footer() {
	return (
		<footer className="mt-auto text-white-50">
			<p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
		</footer>
	)
}

function App() {
	return (
		<div className="d-flex h-100 text-center text-white">

			<div className="d-flex w-100 h-100 p-3 mx-auto flex-column">

				<Header>
					{[
						{ default: true, name: 'Home', component: <Landing /> },
						{ name: 'Test1', component: <Content2 /> },
					]}
				</Header>

				<Footer />
			</div>

		</div>
	)
}

preact.render(<App />, document.getElementById('app'));