import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PositionItem {
  no: number;
  kodeBarang: string;
  namaBarang: string;
  satuan: string;
  saldoAwal: number;
  masuk: number;
  keluar: number;
  penyesuaian: number;
  saldoAkhir: number;
  stockOpname: number;
  selisih: number;
}

@Component({
  selector: 'app-position-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './position-report.component.html',
  styleUrls: ['./position-report.component.css']
})
export class PositionReportComponent {
  items: PositionItem[] = [
    { no: 1, kodeBarang: 'B700C1AB', namaBarang: '310 LITRE OXYGEN BOTTLE', satuan: 'SET', saldoAwal: 50, masuk: 20, keluar: 10, penyesuaian: 0, saldoAkhir: 60, stockOpname: 60, selisih: 0 },
    { no: 2, kodeBarang: 'BDM000015', namaBarang: 'EASTMAN TURBO OIL 2197', satuan: 'LTR', saldoAwal: 200, masuk: 80, keluar: 55, penyesuaian: -3, saldoAkhir: 222, stockOpname: 220, selisih: -2 },
  ];
}
