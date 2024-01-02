import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar){}

    openSnackBar(message: string, background: string){
        const configs = new MatSnackBarConfig();
        configs.duration = 3000;
        configs.panelClass = [background];
        configs.verticalPosition = 'bottom';
        configs.horizontalPosition = 'right';
        this._snackBar.open(message, undefined, configs);
    }
}
