import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';

@Component({
  selector: 'amt-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  public empData: object;
  constructor(
    private api: ApiServiceService
  ) {
    this.empData = this.api.getEmpAllData();
  }

  ngOnInit() {
  }

}
