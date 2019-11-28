import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
// import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
// import Testimonials from './components/Testimonials'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import resumeData from './json/resumeData'
import skillsData from './json/skillsData'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
				{/* <Resume resumeData={resumeData} /> */}
				<Portfolio resumeData={resumeData} />
				<Skills skillsData={skillsData} />
				{/* <Testimonials resumeData={resumeData} /> */}
				<ContactMe resumeData={resumeData} />
				<Footer resumeData={resumeData} />
			</div>
		)
	}
}

export default App
