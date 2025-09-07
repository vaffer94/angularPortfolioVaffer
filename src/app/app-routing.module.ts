import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImmersivePageComponent } from './immersive-page/immersive-page.component';
import { ConcertRandomizationComponent } from './projects/concert-randomization/concert-randomization.component';
import { NonverbalBehaviourComponent } from './projects/nonverbal-behaviour/nonverbal-behaviour.component';
import { SituatedMemoriesComponent } from './projects/situated-memories/situated-memories.component';
import { PopupBreakComponent } from './projects/popup-break/popup-break.component';
import { InsignumComponent } from './projects/insignum/insignum.component';
import { PearlyComponent } from './projects/pearly/pearly.component';
import { BookflixComponent } from './projects/bookflix/bookflix.component';
import { RacoombaComponent } from './projects/racoomba/racoomba.component';
import { EspooraComponent } from './projects/espoora/espoora.component';
import { WaitForMoreComponent } from './projects/wait-for-more/wait-for-more.component';
import { ProvaVFComponent } from './projects/prova-vf/prova-vf.component';
import { WamblingQuizComponent } from './projects/wambling-quiz/wambling-quiz.component';
import { EatBoatComponent } from './projects/eat-boat/eat-boat.component';
import { OriettaComponent } from './projects/orietta/orietta.component';
import { CatchItComponent } from './projects/catch-it/catch-it.component';
import { MushroomRelaxComponent } from './projects/mushroom-relax/mushroom-relax.component';
import { BubbleItComponent } from './projects/bubble-it/bubble-it.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aframe', component: ImmersivePageComponent},
  {path: 'concert-randomization', component: ConcertRandomizationComponent},
  {path: 'nonverbal-behaviour', component: NonverbalBehaviourComponent},
  {path: 'situated-memories', component: SituatedMemoriesComponent},
  {path: 'popup-break', component: PopupBreakComponent},
  {path: 'insignum', component: InsignumComponent},
  {path: 'pearly', component: PearlyComponent},
  {path: 'bookflix', component: BookflixComponent},
  {path: 'racoomba', component: RacoombaComponent},
  {path: 'espoora', component: EspooraComponent},
  { path: 'wait-for-more', component: WaitForMoreComponent },
  { path: 'projects/provaVF', component: ProvaVFComponent },
  { path: 'projects/wamblingQuiz', component: WamblingQuizComponent },
  { path: 'projects/eatBoat', component: EatBoatComponent },
  { path: 'projects/orietta', component: OriettaComponent },
  { path: 'projects/catchIt', component: CatchItComponent },
  { path: 'projects/mushroomRelax', component: MushroomRelaxComponent },
  { path: 'projects/bubbleIt', component: BubbleItComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
