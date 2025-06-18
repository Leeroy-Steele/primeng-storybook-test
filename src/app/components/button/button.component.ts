import { Component, Input } from '@angular/core';
import { ButtonModule, ButtonSeverity } from 'primeng/button';


@Component({
    selector: 'primeng-button',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonComponent {
    @Input() severity: ButtonSeverity = 'primary';
    @Input() size: 'small' | 'large' | undefined = 'large';
    @Input() icon: string = 'pi pi-plus'
}