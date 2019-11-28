import React, { Component } from 'react'
export default class ContactUs extends Component {
	render() {
		let resumeData = this.props.resumeData
		return (
			<section id='contact'>
				<div className='row section-head'>
					<div className='ten columns'>
						<h2>Contact Details</h2>
						<p className='lead'>
							Feel free to contact me for any work or suggestions below!
						</p>
					</div>
				</div>
				<div className='row'>
					<aside className='eigth columns footer-widgets'>
						<div className='widget'>
							<h4>LinkedIn: {resumeData.contact.linkedinId}</h4>
							<h4>Email: {resumeData.contact.emailAddress}</h4>
							<h4>Website: {resumeData.contact.website}</h4>
						</div>
					</aside>
				</div>
				<br></br>
				<div className='row'>
					<div className='columns contact-details'>
						<p className='address'>
							<h4>Address: {resumeData.contact.address}</h4>
							{/* <h4>Phone: {resumeData.contact.phone || 'N/A'}</h4> */}
						</p>
					</div>
				</div>
			</section>
		)
	}
}
