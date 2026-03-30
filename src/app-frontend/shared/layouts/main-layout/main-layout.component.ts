import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  title = 'gbdps-app';
  isSidebarCollapsed = false;
  activeMenu = 'Beranda';
  currentTime = '';
  currentDate = '';
  timerInterval: any;
  isProfileOpen = false;
  isGuidanceOpen = false;

  menuItems: any[] = [
    { label: 'Beranda', icon: 'fa-solid fa-house', route: '/dashboard' },
    { label: 'Master Data Barang', icon: 'fa-solid fa-database', route: '/master-barang' },
    { 
      label: 'Pencatatan Barang', 
      icon: 'fa-solid fa-cube', 
      children: [
        { label: 'Laporan Pemasukan Barang', route: '/recording/inward', icon: 'fa-solid fa-arrow-right-to-bracket' },
        { label: 'Laporan Pengeluaran Barang', route: '/recording/outward', icon: 'fa-solid fa-arrow-up-right-from-square' }
      ]
    },
    { 
      label: 'Laporan', 
      icon: 'fa-solid fa-chart-column', 
      children: [
        { label: 'Laporan Mutasi', route: '/reports/mutation', icon: 'fa-solid fa-file-contract' },
        { label: 'Adjustment', route: '/recording/adjustment-v2', icon: 'fa-solid fa-code-compare' },
        { label: 'Stock Opname', route: '/recording/stock-opname', icon: 'fa-solid fa-bullseye' },
        { label: 'Saldo Awal', route: '/recording/saldo-awal', icon: 'fa-solid fa-file-invoice-dollar' }
      ]
    },
    {
      label: 'GR & GI',
      icon: 'fa-solid fa-right-left',
      children: [
        { label: 'Good Receipt (GR)', route: '/gr-gi/gr', icon: 'fa-solid fa-file-import' },
        { label: 'Good Issue (GI)', route: '/gr-gi/gi', icon: 'fa-solid fa-file-export' }
      ]
    },
    { label: 'Upload Scan Dokumen', icon: 'fa-solid fa-file-arrow-up', route: '/upload/scan' },
    { label: 'Upload Data BC', icon: 'fa-solid fa-file-excel', route: '/upload/bc' },
    { label: 'Histori', icon: 'fa-solid fa-clock-rotate-left', route: '/history' },
    { label: 'Feedback', icon: 'fa-regular fa-comment-dots', route: '/feedback' },
    { label: 'Guidance', icon: 'fa-solid fa-circle-question', route: '/guidance' }
  ];

  ngOnInit() {
    this.updateTime();
    this.timerInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  updateTime() {
    const now = new Date();
    // Gunakan padStart untuk memastikan selalu 2 digit menit/detik
    this.currentTime = now.toLocaleTimeString('id-ID', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/\./g, ':');
    this.currentDate = now.toLocaleDateString('id-ID', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    }).toUpperCase();
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleSubMenu(item: any) {
    if (this.isSidebarCollapsed) {
      this.isSidebarCollapsed = false;
    }
    const wasExpanded = item.isExpanded;
    // Tutup semua yang lain
    this.menuItems.forEach(i => i.isExpanded = false);
    // Buka yang di-klik jika sebelumnya tertutup
    item.isExpanded = !wasExpanded;
  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
    this.isGuidanceOpen = false;
  }

  toggleGuidance() {
    this.isGuidanceOpen = !this.isGuidanceOpen;
    this.isProfileOpen = false;
  }
}
