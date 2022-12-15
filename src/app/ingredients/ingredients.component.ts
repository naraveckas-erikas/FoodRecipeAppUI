import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddIngredientModalComponent } from '../add-ingredient-modal/add-ingredient-modal.component';
import { IngredientsService } from '../services/ingredients.service';

export interface Ingredient {
  name: string;
  type: string;
  isVegetarian: boolean;
  isVegan: boolean;
}

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  categoryId: any;
  recipeId: any;

  isLoading = true;
  ingredients: Ingredient[] | null = null;

  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService,
    public dialog: MatDialog,
    private toaster: ToastrService
  ) {}

  displayedColumns: string[] = ['name', 'type', 'isVegetarian', 'isVegan'];
  dataSource: Ingredient[] = [];

  @ViewChild(MatTable) table!: MatTable<Ingredient>;

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.recipeId = this.route.snapshot.paramMap.get('recipeId');
    this.ingredientsService
      .getAllIngredients(this.categoryId, this.recipeId)
      .subscribe((resp: any) => {
        console.log(resp);
        this.dataSource = resp;
        this.isLoading = false;
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddIngredientModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((ingredient: any) => {
      this.ingredientsService
        .addIngredient(this.categoryId, this.recipeId, ingredient)
        .subscribe((resp) => {
          if (resp.id) {
            this.dataSource.push(resp);
            this.table.renderRows();
            this.toaster.success('Added new ingredient', 'Success');
          }
        });
    });
  }
}
