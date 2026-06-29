const projects = [
    {
        name: "AceMyInterview",
        description: "AI-powered mock interview platform with speech input, automated evaluation, and multi-tenant architecture.",
        path: "https://github.com/shiro1307/acemyinterview",
        preview: "https://github.com/user-attachments/assets/2ed77791-7d9b-4190-a7a9-df6aabb7778d",
        tags: ["AI", "SaaS", "Full-Stack"]
    },
    {
        name: "Cloth Physics Engine",
        description: "Real-time cloth simulation using Verlet integration, supporting 3200+ particles and 7200+ constraints at 820+ FPS.",
        path: "https://github.com/shiro1307/ClothSim2-Verlet-Optimized",
        preview: "https://github.com/user-attachments/assets/db035d9c-cc05-4f8b-a781-d9dbc72daef0",
        tags: ["Physics", "Simulation", "Performance"]
    },
    {
        name: "Raycasting Renderer",
        description: "Wolfenstein-style 2.5D graphics engine built with real-time raycasting and custom vector mathematics.",
        path: "https://github.com/shiro1307/raycast_wolfenstein_renderer",
        preview: "https://github.com/user-attachments/assets/cd762768-0299-4181-8c92-6f0553fbd750",
        tags: ["Graphics", "Rendering", "C++"]
    },
    {
        name: "EchoDeck",
        description: "Collaborative flashcard platform that converts PDFs into study decks using AI-powered content extraction.",
        path: "https://github.com/shiro1307/EchoDeck-TechCatalyst-hackathon",
        preview: "https://github.com/user-attachments/assets/a7caa4e1-e5ff-40ff-8ebe-78702576cfa9",
        tags: ["AI", "Education", "Web"]
    }
];

function loadProjects() {

    projects.forEach(project => {

        project_list.innerHTML += `
            <li>

                <img
                    src="${project.preview}"
                    loading="lazy"
                    alt="${project.name}"
                >

                <span>

                    <a href="${project.path}">
                        ${project.name}
                    </a>

                    <i>${project.description}</i>

                    <div class="tags">
                        ${project.tags.map(tag =>
            `<span class="tag">${tag}</span>`
        ).join("")}
                    </div>

                </span>

            </li>
        `;

    });

}

loadProjects()