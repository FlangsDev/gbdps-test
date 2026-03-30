import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-good-issue-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './good-issue-form.component.html',
  styleUrl: './good-issue-form.component.css'
})
export class GoodIssueFormComponent {
  shipTo = {
    name: '',
    address: ''
  };

  docInfo = {
    date: new Date().toISOString().split('T')[0],
    no: `0001/GMF/${new Date().toISOString().split('T')[0].replace(/-/g, '')}`,
    shippedBy: '',
    awbNo: '',
    flightNo: '',
    registrationNumber: '',
    registrationDate: ''
  };

  items: any[] = [
    { no: 1, batchNumber: '', partNumber: '', description: '', serialNumber: '', workOrderNumber: '', qty: 1, unit: '', currency: 'USD', valueCustom: '', showBatchMenu: false, showCurrencyMenu: false }
  ];

  containers: any[] = [
    { no: 1, containerType: '', length: 0, width: 0, height: 0, grossWeight: 0, markings: '' }
  ];

  batchesDb = [
    { batchNo: '000001', pn: 'PN-1001A', desc: '310 LITRE OXYGEN BOTTLE', sn: 'SN-998', unit: 'SET' },
    { batchNo: '000002', pn: 'PN-2022B', desc: 'TURBO OIL 2380', sn: 'SN-441', unit: 'LTR' },
    { batchNo: '000003', pn: 'PN-9988X', desc: 'HYDRAULIC FLUID 41', sn: 'SN-112', unit: 'LTR' }
  ];

  currencies = ['USD', 'EUR', 'IDR', 'SGD', 'JPY'];

  constructor(private router: Router) {}

  addItemRow() {
    this.items.push({
      no: this.items.length + 1,
      batchNumber: '',
      partNumber: '',
      description: '',
      serialNumber: '',
      workOrderNumber: '',
      qty: 1,
      unit: '',
      currency: 'USD',
      valueCustom: '',
      showBatchMenu: false,
      showCurrencyMenu: false
    });
  }

  removeItemRow(index: number) {
    this.items.splice(index, 1);
    this.items.forEach((item, i) => item.no = i + 1);
  }

  addContainerRow() {
    this.containers.push({
      no: this.containers.length + 1,
      containerType: '',
      length: 0,
      width: 0,
      height: 0,
      grossWeight: 0,
      markings: ''
    });
  }

  removeContainerRow(index: number) {
    this.containers.splice(index, 1);
    this.containers.forEach((box, i) => box.no = i + 1);
  }

  toggleItemBatchMenu(item: any) {
    item.showBatchMenu = !item.showBatchMenu;
  }

  selectItemBatch(item: any, batch: string) {
    const found = this.batchesDb.find(b => b.batchNo === batch);
    if (found) {
      item.batchNumber = found.batchNo;
      item.partNumber = found.pn;
      item.description = found.desc;
      item.serialNumber = found.sn;
      item.unit = found.unit;
    }
    item.showBatchMenu = false;
  }

  toggleItemCurrencyMenu(item: any) {
    item.showCurrencyMenu = !item.showCurrencyMenu;
  }

  selectItemCurrency(item: any, curr: string) {
    item.currency = curr;
    item.showCurrencyMenu = false;
  }

  onCancel() {
    this.router.navigate(['/gr-gi/gi']);
  }

  onPrintSubmit() {
    alert('GI Data Saved! Proceeding to Print View...');
    
    // Convert form items into individual history rows
    let currentHistory = JSON.parse(localStorage.getItem('gi_history') || '[]');
    
    this.items.forEach((item, index) => {
      currentHistory.unshift({
        id: Date.now() + index,
        date: this.docInfo.date,
        docNo: this.docInfo.no,
        batchNumber: item.batchNumber || 'N/A',
        partNumber: item.partNumber || 'N/A',
        description: item.description,
        qty: item.qty,
        unit: item.unit,
        shippedTo: this.shipTo.name,
        currency: item.currency,
        valueCustom: item.valueCustom,
        registrationNumber: this.docInfo.registrationNumber,
        registrationDate: this.docInfo.registrationDate
      });
    });
    
    localStorage.setItem('gi_history', JSON.stringify(currentHistory));
    this.router.navigate(['/gr-gi/gi']);
  }
}
