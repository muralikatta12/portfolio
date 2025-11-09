import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  
  allProjects: Project[] = [
    {
      title: 'Smart Car Parking System',
      description: 'An IoT-based solution for real-time slot monitoring and management, providing availability status via a web interface.',
      technologies: ['Python', 'Raspberry Pi', 'AWS IoT', 'Node.js'],
      category: 'IoT/Embedded',
      githubLink: 'https://github.com/muralikatta/smart-parking-iot'
    },
    {
      title: 'Enterprise Task Manager (Angular)',
      description: 'A robust single-page application built for corporate task assignment and tracking using Angular services and reactive forms.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', '.NET API'],
      category: 'Front-End/Angular',
      githubLink: 'https://github.com/muralikatta/angular-task-manager'
    },
    {
      title: 'GitHub Explorer',
      description: 'A React application to search, visualize user profiles, and analyze repository statistics from the GitHub REST API.',
      technologies: ['React', 'JavaScript', 'APIs', 'Material UI'],
      category: 'Front-End/React',
      githubLink: 'https://github.com/muralikatta/github-explorer'
    },
    {
      title: 'DSA Tracker CLI',
      description: 'A command-line utility for tracking Data Structures and Algorithms progress, persisting data to a MySQL database.',
      technologies: ['C++', 'MySQL', 'CLI'],
      category: 'Core Language',
      githubLink: 'https://github.com/muralikatta/dsa-tracker-cli'
    },
    {
      title: 'Data Migration Tool',
      description: 'A Python script designed to clean, transform, and migrate large datasets between different SQL database schemas.',
      technologies: ['Python', 'Pandas', 'SQLAlchemy'],
      category: 'Data/Backend',
      githubLink: 'https://github.com/muralikatta/data-migration-tool'
    },
  ];

  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Front-End/Angular', 'Front-End/React', 'IoT/Embedded', 'Data/Backend', 'Core Language'];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter(project => project.category === this.selectedCategory);
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
  }
}