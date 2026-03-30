import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-good-issue',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './good-issue.component.html',
  styleUrl: './good-issue.component.css'
})
export class GoodIssueComponent {
  historyList = [
    { id: 1, date: '08-03-2026', issueNumber: 'GI-20260308-001', batchNumber: '000001', destination: 'GMF Hangar 4', partNumber: 'PN-1001A', description: 'DOCUMENT DESC/OXYGEN BOTTLE', qty: 10, unit: 'SET', registrationNumber: 'BC27-000123', registrationDate: '08-03-2026', shippedTo: 'PT. Garuda MRO', docNo: '0001/GMF/20260308' },
    { id: 2, date: '10-03-2026', issueNumber: 'GI-20260310-002', batchNumber: '000002', destination: 'GMF Hangar 2', partNumber: 'PN-1002B', description: 'EASTMAN TURBO OIL 2197', qty: 5, unit: 'LTR', registrationNumber: 'BC27-000124', registrationDate: '10-03-2026', shippedTo: 'PT. Lion Air Technik', docNo: '0002/GMF/20260310' },
  ];

  globalSearch = '';
  colSearch: any = {
    date: '', issueNumber: '', batchNumber: '', destination: '', partNumber: '', description: '', qty: '', unit: '', registrationNumber: '', registrationDate: ''
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

  constructor(private router: Router) {
    const saved = localStorage.getItem('gi_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.historyList = [...parsed, ...this.historyList];
      } catch(e) {}
    }
  }

  navigateToAddForm() {
    this.router.navigate(['/gr-gi/gi/form']);
  }

  printGI(item: any) {
    // 1 Item per print, mapping exactly the history record representing 1 issue per item
    this.selectedPrintItem = {
      ...item,
      items: [
        { no: 1, batchNumber: item.batchNumber, partNumber: item.partNumber, description: item.description, serialNumber: 'SN-MOCK', workOrderNumber: 'WO-MOCK', qty: item.qty, unit: item.unit, currency: item.currency || 'USD', valueCustom: item.valueCustom || '0' }
      ],
      containers: [
        { no: 1, containerType: 'Box', length: 50, width: 40, height: 30, grossWeight: 10, markings: 'Fragile' }
      ],
      docInfo: { no: item.docNo || `0001/GMF/${item.date.split('-').reverse().join('')}`, date: item.date }
    };

    setTimeout(() => {
      window.print();
      this.selectedPrintItem = null;
    }, 100);
  }
}
