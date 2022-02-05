new Vue ({
    el: '#app',
    data: {
        cart: [],
        menu: [
            {
                id: 1,
                title: 'Lap', 
                desc: 'Some keys and algorithm stuff', 
                image: '/images/ikhsan-baihaqi-4QXE7YQy7eo-unsplash.jpg'
            }
        ],
        
    },
    mounted() {
        this.getCarts();
      },
      watch: {
        cart: {
          handler: function(updatedList) {
            localStorage.setItem('cart', JSON.stringify(updatedList));
          }
        }
    },
    methods: {
        // add(){
        //     const id = '1';
        //         this.cart.push( this.menu.filter( item => item.id === id ) );
        //     console.log(this.cart)
        // }
        getCarts() {
            if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
            }
        },
        add: function (e) {

            for (i = 0; i < this.menu.length; i++) {
              if (this.menu[i].id == e.target.getAttribute('data-id')) {
                this.cart.push(this.menu[i]);
                break;
              }
            }
            console.log(this.cart)
        }
    }
}) ;