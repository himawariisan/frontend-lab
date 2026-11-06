let details = document.getElementById('details');
let wrap = details.parentElement;
let tooltip = null;

details.addEventListener('mouseover', () => {
    details.style.backgroundColor = '#1b2208';
    details.style.border = '2px solid #D2FF00';
    details.style.boxShadow = '0 0 14px #D2FF00';

    if (tooltip === null) {
        tooltip = document.createElement('div');
        tooltip.className = 'details-tooltip';
        tooltip.textContent = 'Thank you for your time! Please specify the purpose of your inquiry';
        wrap.appendChild(tooltip);
    }
});

details.addEventListener('mouseout', () => {
    details.style.backgroundColor = '';
    details.style.border = '';
    details.style.boxShadow = '';

    if (tooltip !== null) {
        wrap.removeChild(tooltip);
        tooltip = null;
    }
});
