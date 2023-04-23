import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'native-html-tags',
  templateUrl: './native-html-tags.component.html',
  styleUrls: ['./native-html-tags.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NativeHtmlTagsComponent {
  isDialogOpen: boolean = false;
}
