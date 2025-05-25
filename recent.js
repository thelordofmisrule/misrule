const recentPostsContainer = document.getElementById('recent-posts');
const articleListContainer = document.getElementById('article-list');

fetch('/articles/index.json')
  .then(response => response.json())
  .then(data => {
    // Fill leftbar list
    const articleLinks = data.map(article => 
      `<li><a href="/articles/${article.filename}">${article.title}</a></li>`
    ).join('');
    articleListContainer.innerHTML = articleLinks;

    // Show top 5 posts in center
    const articles = data.slice(0, 5);
    articles.forEach(article => {
      fetch(`/articles/${article.filename}`)
        .then(res => res.text())
        .then(html => {
          const div = document.createElement('div');
          div.classList.add('post-snippet');
          div.innerHTML = html;
          recentPostsContainer.appendChild(div);
        });
    });
  });
