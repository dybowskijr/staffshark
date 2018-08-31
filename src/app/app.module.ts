import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainDisplayComponent } from './ui/main-display/main-display.component';
import { StaffListComponent } from './ui/staff-list/staff-list.component';
import { MatSidenavModule, MatListModule, MatRadioModule } from '@angular/material';
import { DraggableListItemComponent } from './ui/draggable-list-item/draggable-list-item.component';
import { PositionLayoutComponent } from './ui/position-layout/position-layout.component';
import { PositionComponent } from './ui/position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
    StaffListComponent,
    DraggableListItemComponent,
    PositionLayoutComponent,
    PositionComponent
  ],
    imports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatRadioModule
    ],
    exports: [
        BrowserModule, BrowserAnimationsModule, MatSidenavModule, MatListModule, MatRadioModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
