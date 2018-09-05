import { Component, OnInit } from '@angular/core';
import { Role } from '../../core/role';
import { RoleService } from '../../service/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

    private _roles: Role[];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
      this.roleService.getRoles().subscribe(
          roles => { this._roles = roles },
          error => { console.log(error) },
          () => { }
      );
  }
    public get roles(): Role[] {
        return this._roles;
    }
    

}
