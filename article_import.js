async function loadArticles() {
    try {
        const response = await fetch(
            "https://dev.to/api/articles?username=shiro1307"
        );

        if (!response.ok)
            throw new Error("Failed to fetch articles.");

        const articles = await response.json();

        const list = document.getElementById("article_list");

        articles.forEach(article => {
            const li = document.createElement("li");

            li.innerHTML = `
                <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                    ${article.title}
                </a>

                <small>
                    ${article.readable_publish_date}
                    &bull;
                    ${article.reading_time_minutes} min read
                </small>
            `;

            list.appendChild(li);
        });

    } catch (err) {
        console.error(err);

        document.getElementById("article_list").innerHTML =
            "<li>Couldn't load articles.</li>";
    }
}

loadArticles();