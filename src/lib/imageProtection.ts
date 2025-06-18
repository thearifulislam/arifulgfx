export const protectImage = (imgElement: HTMLImageElement) => {
  // Prevent right-click
  imgElement.addEventListener('contextmenu', (e) => e.preventDefault());
  
  // Prevent drag and drop
  imgElement.addEventListener('dragstart', (e) => e.preventDefault());
  
  // Prevent copy
  imgElement.addEventListener('copy', (e) => e.preventDefault());
  
  // Add CSS to prevent selection
  imgElement.style.userSelect = 'none';
  imgElement.style.webkitUserSelect = 'none';
  imgElement.style.webkitTouchCallout = 'none';
  
  // Disable save image as
  imgElement.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
    }
  });
};

// Function to protect all images on the page
export const protectAllImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(protectImage);
}; 