import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports:[CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'DSA Tracker', description: 'Track and practice DSA questions efficiently.' },
    { name: 'GitHub Explorer', description: 'Fetch GitHub user data using APIs.' },
    { name: 'Smart Car Parking', description: 'IoT-based parking management system.' }
  ];
}
