import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'amt-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.scss']
})
export class AddEditModelComponent implements OnInit {
  // public empForm: FormGroup;
  public dept;
  public empData;
  public submitted = false;
  public empId;
  constructor(
    private fb: FormBuilder,
    private api: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.api.getDeptData().subscribe((data => {
      this.dept = data;
    }));
    this.empId = this.route.snapshot.paramMap.get('id');
  }
  empForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    gender: ['', Validators.required],
    address: this.fb.array([
      this.fb.group({
        city: [''],
        zip: ['']
      })
    ]),
    department: ['', Validators.required],
    hiredate: ['', Validators.required],
    permanent: [false, Validators.requiredTrue]
  });

  ngOnInit() {
    if (this.empId) {
      this.api.getEmp(this.empId).subscribe((data => {
        this.empData = data;
        console.log(this.empData);
        this.empForm.setValue({
          name: this.empData.name,
          email: this.empData.email,
          mobile: this.empData.mobile,
          gender: this.empData.gender,
          department: this.empData.department,
          hiredate: this.empData.hiredate,
          permanent: this.empData.permanent,
          address: [{
            zip: this.empData.address[0].zip,
            city: this.empData.address[0].city
          }]
        });
      }));
    }
  }
  f() { return this.empForm.controls; }
  name() { return this.empForm.get('name'); }
  addNewAddress() {
    const control = this.empForm.controls.address as FormArray;
    control.push(
      this.fb.group({
        city: [''],
        zip: ['']
      })
    );
  }

  deleteAddress(index) {
    let control = <FormArray>this.empForm.controls.address;
    control.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
    if (this.empId) {
      this.api.editEmployee(this.empId, this.empForm.value);
    } else {
      this.api.addEmployee(this.empForm.value);
    }
    this.router.navigate(['emp-list']);
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
  }
}
