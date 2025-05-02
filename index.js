let currentReviewBornACrime = 0;
let currentReviewPowerOfHabit = 0;

const reviewsBornACrime = document.querySelectorAll('.reviews.born-a-crime .review');
const reviewsPowerOfHabit = document.querySelectorAll('.reviews.power-of-habit .review');

function showReview(book, index) {
    const reviews = book === 'born-a-crime' ? reviewsBornACrime : reviewsPowerOfHabit;
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

setInterval(() => {
    currentReviewBornACrime = (currentReviewBornACrime + 1) % reviewsBornACrime.length;
    showReview('born-a-crime', currentReviewBornACrime);
}, 5000);

setInterval(() => {
    currentReviewPowerOfHabit = (currentReviewPowerOfHabit + 1) % reviewsPowerOfHabit.length;
    showReview('power-of-habit', currentReviewPowerOfHabit);
}, 5000);

