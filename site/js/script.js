document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.location.pathname.split('/').pop().replace('.html', '');
    if (currentPage === 'index') {
        document.querySelector('[data-page="home"]').classList.add('active');
    } else {
        document.querySelector(`[data-page="${currentPage}"]`).classList.add('active');
    }
    
    window.scrollTo(0, 0);
});
