
$(document).ready(function() {
// Allows to retrieve information about GitHub repositories and to generate cards.
// https://docs.github.com/en/repositories

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.github.com/users/Ahmosys/repos?type=owner",
        "method": "GET",
        "headers": {}
    };

    $.ajax(settings).done(function (response) {
        let j = 0;
        for(let i = 0; i < response.length; i++) {
            if (j <= 5) { 
                let repoName = response[i]["name"];
                let repoDescription = response[i]["description"];
                let repoLanguage = response[i]["language"];
                let repoUrl = response[i]["html_url"];
                let repoPublishDate = response[i]["updated_at"];
                let repoDate = new Date(repoPublishDate).toDateString();
                let isFork = response[i]["fork"];
    
                if (repoLanguage == "Visual Basic .NET") {
                    repoLanguage = "VB.NET";
                } else if (repoLanguage == "JavaScript") {
                    repoLanguage = "JS"
                }
    
                if (!isFork) {
                    $("#repository").append(
                        "<div class='col-sm-12 col-md-6 col-lg-4 mt-4 d-flex align-items-stretch'><div class='card border-info'><div class='card-body'><div class='d-flex justify-content-between mb-2'><h6 class='card-subtitle text-warning text-uppercase'>" + repoLanguage + "</h6><h6 class='card-subtitle text-warning'>" +  repoDate + "</h6></div><a href='" + repoUrl + "' target='_blank' rel='noreferrer'><h5 class='card-title text-white'>" + repoName + "</h5></a><p class='card-text mt-2'>" + repoDescription + "</p></div></div></div>"
                    );
                    j+=1;
                }
            } else {
                break;
            }
        }
    });
});
