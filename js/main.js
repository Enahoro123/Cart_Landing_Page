const store = new Vuex.Store({

    state: {
      message: 'Hello from Naija',
      count: 0
    },
    mutations: {
        increment(state, payload) {
            state.count+=payload;
        }
    },
    actions: {
        increment(state, payload) {
            state.commit('increment', payload)
        }
    },
    getters: {
        message(state) {
            return state.message.toUpperCase();
        }, counter(state) {
            return state.count;
        }
    }

  });


   new Vue ({
    el: '#app',
    data(){
      return {
        welcome: 'Hello world'
      }
        
      
    },
    computed: {
      message(){
        return store.getters.message;
      },
      count(){
          return store.getters.counter;
      }
    },
    methods: {
        pressed() {
            store.dispatch('increment', 10);
        }
    }

  });