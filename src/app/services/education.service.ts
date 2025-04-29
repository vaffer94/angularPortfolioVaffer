import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  education = [
    {
        studyTitle: "Master in ICT for Internet and Multimedia Engineering",
        additionalInfo:"Curriculum: life and health tecnologies",
        thesisTitle:"Measurement of cardiac related biosignals in wearable during real life",
        university: "Padova University",
        url: "https://mime.dei.unipd.it/tracks/ict-for-life-health/",
        years: "April 2022 (110/110)",
        graduationPhoto: "assets/images/graduation-photos/unipd.jpg",
      },
    {
      studyTitle: "Ingegneria dell' informazione",
      university: "Padova University",
      additionalInfo:"",
      thesisTitle:"Reinforcement Learning e Q-Learning, come le macchine apprendono dai propri errori",
      url: "https://didattica.unipd.it/off/2022/LT/IN/IN0513",
      years: "November 2019",
      graduationPhoto: "assets/images/graduation-photos/unipd.jpg",
    },
  ]
}
