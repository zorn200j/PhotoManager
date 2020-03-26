import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { FileManageComponent } from './file-manage/file-manage.component';
import { AccountComponent } from './account/account.component';
import { CanActivateViaAuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'upload', component: UploadComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'file-manage', component: FileManageComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'account', component: AccountComponent, canActivate: [CanActivateViaAuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);