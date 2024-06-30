console.log('its working');
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css';
    } else if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    } else if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    } else if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }
    localStorage.setItem('theme', mode);
}

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { "title": "TransVox Transcription System" },
        { "title": "Movie Recommendation System" },
        { "title": "Desktop Voice Assistant" },
        { "title": "Rock Paper Scissors" },
        { "title": "Tic Tac Toe Game" },
        { "title": "Titanic Survival Prediction" }
    ];

    const projectList = document.getElementById('projects-list');
    if (projectList) {
        projects.forEach((project, index) => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `post.html?project=${index}`;
            link.textContent = project.title;
            listItem.appendChild(link);
            projectList.appendChild(listItem);
        });
    } else {
        console.error('Element with id "projects-list" not found.');
    }
});

