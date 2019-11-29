import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Testimonials from './components/Testimonials'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
// import SplashPage from './login/SplashPage.jsx'
import NotFound from './new/Error404'

import personalData from './json/personalData'
import resumeData from './json/resumeData'
import skillsData from './json/skillsData'
import contactData from './json/contactData'
import projectData from './json/projectData'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/'>
							<Header jsonData={personalData} />
							<About jsonData={personalData} />
							<Resume jsonData={resumeData} />
							<Projects jsonData={projectData} />
							<Skills jsonData={skillsData} />
							{/* <Testimonials jsonData={contactData} /> */}
							<ContactMe jsonData={contactData} />
							<Footer jsonData={personalData} />
						</Route>
						{/* <Route path='/resume'>
							<Resume jsonData={resumeData} />
						</Route>
						<Route path='/testimonials'>
							<Testimonials jsonData={contactData} />
						</Route> */}
						<Route path='*'>
							<NotFound jsonData={personalData} />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}

export default App
