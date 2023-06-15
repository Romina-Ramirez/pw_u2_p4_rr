const app = Vue.createApp({
    data() {
        return {
            resultMostrado: true,
            pantalla: ''
        }
    },

    methods: {
        mostrar(elemento) {
            if (this.resultMostrado == true) {
                this.pantalla = elemento;
                this.resultMostrado = false
            } else {
                this.pantalla += elemento;
            }
        },

        calcular() {
            try {
                resultado = eval(this.pantalla);
                if (isNaN(resultado)) {
                    throw new Error("Invalid expression");
                }
                this.pantalla = resultado;
            } catch (error) {
                this.pantalla = "ERROR";
            }
            this.resultMostrado = true;
        }
    }
})

app.mount('#miApp4')