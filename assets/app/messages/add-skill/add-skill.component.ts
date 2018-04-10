import { Component, OnInit } from "@angular/core";
import { SkillService } from "../message.service";
import { Skill } from "../message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'add-skill',
    templateUrl: './add-skill.component.html'
})
export class AddSkillComponent implements OnInit{
    
    skill: Skill;
    acceptoption:boolean = false;
    rejectoption:boolean = false;
    addclicked:boolean = false;

    constructor(private skillService: SkillService) {}

    onaddclicked(){
        this.addclicked= true;
    }

    approve(){
        this.acceptoption=!(this.acceptoption);
        if(this.acceptoption){
            this.rejectoption= false;
        }
    }
    reject(){
        this.rejectoption=!(this.rejectoption);
        if(this.rejectoption){
            this.acceptoption= false;
    }
    }
    onSubmit(form: NgForm) {
      
            const skill = new Skill(null,form.value.content, this.acceptoption, this.rejectoption);
            this.skillService.addSkill(skill)
                .subscribe(
                    data => console.log(data),
                );
            
            form.resetForm();
            this.skill = null;
            this.acceptoption = false;
            this.rejectoption = false;
            this.addclicked = false;              
    }

    ngOnInit() {

    }
}
