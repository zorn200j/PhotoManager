import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { FileManageComponent } from './file-manage/file-manage.component';
//import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, /*canActivate: [AuthGuard]*/ },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'file-manage', component: FileManageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);