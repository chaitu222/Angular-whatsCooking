import Feedback from '../models/feedback.js'
export const Feedbackrole=async (req, res) => {
    try {
      const { email, rating, comments } = req.body;
 
      // Save feedback to MongoDB
      const feedback = new Feedback({ email, rating, comments });
      await feedback.save();
 
      // Respond with success
      res.status(200).json({ success: true, message: 'Feedback received successfully!' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  };