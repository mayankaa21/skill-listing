import { Component, OnInit, Input } from "@angular/core";
import { SkillService } from "../../message.service";
import { Skill } from "../../message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'skill',
    templateUrl: './skill.component.html'
})
export class SkillComponent implements OnInit{
@Input('skilldesc') skill:Skill;

    hover:boolean;
    formDis:boolean= false;
    originalDis:boolean=true;

    
    constructor(private skillService:SkillService){}

    onHover(){
        this.hover=true;
    }

    out(){
        this.hover=false;
    }

    onclick(){
        this.formDis = true;
        this.originalDis = false;
    }

    onApprove(){
       this.skill.acceptoption = !this.skill.acceptoption;
       if(this.skill.acceptoption){
           this.skill.rejectoption=false;
       }
       this.skillService.updateSkill(this.skill)
       .subscribe(
           data => console.log(data),

       );
    }

    onReject(){
        this.skill.rejectoption = !this.skill.rejectoption;
        if(this.skill.rejectoption){
            this.skill.acceptoption=false;
        }
        this.skillService.updateSkill(this.skill)
        .subscribe(
            data => console.log(data),

        );
    }

    onSubmit(form: NgForm) {
             this.skill.name = form.value.content;
             this.skillService.updateSkill(this.skill)
                 .subscribe(
                     data => console.log(data),

                 );
             if(this.skill.name){
                form.resetForm();
                this.formDis = false;
                this.originalDis = true;
                this.hover= false;
             }
                 
     }
 
    ngOnInit(){}

}