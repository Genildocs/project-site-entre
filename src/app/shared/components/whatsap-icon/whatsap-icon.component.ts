import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MotionService } from '../../service/motion.service';
@Component({
  selector: 'app-whatsap-icon',
  templateUrl: './whatsap-icon.component.html',
  styles: ``,
})
export class WhatsapIconComponent implements OnInit, AfterViewInit {
  constructor(private _motionService: MotionService) {}

  @ViewChild('whatsap') whatsap!: ElementRef<HTMLElement>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
