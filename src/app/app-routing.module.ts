import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'saved', component: SavedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
