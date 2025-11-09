import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Hero } from './components/hero/hero';
import { Skill } from './components/skill/skill';
import { NavbarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { CommonModule } from '@angular/common';
import { Experience } from './components/experience/experience';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Hero,
    About,
    Skill,
    ProjectsComponent,
    Experience,
    Contact,
    NavbarComponent,
    CommonModule,
    
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }
}
