import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardMetrics {
  totalUsers: number;
  activeUsersToday: number;
  newUsersToday: number;
  transactionVolumeToday: number;
  transactionVolumeThisMonth: number;
  transactionCountToday: number;
  activeLoans: number;
  overdueLoans: number;
  totalLoanPortfolio: number;
  defaultRate: number;
  totalSavingsBalance: number;
  reportDate: string;
  period: string;
}

// All calls go to the AnalogJS BFF (Nitro) — the backend URL never reaches the browser
const BFF = '/api';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  getDashboardMetrics(): Observable<any> {
    return this.http.get(`${BFF}/admin/dashboard`);
  }

  getUsers(page = 0, size = 20, search?: string, status?: string): Observable<any> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (search) params = params.set('phoneNumber', search);
    if (status) params = params.set('status', status);
    return this.http.get(`${BFF}/admin/users`, { params });
  }

  suspendUser(userId: string, reason = 'Suspended by admin'): Observable<any> {
    return this.http.post(
      `${BFF}/admin/users/${userId}/suspend`,
      null,
      { params: new HttpParams().set('reason', reason) }
    );
  }

  reactivateUser(userId: string): Observable<any> {
    return this.http.post(`${BFF}/admin/users/${userId}/reactivate`, null);
  }

  getLoans(page = 0, size = 50, status?: string): Observable<any> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (status) params = params.set('status', status);
    return this.http.get(`${BFF}/admin/loans`, { params });
  }

  getOverdueLoans(page = 0, size = 20): Observable<any> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get(`${BFF}/admin/loans/overdue`, { params });
  }

  approveLoan(loanId: string): Observable<any> {
    return this.http.post(`${BFF}/loans/${loanId}/ops-approve`, { reviewedBy: 'OPS' });
  }

  rejectLoan(loanId: string, rejectionReason: string): Observable<any> {
    return this.http.post(`${BFF}/loans/${loanId}/ops-reject`, { reviewedBy: 'OPS', rejectionReason });
  }

  getTransactions(page = 0, size = 50, status?: string, type?: string): Observable<any> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (status) params = params.set('status', status);
    if (type) params = params.set('type', type);
    return this.http.get(`${BFF}/admin/transactions`, { params });
  }

  getKycQueue(status = 'PENDING', page = 0, size = 50): Observable<any> {
    const params = new HttpParams().set('status', status).set('page', page).set('size', size);
    return this.http.get(`${BFF}/admin/kyc`, { params });
  }

  approveKyc(verificationId: string): Observable<any> {
    return this.http.post(`${BFF}/admin/kyc/${verificationId}/approve`, null);
  }

  rejectKyc(verificationId: string, reason = 'Rejected by admin'): Observable<any> {
    return this.http.post(`${BFF}/admin/kyc/${verificationId}/reject`, { reason });
  }

  broadcastNotification(title: string, message: string, targetAudience = 'ALL_USERS'): Observable<any> {
    return this.http.post(`${BFF}/admin/broadcast`, { title, message, targetAudience });
  }
}
