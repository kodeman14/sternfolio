(this["webpackJsonpstern-folio"]=this["webpackJsonpstern-folio"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),c=t.n(s),r=(t(13),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),p=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.jsonData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show menu"},"Show menu"),l.a.createElement("a",{className:"mobile-btn",href:"/#",title:"Hide menu"},"Hide menu"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#skills"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("div",{className:"typewriter"},l.a.createElement("h2",null,l.a.createElement("span",{className:"rainbow"},"I'm a ",e.headerJob))),l.a.createElement("h3",{style:{color:"white"}},e.roleDescription),l.a.createElement("hr",null)),l.a.createElement("ul",{className:"social"},e.socialMedia&&e.socialMedia.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.jsonData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"img/profile-pic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutMe.description))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"}),l.a.createElement("div",{className:"nine columns"},l.a.createElement("h2",null,"Interests"),l.a.createElement("p",null,e.aboutMe.interests))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.jsonData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.uniName),l.a.createElement("p",{className:"info"},e.studyType,l.a.createElement("span",null,"\u2022")," ",e.programType,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.finishDate))))})))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.companyName),l.a.createElement("p",{className:"info"},e.jobTitle,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.startDate," - ",e.endDate))))})))))}}]),a}(n.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.jsonData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Work."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.myworks&&e.myworks.map((function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{alt:"img",src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h5",null,e.name)))))}))))))}}]),a}(n.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.jsonData;return l.a.createElement("section",{id:"skills"},l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"six columns main-col"},l.a.createElement("p",null,e.techSkills.desc),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.techSkills.list&&e.techSkills.list.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand skill-length",style:{width:"".concat(e.percentage,"%")}}),l.a.createElement("em",null,e.skillName))}))))),l.a.createElement("div",{className:"six columns side-col"},l.a.createElement("p",null,e.softSkills.desc),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.softSkills.list&&e.softSkills.list.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand",style:{width:"".concat(e.percentage,"%")}}),l.a.createElement("em",null,e.skillName))})))))))}}]),a}(n.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.jsonData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below!"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"LinkedIn: ",e.details.linkedinId),l.a.createElement("h4",null,"Email: ",e.details.emailAddress),l.a.createElement("h4",null,"Website: ",e.details.website)))),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("span",{className:"address"},l.a.createElement("h4",null,"Address: ",e.details.address)))))}}]),a}(n.Component),k=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.jsonData;return l.a.createElement("footer",{id:"footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"six columns"},l.a.createElement("ul",{className:"social-links"},e.socialMedia&&e.socialMedia.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{className:"six columns"},l.a.createElement("ul",{className:"social-links"},e.socialMedia&&e.socialMedia.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={fullName:"Ankit Curchorcar",headerJob:"Software Developer and Consultant",roleDescription:"at your service, how can I add more value to your day?",socialMedia:[{name:"linkedin",url:"http://linkedin.com/in/ankyc",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/kodeman14",className:"fa fa-github"},{name:"twitter",url:"http://twitter.com/ankyc14",className:"fa fa-twitter"},{name:"instagram",url:"http://instagram.com/ankyc14",className:"fa fa-instagram"}],aboutMe:{description:"Fully Stacked Developer emphasizing on good coding and design principles, with professional expertise in Web development and Agile process frameworks!",interests:"Soccer, Basketball, Squash, Netflix"}},b={education:[{uniName:"University of Waterloo",studyType:"Bachelor's",programType:"Mathematics",finishDate:"August 2020"},{uniName:"University of Toronto",studyType:"Certificate",programType:"Business Analysis",finishDate:"April 2018"},{uniName:"University of Toronto",studyType:"Certificate",programType:"Project Management",finishDate:"December 2017"},{uniName:"John Fraser Secondary School",studyType:"Secondary School",programType:"Computer/Science",finishDate:"June 2011"}],work:[{companyName:"Aquent Dev 6",jobTitle:"Software Consultant",startDate:"March 2019",endDate:"Present"},{companyName:"TD Bank",jobTitle:"Solutions Developer",startDate:"August 2018",endDate:"March 2019"},{companyName:"CIBC",jobTitle:"Full Stack Developer",startDate:"May 2016",endDate:"March 2018"}]},v={techSkills:{desc:"Technological",list:[{skillName:"HTML/CSS/jQuery",percentage:90},{skillName:"UIX Design",percentage:99},{skillName:"TypeScript",percentage:75},{skillName:"AngularJs",percentage:85},{skillName:"ReactJs",percentage:75},{skillName:"Databases",percentage:75},{skillName:"VueJS",percentage:50},{skillName:"JavaScript",percentage:75}]},softSkills:{desc:"Interpersonal",list:[{skillName:"Agile/Scrum",percentage:95},{skillName:"Leadership",percentage:90},{skillName:"Communication",percentage:90},{skillName:"Team Building",percentage:75},{skillName:"Problem Solving",percentage:85},{skillName:"Critical Thinking",percentage:80},{skillName:"Active listening",percentage:99},{skillName:"Work Ethic",percentage:100}]}},j={testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}],details:{linkedinId:"linkedin.com/in/ankyc",emailAddress:"ankit.curchorcar@gmail.com",address:"Toronto, Ontario, Canada",website:"https://about.me/ankyc"}},y={myworks:[{name:"Goosenstein",link:"https://github.com/kodeman14/Goosenstein",imgurl:"img/projects/goosenstein.png",specs:[400,200]},{name:"Dentek",link:"https://sites.google.com/view/mydentekoman/home",imgurl:"img/projects/dentek.jpg",specs:[200,200]},{name:"TD Alexa",link:"https://www.td.com/ca/en/personal-banking/how-to/td-skill-amazon-alexa/",imgurl:"img/projects/td-alexa.jpg",specs:[400,200]},{name:"New ideas!",link:"/#",imgurl:"img/projects/coming-soon.jpg",specs:[200,200]}]},w=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{jsonData:g}),l.a.createElement(d,{jsonData:g}),l.a.createElement(h,{jsonData:b}),l.a.createElement(E,{jsonData:y}),l.a.createElement(N,{jsonData:v}),l.a.createElement(f,{jsonData:j}),l.a.createElement(k,{jsonData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2265d22f.chunk.js.map