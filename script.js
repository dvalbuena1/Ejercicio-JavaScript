// Punto 1
function secret(data, func, key) {
    return func(data, key);
}

function encrypt(data, key) {
    data.forEach((value, index, array) => {
        array[index] += key
    });
    return data
}

function decrypt(data, key) {
    data.forEach((value, index, array) => {
        array[index] -= key
    });
    return data
}

let arr = [1, 2, 3, 1];

console.log("Punto 1")
arr = secret(arr, encrypt, 1)
console.log("Encrypt", arr)
arr = secret(arr, decrypt, 1)
console.log("Decrypt", arr)

// Punto 2
const fib = (i) => i <= 0 ? 0 : i === 1 ? 1 : fib(i - 1) + fib(i - 2)

console.log("Punto 2")
console.log("Fibonacci de 10 =", fib(10))

//Punto 3
async function productoMasPedido() {
    try {
        let response = await fetch('https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json')
        const producto = await response.json()

        response = await fetch('https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json')
        const pedidos = await response.json()

        let map = new Map()
        pedidos.forEach(element => {
            if (map.has(element.idproducto)) {
                map.set(element.idproducto, map.get(element.idproducto) + parseInt(element.cantidad));
            }
            else {
                map.set(element.idproducto, parseInt(element.cantidad));
            }
        })

        let max = 0;
        let id;
        for (let [key, value] of map) {
            if (max < value) {
                max = value
                id = key
            }
        }

        console.log(producto[id - 1].nombreProducto, max);
    } catch (error) {
        console.log(error);
    }
}

console.log("Punto 3")
productoMasPedido()