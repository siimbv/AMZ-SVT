document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('submitButton').addEventListener('click', function() {
        const username1 = document.getElementById('username1').value;
        const username2 = document.getElementById('username2').value;

        // ... (rest of your AJAX logic)

        fetch('newformula.php', {
            method: 'POST',
           body: new URLSearchParams({ username1: username1, username2: username2 }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.text())
        .then(response => {
            document.getElementById('resultContainer').innerHTML = response;
            document.getElementById('loadingOverlay').style.display = 'none';
        })
        .catch(error => {
            console.error('An error occurred:', error);
            document.getElementById('loadingOverlay').style.display = 'none';
        });
    });
    function uploadFile() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
    
        if (file) {
            const reader = new FileReader();
    
            reader.onload = function(e) {
                const data = e.target.result;
                const currentDate = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format
                const fileName = `excel_${currentDate}.xlsx`; // Construct the filename
                saveExcelFile(data, fileName);
            };
    
            reader.readAsBinaryString(file);
        } else {
            alert('Please select an Excel file.');
        }
    }
    

    
    function saveExcelFile(data, fileName) {    
        // Here, you can save the data to your server using a suitable mechanism.
        // For demonstration, let's just log the file name.
        console.log('File saved:', fileName);
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        function uploadFile() {
            const fileInput = document.getElementById('fileInput');
            
            if (fileInput.files.length === 0) {
                // Show error message if no file is selected
                document.getElementById('errorContainer').style.display = 'block';
                return;
            }
    
            const file = fileInput.files[0];
        
            if (file) {
                const reader = new FileReader();
        
                reader.onload = function(e) {
                    const data = e.target.result;
                    const currentDate = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format
                    const fileName = `excel_${currentDate}.xlsx`; // Construct the filename
                    saveExcelFile(data, fileName);
                };
        
                reader.readAsBinaryString(file);
            } else {
                alert('Please select an Excel file.');
            }
        }
        
        function saveExcelFile(data, fileName) {
            // Here, you can save the data to your server using a suitable mechanism.
            // For demonstration, let's just log the file name.
            console.log('File saved:', fileName);
        }
    });
    
        
});
