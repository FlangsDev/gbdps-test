import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { 
    path: '', 
    loadComponent: () => import('./shared/layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'master-barang', loadComponent: () => import('./pages/master-barang/master-barang.component').then(m => m.MasterBarangComponent) },
      { path: 'recording/inward', loadComponent: () => import('./pages/inward-report/inward-report.component').then(m => m.InwardReportComponent) },
      { path: 'recording/outward', loadComponent: () => import('./pages/outward-report/outward-report.component').then(m => m.OutwardReportComponent) },
      { path: 'recording/adjustment', loadComponent: () => import('./pages/adjustment/adjustment.component').then(m => m.AdjustmentComponent) },
      { path: 'recording/adjustment-v2', loadComponent: () => import('./pages/adjustment-v2/adjustment-v2.component').then(m => m.AdjustmentV2Component) },
      { path: 'recording/stock-opname', loadComponent: () => import('./pages/stock-opname/stock-opname.component').then(m => m.StockOpnameComponent) },
      { path: 'recording/saldo-awal', loadComponent: () => import('./pages/saldo-awal/saldo-awal.component').then(m => m.SaldoAwalComponent) },
      { path: 'gr-gi/gr', loadComponent: () => import('./pages/good-receipt/good-receipt.component').then(m => m.GoodReceiptComponent) },
      { path: 'gr-gi/gr/form', loadComponent: () => import('./pages/good-receipt/good-receipt-form/good-receipt-form.component').then(m => m.GoodReceiptFormComponent) },
      { path: 'gr-gi/gi', loadComponent: () => import('./pages/good-issue/good-issue.component').then(m => m.GoodIssueComponent) },
      { path: 'gr-gi/gi/form', loadComponent: () => import('./pages/good-issue/good-issue-form/good-issue-form.component').then(m => m.GoodIssueFormComponent) },
      { path: 'upload/scan', loadComponent: () => import('./pages/upload-scan/upload-scan.component').then(m => m.UploadScanComponent) },
      { path: 'upload/bc', loadComponent: () => import('./pages/upload-bc/upload-bc.component').then(m => m.UploadBCComponent) },
      { path: 'reports/position', loadComponent: () => import('./pages/position-report/position-report.component').then(m => m.PositionReportComponent) },
      { path: 'reports/mutation', loadComponent: () => import('./pages/mutation-report/mutation-report.component').then(m => m.MutationReportComponent) },
      { path: 'history', loadComponent: () => import('./pages/history/history.component').then(m => m.HistoryComponent) },
      { path: 'feedback', loadComponent: () => import('./pages/feedback/feedback.component').then(m => m.FeedbackComponent) },
      { path: 'guidance', loadComponent: () => import('./pages/guidance/guidance.component').then(m => m.GuidanceComponent) },
    ]
  },
  { path: '**', redirectTo: 'login' }
];
