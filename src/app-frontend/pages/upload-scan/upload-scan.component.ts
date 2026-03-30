import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-scan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-scan.component.html',
  styleUrls: ['./upload-scan.component.css']
})
export class UploadScanComponent {
  selectedBC = '';
  selectedAJU = '';
  isDragging = false;
  
  showBCMenu = false;
  showAJUMenu = false;
  
  bcs = ['2.3', '2.5', '2.6', '2.7', '4.0'];
  ajus = ['AJU-001', 'AJU-002', 'AJU-003', 'AJU-004'];

  toggleBCMenu() { this.showBCMenu = !this.showBCMenu; this.showAJUMenu = false; }
  toggleAJUMenu() { this.showAJUMenu = !this.showAJUMenu; this.showBCMenu = false; }
  
  setBC(bc: string) { this.selectedBC = bc; this.showBCMenu = false; }
  setAJU(aju: string) { this.selectedAJU = aju; this.showAJUMenu = false; }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onUpload() {
    if (!this.selectedBC || !this.selectedAJU) {
       alert('Lengkapi field BC dan No. AJU terlebih dahulu!');
       return;
    }
    alert('Dokumen Scan uploaded successfully!');
  }
}
