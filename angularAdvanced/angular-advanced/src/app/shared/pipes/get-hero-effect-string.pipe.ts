import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getHeroEffectString'
})
export class GetHeroEffectStringPipe implements PipeTransform {

  transform(effect: {key: string, value: string | number}): string {
    let symbol: string = effect.value < 0 ? ': - ' : ': + ';
    let effectName: string = this.getEffectName(effect.key);

    return `${effectName + symbol + Math.abs(+effect.value)}`
  }

  getEffectName(effect: string):string {
    switch (effect.toLowerCase()) {
      case 'robustiness': return 'живучесть';
      case 'faith': return 'вера';
      case 'intelligence': return 'интеллект';
      case 'strength': return 'сила';
      case 'perception': return 'восприятие';
      case 'endurance': return 'выносливость';
      case 'charisma': return 'харизма';
      case 'agility': return 'ловкость';
      case 'luck': return 'удача';
      case 'immunity': return 'иммунитет';
      case 'resistance': return 'сопротивление';
      case 'неверие': return 'disbelief';
      case 'знания': return 'knowledge';

      default: return effect;
    }
  }

}
