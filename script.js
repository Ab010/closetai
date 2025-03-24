document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('imageUpload');
    const uploadedImagesDiv = document.getElementById('uploadedImages');

    imageUpload.addEventListener('change', handleImageUpload);

    function handleImageUpload(event) {
        const files = event.target.files;

        if (files && files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '200px'; // Adjust size as needed
                img.style.margin = '10px';
                uploadedImagesDiv.appendChild(img);
            };

            reader.readAsDataURL(files[0]);
        }
    }
});