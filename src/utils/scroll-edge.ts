export function updateScrollEdge(event: Event): void {
  const scroller = event.currentTarget as HTMLElement;
  scroller.toggleAttribute('data-scrolled', scroller.scrollTop > 0);
}
