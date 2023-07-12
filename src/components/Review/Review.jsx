import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewMovies } from 'utilis/fetchReviewMovies';

export const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const reviewPromise = fetchReviewMovies(movieId);

  useEffect(() => {
    reviewPromise.then(resp => {
      return setReview([...resp]);
    });
  }, [reviewPromise]);

  if (review.length === 0)
    return (
      <div>
        <p>We don't have any reviews for this movie</p>
      </div>
    );

  return (
    <ul>
      {review.map(el => (
        <li key={el.id}>
          <h6>Author:{el.author}</h6>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};
