import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './shared/material.module';
import { AccessModule } from './access/access.module';
import { HandleErrorsInterceptor } from './handle-errors.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { FormsModule } from '@angular/forms';
import { AddRecipeModalComponent } from './add-recipe-modal/add-recipe-modal.component';
import { AddIngredientModalComponent } from './add-ingredient-modal/add-ingredient-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    RecipesComponent,
    IngredientsComponent,
    CategoriesDetailsComponent,
    NotFoundComponent,
    AddCategoryModalComponent,
    AddRecipeModalComponent,
    AddIngredientModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccessModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
    }),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
