let libros = JSON.parse(localStorage.getItem('libros')) || []
const agregarLibro = () => {
    const nombreLibro = document.getElementById('nombreLibro').value.trim()
    const autor = document.getElementById('autor').value.trim()
    const Año = document.getElementById('Año').value.trim()
    const categorias = document.getElementById('Categorias').value.trim()

    if (!nombreLibro || !autor || !Año || !categorias) {
        alert("Todos los campos deben estar completos.")
        return 
    
    }
}