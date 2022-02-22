
$(document).ready(function() {
// Allows to retrieve information about GitHub repositories and to generate cards.
// https://docs.github.com/en/repositories

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.github.com/users/Ahmosys/repos",
        "method": "GET",
        "headers": {}
    };

    $.ajax(settings).done(function (response) {
        for(let i = 1; i < response.length; i++) {
            var repoFullName = response[i]["full_name"];
            var repoName = response[i]["name"];
            var repoDescription = response[i]["description"];
            var repoLanguage = response[i]["language"];
            var repoUrl = response[i]["html_url"];
            var repoPublishDate = response[i]["updated_at"];
            var repoDate = new Date(repoPublishDate).toDateString();
            var isFork = response[i]["fork"];

            if (repoLanguage == "Visual Basic .NET") {
                repoLanguage = "VB.NET";
            } else if (repoLanguage == "JavaScript") {
                repoLanguage = "JS"
            }

            if (!isFork) {
                $("#repository").append(
                    "<div class='col-sm-12 col-md-6 col-lg-4 mt-4 d-flex align-items-stretch'><div class='card border-info'><div class='card-body'><div class='d-flex justify-content-between mb-2'><h6 class='card-subtitle text-warning text-uppercase'><i data-eva='code-outline' data-eva-width='25px' data-eva-height='25px'></i>&nbsp;" + repoLanguage + "</h6><h6 class='card-subtitle text-warning'><i data-eva='calendar-outline' data-eva-width='25px' data-eva-height='25px'></i>&nbsp;" +  repoDate + "</h6></div><a href='" + repoUrl + "' target='_blank' rel='noreferrer'><h5 class='card-title text-white'>" + repoName + "</h5></a><p class='card-text mt-2'>" + repoDescription + "</p></div></div></div>"
                );
            }
        }
    });
});
