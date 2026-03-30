import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adjustment-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adjustment-v2.component.html',
  styleUrl: './adjustment-v2.component.css'
})
export class AdjustmentV2Component {
  showUploadForm = false;
  showHistory = false;

  items = [
    { no: '1', kodeBarang: 'PN-00100', jumlah: 15 },
    { no: '2', kodeBarang: 'PN-00101', jumlah: -5 },
    { no: '3', kodeBarang: 'PN-00102', jumlah: 10 },
  ];

  histories = [
    { tanggal: '12 Mar 2026, 14:30', namaFile: 'ADJ_Tahunan_2026.xlsx', user: 'Admin Gudang', status: 'SUCCESS' },
    { tanggal: '11 Mar 2026, 09:15', namaFile: 'ADJ_Parsial_Maret.xlsx', user: 'Admin Gudang', status: 'SUCCESS' },
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
