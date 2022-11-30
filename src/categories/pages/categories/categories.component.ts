import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/categories/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private readonly categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((resp) => {
      console.log(resp);
    });
  }
}
