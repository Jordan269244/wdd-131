const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCg_5nRSq8BiuH2klRLHVP_uJZjS5owEX68KVj7xHXLohCkXxvhwhSzC9vUbAJOFbRfWz4h26s6GbP/pub?output=csv';

const fetchCSVData = async () => {
  try {
    const response = await fetch(SHEET_CSV_URL);
    const data = await response.text();
    const rows = data.split('\n').map(row => row.split(',')); // Split CSV into rows and columns
    renderData(rows);
  } catch (error) {
    console.error('Error fetching CSV:', error);
  }
};

const renderData = (rows) => {
  const container = document.getElementById('data-container');
  container.innerHTML = rows
    .map(row => {
      const name = row[0]; // Name column
      const imageUrl = row[1]; // Image URL column
      return `
        <div>
          <p>${name}</p>
          <img src="${imageUrl}" alt="${name}" style="max-width: 100%; height: auto;" />
        </div>
      `;
    })
    .join('');
};

// Call the function to fetch and display data
fetchCSVData();
