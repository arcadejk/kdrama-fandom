function fetchComments() {}

// Function to handle comment submission
function submitComment(event) {
    event.preventDefault(); // Prevent form submission
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim(); // Get comment text
    if (comment !== '') {}

    // Event listener for comment submission
document.getElementById('comment-form').addEventListener('submit', submitComment);

// Fetch comments when the page loads
fetchComments();
  