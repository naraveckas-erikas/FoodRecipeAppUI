import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  type: string;
  originCountry: string;
  timeToPrepare: number;
  portionsCount: number;
  isVegetarian: boolean;
  isVegan: boolean;
}

@Component({
  selector: 'app-add-recipe-modal',
  templateUrl: './add-recipe-modal.component.html',
  styleUrls: ['./add-recipe-modal.component.css'],
})
export class AddRecipeModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddRecipeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  addClick() {
    this.dialogRef.close(true);
  }
}
