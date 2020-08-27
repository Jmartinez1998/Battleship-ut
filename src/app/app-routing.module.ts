import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BoardgameComponent } from './components/boardgame/boardgame.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "game/dashboard", component: BoardgameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
