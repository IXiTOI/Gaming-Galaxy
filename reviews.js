document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    const loadReviews = () => {
        const reviews = JSON.parse(localStorage.getItem('review')) || [];
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <h3>${review.name + ':'}</h3>
                <p>${review.review}</p><br>
            `;
            reviewsContainer.appendChild(reviewItem);
        });
    };

    const saveReview = (name, review) => {
        const reviews = JSON.parse(localStorage.getItem('review')) || [];
        reviews.push({ name, review });
        localStorage.setItem('review', JSON.stringify(reviews));
        loadReviews();
    };

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const review = e.target.review.value;
        saveReview(name, review);
        e.target.reset();
    });

    loadReviews();
});
