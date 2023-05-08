import { Pipe, PipeTransform } from '@angular/core';
import {MemoryGameOptions} from "../../memory-game/memory-game.component";

@Pipe({
  name: 'memoryGameDifficultyNamePipe',
  pure: false
})
export class MemoryGameDifficultyNamePipe implements PipeTransform {

  transform(value: MemoryGameOptions, returnSum: boolean = false): number | string {
    const sumDifficulty = value.coincidences * value.difficulty;

    if (returnSum) return sumDifficulty;

    switch (true) {
      case sumDifficulty <= 4:
        return 'сосунок';

      case sumDifficulty <= 8:
        return 'дитя';

      case sumDifficulty <= 12:
        return 'ребенок';

      case sumDifficulty <= 18:
        return 'мелкий';

      case sumDifficulty <= 24:
        return 'подросток';

      case sumDifficulty <= 32:
        return 'пацан';

      case sumDifficulty <= 40:
        return 'пацан';

      case sumDifficulty <= 48:
        return 'мужик';

      case sumDifficulty < 56:
        return 'мудрец';

      default:
        return 'гений';
    }
  }

}
