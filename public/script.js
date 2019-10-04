new Vue({
    el:'#app',
    data:{
        total:0,
        products:[
            { title:" product1 ", id:1, price: 9.99 },
            { title:" product2 ", id:2, price: 5.66 },
            { title:" product3 ", id:3, price: 4.54 }
        ],
        cart:[],
    },
    methods:{
        addToCart(product) {
             this.total += product.price;
             var found = false
             for(var i = 0; i < this.cart.length; i++) {
                if(this.cart[i].id === product.id) {
                    this.cart[i].qty++;
                    found = true
                }
             }
             if (!found) {
                this.cart.push({
                    title:product.title,
                    id:product.id,
                    price:product.price,
                    qty:1
                });
             } 
        },
        inc(item) {
            item.qty++;
            this.total += item.price;
        },
        dec(item) {
            item.qty--;
            this.total -= item.price;
            if(item.qty <= 0) {
                var i = this.cart.indexOf(item);
                this.cart.splice(i, 1);
            }
        }
    },
    filters:{
        currency(price) {
            return "$".concat(price.toFixed(2));
        }
    }
})

