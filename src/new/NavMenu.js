import React, { Component } from 'react'
export default class Porfolio extends Component {
	render() {
		let allSite = this.props.allSite
		return (
			<ul id='nav' className='nav'>
				{allSite.navmenu &&
					allSite.navmenu.map((item) => {
						return (
							// <li className='current'>
							<li>
								<a className='smoothscroll' href={item.href}>
									{item.item}
								</a>
							</li>
							// <li>
							// 	<a className='smoothscroll' href='#about'>
							// 		About
							// 	</a>
							// </li>
						)
					})}
			</ul>
		)
	}
}
