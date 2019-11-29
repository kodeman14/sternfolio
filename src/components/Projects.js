import React, { Component } from 'react'
export default class Porfolio extends Component {
	render() {
		let jsonData = this.props.jsonData
		return (
			<section id='portfolio'>
				<div className='row'>
					<div className='twelve columns collapsed'>
						<h1>Check Out Some of My Work.</h1>
						<div
							id='portfolio-wrapper'
							className='bgrid-quarters s-bgrid-thirds cf'>
							{jsonData.myworks &&
								jsonData.myworks.map((item) => {
									return (
										// {/* <a href='#modal-01'>
										// 	<div className='overlay'>
										// 	</div>
										// </a> */}
										<div className='columns portfolio-item'>
											<div className='item-wrap'>
												<img
													alt='img'
													src={`${item.imgUrl}`}
													className='item-img'
												/>
												<div className='portfolio-item-meta'>
													<a
														href={item.link}
														target='_blank'
														rel='noopener noreferrer'>
														<h5>{item.name}</h5>
													</a>
												</div>
											</div>
										</div>
									)
								})}
						</div>
					</div>
				</div>
			</section>
		)
	}
}
