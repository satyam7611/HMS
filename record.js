// Load existing records from local storage when the page loads
document.addEventListener('DOMContentLoaded', loadRecords);

// Handle form submission
document.getElementById('ehr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const history = document.getElementById('patientHistory').value;
    const contact = document.getElementById('patientContact').value;

    if (name && age && history && contact) {
        const record = { name, age, history, contact };
        saveRecord(record);
        displayRecords();
        clearForm();
    } else {
        alert("Please fill all fields.");
    }
});

// Save patient record to local storage
function saveRecord(record) {
    let records = JSON.parse(localStorage.getItem('ehrRecords')) || [];
    records.push(record);
    localStorage.setItem('ehrRecords', JSON.stringify(records));
}

// Load patient records from local storage
function loadRecords() {
    displayRecords();
}

// Display all patient records
function displayRecords() {
    const records = JSON.parse(localStorage.getItem('ehrRecords')) || [];
    const recordsTable = document.getElementById('recordsBody');
    recordsTable.innerHTML = '';

    records.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.age}</td>
            <td>${record.history}</td>
            <td>${record.contact}</td>
            <td><button class="delete-btn" onclick="deleteRecord(${index})">Delete</button></td>
        `;
        recordsTable.appendChild(row);
    });
}

// Delete a patient record
function deleteRecord(index) {
    let records = JSON.parse(localStorage.getItem('ehrRecords')) || [];
    records.splice(index, 1);
    localStorage.setItem('ehrRecords', JSON.stringify(records));
    displayRecords();
}

// Clear the form after submission
function clearForm() {
    document.getElementById('ehr-form').reset();
}
