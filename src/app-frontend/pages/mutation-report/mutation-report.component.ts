import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MutationItem {
  no: number;
  kodeBarang: string;
  namaBarang: string;
  satuan: string;
  jumlahBarang: number;
  saldoAwal: number;
  pemasukanBC23: number;
  pemasukanBC27In: number;
  pengeluaranBC30: number;
  penyesuaian: number;
  saldoAkhir: number;
  hasilPencacahan: number;
  jumlahSelisih: number;
  keterangan: string;
}

@Component({
  selector: 'app-mutation-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mutation-report.component.html',
  styleUrls: ['./mutation-report.component.css']
})
export class MutationReportComponent {
  showDownloadMenu = false;
  
  items: MutationItem[] = [
    { no: 1, kodeBarang: 'QE54964', namaBarang: 'MAIN WHEEL ASSEMBLY', satuan: 'EA', jumlahBarang: 1, saldoAwal: 10, pemasukanBC23: 5, pemasukanBC27In: 0, pengeluaranBC30: 0, penyesuaian: 0, saldoAkhir: 15, hasilPencacahan: 15, jumlahSelisih: 0, keterangan: 'Sesuai' },
    { no: 2, kodeBarang: 'BDM000015', namaBarang: 'EASTMAN TURBO OIL 2197', satuan: 'LTR', jumlahBarang: 1, saldoAwal: 55, pemasukanBC23: 0, pemasukanBC27In: 0, pengeluaranBC30: 5, penyesuaian: 0, saldoAkhir: 50, hasilPencacahan: 50, jumlahSelisih: 0, keterangan: 'Sesuai' },
    { no: 3, kodeBarang: 'B700C1AB', namaBarang: '310 LITRE OXYGEN BOTTLE', satuan: 'SET', jumlahBarang: 1, saldoAwal: 20, pemasukanBC23: 5, pemasukanBC27In: 5, pengeluaranBC30: 10, penyesuaian: 0, saldoAkhir: 20, hasilPencacahan: 20, jumlahSelisih: 0, keterangan: 'Sesuai' },
  ];

  toggleDownloadMenu() {
    this.showDownloadMenu = !this.showDownloadMenu;
  }
}
