(this["webpackJsonpstern-folio"]=this["webpackJsonpstern-folio"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),s=(t(13),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline",style:{color:"red",fontFamily:"sans-serif "}},e.name),l.a.createElement("h2",{style:{color:"yellow",fontFamily:"sans-serif "}},"I am a ",e.role),l.a.createElement("h3",null,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"img/profile-pic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutMe))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.universityName),l.a.createElement("p",{className:"info"},e.studyType,l.a.createElement("span",null,"\u2022")," ",e.programType,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.monthOfPassing," ",e.yearOfPassing))))})))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.companyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.monthOfLeaving," ",e.yearOfLeaving))))})))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("h2",null,"Contact Details")),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"LinkedIn: ",e.contact.linkedinId),l.a.createElement("h4",null,"Email: ",e.contact.emailAddress)))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("p",{className:"address"},l.a.createElement("h4",null,"Address: ",e.contact.address),l.a.createElement("h4",null,"Phone: ",e.contact.phone),l.a.createElement("h4",null,"Website: ",e.contact.website)))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialMedia&&e.socialMedia.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={name:"Ankit Curchorcar",role:"Software Developer and Consultant",roleDescription:"",socialMedia:[{name:"linkedin",url:"linkedin.com/in/ankyc",className:"fa fa-linkedin"},{name:"github",url:"github.com/kodeman14",className:"fa fa-github"},{name:"twitter",url:"http://twitter.com/ankyc14",className:"fa fa-twitter"}],aboutMe:"Fully Stacked Developer emphasizing on good coding and design principles, with professional expertise in Web development and Agile process frameworks!",contact:{linkedinId:"linkedin.com/in/ankyc",emailAddress:"ankit.curchorcar@gmail.com",phone:"(+1) 647 465-4555",address:"Toronto, Ontario, Canada",website:"about.me/ankyc"},education:[{universityName:"University of Waterloo",studyType:"Bachelor",programType:"Mathematics",monthOfPassing:"August",yearOfPassing:"2020"},{universityName:"University of Toronto",studyType:"Certificate",programType:"PM / BA",monthOfPassing:"December",yearOfPassing:"2017"}],work:[{companyName:"Some Company",specialization:"Some specialization",monthOfLeaving:"Jan",yearOfLeaving:"2018"}],skillsDescription:"Fully Stacked",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"img/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"img/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"img/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"img/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:v}),l.a.createElement(d,{resumeData:v}),l.a.createElement(h,{resumeData:v}),l.a.createElement(E,{resumeData:v}),l.a.createElement(f,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.85abc33e.chunk.js.map