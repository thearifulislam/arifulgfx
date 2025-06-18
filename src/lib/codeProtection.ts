export const protectCode = () => {
  // Disable right click
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
      (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
    ) {
      e.preventDefault();
    }
  });

  // Disable developer tools
  const devtools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    if (widthThreshold || heightThreshold) {
      document.body.innerHTML = 'Developer tools are disabled';
    }
  };

  // Check for dev tools periodically
  setInterval(devtools, 1000);

  // Disable console
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.debug = () => {};
  console.info = () => {};
}; 