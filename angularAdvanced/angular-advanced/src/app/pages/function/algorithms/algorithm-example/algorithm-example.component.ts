import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {StateItem} from "../algorithms.component";
import {ButtonType} from "../../../../shared/ui-components/iu-models";

@Component({
  selector: 'algorithm-example',
  templateUrl: './algorithm-example.component.html',
  styleUrls: ['./algorithm-example.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlgorithmExampleComponent {
  @Input() algorithmState!: StateItem;
  @Input() open!: string;
  @Input() algorithmName!: string;
  @Output() algorithmWrapperEmit = new EventEmitter<string>();
  @Output() clearEmit = new EventEmitter<string>();
  @Output() openCardEmit = new EventEmitter<string>();
  public buttonType: ButtonType = ButtonType.primaryDanger;

  emit(eventEmit: EventEmitter<string>) {
    eventEmit.emit(this.algorithmName);
  }

}
