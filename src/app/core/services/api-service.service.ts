import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '.././../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl: string;
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.API;
  }

  /**
   * Get all Employee data from server
   */
  getEmpAllData(): object {
    return this.http.get(`${this.baseUrl}Employee`);
  }

  getEmp(id){
    return this.http.get(`${this.baseUrl}Employee/${id}`);
  }

  /**
   * Get all Department name from server
   */
  getDeptData() {
    return this.http.get(`${this.baseUrl}department`);
  }
  /**
   * Add Employee in database
   * @param empData emoloyee new data
   */
  addEmployee(empData: object) {
    this.http.post(`${this.baseUrl}Employee`, empData).subscribe();
  }

  /**
   * Update Employee data
   * @param empId Employee Id
   * @param empData Employee updated data
   */
  editEmployee(empId: number, empData: object) {
    this.http.put(`${this.baseUrl}Employee/${empId}`, empData).subscribe();
  }

  /**
   * Delete Employee Data
   * @param id Employee Id
   */
  empDelete(id: number){
    this.http.delete(`${this.baseUrl}Employee/${id}`).subscribe();
  }
}
