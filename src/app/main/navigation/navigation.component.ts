import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Input() navigation: MenuItem[];

    constructor() {
    }

    ngOnInit() {
    }

}
