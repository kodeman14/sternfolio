import React, { Component } from 'react'
export default class Resume extends Component {
	render() {
		let jsonData = this.props.jsonData
		return (
			<section id='skills'>
				<div className='row skill'>
					{/* <div className='three columns header-col'>
						<h1>
							<span>Skills</span>
						</h1>
					</div> */}

					<div className='six columns main-col'>
						<p>{jsonData.techSkills.desc}</p>

						<div className='bars'>
							<ul className='skills'>
								{jsonData.techSkills.list &&
									jsonData.techSkills.list.map((item) => {
										return (
											<li>
												{/* make width dynamic - todo ankit */}
												<span
													className={`bar-expand skill-length`}
													style={{
														width: `${item.percentage}%`,
														textAlign: 'right'
													}}>
													{item.percentage}%
												</span>
												<em>{item.skillName}</em>
											</li>
										)
									})}
							</ul>
						</div>
					</div>
					<div className='six columns side-col'>
						<p>{jsonData.softSkills.desc}</p>

						<div className='bars'>
							<ul className='skills'>
								{jsonData.softSkills.list &&
									jsonData.softSkills.list.map((item) => {
										return (
											<li>
												<span
													className={`bar-expand skill-length`}
													style={{
														width: `${item.percentage}%`,
														textAlign: 'right'
													}}>
													{item.percentage}%
												</span>
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
