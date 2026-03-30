import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  categories = ['Saran Fitur', 'Laporan Bug', 'Pertanyaan Umum', 'Lainnya'];
  selectedCategory = 'Saran Fitur';
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.isDropdownOpen = false;
  }
}
