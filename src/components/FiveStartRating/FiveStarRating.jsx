import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  const starsList = [];
  const filledStarsCount = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const emptyStarsCount = 5 - filledStarsCount - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < filledStarsCount; i++) {
    starsList.push(<StarFill key={`star-fill${i}`} />);
  }

  if (hasHalfStar) {
    starsList.push(<StarHalf key="star-half" />);
  }

  for (let i = 0; i < emptyStarsCount; i++) {
    starsList.push(<Star key={`star${i}`} />);
  }

  return <div>{starsList}</div>;
}
