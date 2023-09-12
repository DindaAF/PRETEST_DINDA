import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CrudComponent } from './crud/crud.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { PostViewComponent } from './post-view/post-view.component';

const routes: Routes = [
  { path: '', component: MyLineChartComponent },
  { path: 'crud', component: CrudComponent },
  { path : 'crud/create', component : PostCreateComponent},
  { path: 'edit/:id', component: PostEditComponent },
  { path: 'show/:id', component: PostViewComponent}
  // Tambahkan rute lainnya sesuai kebutuhan
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
