<script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Assuming successful login
        window.location.href = 'dashboard.html';
    });

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Assuming successful signup
        window.location.href = 'dashboard.html';
    });
    
 document.querySelectorAll('.filters select').forEach(select => {
  select.addEventListener('change', filterCourses);
});

function filterCourses() {
  // Get selected values
  const category = document.getElementById('category-filter').value;
  const difficulty = document.getElementById('difficulty-filter').value;
  const rating = document.getElementById('rating-filter').value;

  // Filter logic to display matching courses
}

{/* function searchCourses() {
    const searchQuery = document.getElementById('course-search').value.toLowerCase();
    
    // Loop through all course cards and hide those that don't match the search query
    document.querySelectorAll('.course-card').forEach(card => {
      const courseTitle = card.querySelector('.course-title').textContent.toLowerCase();
      if (courseTitle.includes(searchQuery)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  } */}
  </script>