import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { PoddComponent } from './pages/podd-component/podd-component';
import { EventComponent } from './pages/event-component/event-component';
import { CourseComponent } from './pages/course-component/course-component';
import { AboutComponent } from './pages/about-component/about-component';
import { ContactComponent } from './pages/contact-component/contact-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';


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
