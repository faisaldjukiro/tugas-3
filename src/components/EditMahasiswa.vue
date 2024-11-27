<template>
    <div class="container my-5">
        <h2 class="mb-4 text-center">Edit Mahasiswa</h2>
        <form @submit.prevent="submitForm" class="bg-light p-4 rounded shadow-sm">
            <div class="mb-3">
                <label for="nim" class="form-label">NIM</label>
                <input v-model="mahasiswa.nim" type="text" id="nim" class="form-control" disabled />
            </div>
            <div class="mb-3">
                <label for="nama_lengkap" class="form-label">Nama Lengkap</label>
                <input v-model="mahasiswa.nama_lengkap" type="text" id="nama_lengkap" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="prodi" class="form-label">Prodi</label>
                <input v-model="mahasiswa.prodi" type="text" id="prodi" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="no_hp" class="form-label">No HP</label>
                <input v-model="mahasiswa.no_hp" type="text" id="no_hp" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="alamat" class="form-label">Alamat</label>
                <input v-model="mahasiswa.alamat" type="text" id="alamat" class="form-control" required />
            </div>
            <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-success">Simpan</button>
                <button type="button" class="btn btn-secondary" @click="cancelEdit">Batal</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            mahasiswa: {
                nim: '',
                nama_lengkap: '',
                prodi: '',
                no_hp: '',
                alamat: ''
            }
        };
    },
    mounted() {
        this.getMahasiswa();
    },
    methods: {
        getMahasiswa() {
            const nim = this.$route.params.nim;
            axios.get(`http://localhost:8000/api/mahasiswa/${nim}`)
                .then(response => {
                    this.mahasiswa = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        submitForm() {
            const nim = this.mahasiswa.nim;
            axios.put(`http://localhost:8000/api/mahasiswa/edit/${nim}`, this.mahasiswa)
                .then(response => {
                    this.$router.push('/');
                })
                .catch(error => {
                    console.log(error);
                });
        },
        cancelEdit() {
            this.$router.push('/');
        }
    }
};
</script>
