import { Component, OnInit } from "@angular/core";
import { SkillService } from "../message.service";
import { Skill } from "../message.model";

@Component({
    selector: 'skill-list',
    templateUrl: './skill-list.component.html'
})
export class SkillListComponent implements OnInit{
    skills: Skill[] = [];
    constructor(private skillservice: SkillService){}
    ngOnInit() {
        this.skillservice.getSkills()
            .subscribe(
                (skills: Skill[]) => {
                    this.skills = skills;
                }
            );
    }

}