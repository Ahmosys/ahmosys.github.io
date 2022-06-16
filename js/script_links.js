$(document).ready(function() {   

    const $container = $("#categorie-content");
    const watcher = document.querySelector("#intersection-watcher");
    var $myJson;
    $.getJSON("../assets/links.json", function(data) {
        $myJson = data;
    });
    var counter = 10;

    $.getJSON("../assets/links.json", function(data) {
        $.each(data.categories, function(key, val) {
            $("#categorie-buttons").append(`<li><a class='dropdown-item' href='javascript:void(0)' data-filter=".${key}">${val}</a></li>`); 
        });
        // Show 10 first elements
        for (let i = 0; i < 10; i++) {
            $("#categorie-content").append(`
            <div class="col-sm-12 col-md-6 col-lg-4 content-item my-2 ${data.elements[i].categorie}">
                <div class="card border-info">
                    <div class="card-body">
                        <a href='${data.elements[i].link}' target="_blank" rel="noreferrer"><h5 class="card-title text-white font-weight-bold">${data.elements[i].name}</h5></a>
                        <p class="card-text mt-2">${data.elements[i].description}</p>
                        <p class="badge badge-pill badge-secondary text-muted ">#${data.categories[data.elements[i].categorie]}</p>
                    </div>
                </div>
            </div>`
            );
        }
    }).done(function() {
        $container.isotope({});
        // Asynchronously observe changes in the intersection of a target element
        intersectionObserver.observe(watcher);
    });

    // Event click on the dropdown element
    $(".dropdown").on("click", "a", function() {
        intersectionObserver.unobserve(watcher);
        var $filterValue = $(this).attr("data-filter");
        $container.isotope({ filter: $filterValue });
    });

    // Event click on the reset button
    $("#reset-button").on("click", function() {
        if (counter < $myJson.elements.length) {
            intersectionObserver.observe(watcher);
        }
        $container.isotope({ filter: "*" });
    });

    // Infinite scroll for the content
    const handleIntersect = entries => {
        if (entries[0].isIntersecting) {
            console.log(counter, $myJson.elements.length);
            // Check if the counter is less than the length of the elements
            if (counter+10 < $myJson.elements.length) {
                // Add 10 elements to the content
                var elements = getContent($myJson, 10);
                $container.append(elements).isotope('appended',  elements);
            } else if (counter == $myJson.elements.length){
                // If the counter is equal to the length of the elements, stop the infinite scroll
                intersectionObserver.unobserve(watcher);
            } else {
                // Can't add 10 elements, so add the remaining elements
                var elements = getContent($myJson, $myJson.elements.length-counter);
                $container.append(elements).isotope('appended',  elements);
                counter+=$myJson.elements.length-counter;
            }
        }
    }
    
    // Instantiates the intersection observer
    const intersectionObserver = new IntersectionObserver(handleIntersect);

    function getContent(data, number) {
        var elements = [];
        for (let i = counter; i < counter+number; i++) {
            var $element = $(`
            <div class="col-sm-12 col-md-6 col-lg-4 content-item my-2 ${data.elements[i].categorie}">
                <div class="card border-info">
                    <div class="card-body">
                        <a href='${data.elements[i].link}' target="_blank" rel="noreferrer"><h5 class="card-title text-white font-weight-bold">${data.elements[i].name}</h5></a>
                        <p class="card-text mt-2">${data.elements[i].description}</p>
                        <p class="badge badge-pill badge-secondary text-muted ">#${data.categories[data.elements[i].categorie]}</p>
                    </div>
                </div>
            </div>`
            );
            elements.push($element[0]);
        }
        counter += number;
        return elements;
    }

});



