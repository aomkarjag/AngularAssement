import { trigger,state,animate,style,transition } from "@angular/animations";

export let fade=trigger('fade',[
  state('void',style({opacity:0})),
  state('*',style({opacity:1})),
  transition('void => *',[
    animate(2000)
  ])
])