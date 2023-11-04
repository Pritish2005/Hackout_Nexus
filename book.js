document.getElementById('searchButton').addEventListener('click', function() {
    const bookFrom = document.getElementById('bookFrom').value;
    const bookTo = document.getElementById('bookTo').value;
    const date = document.getElementById('date').value;
  
    // Mocked destination image
    const destinationImages = {
      'Ghaziabad': './Book2.png',
      'Dwarka': './book.png',
      // Add more destination images as needed
    };
  
    // Logic to determine which image to show (based on 'bookTo')
    const imageUrl = destinationImages[bookTo];
  
    if (imageUrl) {
      const destinationImage = document.getElementById('destinationImage');
      destinationImage.src = imageUrl;
  
      const result = document.getElementById('result');
      result.style.display = 'block';
    } else {
      alert('Destination not found. Please try a different location.');
    }
  });
  