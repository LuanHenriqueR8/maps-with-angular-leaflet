import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { BermudaTriangleComponent } from './bermuda-triangle/bermuda-triangle.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'bermuda-triangle', component: BermudaTriangleComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
