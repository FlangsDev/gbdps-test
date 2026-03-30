import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adjustment-v2-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adjustment-v2-upload.component.html',
  styleUrl: './adjustment-v2-upload.component.css'
})
export class AdjustmentV2UploadComponent {
  constructor(private router: Router) {}

  closePanels() {
    this.router.navigate(['/recording/adjustment-v2']);
  }
}
