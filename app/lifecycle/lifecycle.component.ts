import { 
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements 
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  todaysWinner = undefined;
  todaysWinningNumber = undefined
  ticketHolders = [ 'Wayne', 'Ivan', 'Renae', 'Lachlan', 'Aaron', 'Rhylee', 'Bubba' ];

  constructor() {
    this.logMethodState('Constructor');
  }

  ngOnChanges() {
    this.logMethodState('ngOnChanges');
  }

  ngOnInit() {
    this.logMethodState('ngOnInit');
  }

  ngDoCheck() {
    this.logMethodState('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logMethodState('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logMethodState('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    /* 
     * Need to introduce a delay here or an error will occur: ExpressionChangedAfterItHasBeenCheckedError
     * This arises because within one change detection cycle, the value has changed after it has been checked.
     * By introducing a slight delay, it will allow the change to occur after the first change detection.
     */
    setTimeout(() => {
      this.logMethodState('ngAfterViewInit');
    }, 1);
  }

  ngAfterViewChecked() {
    /* 
     * Changing this.todaysWinningNumber here will result in an infinite loop. ngAfterViewChecked is called after
     * each execution of ngAfterContentChecked, which in turn is executed after each ngDoCheck. The reason for
     * the infinite loop is that changing the value here triggers change detection which eventually ends up back
     * here, which triggers another change detection ad infinitum.
     * 
     */
    this.logMethodState('ngAfterViewChecked', false)
  }

  ngOnDestroy() {
    this.logMethodState('ngOnDestroy');
  }

  private logMethodState(method: string, changeRequested: boolean = true): void {
    console.log(`${method}. Ticket holders: ${this.ticketHolders}`);
    console.log(`${method}. Today's winning number: ${this.todaysWinningNumber}`);
    console.log(`${method}. Today's winner: ${this.todaysWinner}`);
    console.log(`${method}. Picking today's winner...`);
    if (changeRequested) {
      this.todaysWinningNumber = this.getWinningNumber();
    }
    console.log(`${method}. Today's winning number: ${this.todaysWinningNumber}`);
    this.todaysWinner = this.ticketHolders[this.todaysWinningNumber];
    console.log(`${method}. Today's winner is: ${this.todaysWinner}`);
    console.log(`${method} says goodbye...`);
  }


  private getWinningNumber() {
    return Math.floor(Math.random() * this.ticketHolders.length);
  }

}