import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master-barang',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './master-barang.component.html',
  styleUrl: './master-barang.component.css'
})
export class MasterBarangComponent {
  searchKeyword = '';
  filterSatuan = '';
  
  isFormOpen = false;
  isEditing = false;
  editingIndex = -1;

  formData = {
    partNumber: '',
    description: '',
    satuan: ''
  };

  masterData = [
    { partNumber: 'PN-1001A', description: '310 LITRE OXYGEN BOTTLE', satuan: 'SET' },
    { partNumber: 'PN-2022B', description: 'TURBO OIL 2380', satuan: 'LTR' },
    { partNumber: 'PN-9988X', description: 'HYDRAULIC FLUID 41', satuan: 'LTR' },
    { partNumber: 'PN-3344C', description: 'AIRCRAFT TIRE 737', satuan: 'PCS' },
    { partNumber: 'PN-5566D', description: 'BRAKE LINING KIT', satuan: 'SET' },
    { partNumber: 'PN-7788E', description: 'SEALANT PR-1422', satuan: 'EA' },
    { partNumber: 'PN-1122F', description: 'RIVET NAS1097', satuan: 'BOX' },
    { partNumber: 'PN-4455G', description: 'SAFETY WIRE 0.032', satuan: 'ROLL' },
  ];

  get uniqueSatuan() {
    return [...new Set(this.masterData.map(item => item.satuan))].sort();
  }

  get filteredData() {
    return this.masterData.filter(item => {
      const matchSearch = !this.searchKeyword ||
        item.partNumber.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchKeyword.toLowerCase());
      const matchSatuan = !this.filterSatuan || item.satuan === this.filterSatuan;
      return matchSearch && matchSatuan;
    });
  }

  openAddForm() {
    this.isEditing = false;
    this.editingIndex = -1;
    this.formData = { partNumber: '', description: '', satuan: '' };
    this.isFormOpen = true;
  }

  openEditForm(index: number) {
    const realIndex = this.masterData.indexOf(this.filteredData[index]);
    this.isEditing = true;
    this.editingIndex = realIndex;
    this.formData = { ...this.masterData[realIndex] };
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  saveForm() {
    if (!this.formData.partNumber || !this.formData.description || !this.formData.satuan) {
      return;
    }
    
    // Konversi satuan jadi uppercase secara seragam
    this.formData.satuan = this.formData.satuan.toUpperCase();

    if (this.isEditing && this.editingIndex >= 0) {
      this.masterData[this.editingIndex] = { ...this.formData };
    } else {
      this.masterData.unshift({ ...this.formData });
    }
    this.isFormOpen = false;
  }

  deleteItem(index: number) {
    const realIndex = this.masterData.indexOf(this.filteredData[index]);
    if (realIndex >= 0) {
      if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        this.masterData.splice(realIndex, 1);
      }
    }
  }

  // Dropdown state for filter
  filterSatuanOpen = false;

  selectFilterSatuan(val: string) {
    this.filterSatuan = val;
    this.filterSatuanOpen = false;
  }

  exportData() {
    const headers = ['Part Number', 'Material Description', 'Satuan'];
    const rows = this.filteredData.map(item => [
      `"${item.partNumber}"`,
      `"${item.description}"`,
      `"${item.satuan}"`
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'master_data_barang.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
