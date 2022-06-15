$(document).ready(function() {   

    const $container = $("#categorie-content");
    const watcher = document.querySelector("#intersection-watcher");

    $.getJSON("../assets/links.json", function(data) {
        $.each(data.categories, function(key, val) {
            $("#categorie-buttons").append(`<li><a class='dropdown-item' href='javascript:void(0)' data-filter=".${key}">${val}</a></li>`); 
        });
        $.each(data.elements, function(key, val) {
            $("#categorie-content").append(`
                <div class="col-sm-12 col-md-6 col-lg-4 content-item my-2 ${val.categorie}">
                    <div class="card border-info">
                        <div class="card-body">
                            <a href='${val.link}' target="_blank" rel="noreferrer"><h5 class="card-title text-white font-weight-bold">${val.name}</h5></a>
                            <p class="card-text mt-2">${val.description}</p>
                            <p class="badge badge-pill badge-secondary text-muted ">#${data.categories[val.categorie]}</p>
                        </div>
                    </div>
                </div>`
            );
        });
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
        intersectionObserver.observe(watcher);
        $container.isotope({ filter: "*" });
    });

    // Infinite scroll for the content
    const handleIntersect = entries => {
        if (entries[0].isIntersecting) {
            
            var $items = $(
            `<div class="col-sm-12 col-md-6 col-lg-4 content-item my-2 devops">
                <div class="card border-info">
                    <div class="card-body">
                        <a href='#' target="_blank" rel="noreferrer"><h5 class="card-title text-white font-weight-bold">Lorem Ipsum</h5></a>
                        <p class="card-text mt-2">Lorem Ipsum Nkad ndki</p>
                        <p class="badge badge-pill badge-secondary text-muted ">#Lorem</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 content-item my-2 devops">
                <div class="card border-info">
                    <div class="card-body">
                        <a href='#' target="_blank" rel="noreferrer"><h5 class="card-title text-white font-weight-bold">Lorem Ipsum</h5></a>
                        <p class="card-text mt-2">Lorem Ipsum Nkad ndki</p>
                        <p class="badge badge-pill badge-secondary text-muted ">#Lorem</p>
                    </div>
                </div>
            </div>`
            );
            $container.append($items).isotope('appended', $items);
        }
    }
    
    // Instantiates the intersection observer
    const intersectionObserver = new IntersectionObserver(handleIntersect);

});



