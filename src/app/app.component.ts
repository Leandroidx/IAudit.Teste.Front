import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({    
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    loginMoq: any = {};
    display: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.display = true;

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });

    }
}
