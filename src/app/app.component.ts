import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileElement } from './_models/element';
import { Observable } from 'rxjs';
import { FileService } from './_services/file.service';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user';

import './_content/app.less';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    currentRoot: FileElement;
    currentPath: string;
    canNavigateUp = false;
    public fileElements: Observable<FileElement[]>;


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        public fileService: FileService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        const folderA = this.fileService.add({ name: 'Folder A', isFolder: true, parent: 'root' });
        this.fileService.add({ name: 'Folder B', isFolder: true, parent: 'root' });
        this.fileService.add({ name: 'Folder C', isFolder: true, parent: folderA.id });
        this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' });
        this.fileService.add({ name: 'File B', isFolder: false, parent: 'root' });
    
        this.updateFileElementQuery();
      }
    
      addFolder(folder: { name: string }) {
        this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
        this.updateFileElementQuery();
      }
    
      removeElement(element: FileElement) {
        this.fileService.delete(element.id);
        this.updateFileElementQuery();
      }
    
      navigateToFolder(element: FileElement) {
        this.currentRoot = element;
        this.updateFileElementQuery();
        this.currentPath = this.pushToPath(this.currentPath, element.name);
        this.canNavigateUp = true;
      }
    
      navigateUp() {
        if (this.currentRoot && this.currentRoot.parent === 'root') {
          this.currentRoot = null;
          this.canNavigateUp = false;
          this.updateFileElementQuery();
        } else {
          this.currentRoot = this.fileService.get(this.currentRoot.parent);
          this.updateFileElementQuery();
        }
        this.currentPath = this.popFromPath(this.currentPath);
      }
    
      moveElement(event: { element: FileElement; moveTo: FileElement }) {
        this.fileService.update(event.element.id, { parent: event.moveTo.id });
        this.updateFileElementQuery();
      }
    
      renameElement(element: FileElement) {
        this.fileService.update(element.id, { name: element.name });
        this.updateFileElementQuery();
      }
    
      updateFileElementQuery() {
        this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
      }
    
      pushToPath(path: string, folderName: string) {
        let p = path ? path : '';
        p += `${folderName}/`;
        return p;
      }
    
      popFromPath(path: string) {
        let p = path ? path : '';
        let split = p.split('/');
        split.splice(split.length - 2, 1);
        p = split.join('/');
        return p;
      }
}

