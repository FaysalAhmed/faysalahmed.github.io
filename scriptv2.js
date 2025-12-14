AOS.init({ duration: 1000, once: true });

// FUNCTION TO TOGGLE EXPERIENCE VISIBILITY
function toggleExperience() {
  const allItems = document.querySelectorAll('#experience-list .exp-item');
  const totalItems = allItems.length;
  const button = document.getElementById('show-more-btn');
  const firstHiddenIndex = 3;
  const hiddenCount = totalItems - firstHiddenIndex;

  if (button.innerText.includes("Show Less")) {
    // Hide extra items
    for (let i = firstHiddenIndex; i < totalItems; i++) {
      allItems[i].classList.add('hidden');
    }
    button.innerText = `Show ${hiddenCount} More Experiences`;
  } else {
    // Show all items
    for (let i = firstHiddenIndex; i < totalItems; i++) {
      allItems[i].classList.remove('hidden');
    }
    button.innerText = "Show Less";
  }
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
}

