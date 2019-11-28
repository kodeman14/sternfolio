import React, { Component } from 'react'
export default class Resume extends Component {
	render() {
		let skillsData = this.props.skillsData
		return (
			<section id='skills'>
				<div className='row skill'>
					{/* <div className='three columns header-col'>
						<h1>
							<span>Skills</span>
						</h1>
					</div> */}

					<div className='six columns main-col'>
						<p>{skillsData.techSkills.desc}</p>

						<div className='bars'>
							<ul className='skills'>
								{skillsData.techSkills.list &&
									skillsData.techSkills.list.map((item) => {
										return (
											<li>
												<span
													className={`bar-expand skill-length`}
													style={{ width: `${item.percentage}%` }}></span>
												<em>{item.skillName}</em>
											</li>
										)
									})}
							</ul>
						</div>
					</div>
					<div className='six columns side-col'>
						<p>{skillsData.softSkills.desc}</p>

						<div className='bars'>
							<ul className='skills'>
								{skillsData.softSkills.list &&
									skillsData.softSkills.list.map((item) => {
										return (
											<li>
												<span
													className={`bar-expand`}
													style={{ width: `${item.percentage}%` }}></span>
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
