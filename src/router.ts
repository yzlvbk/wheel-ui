import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/doc/Doc.vue'
import SwitchDemo from "./views/doc/demos/SwitchDemo.vue"
import ButtonDemo from "./views/doc/demos/ButtonDemo.vue"
import DialogDemo from "./views/doc/demos/DialogDemo.vue"
import TabsDemo from "./views/doc/demos/TabsDemo.vue"
import DocDemo from "./views/doc/demos/DocDemo.vue"
import Markdown from './components/Markdown.vue'
import { h } from 'vue'

const history = createWebHashHistory()

const md = (filename) => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: "into", component: md("fast") },
                { path: "fast", component: md("fast") },
                { path: "use", component: md("fast") },

                { path: 'switch', component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ]
        }
    ]
})

