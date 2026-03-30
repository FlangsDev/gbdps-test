import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface InwardItem {
  no: number;
  nomorPemasukan: string;
  jenis: string;
  nomorDaftar: string;
  tanggalDaftar: string;
  nomorDokumen: string;
  pengirim: string;
  namaPemilik: string;
  kodeBarang: string;
  namaBarang: string;
  satuan: string;
  jumlah: number;
  nilaiBarang: string;
  valuta: string;
  scanStatus: string;
}

@Component({
  selector: 'app-inward-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inward-report.component.html',
  styleUrls: ['./inward-report.component.css']
})
export class InwardReportComponent {
  showDownloadMenu = false;
  showFilterMenu = false;
  showPageMenu = false;
  pageSize = 10;
  activeFilter = 'Semua Jenis Dokumen';

  items: InwardItem[] = [
    { no: 1, nomorPemasukan: '000001', jenis: '23', nomorDaftar: '189914', tanggalDaftar: '04-03-2026', nomorDokumen: 'INV-189914', pengirim: 'PT MAJU JAYA', namaPemilik: 'PT MAJU JAYA', kodeBarang: 'B700C1AB', namaBarang: '310 LITRE OXYGEN BOTTLE', satuan: 'SET', jumlah: 50, nilaiBarang: '10,500,000', valuta: 'IDR', scanStatus: 'Belum ada' },
    { no: 2, nomorPemasukan: '000002', jenis: '2.7IN', nomorDaftar: '189915', tanggalDaftar: '05-03-2026', nomorDokumen: 'INV-189915', pengirim: 'FAST AVIATION', namaPemilik: 'FAST AVIATION', kodeBarang: 'BDM000015', namaBarang: 'EASTMAN TURBO OIL 2197', satuan: 'LTR', jumlah: 200, nilaiBarang: '42,000,000', valuta: 'IDR', scanStatus: 'PDF' },
    { no: 3, nomorPemasukan: '000003', jenis: '23', nomorDaftar: '189916', tanggalDaftar: '06-03-2026', nomorDokumen: 'INV-189916', pengirim: 'PT GLOBAL SUKSES', namaPemilik: 'PT GLOBAL SUKSES', kodeBarang: 'QE54964', namaBarang: 'MAIN WHEEL ASSEMBLY', satuan: 'EA', jumlah: 16, nilaiBarang: '84,000,000', valuta: 'IDR', scanStatus: 'Belum ada' }
  ];

  toggleDownloadMenu() { this.showDownloadMenu = !this.showDownloadMenu; this.showFilterMenu = false; this.showPageMenu = false; }
  toggleFilterMenu() { this.showFilterMenu = !this.showFilterMenu; this.showDownloadMenu = false; this.showPageMenu = false; }
  togglePageMenu() { this.showPageMenu = !this.showPageMenu; this.showDownloadMenu = false; this.showFilterMenu = false; }

  setFilter(filter: string) { this.activeFilter = filter; this.showFilterMenu = false; }
  setPageSize(size: number) { this.pageSize = size; this.showPageMenu = false; }

  // Search States
  globalSearch = '';
  colSearch: any = {
    nomorPemasukan: '', jenis: '', nomorDaftar: '', tanggalDaftar: '',
    nomorDokumen: '', pengirim: '', namaPemilik: '', kodeBarang: '',
    namaBarang: '', satuan: '', jumlah: '', nilaiBarang: '', valuta: ''
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
