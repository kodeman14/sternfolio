import React, { Component } from 'react'
export default class Resume extends Component {
	render() {
		let resumeData = this.props.resumeData
		return (
			<section id='resume'>
				<div className='row education'>
					<div className='three columns header-col'>
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						{resumeData.education &&
							resumeData.education.map((item) => {
								return (
									<div className='row item'>
										<div className='twelve columns'>
											<h3>{item.uniName}</h3>
											<p className='info'>
												{item.studyType}
												<span>&bull;</span> {item.programType}
												<span>&bull;</span>{' '}
												<em className='date'>{item.finishDate}</em>
											</p>
											{/*<p>{item.achievements}</p>*/}
										</div>
									</div>
								)
							})}
					</div>
				</div>

				<div className='row work'>
					<div className='three columns header-col'>
						<h1>
							<span>Work</span>
						</h1>
					</div>

					<div className='nine columns main-col'>
						{resumeData.work &&
							resumeData.work.map((item) => {
								return (
									<div className='row item'>
										<div className='twelve columns'>
											<h3>{item.companyName}</h3>
											<p className='info'>
												{item.jobTitle}
												<span>&bull;</span>{' '}
												<em className='date'>
													{item.startDate} - {item.endDate}
												</em>
											</p>
											{/*<p>{item.achievements}</p>*/}
										</div>
									</div>
								)
							})}
					</div>
				</div>
			</section>
		)
	}
}
