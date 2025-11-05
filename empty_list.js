// empty_list.js
// When the DOM is ready, check #bip39-list. If it has no <li> children,
// write "Empty_list" into the controls div (if present) or insert a message.

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('bip39-list');
  if (!list) return;

  const liElements = list.querySelectorAll('li');
  if (liElements.length > 0) return; // nothing to do

  // Prefer the controls div that is a child of the list (per current markup)
  let controlsDiv = list.querySelector('div');

  // Fallback: look for a controls div inside the container
  if (!controlsDiv) {
    const container = document.querySelector('.container');
    controlsDiv = container ? container.querySelector('div') : null;
  }

  if (controlsDiv) {
    // Replace controls content with the message
    controlsDiv.textContent = 'Empty_list';
    controlsDiv.setAttribute('aria-live', 'polite');
  } else {
    // If no suitable div found, create a message element and insert above the list
    const msg = document.createElement('div');
    msg.textContent = 'Empty_list';
    msg.style.textAlign = 'center';
    msg.style.margin = '12px 0';
    msg.setAttribute('aria-live', 'polite');
    list.parentNode.insertBefore(msg, list);
  }
});
