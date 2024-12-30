"use client";

import { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  content: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleAddComment = () => {
    if (!name.trim() || !content.trim()) {
      alert('Please fill out both fields.');
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      content,
    };

    setComments([newComment, ...comments]); // Add new comment to the top of the list
    setName('');
    setContent('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg border dark:border-gray-700">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 dark:border-gray-700">
        Leave a Comment
      </h2>

      {/* Input Fields */}
      <div className="mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Your Comment"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
          rows={4}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Submit
        </button>
      </div>

      {/* Comments List */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="mb-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm border dark:border-gray-600"
            >
              <p className="text-lg font-medium text-gray-700 dark:text-gray-100">
                {comment.name}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {comment.content}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
