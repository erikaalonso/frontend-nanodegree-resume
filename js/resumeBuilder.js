
//JSON Javascript Object Notation
// set name/value pairs of the object 'bio'
var bio = {
	"name" : "Erika Alonso",
	"role" : "Graphic and Web Designer",
	"contacts" : [ {
		"mobile" : "(832)629-0210",
		"email" : "erika@wonderkinddesign.com",
		"github" : "erikaalonso",
		"twitter" : "@marlaburse",
		"behance" : "erikaalonso"
	} ],
	"location" : "Houston, Texas",
	"welcomeMessage" : "What Don't I Do?",
	"skills" : ["Graphic Design","HTML","CSS","JavaScript"],
	"biopic" : "images/erika.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "University of Houston",
			"location" : "Houston, Texas",
			"degree" : "BBA",
			"major" : "Marketing",
			"minor" : "International Studies",
			"dates" : 2005,
			"url" : "http://www.uh.edu/"
		}
	],
	"onlineClasses" : [
		{
			"title" : "Intro to JavaScript",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "http://udacity.com/"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Animal Charity Evaluators",
			"title" : "Communications Manager",
			"location" : "Houston, Texas",
			"dates" : "August 2014 - Present",
			"description" : "Manage all aspects of communications for nonprofit including web design and maintenance, branding development, fundraising campaigns, social media, and printed materials"
		},
		{
			"employer" : "Wonderkind Design",
			"title" : "Freelance Designer",
			"location" : "Houston, Texas",
			"dates" : "January 2015 - Present",
			"description" : "Freelance graphic and web design as well as marketing consultation work"
		},
		{
			"employer" : "Macy's",
			"title" : "Visual Manager",
			"location" : "Houston, Texas",
			"dates" : "September 2010 - June 2014",
			"description" : "Create compelling visual displays to enhance shopping environment"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Guide to Giving",
			"dates" : "April 2015",
			"description" : "Print Design",
			"images" : ["images/booklet_angled.png"]
		},
		{
			"title" : "Eric Klinenberg Lecture",
			"dates" : "March 2015",
			"description" : "Print Design",
			"images" : ["images/klinenberg-poster.png"]
		}
	]
}


/******************************************
	DISPLAY FUNCTIONS
******************************************/

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%' , bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%' , bio.role);
	var formattedTitle = formattedName + formattedRole;

	var formattedImage = HTMLbioPic.replace('%data%' , bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace('%data%' , bio.welcomeMessage);

	var formattedSkills = HTMLskills.replace('%data%' , bio.skills);
	var formattedLocation = HTMLlocation.replace('%data%' , bio.location);

	$("#header").prepend(formattedTitle).append(formattedImage, formattedMessage);
	$("#header").append(HTMLskillsStart);

	for (contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%" , bio.contacts[contact].email);
		var formattedTwitter = HTMLtwitter.replace("%data%" , bio.contacts[contact].twitter);
		var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts[contact].github);
		var formattedBehance = HTMLcontactGeneric.replace("%contact%", "behance").replace('%data%',bio.contacts[contact].behance);
		var formattedContacts = formattedMobile + formattedEmail + formattedTwitter + formattedGithub;
		$("#topContacts").append(formattedContacts);
		$("#footerContacts").append(formattedContacts);
	}

	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%" , bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}


// displayWork
work.display = function() {
//start for-in loop
// select jobs array in work object
	for (job in work.jobs) {
	//append HTMLworkStart(in helper.js) to div#workExperience in index.html
		$("#workExperience").append(HTMLworkStart);
	//define formatted objects replacing placeholder text from helper.js
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
//end of for-in loop
};
//end of displayWork function

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage).find("img").addClass("thumbnail");
			}
		}
	}
}

education.display = function() {

	if(education.schools.length > 0) {

		for(school in education.schools) {


		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".education-entry:last").append(formattedDates +formattedLocation + formattedMajor);
		$(".education-entry:last").prepend(formattedName + formattedDegree).find("a").attr("href", education.schools[school].url);
	}
}

	if(education.onlineClasses.length > 0) {

		$("#education").append(HTMLonlineClasses);

		for(course in education.onlineClasses) {

		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineClasses[course].date);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
		var formattedOnlineClass = formattedTitle + formattedSchool + formattedDates + formattedURL;
		$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedURL);
	}
}
};

//Call Functions!!!
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// Internationalize Name
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);

// Collect Click Locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});