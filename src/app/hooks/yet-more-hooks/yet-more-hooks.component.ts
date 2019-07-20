import {
  Component,
  OnInit,
  Input,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
// IMPORTANT! Implementing ngDoCheck and ngOnChanges is a bad practice
// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-yet-more-hooks',
  templateUrl: './yet-more-hooks.component.html',
  styleUrls: ['./yet-more-hooks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YetMoreHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() data: any;
  someValue = { abc: 'abc' };

  ngOnChanges(changes: SimpleChanges) {
    console.log('NgOnChanges called');
    console.log(changes);
  }

  //  ====================================================================================
  // Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor.
  //  The constructor should only be used to initialize class members but shouldn't do actual "work".

  // So you should use constructor() to setup Dependency Injection and not much else.
  // ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
  ngOnInit() {
    console.log(`You can see @Input: ${this.data}`);
  }
  constructor() {
    console.log(`You can't see @Input: ${this.data}`);
  }

  // ====================================================================================
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // ====================================================================================
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    setTimeout(() => {
      this.data = 'fdfdf';
      this.data = new String();
    }, 3000);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  changeValue() {
    this.someValue = { ...this.someValue, abc: 'cba' };
  }
}
