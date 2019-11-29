import React, { Component } from 'react'
export default class Footer extends Component {
	render() {
		let jsonData = this.props.jsonData
		return (
			<footer id='footer'>
				<div className='row'>
					<div className='six columns'>
						<ul className='social-links'>
							{jsonData.socialMedia &&
								jsonData.socialMedia.map((item) => {
									return (
										<li>
											<a href={item.url}>
												<i className={item.className} />
											</a>
										</li>
									)
								})}
						</ul>
					</div>
					<div className='six columns'>
						<ul className='other-deets'>2019 - Ankit Curchorcar</ul>
					</div>
					<div id='go-top'>
						<a className='smoothscroll' title='Back to Top' href='#home'>
							<i className='icon-up-open' />
						</a>
					</div>
				</div>
			</footer>
		)
	}
}
