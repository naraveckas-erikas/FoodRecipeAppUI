import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css'],
})
export class CategoriesDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  routeId: string | null = null;

  ngOnInit(): void {
    this.routeId = this.route.snapshot.paramMap.get('categoryId');
  }
}
