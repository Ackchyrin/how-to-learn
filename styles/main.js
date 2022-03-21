let sendReviews = document.querySelector('.header__title-button')
popupContainerReviews = document.querySelector('.reviews__popup-container')
popupReviews = document.querySelector('.reviews__popup')
popupCloseButton = document.querySelector('.reviews__popup-close')

sendReviews.addEventListener('click', openReviewsPopup)
popupCloseButton.addEventListener('click', closeReviewsPopup)
popupContainerReviews.addEventListener('click', closeReviewsPopup)

function openReviewsPopup(){
    popupContainerReviews.style.display = "block"
    popupReviews.style.display = "flex"
    document.addEventListener('keydown', closePopupEsc);
}

function closeReviewsPopup(){
    popupContainerReviews.style.display = "none"
    popupReviews.style.display = "none"
    document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(event){
    if (event.key === 'Escape') {
        closeReviewsPopup();
        }
}