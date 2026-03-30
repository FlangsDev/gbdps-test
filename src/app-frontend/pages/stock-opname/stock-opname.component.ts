import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-opname',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-opname.component.html',
  styleUrl: './stock-opname.component.css'
})
export class StockOpnameComponent {
  showUploadForm = false;
  showHistory = false;

  items = [
    { no: '1', kodeBarang: 'PN-00100', jumlah: 150 },
    { no: '2', kodeBarang: 'PN-00101', jumlah: 195 },
    { no: '3', kodeBarang: 'PN-00102', jumlah: 45 },
    { no: '4', kodeBarang: 'PN-00103', jumlah: 302 },
    { no: '5', kodeBarang: 'PN-00104', jumlah: 80 },
  ];

  histories = [
    { tanggal: '12 Mar 2026, 14:30', namaFile: 'SO_Tahunan_2026.xlsx', user: 'Admin Gudang', status: 'SUCCESS' },
    { tanggal: '11 Mar 2026, 09:15', namaFile: 'SO_Parsial_Maret.xlsx', user: 'Admin Gudang', status: 'SUCCESS' },
    { tanggal: '05 Feb 2026, 10:00', namaFile: 'SO_Bulanan_Feb.xlsx', user: 'Super Admin', status: 'SUCCESS' },
  ];

  toggleUploadForm() {
    this.showUploadForm = true;
    this.showHistory = false;
  }

  toggleHistory() {
    this.showHistory = true;
    this.showUploadForm = false;
  }

  closePanels() {
    this.showUploadForm = false;
    this.showHistory = false;
  }
}

