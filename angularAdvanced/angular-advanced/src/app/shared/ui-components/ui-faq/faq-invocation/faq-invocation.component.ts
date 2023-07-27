import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'faq-invocation',
    templateUrl: './faq-invocation.component.html',
    styleUrls: ['./faq-invocation.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqInvocationComponent {
    @Input() analyticName?: string;

    scrollToFaq() {
        this.sendAnalyticsEvent(this.analyticName);
        const faqElement = document.getElementById('ui-faq-component');
        faqElement?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    private sendAnalyticsEvent(event?: string): void {
        if (!this.analyticName) return;

       // сбор аналитики если есть analyticName
    }
}
