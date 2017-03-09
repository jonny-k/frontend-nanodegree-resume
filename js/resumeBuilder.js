
var bio = {
    "name" : "Jon Kearney",
    "role": "Engineer",
    "contacts" : {
        "mobile":"0797666666",
        "email": "666@gmail.com",
        "github": "jonny-k",
        "twitter":"ilovecfc",
        "location":"Windsor, UK"
    },
    "biopic": "https://dummyimage.com/200x200/000/fff&text=JK",
    "welcomeMessage": "Hi there",
    "skills": [ "developer",
                "device specialist",
                "requirements management"]

};

var work = {
    "jobs":
    [
        {
            "employer" : "Telefonica",
            "title" : "Device Engineer",
            "location" : "Telefonica UK, Slough",
            "dates" : "2004-2008",
            "description" : "Device infrastructure manager"
        },
        {
            "employer" : "Aeroflex",
            "title" : "Software Engineer",
            "location" : "360 Bath Road, Slough",
            "dates" : "1996-2004",
            "description" : "Mobile phone emulation software"
        }
    ]
};

var projects = {
    "projects":
    [
        {
            "title" : "Spec Forum",
            "dates" : "2012-2016",
            "description" : "Lead of the Global Spec Forum",
            "images" :
                [
                "https://dummyimage.com/200x200/000/fff&text=A"
                ]
        },
        {
            "title" : "Common Testing Steering Group",
            "dates" : "2012-2016",
            "description" : "Member  of the Global Common Testing steering group",
            "images" :
                [
                "https://dummyimage.com/200x200/000/fff&text=1",
                "https://dummyimage.com/200x200/000/fff&text=2"
                ]
        }
    ]
};

var education = {
    "schools":[
    {
        "name" : "Brunel University",
        "location" : "Brunel University, Uxbridge, London",
        "dates" : "2012-2016",
        "url" : "http://www.brunel.ac.uk/",
        "degree": "Microelectronics"
    }
    ]
}

bio.display = function()
{
    $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role))
                .prepend(HTMLheaderName.replace("%data%",bio.name));

    $("#topContacts")   .prepend(HTMLbioPic.replace("%data%",bio.biopic))
                        .prepend(HTMLlocation.replace("%data%",bio.contacts.location))
                        .prepend(HTMLgithub.replace("%data%",bio.contacts.github))
                        .prepend(HTMLtwitter.replace("%data%",bio.contacts.twitter))
                        .prepend(HTMLemail.replace("%data%",bio.contacts.email))
                        .prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));

   // $("#skills").append(HTMLbioPic.replace("%data%",bio.biopic));
    $("#topContacts")   .append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

    if (bio.skills.length != 0)
    {
        $("#topContacts").append(HTMLskillsStart);
        for (var skillIndex = bio.skills.length - 1; skillIndex >= 0; skillIndex--)
        {
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[bio.skills.length - skillIndex]));
        }
    }
}

education.display = function()
{
    if (education.schools.length != 0)
    {
            console.log("Eductional");
        $("#education").append(HTMLschoolStart);
        for (var school = 0; school < education.schools.length; school++)
        {
            console.log(education.schools[school].name);
            $(".education-entry:last").append(HTMLschoolName.replace("#",education.schools[school].url).replace("%data%",education.schools[school].name));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
        }
    }
}

work.display = function()
{

    for (position in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[position].employer))
                    .append(HTMLworkTitle.replace("%data%",work.jobs[position].title))
                    .append(HTMLworkDates.replace("%data%",work.jobs[position].dates))
                    .append(HTMLworkLocation.replace("%data%",work.jobs[position].location))
                    .append(HTMLworkDescription.replace("%data%",work.jobs[position].description));
    }
}

projects.display = function(){

    for (var i = 0; i <  projects.projects.length; i++)
    {
        var theProject = projects.projects[i];

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",theProject.title))
                                .append(HTMLprojectDates.replace("%data%",theProject.dates))
                                .append(HTMLprojectDescription.replace("%data%",theProject.description));

        for (var j = 0; j < theProject.images.length; j++)
        {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%",theProject.images[j]));
        }
    }
}


bio.display();
work.display();
projects.display();
education.display();

//$("#main").append(internationalizeButton);

function inName(theName){
    var names = theName.split(" ");
    var internationalizedName = " ";

    for (var i = 0; i < names.length; i++) {
        if (i === names.length - 1)
        {
            internationalizedName += names[i].toUpperCase();
        }
        else
        {
            internationalizedName += names[i].substring(0,1).toUpperCase() + names[i].substring(1).toLowerCase() + " ";
        }
    }
    return internationalizedName.trim();
}

$("#mapDiv").append(googleMap);