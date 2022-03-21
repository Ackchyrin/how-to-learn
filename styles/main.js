let sendReviews = document.querySelector('.header__title-button')
popupContainerReviews = document.querySelector('.reviews__popup-container')
popupReviews = document.querySelector('.reviews__popup')

sendReviews.addEventListener('click', openReviewsPopup)

function openReviewsPopup(){
    popupContainerReviews.style.display = "block"
    popupReviews.style.display = "flex"
}

function closeReviewsPopup{
    popupContainerReviews.style.display = "none"
    popupReviews.style.display = "none"
}