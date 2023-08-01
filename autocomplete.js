// Script for Searchbar
document.addEventListener('DOMContentLoaded', function() {
let availableKeywords = [
  { keyword: 'Sajjangad Fort', link: './Sajjangad.html' },
  { keyword: 'Pratapgad Fort', link: './Pratapgad.html' },
  { keyword: 'Rajgad Fort', link: './Rajgad.html' },
  { keyword: 'Sinhagad Fort', link: './Sinhagad.html' },
  { keyword: 'Purandar Fort', link: './Purandar.html' },
  { keyword: 'Vasota Fort', link: './Vasota.html' },
  { keyword: 'Raigad Fort', link: './Raigad.html' },
  { keyword: 'Shivneri Fort', link: './Shivneri.html' },
  { keyword: 'Tung Fort', link: './Tung.html' },
  { keyword: 'Malhargad Fort', link: './Malhargad.html' },
  { keyword: 'Korigad Fort', link: './Korigad.html' },
  { keyword: 'Lohagad Fort', link: './Lohagad.html' },
  { keyword: 'Tikona Fort', link: './Tikona.html' },
  { keyword: 'Torna Fort', link: './Torna.html' },
  { keyword: 'Vijaydurg Fort', link: './Vijaydurg.html' },
  { keyword: 'Janjira Fort', link: './Janjira.html' },
  { keyword: 'Panhala Fort', link: './Panhala.html' },
  { keyword: 'Harishchandragad Fort', link: './Harishchandragad.html' },
  { keyword: 'Harihar Fort', link: './Harihar.html' },
  { keyword: 'Rajmachi Fort', link: './Rajmachi.html' },
];
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const searchButton = document.getElementById("search-button");

window.addEventListener("DOMContentLoaded", function() {
  resultBox.style.display = "none"; // Hide the result box on page load or first visit
});

function showSearchResults() {
  let result = [];
  let input = inputBox.value.trim(); // Trim leading/trailing whitespace
  if (input.length) {
    result = availableKeywords.filter((keywordObj) => {
      const firstWord = keywordObj.keyword.split(' ')[0].toLowerCase(); // Extract the first word
      return firstWord.includes(input.toLowerCase());
    });
  }
  resultBox.innerHTML = ""; // Clear previous results
  if (result.length) {
    result.forEach((keywordObj) => {
      let li = document.createElement("li");
      let link = document.createElement("a"); // Create hyperlink element
      link.href = keywordObj.link; // Set the href attribute
      link.textContent = keywordObj.keyword; // Set the link text
      li.appendChild(link); // Append the link to the list item
      resultBox.appendChild(li);
    });
    resultBox.style.display = "block"; // Show the result box
  } else {
    resultBox.innerHTML = ""; // Clear previous results
    resultBox.style.display = "none"; // Hide the result box
  }
}

function openTopMatchingLink() {
  const inputValue = inputBox.value.trim().toLowerCase();
  if (inputValue.length) {
    const topMatch = availableKeywords.find((keywordObj) => {
      return keywordObj.keyword.toLowerCase().includes(inputValue);
    });
    if (topMatch) {
      window.open(topMatch.link, "_blank"); // Open link in a new tab
    }
  }
}

inputBox.addEventListener("input", showSearchResults);

inputBox.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    openTopMatchingLink();
  }
});

searchButton.addEventListener("click", openTopMatchingLink);

const sliderImages = document.querySelectorAll('.cont1 .slider img');
const prevArrow = document.querySelector('.cont1 .prev-arrow');
const nextArrow = document.querySelector('.cont1 .next-arrow');
let currentImageIndex = 0;
let isPaused = false;

// image slider 

function showNextImage() {
  if (!isPaused) {
    // Hide the current image
    sliderImages[currentImageIndex].style.opacity = '0';

    // Move to the next image index
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;

    // Show the next image
    sliderImages[currentImageIndex].style.opacity = '1';
  }
}

function showPreviousImage() {
  if (!isPaused) {
    // Hide the current image
    sliderImages[currentImageIndex].style.opacity = '0';

    // Move to the previous image index
    currentImageIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;

    // Show the previous image
    sliderImages[currentImageIndex].style.opacity = '1';
  }
}

function pauseSlider() {
  isPaused = true;
}

function resumeSlider() {
  isPaused = false;
}

// Set the interval for automatic image sliding
const intervalId = setInterval(showNextImage, 6000); // Change image every 3 seconds (adjust as needed)

// Event listeners for navigation arrows
prevArrow.addEventListener('click', showPreviousImage);
nextArrow.addEventListener('click', showNextImage);

// Event listeners for pausing and resuming on image mouseover
sliderImages.forEach(image => {
  image.addEventListener('mouseover', pauseSlider);
  image.addEventListener('mouseout', resumeSlider);
});

// title  

Splitting();

// footer 

document.addEventListener("DOMContentLoaded", function() {
  var footer = document.querySelector(".footer");

  function showFooter() {
    var contentHeight = document.querySelector(".content").offsetHeight;
    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (yOffset > contentHeight - windowHeight) {
      footer.classList.add("show");
    } else {
      footer.classList.remove("show");
    }
  }

  window.addEventListener("scroll", showFooter);
});

// code for forts list 

var tableBody = document.querySelector('#forts-table tbody');

// Sort the keywords alphabetically
availableKeywords.sort(function(a, b) {
  return a.keyword.localeCompare(b.keyword);
});

// Generate table rows for each fort
availableKeywords.forEach(function(keyword) {
  var row = document.createElement('tr');
  var nameCell = document.createElement('td');
  var linkCell = document.createElement('td');
  var link = document.createElement('a');

  nameCell.textContent = keyword.keyword;
  link.href = keyword.link;
  link.textContent = 'Visit';

  linkCell.appendChild(link);
  row.appendChild(nameCell);
  row.appendChild(linkCell);
  tableBody.appendChild(row);
});
  });

// forts 

