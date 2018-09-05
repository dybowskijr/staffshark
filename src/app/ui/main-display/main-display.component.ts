import { Component, OnInit } from '@angular/core';
import { Session } from '../../core/session';
import { Occasion } from '../../core/occasion';
import { OccasionService } from '../../service/occasion.service';
import { MatTabChangeEvent, MatDialog } from '@angular/material';
import { WizardDialogComponent } from '../wizard-dialog/wizard-dialog.component';

@Component({
    selector: 'app-main-display',
    templateUrl: './main-display.component.html',
    styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {

    private _occasion: Occasion;

    constructor(private occasionService: OccasionService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.occasionService.getOccasion('changeme').subscribe(o => { this._occasion = o; console.log('Oh Yeah!'); });
    }

    get sessions(): Session[] {
        console.log('count: ' + this._occasion._sessions.length);
        return this._occasion._sessions;
    }

    addSessionClick(event: MatTabChangeEvent): void {
        if (event.tab.textLabel === 'Add Session') {
            const dialogRef = this.dialog.open(WizardDialogComponent, {
                height: '400px',
                width: '500px',
                data: { type: 'Location' }
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('Closed Dialog: result = ' + JSON.stringify(result));
                // this._placements.push(new Placement(result, result, 300, 500));

            });
         }
    }

}
