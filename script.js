// Adds an event listener that waits for the entire HTML document to be loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    // Gets the button element that toggles the menu
    const menuToggle = document.getElementById('menu-toggle');
    // Gets the button element that closes the menu
    const closeMenu = document.getElementById('close-menu');
    // Gets the navigation menu element
    const navMenu = document.getElementById('nav-menu');

    // Checks if all required elements for the menu exist before adding event listeners
    if (menuToggle && navMenu && closeMenu) {
        // Adds a click event listener to the hamburger menu button
        menuToggle.addEventListener('click', () => {
            // Adds the 'active' class to the nav menu to trigger the CSS animation and show it
            navMenu.classList.add('active');
        });

        // Adds a click event listener to the close menu button
        closeMenu.addEventListener('click', () => {
            // Removes the 'active' class from the nav menu to hide it
            navMenu.classList.remove('active');
        });
    }

    // Array of objects containing data for the 'Why Choose Us' section
    const whyChooseUsData = [
        {
            icon: 'Images/payment.svg',
            title: 'Payment methods',
            description: 'We have a lot of them, from cryptocurrencies to barter for potatoes'
        },
        {
            icon: 'Images/search.svg',
            title: 'Simple search process',
            description: 'We checked it out, even the kid did it, but it was my mom’s friend’s son'
        },
        {
            icon: 'Images/support.svg',
            title: '24/7 Support',
            description: 'Is there something you don’t understand? Feel free to call us. Phone number in the footer'
        },
        {
            icon: 'Images/nice.svg',
            title: 'We are nice',
            description: 'Fantasy is over, there will be something really convincing here'
        }
    ];

    // Gets the container element where the 'Why Choose Us' cards will be inserted
    const whyChooseUsContainer = document.getElementById('why-choose-us-container');

    // Defines the function to dynamically create and render the 'Why Choose Us' cards
    function renderWhyChooseUsCards() {
        let html = ''; // Initializes an empty string to build the HTML content
        // Iterates over each object in the whyChooseUsData array
        whyChooseUsData.forEach(card => {
            // Appends the HTML for a single feature card to the string
            html += `
                <div class="feature-card">
                    <div class="icon-circle">
                        <img src="${card.icon}" alt="${card.title} Icon">
                    </div>
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
            `;
        });
        // Sets the inner HTML of the container to the newly generated HTML string
        whyChooseUsContainer.innerHTML = html;
    }

    // Array of objects containing data for the 'Special Offers' section
    const specialOffersData = [
        {
            image: 'Images/Rectangle9.png',
            title: 'Wilderness Club at Big Ceddar',
            dates: '28 October — 1 November',
            price: '$2016',
            perNight: '/6 night'
        },
        {
            image: 'Images/Rectangle9.1.png',
            title: 'Wilderness Club at Big Ceddar',
            dates: '28 October — 1 November',
            price: '$2016',
            perNight: '/6 night'
        },
        {
            image: 'Images/Rectangle9.2.png',
            title: 'Wilderness Club at Big Ceddar',
            dates: '28 October — 1 November',
            price: '$2016',
            perNight: '/6 night'
        }
    ];

    // Gets the container element for 'Special Offers'
    const offersContainer = document.getElementById('offers-container');

    // Defines the function to dynamically create and render the 'Special Offers' cards
    function renderSpecialOffers() {
        let html = '';
        // Iterates over each object in the specialOffersData array
        specialOffersData.forEach(offer => {
            // Appends the HTML for a single offer card to the string
            html += `
                <div class="offer-card">
                    <div class="image-container">
                        <img src="${offer.image}" alt="${offer.title}" class="offer-image">
                        <div class="icon-overlay">
                            <div class="rating-icon">
                                <img src="Images/rating.svg" alt="Rating">
                            </div>
                            <div class="favourite-icon">
                                <img src="Images/favorite.svg" alt="Favourite">
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <h3>${offer.title}</h3>
                        <p class="dates">${offer.dates}</p>
                        <div class="price">
                            <span class="amount">${offer.price}</span>
                            <span class="per-night">${offer.perNight}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        // Inserts the generated HTML into the container
        offersContainer.innerHTML = html;
    }
    
    // Array of objects containing data for the 'Reviews' section
    const reviewsData = [
        {
            image: 'Images/Ellipse6.png',
            reviewText: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
            name: 'Jannike Borg',
            title: 'Publisher'
        },
        {
            image: 'Images/Ellipse6.1.png',
            reviewText: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
            name: 'LeBron Durant',
            title: 'Flight attendant'
        },
        {
            image: 'Images/Ellipse6.2.png',
            reviewText: 'I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.',
            name: 'Kaarel Piho',
            title: 'Chiropodist'
        }
    ];

    // Gets the container element for 'Reviews'
    const reviewsContainer = document.getElementById('reviews-container');

    // Defines the function to dynamically create and render the 'Reviews' cards
    function renderReviews() {
        let html = '';
        // Iterates over each object in the reviewsData array
        reviewsData.forEach(review => {
            // Appends the HTML for a single review card to the string
            html += `
                <div class="review-card">
                    <img src="${review.image}" alt="${review.name}" class="reviewer-image">
                    <p class="review-text">${review.reviewText}</p>
                    <p class="reviewer-info">
                        <span class="name">${review.name}</span>, <span class="title">${review.title}</span>
                    </p>
                </div>
            `;
        });
        // Inserts the generated HTML into the container
        reviewsContainer.innerHTML = html;
    }

    // Array of objects containing data for the 'Recent Posts' section
    const recentPostsData = [
        {
            image: 'Images/Rectangle17.png',
            date: 'May 23, 2022',
            readTime: '5 minutes',
            title: 'My trip to Athens',
            description: 'It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...'
        },
        {
            image: 'Images/Rectangle17.1.png',
            date: 'May 22, 2022',
            readTime: '1 minute',
            title: 'Vilnius resorts',
            description: 'I haven’t seen any resorts in Vilnius, but there are wonderful people and pubs'
        },
        {
            image: 'Images/Rectangle17.2.png',
            date: 'May 20, 2022',
            readTime: '15 minutes',
            title: 'Tips for flying on a plane',
            description: 'If you have a fear of flying, here’s a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you'
        }
    ];

    // Gets the container element for 'Recent Posts'
    const postsContainer = document.getElementById('posts-container');

    // Defines the function to dynamically create and render the 'Recent Posts' cards
    function renderRecentPosts() {
        let html = '';
        // Iterates over each object in the recentPostsData array
        recentPostsData.forEach(post => {
            // Appends the HTML for a single post card to the string
            html += `
                <div class="post-card">
                    <img src="${post.image}" alt="${post.title}" class="post-image">
                    <div class="content">
                        <div class="post-meta">
                            <span>${post.date}</span>
                            <span class="read-time">
                                <img src="Images/bx_time-five.svg" alt="Time icon">
                                ${post.readTime}
                            </span>
                        </div>
                        <h3>${post.title}</h3>
                        <p class="post-description">${post.description}</p>
                    </div>
                </div>
            `;
        });
        // Inserts the generated HTML into the container
        postsContainer.innerHTML = html;
    }

    // Calls all rendering functions to display the content on the page load
    renderWhyChooseUsCards();
    renderSpecialOffers();
    renderReviews();
    renderRecentPosts();
});