import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-sites-form',
  templateUrl: './sites-form.component.html',
  styleUrls: ['./sites-form.component.scss']
})
export class SitesFormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) { }

  private sub: Subscription = new Subscription();

  @Output()
  private $action: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public siteForm: FormGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    meta: this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control(''),
      keywords: this.fb.control(''),
    }, Validators.required),
    footer: this.fb.group({
      title: this.fb.control('', Validators.required),
      address: this.fb.control('', Validators.required),
      phone: this.fb.control('', [Validators.minLength(10)]),
      email: this.fb.control(''),
      copyright: this.fb.control(''),
    })
  });

  ngOnInit(): void {
    this.sub = this.siteForm
      .valueChanges
      .pipe(
        debounceTime(1600),
        distinctUntilChanged(),
        filter(() => this.siteForm.valid)
      )
      .subscribe((value: FormGroup) => this.$action.emit(value))
  }

  ngOnDestroy(): void {
    this.sub ? this.sub.unsubscribe() : null;
  }

}