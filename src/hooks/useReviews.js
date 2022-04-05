import { useEffect, useState } from "react"

const useReviews = (count) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
        .then(response => response.json())
        .then(json => setReviews(json.slice(0,count)))
    }, []);

    return [reviews, setReviews];
}

export default useReviews;