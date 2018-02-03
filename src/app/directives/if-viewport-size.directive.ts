import { Directive, Injectable, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[IfViewportSize]'
})

@Injectable()

export class IfViewportSizeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }
  @Input() set IfViewportSize(condition: number) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
