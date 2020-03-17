import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, AfterContentInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-sites-form',
  templateUrl: './sites-form.component.html',
  styleUrls: ['./sites-form.component.scss']
})
export class SitesFormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) { }

  private sub: Subscription = new Subscription();

  @Input()
  private data: Site;

  @Input()
  public autosave: boolean = false;

  @Output()
  private $action: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public siteForm: FormGroup;

  ngOnInit(): void {
    this.siteForm = this.fb.group({
      name: this.fb.control(this.initValue(this.data?.name), Validators.required),
      meta: this.fb.group({
        title: this.fb.control(this.initValue(this.data?.meta.title)),
        description: this.fb.control(this.initValue(this.data?.meta.description)),
        keywords: this.fb.control(this.initValue(this.data?.meta.keywords)),
      }, Validators.required),
      footer: this.fb.group({
        title: this.fb.control(this.initValue(this.data?.footer.title), Validators.required),
        address: this.fb.control(this.initValue(this.data?.footer.address), Validators.required),
        phone: this.fb.control(this.initValue(this.data?.footer.phone), [Validators.minLength(10)]),
        email: this.fb.control(this.initValue(this.data?.footer.email)),
        copyright: this.fb.control(this.initValue(this.data?.footer.copyright), Validators.required),
      })
    });

    this.sub = this.siteForm
      .valueChanges
      .pipe(
        debounceTime(1600),
        distinctUntilChanged(),
        filter(() => this.siteForm.valid && this.autosave)
      )
      .subscribe(() => this.save())
  }

  private initValue(prop: string) {
    return prop != undefined && prop != null ? prop : '';
  }

  public save() {
    this.$action.emit(this.siteForm.value);
  }

  ngOnDestroy(): void {
    this.sub.closed || this.sub.unsubscribe();
  }

}