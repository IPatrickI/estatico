document.addEventListener('DOMContentLoaded', () => {
    const btnTemas = document.getElementById('btn-temas');
    const panelTemas = document.getElementById('panel-temas');

    if (btnTemas && panelTemas) {
        
        btnTemas.addEventListener('click', (e) => { 
            e.preventDefault(); 
            panelTemas.classList.toggle('active'); 
        });

        
        document.addEventListener('click', (e) => {
            if (!panelTemas.contains(e.target) && !btnTemas.contains(e.target)) {
                panelTemas.classList.remove('active');
            }
        });
    }
});