import React, { Component } from 'react'
export default class Header extends Component {
	render() {
		let resumeData = this.props.resumeData
		return (
			<React.Fragment>
				<header id='home'>
					<nav id='nav-wrap'>
						<a className='mobile-btn' href='#nav-wrap' title='Show menu'>
							Show menu
						</a>
						<a className='mobile-btn' href='/#' title='Hide menu'>
							Hide menu
						</a>
						<ul id='nav' className='nav'>
							<li className='current'>
								<a className='smoothscroll' href='#home'>
									Home
								</a>
							</li>
							<li>
								<a className='smoothscroll' href='#about'>
									About
								</a>
							</li>

							<li>
								<a className='smoothscroll' href='#portfolio'>
									Projects
								</a>
							</li>
							<li>
								<a className='smoothscroll' href='#skills'>
									Skills
								</a>
							</li>
							{/* use react-router here maybe? */}
							{/* <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li> */}
							{/* <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li> */}
							<li>
								<a className='smoothscroll' href='#contact'>
									Contact
								</a>
							</li>
						</ul>
					</nav>

					{/* <h1
						className='responsive-headline'
						style={{ color: 'red', fontFamily: 'sans-serif ' }}>
						{resumeData.name}
					</h1> */}

					<div className='row banner'>
						<div className='banner-text'>
							<div className='typewriter'>
								<h2>
									<span className='rainbow'>I'm a {resumeData.headerJob}</span>
								</h2>
							</div>
							<h3>{resumeData.roleDescription}</h3>
							<hr />
						</div>
						<ul className='social'>
							{resumeData.socialMedia &&
								resumeData.socialMedia.map((item) => {
									return (
										<li key={item.name}>
											<a
												href={item.url}
												target='_blank'
												rel='noopener noreferrer'>
												<i className={item.className}></i>
											</a>
										</li>
									)
								})}
						</ul>
					</div>

					<p className='scrolldown'>
						<a className='smoothscroll' href='#about'>
							<i className='icon-down-circle'></i>
						</a>
					</p>
				</header>
			</React.Fragment>
		)
	}
}
