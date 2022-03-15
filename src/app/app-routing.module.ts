import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ApplyCreditComponent } from './components/apply-credit/apply-credit.component';
import { TopCreditComponent } from './components/top-credit/top-credit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationResultComponent } from './components/application-result/application-result.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { HistoryComponent } from './components/history/history.component';
import { AnlystDashboardComponent } from './components/anlyst-dashboard/anlyst-dashboard.component';
import { LoanApplicationsComponent } from './components/loan-applications/loan-applications.component';
import { AnalystProfilesComponent } from './components/analyst-profiles/analyst-profiles.component';
import { AddAnalystsComponent } from './components/add-analysts/add-analysts.component';
import { TrackstatusComponent } from './components/trackstatus/trackstatus.component';
import { StatusOtppageComponent } from './components/status-otppage/status-otppage.component';
import { ShowstatusComponent } from './components/showstatus/showstatus.component';
import { EditPoliciesComponent } from './components/edit-policies/edit-policies.component';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { UpdatePoliciesComponent } from './components/update-policies/update-policies.component';


const routes: Routes = [
 {path:'',component: HomeComponent},
 {path: 'login',component:LoginComponent},
 {path:'signup',component:RegistrationComponent},
 {path:'logout',component:LogoutComponent,canActivate:[AuthGuardService]},
 {
  path:'admin-dashboard', component:AdminDashboardComponent,canActivate: [AuthGuardService],
  children: [
    {path:'homedashboard', component:DashboardComponent,canActivate:[AuthGuardService]},
    {path :'loan-applications', component:LoanApplicationsComponent,canActivate:[AuthGuardService]},
    {path:'analyst-profiles',component:AnalystProfilesComponent,canActivate:[AuthGuardService]},
    {path:'add-analyst',component:AddAnalystsComponent,canActivate:[AuthGuardService]},
    {path:'history',component:HistoryComponent,canActivate:[AuthGuardService]},
    {path:'edit-policies',component:EditPoliciesComponent,canActivate:[AuthGuardService]},
    {path:'add-policy',component:AddPolicyComponent,canActivate:[AuthGuardService]},
    {path:'update-policy',component:UpdatePoliciesComponent,canActivate:[AuthGuardService]}
  ]},
 {
  path:'analyst-dashboard', component:AnlystDashboardComponent,canActivate: [AuthGuardService],
  children: [
    {path:'homedashboard', component:DashboardComponent,canActivate:[AuthGuardService]},
    {path :'top-credit', component: TopCreditComponent,canActivate:[AuthGuardService]},
    {path:'user-profile',component:ProfileComponent,canActivate:[AuthGuardService]},
    {path:'editApplication',component:EditApplicationComponent,canActivate:[AuthGuardService]},
    {path:'history',component:HistoryComponent,canActivate:[AuthGuardService]}
  ]},
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[ 
       {path:'optverification', component:OtpPageComponent},
       {path :'apply-credit', component:ApplyCreditComponent},
       {path:'application-result',component:ApplicationResultComponent},
       {path:'track-status',component:TrackstatusComponent},
       {path:'status-otpverification',component:StatusOtppageComponent},
       {path:'current-status',component:ShowstatusComponent}
   ]},
 {path :'forgetPassword' , component:ForgetPasswordComponent  },
 {path :'resetPassword' , component:ResetPasswordComponent  },
 {path : 'top-credit', component: TopCreditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
