
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { StarRating } from './StarRating';
import { useToast } from '../hooks/use-toast';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSystemProps {
  productId: number;
  initialReviews?: Review[];
}

export const ReviewSystem = ({ productId, initialReviews = [] }: ReviewSystemProps) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: ''
  });
  const { toast } = useToast();

  const handleSubmitReview = () => {
    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      toast({
        title: "Please fill all fields",
        description: "Name, rating, and review are required.",
        variant: "destructive"
      });
      return;
    }

    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toLocaleDateString()
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 0, comment: '' });
    setShowReviewForm(false);
    
    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <Button 
          onClick={() => setShowReviewForm(!showReviewForm)}
          variant="outline"
        >
          Write a Review
        </Button>
      </div>

      {showReviewForm && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="reviewName">Your Name</Label>
              <Input
                id="reviewName"
                placeholder="Enter your name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              />
            </div>
            
            <div>
              <Label>Rating</Label>
              <StarRating
                rating={newReview.rating}
                onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
                size="lg"
              />
            </div>
            
            <div>
              <Label htmlFor="reviewComment">Your Review</Label>
              <textarea
                id="reviewComment"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Share your experience with this product..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleSubmitReview}>Submit Review</Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
        ) : (
          reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} readonly />
                </div>
                <p className="text-sm">{review.comment}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};




// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import StarRating from "./StarRating";
// import { Review } from "@/data/products";

// interface ReviewSectionProps {
//   reviews: Review[];
//   onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
// }

// const ReviewSection = ({ reviews, onAddReview }: ReviewSectionProps) => {
//   const [newReview, setNewReview] = useState({
//     userName: "",
//     rating: 0,
//     comment: ""
//   });
//   const [showReviewForm, setShowReviewForm] = useState(false);

//   const handleSubmitReview = () => {
//     if (newReview.userName && newReview.rating > 0 && newReview.comment) {
//       onAddReview(newReview);
//       setNewReview({ userName: "", rating: 0, comment: "" });
//       setShowReviewForm(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
//           Customer Reviews
//         </h3>
//         <Button
//           onClick={() => setShowReviewForm(!showReviewForm)}
//           className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
//         >
//           Write a Review
//         </Button>
//       </div>

//       {showReviewForm && (
//         <Card className="dark:bg-slate-800 border-slate-200 dark:border-slate-700">
//           <CardContent className="p-6 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                 Your Name
//               </label>
//               <Input
//                 value={newReview.userName}
//                 onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
//                 placeholder="Enter your name"
//                 className="dark:bg-slate-700 dark:border-slate-600"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                 Rating
//               </label>
//               <StarRating
//                 rating={newReview.rating}
//                 onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
//                 interactive={true}
//                 size={24}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
//                 Your Review
//               </label>
//               <Textarea
//                 value={newReview.comment}
//                 onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                 placeholder="Share your experience with this product..."
//                 className="dark:bg-slate-700 dark:border-slate-600"
//                 rows={4}
//               />
//             </div>
//             <div className="flex space-x-3">
//               <Button onClick={handleSubmitReview} className="bg-emerald-500 hover:bg-emerald-600">
//                 Submit Review
//               </Button>
//               <Button
//                 variant="outline"
//                 onClick={() => setShowReviewForm(false)}
//                 className="border-slate-300 dark:border-slate-600"
//               >
//                 Cancel
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       <div className="space-y-4">
//         {reviews.map((review) => (
//           <Card key={review.id} className="dark:bg-slate-800 border-slate-200 dark:border-slate-700">
//             <CardContent className="p-6">
//               <div className="flex items-start justify-between mb-3">
//                 <div>
//                   <h4 className="font-semibold text-slate-800 dark:text-slate-100">
//                     {review.userName}
//                   </h4>
//                   <p className="text-sm text-slate-500 dark:text-slate-400">
//                     {new Date(review.date).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <StarRating rating={review.rating} />
//               </div>
//               <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
//                 {review.comment}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;
