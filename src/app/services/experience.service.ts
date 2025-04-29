import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experience = [
    {
        company: "Exprivia",
        icon: "assets/images/experience-logos/exprivia.jpg",
        jobTitle: "Software Engineer",
        url: "https://exprivia.it/",
        period: "Apr 2024 - current",
        location: "Milan, Italy",
        description: ""
      },

    {
      company: "Empatica",
      icon: "assets/images/experience-logos/empatica.jpg",
      jobTitle: "Jr Embedded Algorithm Engineer",
      url: "https://www.empatica.com/",
      period: "Sept 2022 - Mar 2024",
      location: "Milano, Italy",
      description: "I was responsible for integrating and optimizing biomedical DSP algorithms into the core library. My key contribution was improving the runtime performance of the epilepsy detection algorithm by 25%, making real-time seizure detection possible directly on the wearable device. This task involved low-level optimization and close collaboration with the R&D team. It’s a project I’m especially proud of, as it directly impacts the lives of people with epilepsy — a cause close to my heart."
    },

    {
        company: "Empatica",
        icon: "assets/images/experience-logos/empatica.jpg",
        jobTitle: "Graduate Engineer",
        url: "https://www.empatica.com/",
        period: "Sept 2021 - Sept 2022",
        location: "Milano, Italy",
        description: "As a graduate engineer at Empatica, I rotated across four teams — Data, Mobile, Front-End, and Embedded Algorithms — contributing to projects from data validation protocols to Android UI development, web portal features, and real-time algorithm optimization on wearables. This experience gave me a broad, cross-functional view of product development and how diverse engineering disciplines collaborate to deliver impactful solutions."
      },
  ]

  constructor() { }
}
