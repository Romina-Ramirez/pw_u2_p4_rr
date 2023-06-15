const arreglo = [
    { nombre: 'Xavier', apellido: 'Aguilar' },
    { nombre: 'Romina', apellido: 'Ramírez' },
    { nombre: 'Pedro', apellido: 'Pascal' },
    { nombre: 'Alex', apellido: 'Cueva' },
    { nombre: 'Nathy', apellido: 'Andrade' },
    { nombre: 'Cami', apellido: 'Freire' },
    { nombre: 'Jaime', apellido: 'Tapia' },
    { nombre: 'Vale', apellido: 'Moreira' },
    { nombre: 'Pablo', apellido: 'Suntaxi' },
    { nombre: 'Mike', apellido: 'Garcia' }
]

console.log(arreglo)

const app = Vue.createApp({
    data() {
        return {
            miArreglo: arreglo,
            nombre: undefined,
            apellido: undefined
        }
    },

    methods: {
        // agregarEstudiante(evento) {
        //     console.log('Vamos a agregar')
        //     console.log(this.nombre)
        //     console.log(evento)
        //     console.log(evento.charCode)
        //     if (evento.charCode == 13) {
        //         console.log('Presiono Enter')
        //         const nuevoEstudiante = {
        //             nombre: this.nombre,
        //             apellido: 'Nuevo apellido'
        //         }
        //         this.miArreglo.unshift(nuevoEstudiante)
        //     } else {
        //         console.log('No es  Enter')
        //     }
        // },
        agregarEstudiante2() {
            console.log('Vamos a agregar')
            const nuevoEstudiante = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            this.miArreglo.unshift(nuevoEstudiante)
        }
    }
})

app.mount('#miApp2')