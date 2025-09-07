import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private projects: Project[] = [
      {
      title: 'Mushroom Relax',
      image: '',
      description: 'Mushroom Relax is a virtual reality game designed to study how immersive environments can induce different emotional states, such as relaxation or stress. The user is equipped with physiological sensors — a Polar band on the chest, an Apple Watch on the wrist, and an Embrace+ on the same wrist — to continuously monitor heart rate during the experience. The goal is to detect whether the VR environment produces measurable physiological differences.\n\nThe game is structured around two contrasting room types. In the relaxing scenario, the user can calmly pick mushrooms in a peaceful forest while listening to birdsong in the background. In the stressful scenarios, the environment transforms into a chaotic car race, with loud noises, crowded spaces, and vehicles rushing dangerously close to the player.\n\nBy combining VR interaction, environmental design, and biometric monitoring, Mushroom Relax explores how virtual environments can be used to modulate emotional and physiological responses.',
      technologies: ['Unity', 'C#', 'Matlab'],
      devices: ['Meta Quest 2'],
      youtubeUrl: 'https://youtube.com/shorts/WPUawvfkvBI?feature=share',
      githubUrl: '',
      highlights: ['VR', 'Gamification', 'Sensors', 'UX'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Bubble it!',
      image: '',
      description: 'VR Attention Training Game is a virtual reality experience designed to strengthen attentional control through progressively challenging gameplay. The project was developed with a rehabilitation focus, particularly for users recovering from conditions such as stroke, and is accessible even to people with limited arm mobility.\n\nThe game features multiple levels of increasing difficulty. At the start, the user shoots at static targets appearing on the screen. In the following stages, distracting objects are introduced, first static and then in motion. The final stage presents a complex environment with multiple object types, different speeds, and immersive visual distractions.\n\nThe player controls the weapon through head tracking, while shooting is triggered via a controller button. This design enables participation without the need for full hand or arm movement, combining accessibility, cognitive training, and immersive VR mechanics to create a playful yet therapeutic tool.',
      technologies: ['Unity', 'C#'],
      devices: ['Meta Quest 2'],
      youtubeUrl: 'https://youtube.com/shorts/BQ3U7iDqMS0?feature=share',
      githubUrl: '',
      highlights: ['VR', 'Rehabilitation', 'Attention mechanism', 'Gamification', 'UX'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Synch Experience',
      image: '',
      description: '',
      technologies: ['Unity', 'C#', 'Angular'],
      devices: ['Meta Quest 2', 'Web application'],
      youtubeUrl: '',
      githubUrl: '',
      highlights: ['VR', 'Web Communication', 'UX'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Do you remember?',
      image: '',
      description: '',
      technologies: ['AppSheet'],
      devices: ['Mobile app'],
      youtubeUrl: '',
      githubUrl: '',
      highlights: ['Automation', 'Rapid Prototyping', 'UX'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Catch it!',
      image: '',
      description: 'Catch the Apple is an interactive game designed to train users’ visual attention and tracking skills. Players must follow and catch apples falling across the screen, progressing through increasingly challenging levels filled with distractors and power-ups.\n\nThe game features three levels of difficulty. In the first stage, users catch falling green apples by tapping them on time. Each success increases the score, while missed apples reduce life points. In the second stage, distractors such as carrots and apple-colored tubes appear, penalizing the player if touched. In the final stage, red apples are introduced along with power-ups that restore life and clear the screen of distractors, combined with randomized rotations and faster dynamics for extra challenge.\n\nFrom a technical perspective, the project implements real-time collision detection, progressive difficulty scaling, and interactive audiovisual feedback (sounds, particle effects, animations), creating a playful yet structured way to measure and enhance attention performance.',
      technologies: ['Unity', 'Firebase'],
      devices: ['Mobile app'],
      youtubeUrl: 'https://youtube.com/shorts/xcn9X1SjKLQ?feature=share',
      githubUrl: 'https://github.com/vaffer94/cogniteveGameDeveloper_assignment',
      highlights: ['Attention mechanism', 'Gamification', 'UX'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Smart home',
      image: '',
      description: '',
      technologies: ['C++'],
      devices: ['Eco Dot (Alexa)', 'Arduino', 'Mobile app'],
      youtubeUrl: '',
      githubUrl: '',
      highlights: ['Senors', 'Automation', 'IOT'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Orietta is you!',
      image: '',
      description: 'Orietta is You! is an Augmented Reality filter developed for a team that adopted the Italian singer Orietta Berti as its mascot. The filter playfully transforms the user’s face to resemble Orietta’s iconic style.\n\nThrough real-time face tracking, the filter applies digital makeup (eye shadow, blush, and lipstick), changes the hair color, and even adds a tattoo overlay. The result is a fun and engaging experience where users can instantly “become” Orietta while interacting with the team’s identity in a lighthearted way.\n\nFrom a technical perspective, the project combines facial landmark detection, texture mapping, and AR cosmetics rendering to create a smooth and responsive transformation that works in real time.',
      technologies: ['User involvement', 'AR', 'Gamification', 'Computer Vision'],
      devices: [],
      youtubeUrl: 'https://youtube.com/shorts/OC_1--aZvmU?feature=share',
      githubUrl: '',
      highlights: ['User involvement', 'AR', 'Gamification', 'Computer Vision'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Eat Boat',
      image: '',
      description: 'Eat Boat is an Augmented Reality filter game designed to energize and engage competitors during a boat race event. The player sees different types of boats falling from the top of the screen and must “eat” the correct ones by opening their mouth. Each correct action increases the score, while mistakes apply a penalty.\n\nThe game runs until the countdown finishes, providing a playful and competitive experience. Technically, it demonstrates real-time face tracking, mouth-movement detection, and collision logic integrated into an AR environment, transforming simple gestures into interactive gameplay.',
      technologies: ['User involvement', 'AR', 'Gamification', 'Computer Vision'],
      devices: [],
      youtubeUrl: 'https://youtube.com/shorts/kYGzFFu-ZWk?feature=share',
      githubUrl: '',
      highlights: ['User involvement', 'AR', 'Gamification', 'Computer Vision'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'Wambling Quiz',
      image: '',
      description: 'Wambling Quiz is an Augmented Reality filter that turns learning into an interactive experience. The user sees a quiz card above their head, with two possible answers positioned to the left and right. By simply tilting their head toward the chosen option, the app detects the response, provides instant feedback, and calculates the final score. \n\nThe project was designed to raise awareness about epilepsy in an engaging way. All questions focused on this theme, and the final screen displayed practical advice and educational content.',
      technologies: ['SparkAR', 'JavaScript'],
      devices: [],
      youtubeUrl: 'https://youtube.com/shorts/9UxCXzH7AHU?feature=share',
      githubUrl: '',
      highlights: ['User involvement', 'AR', 'Gamification', 'Computer Vision'],
      problem: '',
      process: '',
      improvements: ''
    },
      {
      title: 'CRM system',
      image: '',
      description: '',
      technologies: ['C++'],
      devices: ['Terminal app'],
      youtubeUrl: '',
      githubUrl: '',
      highlights: ['Usability', 'User flow', 'UX'],
      problem: '',
      process: '',
      improvements: ''
    },
    ];

  constructor() { }

    getProjects(): Project[] {
    return this.projects;
  }

  getProjectByTitle(title: string): Project | undefined {
    return this.projects.find(p => p.title.toLowerCase() === title.toLowerCase());
  }
}
