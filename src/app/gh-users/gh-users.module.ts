import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { GhHomeComponent } from './components/gh-home/gh-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GhDialogComponent } from './components/gh-dialog/gh-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { GhApiService } from './services/gh-api.service';


@NgModule({
  declarations: [
    GhHomeComponent,
    GhDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports: [
    GhHomeComponent
  ],
  providers: [GhApiService]
})
export class GhUsersModule {}
