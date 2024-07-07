const output = document.querySelector('#output');
const getPostsBtn = document.querySelector('#get-posts-btn');
const addPostForm = document.querySelector('#add-post-form');


// Get and show posts
async function showPosts() {
  try {
    const res = await fetch('http://localhost:8000/api/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await res.json();
    output.innerHTML = '';
    posts.forEach((post) => {
      const postEl = document.createElement('div');
      postEl.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      `;
      output.appendChild(postEl);
    });
  } catch (err) {
    console.error('Error fetching posts', err);
  }
}

// Submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get('title');
  const content = formData.get('content');

  try {
    const res = await fetch('http://localhost:8000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });

    if (!res.ok) {
      throw new Error('Failed to create post');
    }

    const newPost = await res.json();
    const postEl = document.createElement('div');
    postEl.innerHTML = `
      <h3>${newPost.title}</h3>
      <p>${newPost.content}</p>
    `;
    output.appendChild(postEl);
    showPosts();
  } catch (error) {
    console.error('Error creating post', error);
  }
}

// Event listeners
getPostsBtn.addEventListener('click', showPosts);
addPostForm.addEventListener('submit', addPost);