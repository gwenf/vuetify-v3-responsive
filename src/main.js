import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(store)

app.mount('#app')
