import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { SkillComponent } from './messages/skill-list/skill/skill.component';
import { SkillListComponent } from './messages/skill-list/skill-list.component';
import { AddSkillComponent } from './messages/add-skill/add-skill.component';
import { SkillSearchComponent } from './messages/skill-search/skill-search.component';
import { SkillService } from './messages/message.service';
import { SearchPipe } from './search.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SkillSearchComponent,
        AddSkillComponent,
        SkillComponent,
        SkillListComponent,
        ErrorComponent,
        SearchPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [ErrorService,SkillService],
    bootstrap: [AppComponent]
})
export class AppModule {

}