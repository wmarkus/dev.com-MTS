/* Focusin/out event polyfill (for Firefox) by nuxodin
 * Source: https://gist.github.com/nuxodin/9250e56a3ce6c0446efa
 */

!function () {
    let w = window,
        d = w.document;

    if (w.onfocusin === undefined) {
        d.addEventListener('focus', addPolyfill, true);
        d.addEventListener('blur', addPolyfill, true);
        d.addEventListener('focusin', removePolyfill, true);
        d.addEventListener('focusout', removePolyfill, true);
    }
    function addPolyfill(e) {
        let type = e.type === 'focus' ? 'focusin' : 'focusout';
        let event = new CustomEvent(type, { bubbles: true, cancelable: false });
        event.c1Generated = true;
        e.target.dispatchEvent(event);
    }
    function removePolyfill(e) {
        if (!e.c1Generated) { // focus after focusin, so chrome will the first time trigger tow times focusin
            d.removeEventListener('focus', addPolyfill, true);
            d.removeEventListener('blur', addPolyfill, true);
            d.removeEventListener('focusin', removePolyfill, true);
            d.removeEventListener('focusout', removePolyfill, true);
        }
        setTimeout(function () {
            d.removeEventListener('focusin', removePolyfill, true);
            d.removeEventListener('focusout', removePolyfill, true);
        });
    }
}();

let myCarousel = (function () {

    "use strict";

    // Initial variables
    let carousel, slides, index, slidenav, settings, timer, setFocus, animationSuspended;

    // Helper function: Iterates over an array of elements
    function forEachElement(elements, fn) {
        for (let i = 0; i < elements.length; i++)
            fn(elements[i], i);
    }

    // Helper function: Remove Class
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // Helper function: Test if element has a specific class
    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }

    // Initialization for the carousel
    // Argument: set = an object of settings
    // Possible settings:
    // id <string> ID of the carousel wrapper element (required).
    // slidenav <bool> If true, a list of slides is shown.
    // animate <bool> If true, the slides can be animated.
    // startAnimated <bool> If true, the animation begins
    //                        immediately.
    //                      If false, the animation needs
    //                        to be initiated by clicking
    //                        the play button.
    function init(set) {

        // Make settings available to all functions
        settings = set;

        // Select the element and the individual slides
        carousel = document.getElementById(settings.id);
        slides = carousel.querySelectorAll('.slide');

        carousel.className = 'active carousel';

        // Create unordered list for controls, and attach click events for previous and next slide
        const ctrls = document.createElement('ul');

        ctrls.className = 'controls';

        document.getElementById('previous-btn')
            .addEventListener('click', function () {
                changePage('previous');
            });

        document.getElementById('next-btn')
            .addEventListener('click', function () {
                changePage('next');
            });

        carousel.appendChild(ctrls);

        // If the carousel is animated or a slide navigation is requested in the settings, anoter unordered list that contains those elements is added. (Note that you cannot supress the navigation when it is animated.)
        if (settings.slidenav || settings.animate) {
            slidenav = document.getElementById('speakers-pagination');

            slidenav.className = 'slidenav hidden';

            if (settings.animate) {
                const li = document.createElement('li');

                if (settings.startAnimated) {
                    li.innerHTML = '<button data-action="stop"><span class="visuallyhidden">Stop Animation </span>￭</button>';
                } else {
                    li.innerHTML = '<button data-action="start"><span class="visuallyhidden">Start Animation </span>▶</button>';
                }

                slidenav.appendChild(li);
            }

            if (settings.slidenav) {
                forEachElement(slides, function (el, i) {
                    let li = document.createElement('li');
                    let cssClass = (i === 0) ? 'class="pagination-link inherit-position current active" ' : 'class="pagination-link inherit-position"';

                    if (i === 0)
                        li.classList.add("active");

                    li.innerHTML = '<button ' + cssClass + 'data-slide="' + i + '" aria-label="Slide ' + (i + 1) + '">' + (i + 1) + '</button>';
                    slidenav.appendChild(li);
                });

                // Add previous element
                const prevLi = document.createElement('li');
                prevLi.innerHTML = '<a class="prev pagination-previous" aria-label="previous" role="navigation" tabindex="0" onclick="changePage(\'previous\')" onkeypress="keyboardNavigation(event, \'previous\')">' +
                    '<span class="icon" aria-hidden="true">' +
                    '<span class="docon docon-arrow-left"></span>' +
                    '</span>' +
                    '</a>';
                slidenav.insertBefore(prevLi, slidenav.firstChild);

                // Add next element
                const nextLi = document.createElement('li');
                nextLi.innerHTML = '<a class="next pagination-next" aria-label="next" role="navigation" tabindex="0" onclick="changePage(\'next\')" onkeypress="keyboardNavigation(event, \'next\')">' +
                    '<span class="icon" aria-hidden="true">' +
                    '<span class="docon docon-arrow-right"></span>' +
                    '</span>' +
                    '</a>';
                slidenav.appendChild(nextLi);
            }

            slidenav.addEventListener('click', function (event) {
                const button = event.target;
                if (button.localName == 'button') {
                    if (button.getAttribute('data-slide')) {
                        setSlides(button.getAttribute('data-slide'), true);
                    } else if (button.getAttribute('data-action') == "stop") {
                    } else if (button.getAttribute('data-action') == "start") {
                        startAnimation();
                    }
                }
            }, true);

            carousel.className = 'active carousel with-slidenav';
        }

        // Add a live region to announce the slide number when using the previous/next buttons
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.setAttribute('class', 'liveregion visuallyhidden');
        carousel.appendChild(liveRegion);

        // After the slide transitioned, remove the in-transition class, if focus should be set, set the tabindex attribute to -1 and focus the slide.
        slides[0].parentNode.addEventListener('transitionend', function (event) {
            const slide = event.target;
            removeClass(slide, 'in-transition');
            if (hasClass(slide, 'pagination-link inherit-position current')) {
                if (setFocus) {
                    slide.setAttribute('tabindex', '-1');
                    slide.focus();
                    setFocus = false;
                }
            }
        });

        // When the mouse enters the carousel, suspend the animation.
        carousel.addEventListener('mouseenter', suspendAnimation);

        // When the mouse leaves the carousel, and the animation is suspended, start the animation.
        carousel.addEventListener('mouseleave', function (event) {
            if (animationSuspended) {
                startAnimation();
            }
        });

        // When the focus enters the carousel, suspend the animation
        carousel.addEventListener('focusin', function (event) {
            if (!hasClass(event.target, 'slide')) {
                suspendAnimation();
            }
        });

        // When the focus leaves the carousel, and the animation is suspended, start the animation
        carousel.addEventListener('focusout', function (event) {
            if (!hasClass(event.target, 'slide') && animationSuspended) {
                startAnimation();
            }
        });

        // Set the index (=current slide) to 0 – the first slide
        index = 0;
        setSlides(index);

        // If the carousel is animated, advance to the
        // next slide after 5s
        if (settings.startAnimated) {
            timer = setTimeout(nextSlide, 5000);
        }
    }

    // Function to set a slide the current slide
    function setSlides(newCurrent, setFocusHere, transition, announceItemHere) {
        // Focus, transition and announce Item are optional parameters.
        // focus denotes if the focus should be set after the
        // carousel advanced to slide number new_current.
        // transition denotes if the transition is going into the
        // next or previous direction.
        // If announceItem is set to true, the live region’s text is changed (and announced)
        // Here defaults are set:

        let setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : false;
        transition = typeof transition !== 'undefined' ? transition : 'none';
        let announceItem = typeof announceItemHere !== 'undefined' ? announceItemHere : false;

        newCurrent = parseFloat(newCurrent);

        const length = slides.length;
        let newNext = newCurrent + 1;
        let newNextNext = newCurrent + 2;

        // If the next slide number is equal to the length,
        // the next slide should be the first one of the slides.
        // If the previous slide number is less than 0.
        // the previous slide is the last of the slides.
        if (newNext === length) {
            newNext = 0;
            newNextNext = 1;
        }

        if (newNextNext === length) {
            newNextNext = 0;
        }

        // Reset slide classes
        for (let i = slides.length - 1; i >= 0; i--) {
            slides[i].className = "slide";
        }

        if (newCurrent < length - 1) {
            // Add classes to the previous, next and current slide
            slides[newNext].className = 'next slide' + ((transition == 'next') ? ' in-transition' : '');
            slides[newNext].getElementsByClassName('speaker-card-footer')[0].className = "card-footer speaker-card-footer";
        }

        if (newCurrent < length - 2) {
            slides[newNextNext].className = 'prev slide' + ((transition == 'prev') ? ' in-transition' : '');
            slides[newNextNext].getElementsByClassName('speaker-card-footer')[0].className = "card-footer speaker-card-footer";
        }

        slides[newCurrent].className = 'current slide';
        slides[newCurrent].getElementsByClassName('speaker-card-footer')[0].className = "card-footer speaker-card-footer";

        let bioBtnSpan = document.getElementsByClassName('docon-math-minus')[0]
        if (bioBtnSpan) {
            bioBtnSpan.classList = "span-icon docon docon-math-plus has-margin-right-small";
        }

        let bioBtns = document.getElementsByClassName('bio-click')
        forEachElement(bioBtns, (el) => {
            if (el.ariaLabel) {
                el.ariaLabel = el.ariaLabel.replace(' expanded', '');
                el.ariaLabel = el.ariaLabel.replace(' collapsed', '');
                el.ariaLabel = el.ariaLabel + ' collapsed';
            }
        });

        const speakerBio = document.getElementById('speaker-bio');
        if (speakerBio) {
            speakerBio.innerText = '';
        }

        // Update the text in the live region which is then announced by screen readers.
        if (announceItem) {
            carousel.querySelector('.liveregion').textContent = 'Item ' + (newCurrent + 1) + ' of ' + slides.length;
        }

        // Update the buttons in the slider navigation to match the currently displayed  item
        if (settings.slidenav) {
            const buttons = document.getElementById("speakers-pagination").querySelectorAll('.slidenav button[data-slide]');
            for (let j = buttons.length - 1; j >= 0; j--) {
                buttons[j].className = 'pagination-link inherit-position';
                buttons[j].innerHTML = (j + 1);
                if (buttons[j].ariaLabel) {
                    buttons[j].ariaLabel = buttons[j].ariaLabel.replace(' selected', '');
                }
            }
            buttons[newCurrent].className = "pagination-link inherit-position current";
            buttons[newCurrent].innerHTML = (newCurrent + 1);
            buttons[newCurrent].ariaLabel = buttons[newCurrent].ariaLabel + ' selected';
        }

        // Set the global index to the new current value
        index = newCurrent;
    }

    // Function to advance to the next slide
    function nextSlide(announceItem) {
        announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

        const length = slides.length,
            new_current = index + 1;

        if (new_current === length) {
            new_current = 0;
        }

        // If we advance to the next slide, the previous needs to be
        // visible to the user, so the third parameter is 'prev', not
        // next.
        setSlides(new_current, false, 'prev', announceItem);

        // If the carousel is animated, advance to the next
        // slide after 5s
        if (settings.animate) {
            timer = setTimeout(nextSlide, 5000);
        }
    }

    // Function to advance to the previous slide
    function prevSlide(announceItem) {
        announceItem = typeof announceItem !== 'undefined' ? announceItem : false;

        const length = slides.length,
            new_current = index - 1;

        // If we are already on the first slide, show the last slide instead.
        if (new_current < 0) {
            new_current = length - 1;
        }

        // If we advance to the previous slide, the next needs to be
        // visible to the user, so the third parameter is 'next', not
        // prev.
        setSlides(new_current, false, 'next', announceItem);
    }

    // Function to stop the animation
    function stopAnimation() {
        clearTimeout(timer);
        settings.animate = false;
        animationSuspended = false;
        _this = carousel.querySelector('[data-action]');
        _this.innerHTML = '<span class="visuallyhidden">Start Animation </span>▶';
        _this.setAttribute('data-action', 'start');
    }

    // Function to start the animation
    function startAnimation() {
        settings.animate = true;
        animationSuspended = false;
        timer = setTimeout(nextSlide, 5000);
        _this = carousel.querySelector('[data-action]');
        _this.innerHTML = '<span class="visuallyhidden">Stop Animation </span>￭';
        _this.setAttribute('data-action', 'stop');
    }

    // Function to suspend the animation
    function suspendAnimation() {
        if (settings.animate) {
            clearTimeout(timer);
            settings.animate = false;
            animationSuspended = true;
        }
    }

    // Function to disable carousel features
    function disableCarousel() {
        document.getElementsByClassName('navigation-btns')[0].classList.add('hidden');

        let slideBtns = document.getElementsByClassName('slidenav');
        forEachElement(slideBtns, (el) => { el.classList.add('hidden'); });

        let cardFooters = document.getElementsByClassName('speaker-card-footer');
        forEachElement(cardFooters, (el) => {
            el.classList.add('hidden')
        });
    }

    // Function to enable carousel features
    function enableCarousel() {
        document.getElementsByClassName('navigation-btns')[0].classList.remove('hidden');

        let slideBtns = document.getElementsByClassName('slidenav');
        forEachElement(slideBtns, (el) => { el.classList.remove('hidden'); });

        let cardFooters = document.getElementsByClassName('speaker-card-footer');
        forEachElement(cardFooters, (el) => {
            el.classList.remove('hidden')
        });
    }

    // Function to make carousel features responsive
    function handleCarouselResponsiveness() {
        let speakersNumber = document.getElementsByClassName('speaker-list')[0].childElementCount;
        let desktop = 1666;
        let mobile = 630;

        let screenWidth = window.innerWidth;
        if (speakersNumber <= 3) {
            if (speakersNumber === 3) {
                if (screenWidth >= desktop) {
                    disableCarousel();
                }
                else {
                    enableCarousel();
                }
            }

            if (speakersNumber === 2) {
                if (window.innerWidth > mobile) {
                    disableCarousel();
                }
                else {
                    enableCarousel();
                }
            }

            if (speakersNumber === 1) {
                disableCarousel();
            }
        }
        else {
            enableCarousel();
        }
    }

    window.onresize = handleCarouselResponsiveness;
    window.onload = handleCarouselResponsiveness;

    // Making some functions public
    return {
        init: init,
        next: nextSlide,
        prev: prevSlide,
        goto: setSlides,
        stop: stopAnimation,
        start: startAnimation
    };
});

const carousel = new myCarousel();
carousel.init({
    id: 'c',
    slidenav: true,
    animate: false,
    startAnimated: false
});

formatCarousel();

function formatCarousel() {
    const dataKey = "pagination";

    $(".pagination").each(initPagination);
    function initPagination() {
        const $this = $(this);

        $this.data(dataKey, $this.find("li").index(".active"));
        $this.find("li").on("click", function () {
            const $parent = $(this).closest(".pagination");
            $parent.data(dataKey, $parent.find("li").index(this));
            changePage.apply($parent);
        });
    }
};

const pagination = document.getElementById('speakers-pagination');
const activeClass = "active",
    activeSiblingClass = "active-sibling";

function changePage(direction) {
    let currentButton = pagination.querySelector('.current');

    if (currentButton) {
        const currentButtonIndex = Array.from(pagination.children).indexOf(currentButton.parentElement);
        const totalButtons = pagination.children.length;

        if (direction === 'previous') {
            let previousButtonIndex = currentButtonIndex - 1;
            if (previousButtonIndex < 0) {
                previousButtonIndex = totalButtons - 1;
            }
            const previousButton = pagination.children[previousButtonIndex];
            const previousSiblingButton = pagination.children[(previousButtonIndex - 1 + totalButtons) % totalButtons];
            clean();
            previousButton.classList.add(activeClass);
            previousSiblingButton.classList.add(activeSiblingClass);

            previousButton.childNodes[0].click();
        } else if (direction === 'next') {
            let nextButtonIndex = currentButtonIndex + 1;
            if (nextButtonIndex >= totalButtons) {
                nextButtonIndex = 0;
            }
            const previousButton = pagination.children[currentButtonIndex];
            const nextButton = pagination.children[nextButtonIndex];
            clean();
            previousButton.classList.add(activeSiblingClass);
            nextButton.classList.add(activeClass);
            nextButton.childNodes[0].click();
        }
    }
};

function clean() {
    for (const element of pagination.children) {
        element.classList.remove(activeClass);
        element.classList.remove(activeSiblingClass);
    }
};

function keyboardNavigation(event, direction) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        changePage(direction);
    }
};