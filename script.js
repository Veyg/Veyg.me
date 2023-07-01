// Fetch GitHub repositories and dynamically add them to the project section
const projectList = document.getElementById("project-list");

fetch("https://api.github.com/users/Veyg/repos")
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
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
        });
    });
