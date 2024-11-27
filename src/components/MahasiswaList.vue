<template>
    <div class="container my-4">
        <h2 class="mb-4 text-center">Daftar Mahasiswa</h2>
        <div class="text-start">
            <button @click="tambahMahasiswa" class="btn btn-primary btn-sm mb-2">Tambah Mahasiswa</button>
        </div>
        <div class="table-responsive">
            <div class="card shadow">
                <table class="table table-striped table-bordered table-hover">
                    <thead class="table-secondary">
                        <tr>
                            <th>NIM</th>
                            <th>Nama Lengkap</th>
                            <th>Prodi</th>
                            <th>No HP</th>
                            <th>Alamat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="mahasiswa in mahasiswaList" :key="mahasiswa.nim">
                            <td>{{ mahasiswa.nim }}</td>
                            <td>{{ mahasiswa.nama_lengkap }}</td>
                            <td>{{ mahasiswa.prodi }}</td>
                            <td>{{ mahasiswa.no_hp }}</td>
                            <td>{{ mahasiswa.alamat }}</td>
                            <td>
                                <button @click="editMahasiswa(mahasiswa.nim)"
                                    class="btn btn-warning btn-sm me-2">Edit</button>
                                <button @click="hapusMahasiswa(mahasiswa.nim)"
                                    class="btn btn-danger btn-sm">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            mahasiswaList: [],
        };
    },
    mounted() {
        this.getMahasiswa();
    },
    methods: {

        getMahasiswa() {
            axios.get('http://localhost:8000/api/mahasiswa')
                .then(response => {
                    this.mahasiswaList = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        editMahasiswa(nim) {
            this.$router.push(`/edit-mahasiswa/${nim}`);
        },
        hapusMahasiswa(nim) {
            axios.delete(`http://localhost:8000/api/mahasiswa/hapus/${nim}`)
                .then(response => {
                    this.getMahasiswa();
                })
                .catch(error => {
                    console.log(error);
                });
        },

        tambahMahasiswa() {
            this.$router.push('/tambah-mahasiswa');
        }
    }
};
</script>
