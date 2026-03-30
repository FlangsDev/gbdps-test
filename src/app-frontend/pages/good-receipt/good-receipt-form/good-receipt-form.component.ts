import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-good-receipt-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './good-receipt-form.component.html',
  styleUrl: './good-receipt-form.component.css'
})
export class GoodReceiptFormComponent {
  formData = {
    partNumber: '',
    batchNumber: 'PRO-2603-0012',
    serialNumber: '',
    quantity: 0,
    unit: '',
    materialDescription: ''
  };

  showPartMenu = false;
  showUnitMenu = false;

  partsList = [
    { partNum: 'PN-1001A', desc: '310 LITRE OXYGEN BOTTLE' },
    { partNum: 'PN-2022B', desc: 'TURBO OIL 2380' },
    { partNum: 'PN-9988X', desc: 'HYDRAULIC FLUID 41' },
    { partNum: 'PN-5566G', desc: 'ENGINE GASKET KIT' },
  ];

  serialOptions = ['SN-12345', 'SN-23456', 'SN-34567', 'SN-45678', 'SN-56789'];
  units = ['EA', 'SET', 'LTR', 'CAN', 'BOX', 'KG'];

  constructor(private router: Router) {}

  togglePartMenu() { this.showPartMenu = !this.showPartMenu; this.showUnitMenu = false; }
  toggleUnitMenu() { this.showUnitMenu = !this.showUnitMenu; this.showPartMenu = false; }

  setPart(pn: string) {
    this.formData.partNumber = pn;
    const found = this.partsList.find(p => p.partNum === pn);
    if (found) {
      this.formData.materialDescription = found.desc;
    }
    this.showPartMenu = false;
  }

  setUnit(u: string) {
    this.formData.unit = u;
    this.showUnitMenu = false;
  }

  onSubmit() {
    alert('GR Data Saved!');
    this.router.navigate(['/gr-gi/gr']);
  }

  onCancel() {
    this.router.navigate(['/gr-gi/gr']);
  }
}
