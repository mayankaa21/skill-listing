import { Component, OnInit } from "@angular/core";
import { SkillService } from "../message.service";
import { Skill } from "../message.model";

@Component({
    selector: 'skill-search',
    templateUrl: './skill-search.component.html',
    
})
export class SkillSearchComponent implements OnInit{
    skillname:string[]=[];
    searchText:boolean;
    
    constructor(private skillservice: SkillService){}
    ngOnInit(){
        this.skillservice.getSkills()
            .subscribe(
                (skills: Skill[]) => {
                    skills.forEach(element=>{
                        this.skillname.push(element.name);
                    })
                }
            );
    }

}