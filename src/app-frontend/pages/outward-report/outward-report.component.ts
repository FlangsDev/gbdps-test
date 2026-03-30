import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface OutwardItem {
  no: number;
  nomorPengeluaran: string;
  batchNumber: string;
  jenis: string;
  nomorDaftar: string;
  tanggalDaftar: string;
  penerima: string;
  namaPemilik: string;
  kodeBarang: string;
  namaBarang: string;
  satuan: string;
  jumlah: number;
  valuta: string;
  nilaiBarang: string;
  scanStatus: string;
}

@Component({
  selector: 'app-outward-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './outward-report.component.html',
  styleUrls: ['./outward-report.component.css']
})
export class OutwardReportComponent {
  showDownloadMenu = false;
  showFilterMenu = false;
  showPageMenu = false;
  pageSize = 10;
  activeFilter = 'Semua Jenis Dokumen';

  items: OutwardItem[] = [
    { no: 1, nomorPengeluaran: '0001/GMF/20260202', batchNumber: '000001', jenis: '40', nomorDaftar: 'OUT0001', tanggalDaftar: '02-02-2026', penerima: 'SINGAPORE AIRLINES', namaPemilik: 'SINGAPORE AIRLINES', kodeBarang: '9700322', namaBarang: 'OXYGEN BOTTLE', satuan: 'SET', jumlah: 4, valuta: 'USD', nilaiBarang: '12,500,000', scanStatus: 'Belum ada' },
    { no: 2, nomorPengeluaran: '0002/GMF/20260201', batchNumber: '000002', jenis: '30', nomorDaftar: 'OUT0002', tanggalDaftar: '01-02-2026', penerima: 'CATHAY PACIFIC', namaPemilik: 'CATHAY PACIFIC', kodeBarang: '96M0015', namaBarang: 'TURBO OIL', satuan: 'LTR', jumlah: 44, valuta: 'USD', nilaiBarang: '9,000,000', scanStatus: 'Belum ada' },
    { no: 3, nomorPengeluaran: '0003/GMF/20260131', batchNumber: '000003', jenis: '30', nomorDaftar: 'OUT0003', tanggalDaftar: '31-01-2026', penerima: 'GARUDA INDONESIA', namaPemilik: 'GARUDA INDONESIA', kodeBarang: 'B003902E', namaBarang: 'WATER FINDING PASTE', satuan: 'KG', jumlah: 40, valuta: 'USD', nilaiBarang: '20,000,000', scanStatus: 'PDF' },
  ];

  toggleDownloadMenu() { this.showDownloadMenu = !this.showDownloadMenu; this.showFilterMenu = false; this.showPageMenu = false; }
  toggleFilterMenu() { this.showFilterMenu = !this.showFilterMenu; this.showDownloadMenu = false; this.showPageMenu = false; }
  togglePageMenu() { this.showPageMenu = !this.showPageMenu; this.showDownloadMenu = false; this.showFilterMenu = false; }

  setFilter(filter: string) { this.activeFilter = filter; this.showFilterMenu = false; }
  setPageSize(size: number) { this.pageSize = size; this.showPageMenu = false; }

  // Search States
  globalSearch = '';
  colSearch: any = {
    nomorPengeluaran: '', batchNumber: '', jenis: '', nomorDaftar: '',
    tanggalDaftar: '', penerima: '', namaPemilik: '', kodeBarang: '',
    namaBarang: '', satuan: '', jumlah: '', valuta: '', nilaiBarang: ''
  };

  get filteredItems() {
    return this.items.filter(item => {
      // 1. Dropdown Filter
      if (this.activeFilter !== 'Semua Jenis Dokumen' && item.jenis !== this.activeFilter.replace('BC ', '')) return false;

      // 2. Global Search
      if (this.globalSearch) {
        const term = this.globalSearch.toLowerCase();
        const matchGlobal = Object.values(item).some(val => 
          val && val.toString().toLowerCase().includes(term)
        );
        if (!matchGlobal) return false;
      }

      // 3. Column Search
      for (const key in this.colSearch) {
        if (this.colSearch[key]) {
          const term = this.colSearch[key].toLowerCase();
          const itemVal = (item as any)[key];
          if (!itemVal || !itemVal.toString().toLowerCase().includes(term)) {
            return false;
          }
        }
      }
      return true;
    });
  }
}
