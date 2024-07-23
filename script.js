document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const allProjects = document.querySelectorAll('.project');
    const projectTabs = document.querySelectorAll('.project-tabs input[type="radio"]');

    projectTabs.forEach(tab => {
        tab.addEventListener('change', function() {
            const selectedCategory = this.id;

            allProjects.forEach(project => {
                if (selectedCategory === 'all' || project.classList.contains(selectedCategory)) {
                    project.classList.add('show');
                } else {
                    project.classList.remove('show');
                }
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !icon.contains(e.target)) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
