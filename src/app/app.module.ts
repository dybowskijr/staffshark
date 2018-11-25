import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainDisplayComponent } from './ui/main-display/main-display.component';
import { StaffListComponent } from './ui/staff-list/staff-list.component';
import { MatSidenavModule, MatListModule, MatRadioModule, MatButtonModule, MatIconModule, MatCardModule,
         MatDialogModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatCheckboxModule, MatTooltipModule,
        MatToolbarModule,
        MAT_DIALOG_DATA} from '@angular/material';
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
import { SessionSubVenueDisplayComponent } from './ui/session-sub-venue-display/session-sub-venue-display.component';
import { RoleDialogComponent } from './ui/role-dialog/role-dialog.component';
import { StaffMemberDialogComponent } from './ui/staff-member-dialog/staff-member-dialog.component';
import { AddLocationDialogComponent } from './ui/add-location-dialog/add-location-dialog.component';
import { JsonPipe } from '@angular/common';
import { EditSubVenueDialogComponent } from './ui/edit-subvenue-dialog.component/edit-subvenue-dialog.component';

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
    AddSessionDialogComponent,
    SessionSubVenueDisplayComponent,
    RoleDialogComponent,
    StaffMemberDialogComponent,
    AddLocationDialogComponent,
    EditSubVenueDialogComponent
  ],
    imports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule,
        MatRadioModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule,
        MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule, MatTabsModule,
        MatCheckboxModule, MatTooltipModule, MatToolbarModule

    ],
    exports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule,
        MatRadioModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule,
        MatFormFieldModule, MatInputModule, MatTabsModule,
        MatCheckboxModule, MatTooltipModule, MatToolbarModule
    ],
  providers: [JsonPipe, {provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent],
    entryComponents: [AddTypeDialogComponent, WizardDialogComponent, AddSessionDialogComponent,
        RoleDialogComponent, StaffMemberDialogComponent, AddLocationDialogComponent, EditSubVenueDialogComponent]
})
export class AppModule { }
