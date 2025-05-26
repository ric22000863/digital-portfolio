const imageModal = document.getElementById('imageModal');
imageModal.addEventListener('show.bs.modal', function (event) {
    const img = event.relatedTarget;
    const modalImage = imageModal.querySelector('#modalImage');
    const modalTitle = imageModal.querySelector('.modal-title');

    modalImage.src = img.getAttribute('data-bs-image');
    modalImage.alt = img.alt;
    modalTitle.textContent = img.getAttribute('data-bs-caption');
});
