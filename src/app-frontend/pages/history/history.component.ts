import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ActivityLog {
  id: number;
  timestamp: Date;
  user: string;
  action: string;
  module: string;
  detail: string;
  ipAddress: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  searchQuery = '';
  filterCategory = '';
  filterDate = '';
  showCategoryMenu = false;

  categories = [
    'Upload BC', 'Upload Scan', 'Good Receipt', 'Good Issue',
    'Adjustment', 'Stock Opname', 'Login',
    'Laporan Pemasukan Barang', 'Laporan Pengeluaran Barang', 'Laporan Mutasi Barang'
  ];

  logs: ActivityLog[] = [
    { id: 1,  timestamp: new Date('2026-03-10T10:55:00'), user: 'Admin', action: 'Upload',   module: 'Upload BC',                   detail: 'Upload file BC_2.0_Maret2026.xlsx berhasil (48 records)',           ipAddress: '192.168.1.10' },
    { id: 2,  timestamp: new Date('2026-03-10T10:48:20'), user: 'Admin', action: 'Submit',   module: 'Good Receipt',                detail: 'GR #GR-2026-0312 dicatat untuk Part QE54964',                      ipAddress: '192.168.1.10' },
    { id: 3,  timestamp: new Date('2026-03-10T10:30:10'), user: 'Admin', action: 'Submit',   module: 'Adjustment',                  detail: 'Adjustment BC 2.0 No.Daftar 001/BC2.0/2024 - Qty: -3',            ipAddress: '192.168.1.10' },
    { id: 4,  timestamp: new Date('2026-03-10T10:12:05'), user: 'Admin', action: 'Upload',   module: 'Upload Scan',                 detail: 'Upload scan dokumen DOC-2026-031.pdf berhasil',                    ipAddress: '192.168.1.10' },
    { id: 5,  timestamp: new Date('2026-03-10T09:55:44'), user: 'Admin', action: 'Submit',   module: 'Good Issue',                  detail: 'GI #GI-2026-0218 dicatat untuk Part BDM000015',                   ipAddress: '192.168.1.10' },
    { id: 6,  timestamp: new Date('2026-03-10T09:40:30'), user: 'Admin', action: 'Export',   module: 'Laporan Mutasi Barang',        detail: 'Unduh Laporan Mutasi Barang format Excel - Maret 2026',           ipAddress: '192.168.1.10' },
    { id: 7,  timestamp: new Date('2026-03-10T09:35:10'), user: 'Admin', action: 'Export',   module: 'Laporan Mutasi Barang',        detail: 'Unduh Laporan Mutasi Barang format PDF - Maret 2026',             ipAddress: '192.168.1.10' },
    { id: 8,  timestamp: new Date('2026-03-10T09:22:18'), user: 'Admin', action: 'Submit',   module: 'Stock Opname',                detail: 'Stock Opname Q1-2026 disimpan - 3 item selisih terdeteksi',       ipAddress: '192.168.1.10' },
    { id: 9,  timestamp: new Date('2026-03-10T08:31:00'), user: 'Admin', action: 'Login',    module: 'Login',                       detail: 'Berhasil login ke sistem GBDPS-APP',                               ipAddress: '192.168.1.10' },
    { id: 10, timestamp: new Date('2026-03-09T16:05:22'), user: 'Admin', action: 'Upload',   module: 'Upload BC',                   detail: 'Upload gagal: format file tidak sesuai (BC_Feb.xls)',             ipAddress: '192.168.1.10' },
    { id: 11, timestamp: new Date('2026-03-09T15:47:10'), user: 'Admin', action: 'Submit',   module: 'Good Receipt',                detail: 'GR #GR-2026-0311 dicatat untuk Part B700C1AB',                    ipAddress: '192.168.1.10' },
    { id: 12, timestamp: new Date('2026-03-09T14:30:00'), user: 'Admin', action: 'Export',   module: 'Laporan Pemasukan Barang',     detail: 'Unduh Laporan Pemasukan Barang format PDF - Feb 2026',            ipAddress: '192.168.1.10' },
    { id: 13, timestamp: new Date('2026-03-09T14:15:00'), user: 'Admin', action: 'Export',   module: 'Laporan Pemasukan Barang',     detail: 'Unduh Laporan Pemasukan Barang format Excel - Feb 2026',          ipAddress: '192.168.1.10' },
    { id: 14, timestamp: new Date('2026-03-09T13:15:55'), user: 'Admin', action: 'Submit',   module: 'Good Issue',                  detail: 'GI #GI-2026-0217 dicatat untuk Part QE54964',                     ipAddress: '192.168.1.10' },
    { id: 15, timestamp: new Date('2026-03-09T11:05:30'), user: 'Admin', action: 'Export',   module: 'Laporan Pengeluaran Barang',   detail: 'Unduh Laporan Pengeluaran Barang format PDF - Feb 2026',          ipAddress: '192.168.1.10' },
    { id: 16, timestamp: new Date('2026-03-09T10:50:00'), user: 'Admin', action: 'Export',   module: 'Laporan Pengeluaran Barang',   detail: 'Unduh Laporan Pengeluaran Barang format Excel - Feb 2026',        ipAddress: '192.168.1.10' },
  ];

  get filteredLogs(): ActivityLog[] {
    return this.logs.filter(log => {
      const matchSearch = !this.searchQuery ||
        log.detail.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        log.action.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        log.module.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchCat  = !this.filterCategory || log.module === this.filterCategory;
      const matchDate = !this.filterDate ||
        log.timestamp.toISOString().startsWith(this.filterDate);
      return matchSearch && matchCat && matchDate;
    });
  }

  toggleCategoryMenu() { this.showCategoryMenu = !this.showCategoryMenu; }
  setCategory(val: string) { this.filterCategory = val; this.showCategoryMenu = false; }

  getActionIcon(action: string): string {
    const icons: Record<string, string> = {
      Upload:  'fa-cloud-arrow-up',
      Submit:  'fa-floppy-disk',
      Export:  'fa-file-arrow-down',
      Login:   'fa-right-to-bracket',
    };
    return icons[action] ?? 'fa-clock-rotate-left';
  }

  countByModule(): number {
    return new Set(this.logs.map(l => l.module)).size;
  }
}
