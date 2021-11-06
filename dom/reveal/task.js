window.addEventListener('scroll', showElement);

let elements = Array.from(document.getElementsByClassName('reveal'));

function showElement() {
    let viewportHeight = window.innerHeight;
    elements.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop > 0 && elementTop < viewportHeight ||
          elementTop > 0  && elementBottom < viewportHeight ||
          elementBottom > 0 && elementBottom <= viewportHeight) {
            if (element.classList.contains('reveal')) {
                element.classList.add('reveal_active')
            }
        } else if (elementBottom < 0 || elementTop < 0) {
            element.classList.remove('reveal_active')
        }
    })
}