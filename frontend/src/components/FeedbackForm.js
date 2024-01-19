import React, { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Skicka feedbacken till backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Din feedback..."
      />
      <button type="submit">Skicka Feedback</button>
    </form>
  );
}

export default FeedbackForm;
