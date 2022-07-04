import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import TodosView from '../views/TodosView.vue'
import EstatisticasView from '../views/EstatisticasView.vue'
import EditoraView from '../views/EditoraView.vue'
import AutorView from '../views/AutorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },

    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView
    },

    {
      path: '/todos',
      name: 'todos',
      component: TodosView
    },
    {
      path: '/Estatisticas',
      name: 'Estatisticas',
      component: EstatisticasView
    },
    {
      path: '/Editora',
      name: 'Editora',
      component: EditoraView
    },
    {
      path: '/Autor',
      name: 'Autor',
      component: AutorView
    },
  ]
});

export default router;
