import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PoddComponent } from './podd-component/podd-component';
import { EventComponent } from './event-component/event-component';
import { CourseComponent } from './course-component/course-component';
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { NotFoundComponent } from './not-found-component/not-found-component';


export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "podd", component: PoddComponent },
    { path: "event", component: EventComponent },
    { path: "course", component: CourseComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "404", component: NotFoundComponent},
    { path: "**", component: NotFoundComponent }
];
