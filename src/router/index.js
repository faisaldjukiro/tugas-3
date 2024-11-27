import { createRouter, createWebHistory } from 'vue-router';
import MahasiswaList from '../components/MahasiswaList.vue';
import TambahMahasiswa from '../components/TambahMahasiswa.vue';
import EditMahasiswa from '../components/EditMahasiswa.vue';

const routes = [
  { path: '/', component: MahasiswaList },
  { path: '/tambah-mahasiswa', component: TambahMahasiswa },
  { path: '/edit-mahasiswa/:nim', component: EditMahasiswa },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
