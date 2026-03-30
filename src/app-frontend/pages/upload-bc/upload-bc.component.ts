import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-bc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-bc.component.html',
  styleUrls: ['./upload-bc.component.css']
})
export class UploadBCComponent {
  isDragging = false;

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
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      console.log('Files dropped:', files[0].name);
    }
  }

  onUpload() {
    alert('Data BC uploaded successfully!');
  }
}
