// Search functionality for blog posts
function searchBlog() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let posts = document.getElementsByClassName('post');

    for (let i = 0; i < posts.length; i++) {
        let title = posts[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            posts[i].style.display = 'block';
        } else {
            posts[i].style.display = 'none';
        }
    }
}

// Filter functionality for categories
function filterCategory(category) {
    let posts = document.getElementsByClassName('post');

    for (let i = 0; i < posts.length; i++) {
        let postCategory = posts[i].getAttribute('data-category');
        if (category === 'all' || postCategory === category) {
            posts[i].style.display = 'block';
        } else {
            posts[i].style.display = 'none';
        }
    }
}
