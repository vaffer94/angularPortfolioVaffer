import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      category: "Coding languages and frameworks (working experience)",
      content: [
        { name: "Angular", percentage: "90%", },
        { name: "Unity", percentage: "90%", },
        { name: "Python", percentage: "90%", },
        { name: "Matlab", percentage: "90%", },
        { name: "C", percentage: "90%", },
      ]
    },
    {
      category: "Coding languages and frameworks (personal or university projects)",
      content: [
        { name: "Arduino", percentage: "90%", },
        { name: "C++", percentage: "90%", },
        { name: "Kotlin", percentage: "70%", },
        { name: "React", percentage: "20%", },
        { name: "Typescript", percentage: "20%", },
        { name: "Javascript", percentage: "20%", },
        { name: "HTMLL/CSS", percentage: "40%", },
        { name: "OpenCV", percentage: "40%", },
        { name: "Pandas", percentage: "40%", },
      ]
    },
    {
        category: "Tools and More",
      content: [
        { name: "Git", percentage: "90%", },
        { name: "Figma", percentage: "90%", },
        { name: "Canva", percentage: "70%", },
        { name: "UX resarch", percentage: "70%", },
        { name: "Design thinking", percentage: "70%", },
        { name: "Accessibility", percentage: "70%", },
        { name: "Agile", percentage: "70%", },
      ]
    },
  ]
}
