document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const loader = document.getElementById('loader');

    // Function to simulate loading new posts
    const loadMorePosts = () => {
        for (let i = 0; i < 5; i++) {
            const post = document.createElement('div');
            post.className = 'post';
            post.textContent = `Post ${postsContainer.children.length + 1}`;
            postsContainer.appendChild(post);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadMorePosts();
            }
        });
    }, {
        rootMargin: '100px',
        threshold: 0.5
    });

    observer.observe(loader);

    // Initial load
    loadMorePosts();
});
