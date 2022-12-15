import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddRecipeModalComponent } from '../add-recipe-modal/add-recipe-modal.component';
import { RecipesService } from '../services/recipes.service';
export interface Recipe {
  id: number;
  name: string;
  type: string;
  originCountry: string;
  timeToPrepare: number;
  portionsCount: number;
  isVegetarian: boolean;
  isVegan: boolean;
  actions: string;
}

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css'],
})
export class CategoriesDetailsComponent implements OnInit {
  isLoading = true;
  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    public dialog: MatDialog,
    private toaster: ToastrService
  ) {}

  displayedColumns: string[] = [
    'name',
    'type',
    'originCountry',
    'timeToPrepare',
    'portionCount',
    'isVegetarian',
    'isVegan',
    'actions',
  ];
  dataSource: Recipe[] = [];

  categoryId: any;
  recipes: any;

  @ViewChild(MatTable) table!: MatTable<Recipe>;

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.recipesService.getAllRecipes(this.categoryId).subscribe((resp) => {
      this.recipes = resp;
      console.log(this.recipes);
      this.dataSource = this.recipes;
      this.isLoading = false;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddRecipeModalComponent, {
      data: { name: this.recipe?.name },
    });

    dialogRef.afterClosed().subscribe((recipe) => {
      console.log(recipe);
      this.recipesService
        .addRecipe(this.categoryId, recipe)
        .subscribe((resp) => {
          if (resp.id) {
            this.dataSource.push(resp);
            this.table.renderRows();
            this.toaster.success('Added new recipe', 'Success');
          }
        });
    });
  }

  navigateToIngredientsPage(categoryId: number, recipeId: number) {
    this.router.navigate([`categories/${categoryId}/recipes/${recipeId}`]);
  }
}
