import React, { Component } from 'react'
// import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
// import Testimonials from './components/Testimonials'
// import NotFound from './components/Error404'

import allSiteData from './json/allSiteData'
import personalData from './json/personalData'
import resumeData from './json/resumeData'
import skillsData from './json/skillsData'
import contactData from './json/contactData'
import projectData from './json/projectData'

class App extends Component {
	// <Testimonials jsonData={contactData} />
	render() {
		return (
			<div className='App'>
				<Header allSite={allSiteData} jsonData={personalData} />
				<About jsonData={personalData} />
				<Resume jsonData={resumeData} />
				<Skills jsonData={skillsData} />
				<Projects jsonData={projectData} />
				<ContactMe jsonData={contactData} />
				<Footer allSite={allSiteData} jsonData={personalData} />

				{/* <BrowserRouter basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path='/'>
							<Header allSite={allSiteData} jsonData={personalData} />
							<About jsonData={personalData} />
							<Resume jsonData={resumeData} />
							<Skills jsonData={skillsData} />
							<Projects jsonData={projectData} />
							<ContactMe jsonData={contactData} />
							<Footer jsonData={personalData} />
						</Route>
						<Route path='/resume'>
							<Resume jsonData={resumeData} />
						</Route>
						<Route path='/testimonials'>
							<Testimonials jsonData={contactData} />
						</Route>
						<Route path='*'>
							<NotFound jsonData={allSiteData} />
						</Route>
					</Switch>
				</BrowserRouter> */}
			</div>
		)
	}
}

export default App
