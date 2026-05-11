import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// interface User {
//   no: number;
//   username: string;
//   role: string;
//   email: string;
//   dateCreated: Date;
//   ac

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    searchKeyword = '';
    isFormOpen = false;
    isEditing = false;
    editingIndex = -1;

    formData = {
    namaPengguna: '',
    email: '',
    username: '',
    password: '',
    role: 'Admin',
    keterangan: ''
  };

  openEditForm(index: number) {
    const realIndex = this.masterData.indexOf(this.filteredData[index]);
    this.isEditing = true;
    this.editingIndex = realIndex;
    this.formData = { 
      namaPengguna: this.masterData[realIndex].namaPengguna || '',
      email: this.masterData[realIndex].email,
      username: this.masterData[realIndex].username,
      password: '', // do not populate password on edit by default
      role: this.masterData[realIndex].role,
      keterangan: this.masterData[realIndex].keterangan || ''
    };
    this.isFormOpen = true;
  }

  openAddForm() {
    this.isEditing = false;
    this.editingIndex = -1;
    this.formData = { namaPengguna: '', email: '', username: '', password: '', role: 'Admin', keterangan: '' };
    this.isFormOpen = true;
  }

    masterData: any[] = [
    { namaPengguna: 'Admin Satu', username: 'admin01', role: 'Administrator', email: 'admin01@company.com', dateCreated: '2025-05-01', keterangan: '' },
    { namaPengguna: 'Budi Saputra', username: 'budi.saputra', role: 'Supervisor', email: 'budi.saputra@company.com', dateCreated: '2025-05-03', keterangan: '' },
    { namaPengguna: 'Siti Rahma', username: 'siti.rahma', role: 'Staff', email: 'siti.rahma@company.com', dateCreated: '2025-05-05', keterangan: '' },
    { namaPengguna: 'Andika IT', username: 'andika.it', role: 'IT Support', email: 'andika.it@company.com', dateCreated: '2025-05-06', keterangan: '' },
    { namaPengguna: 'Rina Finance', username: 'rina.finance', role: 'Finance', email: 'rina.finance@company.com', dateCreated: '2025-05-08', keterangan: '' },
    { namaPengguna: 'Dimas Warehouse', username: 'dimas.warehouse', role: 'Warehouse', email: 'dimas.warehouse@company.com', dateCreated: '2025-05-10', keterangan: '' },
    { namaPengguna: 'Farhan QC', username: 'farhan.qc', role: 'Quality Control', email: 'farhan.qc@company.com', dateCreated: '2025-05-12', keterangan: '' },
    { namaPengguna: 'Nabila Proc', username: 'nabila.proc', role: 'Procurement', email: 'nabila.proc@company.com', dateCreated: '2025-05-14', keterangan: '' },
    ];

    get filteredData() {
        return this.masterData.filter(item => {
        const matchSearch =
        !this.searchKeyword ||
        item.username.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        item.email.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        (item.namaPengguna && item.namaPengguna.toLowerCase().includes(this.searchKeyword.toLowerCase())) ||
        item.role.toLowerCase().includes(this.searchKeyword.toLowerCase());

        return matchSearch;
     });
    }

    deleteItem(index: number) {
    const realIndex = this.masterData.indexOf(this.filteredData[index]);
    if (realIndex >= 0) {
      if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        this.masterData.splice(realIndex, 1);
        }
      }
    }

    closeForm() {
        this.isFormOpen = false;
    }

      saveForm() {
    if (!this.formData.username || !this.formData.email || !this.formData.role) {
      return;
    }

    const record = {
      namaPengguna: this.formData.namaPengguna,
      email: this.formData.email,
      username: this.formData.username,
      password: this.formData.password,
      role: this.formData.role,
      keterangan: this.formData.keterangan,
      dateCreated: ''
    };

    if (this.isEditing && this.editingIndex >= 0) {
      record.dateCreated = this.masterData[this.editingIndex].dateCreated;
      this.masterData[this.editingIndex] = record;
    } else {
      record.dateCreated = new Date().toISOString().split('T')[0];
      this.masterData.unshift(record);
    }
    this.isFormOpen = false;
  }



}
  