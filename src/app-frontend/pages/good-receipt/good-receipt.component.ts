import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-good-receipt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './good-receipt.component.html',
  styleUrl: './good-receipt.component.css'
})
export class GoodReceiptComponent {
  historyList = [
    { date: '12-03-2026', batch: '000001', pengirim: 'PT MAJU JAYA', partNum: 'PN-1001A', desc: '310 LITRE OXYGEN BOTTLE', qty: 50, nomorDaftar: '189914', tanggalDaftar: '04-03-2026', used: 0, unit: 'SET' },
    { date: '11-03-2026', batch: '000002', pengirim: 'FAST AVIATION', partNum: 'PN-2022B', desc: 'TURBO OIL 2380', qty: 100, nomorDaftar: '189915', tanggalDaftar: '05-03-2026', used: 20, unit: 'LTR' },
    { date: '10-03-2026', batch: '000003', pengirim: 'PT GLOBAL SUKSES', partNum: 'PN-9988X', desc: 'HYDRAULIC FLUID 41', qty: 25, nomorDaftar: '189916', tanggalDaftar: '06-03-2026', used: 5, unit: 'LTR' },
  ];

  globalSearch = '';
  colSearch: any = {
    date: '', batch: '', pengirim: '', partNum: '', desc: '', qty: '', nomorDaftar: '', tanggalDaftar: '', used: '', unit: ''
  };

  get filteredItems() {
    return this.historyList.filter(item => {
      if (this.globalSearch) {
        const term = this.globalSearch.toLowerCase();
        const matchGlobal = Object.values(item).some(val => 
          val && val.toString().toLowerCase().includes(term)
        );
        if (!matchGlobal) return false;
      }
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

  selectedPrintItem: any = null;

  constructor(private router: Router) {}

  navigateToAddForm() {
    this.router.navigate(['/gr-gi/gr/form']);
  }

  printGR(item: any) {
    this.selectedPrintItem = item;
    setTimeout(() => {
      window.print();
      this.selectedPrintItem = null;
    }, 100);
  }
}
