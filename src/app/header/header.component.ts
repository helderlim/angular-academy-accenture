import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() title = 'Seja bem-vindo!';

  constructor() { 
    console.log('construtor');
    

  }

  ngOnChanges(){
    console.log('ngonchanges');
    
  }

  ngOnInit(): void {
    console.log('ngOninit');
    
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    
  }

  ngOnDestroy(){
    console.log('ngOnDestory');
    
  }

}
