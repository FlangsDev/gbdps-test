import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adjustment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adjustment.component.html',
  styleUrls: ['./adjustment.component.css']
})
export class AdjustmentComponent {

  // Dropdown state
  showTipeBCMenu = false;
  showNoDaftarMenu = false;

  // Options
  tipeBCOptions: string[] = ['BC 2.0', 'BC 2.3', 'BC 2.5', 'BC 2.7'];
  noDaftarOptions: string[] = ['001/BC2.0/2024', '002/BC2.0/2024', '003/BC2.3/2024'];

  // Form data
  formData = {
    tipeBC: '',
    noDaftar: '',
    kodeBarang: '',
    nomorAJU: '',
    jumlah: null as number | null,
    satuan: ''
  };

  toggleTipeBCMenu() {
    this.showTipeBCMenu = !this.showTipeBCMenu;
    this.showNoDaftarMenu = false;
  }

  toggleNoDaftarMenu() {
    if (!this.formData.tipeBC) return;
    this.showNoDaftarMenu = !this.showNoDaftarMenu;
    this.showTipeBCMenu = false;
  }

  setTipeBC(value: string) {
    this.formData.tipeBC = value;
    this.formData.noDaftar = ''; // reset No. Daftar when Tipe BC changes
    this.showTipeBCMenu = false;
  }

  setNoDaftar(value: string) {
    this.formData.noDaftar = value;
    this.showNoDaftarMenu = false;
  }

  onSubmit() {
    console.log('Adjustment submitted:', this.formData);
    // Handle submission logic here
  }

  onReset() {
    this.formData = {
      tipeBC: '',
      noDaftar: '',
      kodeBarang: '',
      nomorAJU: '',
      jumlah: null,
      satuan: ''
    };
    this.showTipeBCMenu = false;
    this.showNoDaftarMenu = false;
  }
}
