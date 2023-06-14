const libros = []

const app = Vue.createApp({
    data() {
        return {
            arreglo: libros,
            titulo: '',
            autor: '',
            anio: '',
            numPaginas: '',
            minAnio: 1455,
            maxAnio: 2023
        }
    },

    methods: {
        ingresarLibro() {
            if (this.comprobarAnio() == true) {
                console.log('Agregamos un nuevo libro.')
                const nuevoLibro = {
                    titulo: this.titulo,
                    autor: this.autor,
                    anio: this.anio,
                    numPaginas: this.numPaginas
                }
                this.arreglo.push(nuevoLibro)
                this.borrarInputs()
            } else {
                this.anio = ''
            }
        },

        borrarInputs() {
            this.titulo = '',
                this.autor = '',
                this.anio = '',
                this.numPaginas = ''
        },

        comprobarAnio() {
            if (this.anio < this.minAnio || this.anio > this.maxAnio) {
                alert("Ingrese un año válido dentro del rango permitido (1455-2023).");
                return false;
            } else {
                return true;
            }
        }

    }
})

app.mount('#miApp3')