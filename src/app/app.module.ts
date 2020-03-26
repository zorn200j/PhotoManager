import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_components/alert.component';
import { AccountComponent } from './account/account.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../environments/environment';
import { FileService } from './_services/file.service';
import { FileManageModule } from './file-manage/file-manage.module';
import { UploadModule } from './upload/upload.module';

import { AuthService } from './_services/auth.service';
import { AuthInterceptorService } from './_services/auth-interceptor.service';
import { CanActivateViaAuthGuard } from './_helpers/auth.guard';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        BrowserModule,
        FileManageModule,
        FlexLayoutModule, 
        MatCardModule,
        UploadModule,
     
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        AccountComponent,
        
    ],
    
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },

        CanActivateViaAuthGuard,
        FileService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };