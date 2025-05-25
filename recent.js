const articleContainer = document.getElementById('recent-article');

fetch('/articles/index.json')
  .then(response => response.json())
  .then(data => {
    const latest = data[0];
    fetch(`/articles/${latest.filename}`)
      .then(res => res.text())
      .then(html => {
        articleContainer.innerHTML = html;
      });
  });
