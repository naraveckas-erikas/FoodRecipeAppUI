import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
