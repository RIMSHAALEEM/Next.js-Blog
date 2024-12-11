// components/CommentSection.jsx
import React, { useState } from 'react';

const CommentSection = () => {
  // State to manage the new comment input and the list of comments
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Handle the change in the comment input field
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Handle the form submission (add the new comment)
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment(''); // Reset the input field
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-8">
      <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
      
      {/* Display the existing comments */}
      <div className="mt-4">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="text-gray-600">{comment}</p>
            </div>
          ))
        )}
      </div>

      {/* Comment input form */}
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="4"
          placeholder="Add a comment..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-teal-900 text-white rounded-lg hover:bg-teal-700"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
