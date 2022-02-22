$(document).ready(function() {
    
    // Initialize a new instance of the typed object
    var typedEn = new Typed("#typedEn", {
        strings: ["Student in IT development", "<b>Application</b> Development", "<b>Web</b> Development", "<b>Backend</b> development"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 1000,
        showCursor: true
    });
    
    // Initialize a new instance of the typed object
    var typedFr = new Typed("#typedFr", {
      strings: ["Étudiant en développement IT", "Développement d'<b>Application</b>", "Développement <b>Web</b>", "Développement <b>Backend</b>"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 1000,
      showCursor: true
    });

    // Replaces all elements that have a data-eva attribute with SVG markup
    // https://github.com/akveo/eva-icons
    eva.replace({
        fill: '#A3BE8C',
        width: 30,
        height: 30,
        animation: {
            type: "shake",
            hover: true,
            infinite: false,
        }
    });
    
    // Retrieves projects via the GitHub API
    getRepositoryGithub();

    

    // Processing triggered by the click of the submit button on the form
    // https://smtpjs.com/
    $("btnSubmit").click(function() {
        // Cancel submit
        e.preventDefault();
        // Get form data
        var form = $(this);
        var name = $("inputName").val();
        var email = $("inputEmail").val();
        var subject = $("inputSubject").val();
        var message = $("textAreaMessage").val();
        // Function send email
        email.send({
            SecureToken: "b9f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
            To: "ahmosyspro@protonmail.com",

        });
    });

    // Processing triggered on scroll
    $(window).scroll(function() {
        alert("OK");
        if ($(this).scrollTop() > 1500 && $(this).scrollTop() < 4650) {
            // Displays the button to return to the top of the page
            $('#toTopBtn').fadeIn();
        } else {
            // Hide the button to return to the top of the page
            $('#toTopBtn').fadeOut();
        }
    });
    
    // Processing triggered by the click of the button to return to the top of the page
    $('#toTopBtn').click(function() {
        // Animates the scroll effect
        $("html, body").animate({
            scrollTop: 0
        }, 350);
    return false;
    });

});

function getRepositoryGithub () {
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
                    "<div class='col-sm-12 col-md-6 col-lg-4 mt-4 d-flex align-items-stretch'><div class='card border-info'><div class='card-body'><div class='d-flex justify-content-between mb-2'><h6 class='card-subtitle text-warning text-uppercase'><i data-eva='code-outline' data-eva-width='25px' data-eva-height='25px'></i>&nbsp;" + repoLanguage + "</h6><h6 class='card-subtitle text-warning'><i data-eva='calendar-outline' data-eva-width='25px' data-eva-height='25px'></i>&nbsp;" +  repoDate + "</h6></div><a href='" + repoUrl + "' target='_blank'><h5 class='card-title text-white'>" + repoName + "</h5></a><p class='card-text mt-2'>" + repoDescription + "</p></div></div></div>"
                );
            }
        }
    });
}