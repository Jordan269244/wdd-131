//Link to Google Sheet, You can view it the permissions are on
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCg_5nRSq8BiuH2klRLHVP_uJZjS5owEX68KVj7xHXLohCkXxvhwhSzC9vUbAJOFbRfWz4h26s6GbP/pub?output=csv';

//Load everything so it is in the correct place, then appear
document.body.classList.add('loading');

window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});



//Fetch and parse CSV data
const fetchCSVData = async () => {
    try {
        const response = await fetch(SHEET_CSV_URL);
        const data = await response.text();
        const rows = parseCSV(data); // Parse CSV manually to handle edge cases
        renderData(rows);
    } catch (error) {
        console.error('Error fetching CSV:', error);
    }
};

// Parse CSV manually to handle quoted cells with commas and newlines
const parseCSV = (data) => {
    const rows = [];
    let currentRow = [];
    let inQuotes = false;
    let currentCell = '';

    for (let i = 0; i < data.length; i++) {
        const char = data[i];

        if (char === '"') {
            inQuotes = !inQuotes; // Toggle quoted state
        } else if (char === ',' && !inQuotes) {
            currentRow.push(currentCell.trim());
            currentCell = '';
        } else if (char === '\n' && !inQuotes) {
            currentRow.push(currentCell.trim());
            rows.push(currentRow);
            currentRow = [];
            currentCell = '';
        } else {
            currentCell += char;
        }
    }

    // Push the last row
    if (currentCell || currentRow.length > 0) {
        currentRow.push(currentCell.trim());
        rows.push(currentRow);
    }

    return rows;
};

// Render data onto the webpage
const renderData = (rows) => {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous content

    rows.forEach((row, index) => {
        const text = row[0] || ''; // First column: text content
        const imageUrls = row[1]?.split(',').map(url => url.trim()) || []; // Second column: image URLs

        // Create a wrapper div for each row
        const rowDiv = document.createElement('div');
        rowDiv.className = `row-${index}`;

        // Add text if available
        if (text) {
            const textParagraph = document.createElement('p');
            textParagraph.className = 'text-from-sheet';
            textParagraph.textContent = text;
            rowDiv.appendChild(textParagraph);
        }

        // Add images if available
        imageUrls.forEach((url, imgIndex) => {
            if (url) {
                const img = document.createElement('img');
                img.src = url;
                img.alt = `Row ${index} Image ${imgIndex}`;
                img.className = 'imported-image';
                img.dataset.row = index;
                img.dataset.img = imgIndex;
                rowDiv.appendChild(img);
            }
        });

        // Append the row to the containers
        container.appendChild(rowDiv);
    });
};

// Fetch and display the data
fetchCSVData();



