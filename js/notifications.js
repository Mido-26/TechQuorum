function showToast(type, message, len = 3000) {
    const toastBox = document.getElementById('toast-box');
    const toast = document.createElement('div');

    toast.classList.add('toast', type);
    toast.innerHTML = `<i class="fa-solid fa-${type === 'error' ? 'circle-xmark' : type === 'warning' ? 'circle-exclamation' : 'circle-check'} ${type}"></i> ${message}`;

    toastBox.style.display = "flex";
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
        toastBox.style.display = "none";
    }, len);
}
