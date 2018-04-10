import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Skill } from "./message.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class SkillService {
    private skills: Skill[] = [];
    skillIsEdit = new EventEmitter<Skill>();
    

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addSkill(skill: Skill) {
        const body = JSON.stringify(skill);
        const headers = new Headers({'Content-Type': 'application/json'});
        /*const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';*/
        return this.http.post('https://skill-listing.herokuapp.com/message', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const skill = new Skill(
                    result.obj._id,
                    result.obj.name,
                    result.obj.acceptoption,
                    result.obj.rejectoption);
                this.skills.push(skill);
                return skill;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getSkills() {
        return this.http.get('https://skill-listing.herokuapp.com/message')
            .map((response: Response) => {
                const skills = response.json().obj;
                let transformedSkills: Skill[] = [];
                for (let skill of skills) {
                    transformedSkills.push(new Skill(
                        skill._id,
                        skill.name,
                        skill.acceptoption,
                        skill.rejectoption)
                    );
                }
                this.skills = transformedSkills;
                return transformedSkills;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }


    updateSkill(skill: Skill) {
        const body = JSON.stringify(skill);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('https://skill-listing.herokuapp.com/message/' + skill._id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteSkill(skill: Skill) {
        this.skills.splice(this.skills.indexOf(skill), 1);
        return this.http.delete('https://skill-listing.herokuapp.com/message/' + skill._id)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}