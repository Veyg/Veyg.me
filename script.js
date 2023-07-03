// Fetch GitHub repositories and dynamically add them to the project section
const projectList = document.getElementById("project-list");

fetch("https://api.github.com/users/Veyg/repos")
    .then(response => response.json())
    .then(data => {
        data.forEach((repo, index) => { // Add an index parameter
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");

            const projectName = document.createElement("h3");
            projectName.textContent = repo.name;

            const projectDescription = document.createElement("p");
            projectDescription.textContent = repo.description;

            const projectLink = document.createElement("a");
            projectLink.textContent = "View on GitHub";
            projectLink.href = repo.html_url;
            projectLink.target = "_blank";

            projectItem.appendChild(projectName);
            projectItem.appendChild(projectDescription);
            projectItem.appendChild(projectLink);

            projectList.appendChild(projectItem);

            // Add animation class after a delay
            setTimeout(() => {
                projectItem.classList.add("animate");
            }, index * 100); // Delay each item by 100 milliseconds
        });
    });

// Animate On Scroll initialisation
AOS.init();

// Smooth Scrolling
$('.smoothScroll').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
});

// Back to top button
$('#back-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
