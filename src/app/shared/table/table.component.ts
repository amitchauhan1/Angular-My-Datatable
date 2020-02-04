import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'amt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public searchText;
  order: string = 'name';
  reverse: boolean = false;

  @Input() datas: object;
  constructor(
    private api: ApiServiceService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
  addEmp() {
    document.getElementById('popupId').style.display = 'block';
    this.router.navigate(['emp-list/add-emp']);
  }
  edit(id: number) {
    document.getElementById('popupId').style.display = 'block';
    this.router.navigate([`emp-list/edit-emp/${id}`]);
  }

  delete(id: number) {
    this.api.empDelete(id);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
