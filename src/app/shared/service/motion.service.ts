import { Injectable } from '@angular/core';
import { animate } from 'motion';

@Injectable({
  providedIn: 'root',
})
export class MotionService {
  /**
   * Método para animar um elemento HTML com Motion.js
   * @param element Elemento a ser animado
   * @param properties Propriedades da animação (ex: { x: 100, opacity: 0.5 })
   * @param options Opções da animação (ex: { duration: 1 })
   */

  animateElement(element: HTMLElement, properties: any, options?: any) {
    if (element) {
      animate(element, properties, options);
    }
  }
}
