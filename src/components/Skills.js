import React, { Component } from 'react'
export default class Resume extends Component {
	render() {
		let resumeData = this.props.resumeData
		return (
			<section id='skills'>
				<div className='row skill'>
					<div className='three columns header-col'>
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						<p>{resumeData.skillsDescription}</p>

						<div className='bars'>
							<ul className='skills'>
								{resumeData.skills &&
									resumeData.skills.map((item) => {
										return (
											<li>
												<span
													className={`bar-expand ${item.skillName.toLowerCase()}`}></span>
												<em>{item.skillName}</em>
											</li>
										)
									})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
