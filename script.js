document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('responsibility-matrix');
    
    // Add dynamic functionality if needed, e.g., ability to edit cells
    table.addEventListener('click', (event) => {
        const cell = event.target;

        // Only editable if it's a responsibility cell
        if (cell.classList.contains('role')) {
            const oldValue = cell.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = oldValue;
            cell.textContent = '';
            cell.appendChild(input);

            input.focus();

            input.addEventListener('blur', () => {
                const newValue = input.value.trim();
                cell.textContent = newValue || oldValue; // Reset if empty
                input.remove();
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                }
            });
        }
    });
});
