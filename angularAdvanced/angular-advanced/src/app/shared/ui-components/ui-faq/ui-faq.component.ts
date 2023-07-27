import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiPanelComponent } from '../ui-panel/ui-panel.component';
import { UiFaqQuestionComponent } from './ui-faq-question/ui-faq-question.component';
import {UiPanelBoxComponent} from "../ui-panel-box/ui-panel-box.component";

export interface FagQuestion {
  title: string;
  text: string;
}

/**
 * faqName - имя faq для сбора аналитики (если не задано аналитика не собирается)
 * fagQuestion - элементы списка для faq
 * */

@Component({
  selector: 'ui-faq',
  templateUrl: './ui-faq.component.html',
  styleUrls: ['./ui-faq.component.scss'],
  standalone: true,
  imports: [
    UiFaqQuestionComponent,
    NgForOf,
    UiPanelComponent,
    UiFaqQuestionComponent,
    UiPanelBoxComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiFaqComponent {
  @Input() faqName?: string; // для аналитики
  @Input() fagQuestion: FagQuestion[] = []

  onOpenQuestion(index: number): void {
    if (!this.faqName) return;
    // сбор аналитики если есть faqName
  }
}
