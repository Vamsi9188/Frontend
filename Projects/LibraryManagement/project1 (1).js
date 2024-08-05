document.getElementById('borrow-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(this);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form Submitted', data);

    alert('Form submitted successfully!');
    this.reset(); // Reset the form after submission
});
