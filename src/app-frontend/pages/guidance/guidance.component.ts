import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guidance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guidance.component.html',
  styleUrl: './guidance.component.css'
})
export class GuidanceComponent {
  sections: { [key: string]: boolean } = {
    cleanCode: false,
    techStack: false,
    folderStructure: false,
    namingConvention: false,
    gitRules: false,
    container: false,
    documentation: false
  };

  toggleSection(key: string) {
    this.sections[key] = !this.sections[key];
  }
}
