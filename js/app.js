console.log(Vue)

//OptionApi
const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p>Desde Vue.JS</p>
    // <p>{{1+1}}</p>
    // `

    // data permite declarar propiedades reactivas, que permiten vincular informacion del html con js
    // propiedades reactivas sirven para manejar un modelo
    data() {
        return {
            nombre: 'Romina',
            apellido: 'Ramírez',
            mensaje: 'Hola mundo 2 desde Vue.JS'
        }
    },

    //metodos permite declarar metodos js
    methods: {
        cambiarNombre() {
            console.log('Boton cambiar nombre')
            //this para propiedades reactivas dentro de js, no en html
            this.nombre = 'Maite'
        },
        cambiarApellido() {
            console.log('Boton cambiar apellido')
            this.apellido = 'Tapia'
        }
    }
})

app.mount('#miApp')