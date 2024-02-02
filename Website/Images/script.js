document.querySelector('.nav-links').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        let activeLink = document.querySelector('.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }
        e.target.classList.add('active');
    }
});

const bookDisplaySection = document.querySelector('.book-display-section');
const searchIcon = document.querySelector('.bi-search');

searchIcon.addEventListener('click', () => {
    searchInput.focus();
});


const card = document.querySelector('.card');

card.addEventListener('click', () => {
  card.classList.toggle('expanded');
});

function disableButton(button) {
    button.classList.add('disabled');
    button.textContent = "Reserved";
    button.disabled = true;
}

var dataSet = [
    ["Geronimo Stilton: Have A Heart, Geronimo", "Elisabetta Maria Dami", "Holiday Series", "2019"], 
    ["Geronimo Stilton: The Golden Key", "Elisabetta Maria Dami", "Kingdom of Fantasy Series", "2021"], 
    ["Geronimo Stilton: The Super Cup Face-Off", "Elisabetta Maria Dami", "Regular Series", "2016"], 
    ["Geronimo Stilton: Out Of Time", "Elisabetta Maria Dami", "Journey Through Time Series", "2008"], 
    ["Geronimo Stilton: Garbage Dump Disaster", "Elisabetta Maria Dami", "Regular Series", "2019"], 
    ["Geronimo Stilton: Mysterious Eye Of The Dragon", "Elisabetta Maria Dami", "Regular Series", "2018"], 
    ["Geronimo Stilton: Very Merry Christmas", "Elisabetta Maria Dami", "Holiday Series", "2007"], 
    ["Geronimo Stilton: The Race Across America", "Elisabetta Maria Dami", "Regular Series", "2006"], 
    ["Geronimo Stilton Reporter: Hypno-Tick Tock", "Elisabetta Maria Dami", "Reporter Series", "2021"], 
    ["Geronimo Stilton: The Keepers Of The Empire", "Elisabetta Maria Dami", "Kingdom of Fantasy Series", "2021"], 
    ["Geronimo Stilton: The Way Of The Samurai", "Elisabetta Maria Dami", "Regular Series", "2010"], 
    ["Geronimo Stilton: The Enormouse Pearl Heist", "Elisabetta Maria Dami", "Regular Series", "2019"], 
];

$(document).ready(function () {
    $('#table').DataTable({ data: dataSet, columns: [
        { title: "Title" },
        { title: "Author" },
        { title: "Series" },
        { title: "Year" },
        ]
    });
});

const labels = [ 'Reporter Series', 'Kingdom of Fantasy Series', 'Holiday Series', 
'Journey Through Time Series', 'Regular Series' 
];


const data = { labels: labels, datasets: [{
    label: 'Number of books',
    backgroundColor: '#98FB98', 
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 2,
    data: [1, 2, 2, 1, 6],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        animation: {
            duration: 1000, // Animation duration in milliseconds
            easing: 'easeInOutQuad' // Easing function for the animation
        },
        plugins: {
            title: {
                display: true,
                text: 'Number of Books',
                color: 'black',
                font: {
                    weight: 'bold'
                }
            },
            legend: {
                labels: {
                    color: 'black'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'black'
                },
                ticks: {
                    color: 'black'
                }
            },
            x: {
                grid: {
                    color: 'black'
                },
                ticks: {
                    color: 'black'
                }
            }
        },
        layout: {
            padding: 10
        },
        elements: {
            bar: {
                borderWidth: 3
            }
        }
    }
};

const myChart = new Chart( document.getElementById('myChart'), config
);

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

const searchBar = document.getElementById('search-input');

// Add event listener for input event
searchBar.addEventListener('input', function() {
    // Get the search query
    const query = this.value.toLowerCase();

    // Select all card elements
    const cards = document.querySelectorAll('.card');

    // Loop through each card
    cards.forEach(card => {
        // Get the title of the card
        const title = card.querySelector('h3').innerText.toLowerCase();

        // Check if the title contains the search query
        if (title.includes(query)) {
            // If it matches, display the card
            card.style.display = 'block';
        } else {
            // If it doesn't match, hide the card
            card.style.display = 'none';
        }
    });

    if (query === '') {
        // If it is empty, display all cards
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }
});