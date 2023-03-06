const sendFile = () => {
    const fileInput = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    
    fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {console.log(result); return result})
    .catch(error => {
        console.error('Error:', error);
    });
}