// src/app/components/skill/skill.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true, // Assuming this is a standalone component
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrls: ['./skill.css']
})
export class Skill { // Use SkillComponent standard naming convention
  
  // Combine all skills into a single flat array for the grid layout
  skillData = [
    { name: 'Angular', proficiency: 90, level: 'Advanced', icon: 'angular.svg', type: 'Front-End' },
    { name: 'TypeScript', proficiency: 85, level: 'Advanced', icon: 'typescript.svg', type: 'Front-End' },
    { name: 'HTML5', proficiency: 95, level: 'Expert', icon: 'html5.svg', type: 'Front-End' },
    { name: 'CSS3/SCSS', proficiency: 90, level: 'Advanced', icon: 'CSS3.svg', type: 'Front-End' },
    { name: 'React', proficiency: 70, level: 'Intermediate', icon: 'react.svg', type: 'Front-End' },
    
    { name: 'C / C++', proficiency: 90, level: 'Advanced', icon: 'c.svg', type: 'Language' },
    { name: 'Python', proficiency: 80, level: 'Advanced', icon: 'python.png', type: 'Language' },
    { name: 'MySQL / SQL', proficiency: 85, level: 'Advanced', icon: 'sql.png', type: 'Database' },
    { name: '.NET (C#)', proficiency: 65, level: 'Intermediate', icon: 'dotnet.svg', type: 'Back-End' }, 
    
    { name: 'Git / GitHub', proficiency: 95, level: 'Expert', icon: 'git.svg', type: 'Tools' },
    { name: 'Agile / Scrum', proficiency: 80, level: 'Advanced', icon: 'agile.svg', type: 'Process' },
    { name: 'Docker', proficiency: 60, level: 'Familiar', icon: 'docker.svg', type: 'DevOps' }, 
    { name: 'Azure Basics', proficiency: 50, level: 'Familiar', icon: 'azure.svg', type: 'Cloud' },
  ];
}