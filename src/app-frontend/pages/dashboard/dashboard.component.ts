import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="welcome-banner">
        <div class="banner-content">
          <h2>Selamat Datang di GBDPS-APP!</h2>
          <p>Kelola inventaris, pantau laporan keluar-masuk barang, dan akses data Gudang Berikat Anda dengan mudah dan cepat.</p>
        </div>
        <div class="banner-icon">
          <i class="fa-solid fa-boxes-packing"></i>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-wrap green">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </div>
            <span class="stat-label">Pemasukan (Tahun ini)</span>
          </div>
          <span class="stat-value text-success">12</span>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-wrap red">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <span class="stat-label">Pengeluaran (Tahun ini)</span>
          </div>
          <span class="stat-value text-danger">5</span>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <div class="stat-icon-wrap purple">
              <i class="fa-solid fa-warehouse"></i>
            </div>
            <span class="stat-label">Stock Saat Ini</span>
          </div>
          <span class="stat-value text-purple">876</span>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="charts-container">
        <!-- Chart 1 -->
        <div class="chart-card">
          <h3 class="chart-title">Proporsi Dokumen Pabean (BC)</h3>
          <div class="chart-content">
            <div class="donut-chart composition-chart">
              <div class="donut-center">
                <span class="donut-label">Total Dok</span>
                <span class="donut-value">48</span>
              </div>
            </div>
            <div class="chart-legend">
              <div class="legend-item">
                <div class="legend-info"><span class="legend-dot" style="background: #0ea5e9;"></span>BC 2.3 (Pemasukan)</div>
                <span class="legend-pct">19 Dokumen</span>
              </div>
              <div class="legend-item">
                <div class="legend-info"><span class="legend-dot" style="background: #16a34a;"></span>BC 2.7 (Pemasukan)</div>
                <span class="legend-pct">17 Dokumen</span>
              </div>
              <div class="legend-item">
                <div class="legend-info"><span class="legend-dot" style="background: #f59e0b;"></span>BC 3.0 (Pengeluaran)</div>
                <span class="legend-pct">12 Dokumen</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .welcome-banner {
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
      border-radius: 16px;
      padding: 20px 30px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.4);
      position: relative;
      overflow: hidden;
    }
    
    .welcome-banner::after {
      content: "";
      position: absolute;
      top: -50%; right: -10%;
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%);
      border-radius: 50%;
      pointer-events: none;
    }

    .banner-content {
      position: relative;
      z-index: 2;
      max-width: 600px;
    }

    .banner-content h2 {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .banner-content p {
      font-size: 0.85rem;
      color: #e0f2fe;
      line-height: 1.4;
    }

    .banner-icon {
      font-size: 4.5rem;
      color: rgba(255,255,255,0.15);
      position: relative;
      z-index: 2;
      transform: rotate(-10deg);
      margin-right: 20px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .stat-card {
      background: #fff;
      padding: 16px 14px;
      border-radius: 12px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      box-shadow: 0 12px 25px -5px rgba(0,0,0,0.1);
      transform: translateY(-4px);
    }

    .stat-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .stat-icon-wrap {
      width: 40px; height: 40px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    .stat-icon-wrap.blue   { background: #e0f2fe; color: #0284c7; }
    .stat-icon-wrap.green  { background: #dcfce7; color: #16a34a; }
    .stat-icon-wrap.red    { background: #fee2e2; color: #dc2626; }
    .stat-icon-wrap.orange { background: #ffedd5; color: #ea580c; }
    .stat-icon-wrap.purple { background: #f3e8ff; color: #7c3aed; }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 600;
      line-height: 1.3;
    }

    .stat-value {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--text-main);
    }
    .text-success { color: #16a34a; }
    .text-danger  { color: #dc2626; }
    .text-orange  { color: #ea580c; }
    .text-purple  { color: #7c3aed; }

    /* Premium Donut Charts */
    .charts-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      max-width: 600px;
    }

    .chart-card {
      background: #fff;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid var(--border-color);
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }

    .chart-card:hover {
      box-shadow: 0 12px 25px -5px rgba(0,0,0,0.1);
    }

    .chart-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 12px;
    }

    .chart-content {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .donut-chart {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      position: relative;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }

    /* CSS Conic Gradients for pseudo-charts */
    .composition-chart { background: conic-gradient(#0ea5e9 0% 40%, #16a34a 40% 75%, #f59e0b 75% 100%); }
    .grgi-chart { background: conic-gradient(#10b981 0% 55%, #ef4444 55% 100%); }

    .donut-center {
      position: absolute;
      top: 50%; left: 50%;
      width: 84px; height: 84px;
      background: #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.06);
      text-align: center;
    }

    .donut-label {
      font-size: 0.62rem;
      color: var(--text-muted);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2px;
      line-height: 1.1;
      margin-bottom: 4px;
      padding: 0 5px;
    }

    .donut-value {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1;
    }

    .chart-legend {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .legend-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .legend-info {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: #475569;
      font-weight: 500;
    }

    .legend-dot {
      width: 12px; height: 12px;
      border-radius: 4px;
      flex-shrink: 0;
    }

    .legend-pct {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text-main);
    }

    @media (max-width: 900px) {
      .stats-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 600px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .welcome-card { padding: 24px 16px; }
    }
  `]
})
export class DashboardComponent {}
