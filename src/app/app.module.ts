import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from  '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DistributorHeaderComponent } from './components/distributor-header/distributor-header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule, PaginationControlsComponent } from 'ngx-pagination';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ApplyCreditComponent } from './components/apply-credit/apply-credit.component';
import { TopCreditComponent } from './components/top-credit/top-credit.component';
import { ApplicationResultComponent } from './components/application-result/application-result.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpheaderAddingInterceptor } from './interceptor/httpheader-adding.interceptor';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { HistoryComponent } from './components/history/history.component';
import { AnlystDashboardComponent } from './components/anlyst-dashboard/anlyst-dashboard.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { LoanApplicationsComponent } from './components/loan-applications/loan-applications.component';
import { AnalystProfilesComponent } from './components/analyst-profiles/analyst-profiles.component';
import { AddAnalystsComponent } from './components/add-analysts/add-analysts.component';
import { TrackstatusComponent } from './components/trackstatus/trackstatus.component';
import { StatusOtppageComponent } from './components/status-otppage/status-otppage.component';
import { ShowstatusComponent } from './components/showstatus/showstatus.component';
import { EditPoliciesComponent } from './components/edit-policies/edit-policies.component';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { UpdatePoliciesComponent } from './components/update-policies/update-policies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AdminDashboardComponent,
    LogoutComponent,
    DistributorHeaderComponent,
    NavigationComponent,
    DashboardComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ApplyCreditComponent,
    TopCreditComponent,
    ApplicationResultComponent,
    EditApplicationComponent,
    OtpPageComponent,
    HistoryComponent,
    AnlystDashboardComponent,
    AdminNavigationComponent,
    LoanApplicationsComponent,
    AnalystProfilesComponent,
    AddAnalystsComponent,
    TrackstatusComponent,
    StatusOtppageComponent,
    ShowstatusComponent,
    EditPoliciesComponent,
    AddPolicyComponent,
    UpdatePoliciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatPaginatorModule,
    MatFormFieldModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule, // Required for Sorting table
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    NgxPaginationModule,//FOR PAGENATION 
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule, // Required for Sorting table
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    NgxPaginationModule,
    
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpheaderAddingInterceptor,
    multi:true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
