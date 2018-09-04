import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainDisplayComponent } from './ui/main-display/main-display.component';
import { StaffListComponent } from './ui/staff-list/staff-list.component';
import { MatSidenavModule, MatListModule, MatRadioModule, MatButtonModule } from '@angular/material';
import { DraggableListItemComponent } from './ui/draggable-list-item/draggable-list-item.component';
import { VenuePositionLayoutComponent } from './ui/venue-position-layout/venue-position-layout.component';
import { VenuePositionComponent } from './ui/venue-position/venue-position.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    StaffListComponent,
    DraggableListItemComponent,
    VenuePositionLayoutComponent,
    VenuePositionComponent
  ],
    imports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatRadioModule, MatButtonModule

    ],
    exports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatRadioModule, MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
