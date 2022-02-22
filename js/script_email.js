$(document).ready(function () {
    // Processing triggered by the click of the submit button on the form
    // https://www.emailjs.com/
    $("#btnSubmit").click(function (event) {
        // Cancel submit
        event.preventDefault();
        // Disable btnSubmit
        $("#btnSubmit").prop("disabled", true);
        $("#btnSubmit").addClass("disabled");
        // Display loader
        $("#inputLoader").fadeIn(200);
        // Get form data
        var name = $("#inputName").val();
        var email = $("#inputEmail").val();
        var subject = $("#inputSubject").val();
        var message = $("#textAreaMessage").val();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        // Checks that all inputs are completed
        if (name != "" && email != "" && subject != "" && message != "") {
            // Function send email
            emailjs.send("service_jw4faab", "template_a4ztb85", {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
            }).then(function () {
                // Send a notification    
                Toast.fire({
                        icon: 'success',
                        title: "Your message has successfully been sent."
                    }),
                    // Remove was-validated class to the form (bootstrap validation)
                    $("#contactForm").removeClass("was-validated");
                    // Reactivate btnSubmit
                    $("#btnSubmit").prop("disabled", false);
                    $("#btnSubmit").removeClass("disabled");
                    // Hide  loader
                    $("#inputLoader").hide();
                    // Empty all the fields of the form
                    $("#contactForm").trigger("reset");
                
            }, function (error) {
                // Send a notification    
                Toast.fire({
                        icon: 'error',
                        title: "Your message has not been sent.<br/>Error: " + error,
                    }),
                    // Remove was-validated class to the form (bootstrap validation)
                    $("#contactForm").removeClass("was-validated");
                    // Reactivate btnSubmit
                    $("#btnSubmit").prop("disabled", false);
                    $("#btnSubmit").removeClass("disabled");
                    // Hide  loader
                    $("#inputLoader").hide();
                    // Empty all the fields of the form
                    $("#contactForm").trigger("reset");
            });
        } else {
            // Send a notification    
            Toast.fire({
                    icon: 'error',
                    title: "Please fill all the fields.",
                }),
                // Add was-validated class to the form (bootstrap validation)
                $("#contactForm").addClass("was-validated");
                // Reactivate btnSubmit
                $("#btnSubmit").prop("disabled", false);
                $("#btnSubmit").removeClass("disabled");
                // Hide  loader
                $("#inputLoader").hide();
        };
    });

});