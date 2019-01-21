/**
 * Created by xavi on 5/16/17.
 */
import {Component} from "@angular/core";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'indexhome',
  templateUrl: 'indexhome.component.html'
})

export class IndexHomeComponent {
  public indexForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }
}
