import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainDisplayComponent } from './ui/main-display/main-display.component';
import { StaffListComponent } from './ui/staff-list/staff-list.component';
import { MatSidenavModule, MatListModule, MatRadioModule, MatButtonModule, MatIconModule, MatCardModule,
         MatDialogModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { DraggableListItemComponent } from './ui/draggable-list-item/draggable-list-item.component';
import { VenuePositionLayoutComponent } from './ui/venue-position-layout/venue-position-layout.component';
import { VenuePositionComponent } from './ui/venue-position/venue-position.component';
import { RoleListComponent } from './ui/role-list/role-list.component';
import { DraggableGenericListItemComponent } from './ui/draggable-generic-list-item/draggable-generic-list-item.component';
import { RoleListItemComponent } from './ui/role-list-item/role-list-item.component';
import { AddTypeDialogComponent } from './ui/add-type-dialog/add-type-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardDialogComponent } from './ui/wizard-dialog/wizard-dialog.component';
import { AddSessionDialogComponent } from './ui/add-session-dialog/add-session-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    StaffListComponent,
    DraggableListItemComponent,
    VenuePositionLayoutComponent,
    VenuePositionComponent,
    RoleListComponent,
    DraggableGenericListItemComponent,
    RoleListItemComponent,
    AddTypeDialogComponent,
    WizardDialogComponent,
    AddSessionDialogComponent
  ],
    imports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule,
        MatRadioModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule, MatTabsModule

    ],
    exports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, 
        MatRadioModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [AddTypeDialogComponent, WizardDialogComponent]
})
export class AppModule { }
