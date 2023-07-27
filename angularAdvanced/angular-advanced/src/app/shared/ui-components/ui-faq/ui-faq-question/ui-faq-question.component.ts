import { animate, style, transition, trigger } from '@angular/animations';
import {NgIf, NgOptimizedImage} from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ui-faq-question',
    templateUrl: './ui-faq-question.component.html',
    styleUrls: ['./ui-faq-question.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
    animations: [
        trigger('collapse', [
            transition(':enter', [
                style({ height: 0, opacity: 0 }),
                animate('0.3s 0s linear', style({
                    height: '*',
                    opacity: 1
                }))
            ]),
            transition(':leave', [
                style({ height: '*', opacity: 1 }),
                animate('0.3s 0.1s linear', style({
                    height: 0,
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class UiFaqQuestionComponent {
    @Output()
    openEmit = new EventEmitter<void>();

    opened = false;

    toggle(event: MouseEvent): void {
        event.preventDefault();
        (event.target as HTMLElement)?.blur();

        if (this.opened === !this.opened) {
            return;
        }

        this.opened = !this.opened;

        if (this.opened) {
            this.openEmit.emit();
        }
    }
}
