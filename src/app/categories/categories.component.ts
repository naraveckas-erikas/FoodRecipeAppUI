import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any;
  name: any;
  description: any;
  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    public dialog: MatDialog,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((resp) => {
      this.categories = resp;
      console.log(resp);
    });
  }

  navigateToCategoryDetails(id: number) {
    this.router.navigate([`categories/${id}`]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCategoryModalComponent, {
      data: { name: this.name, description: this.description },
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      this.categoriesService.addCategory(res).subscribe((resp) => {
        if (resp.id) {
          this.ngOnInit();
          this.toaster.success('Added new category', 'Success');
        }
      });
    });
  }
}
