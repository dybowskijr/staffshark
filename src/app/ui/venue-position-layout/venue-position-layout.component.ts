import { Component, OnInit } from '@angular/core';
import { Placement } from '../../core/placement';
import { PlacementService } from '../../service/placement.service';

@Component({
    selector: 'app-venue-position-layout',
    templateUrl: './venue-position-layout.component.html',
    styleUrls: ['./venue-position-layout.component.css']
})
export class VenuePositionLayoutComponent implements OnInit {

    private _placements: Placement[];

    constructor(private placementService: PlacementService) { }

    ngOnInit() {
        this.placementService.getPlacements().subscribe(
            placements => { this._placements = placements },
            error => { console.log(error) },
            () => { }
        );
    }


    addLocation(ev: Event) {
        //add new position component @ default location

        //NOTE: for now, just add to current list
    }

    get placements(): Placement[] {
        return this._placements;
    }

    
}
