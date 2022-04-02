import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GhDialogComponent } from '../gh-dialog/gh-dialog.component';

@Component({
  selector: 'app-gh-home',
  templateUrl: './gh-home.component.html',
  styleUrls: ['./gh-home.component.css']
})
export class GhHomeComponent implements OnInit {

usernameTofind: FormControl = new FormControl('', [Validators.required])

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    let ref = this.dialog.open(GhDialogComponent, {width: '600px'})

    ref.componentInstance.username = this.usernameTofind.value
  }

}
