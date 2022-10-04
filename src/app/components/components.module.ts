import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
    declarations: [
        NavbarComponent,
        PostFormComponent,
    ],
    imports: [
        NgbModule,
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavbarComponent,
        PostFormComponent
    ]
})
export class ComponentsModule { }