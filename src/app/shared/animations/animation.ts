import {
  trigger,
  animate,
  transition,
  style,
  query,
  group
} from '@angular/animations';

export const routerAnimations = trigger('routerAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', left: 0, width: '100%' }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0, marginTop: '-5px' }),
          animate('0.5s ease-in-out', style({ opacity: 1, marginTop: '0px' }))
        ],
        { optional: true }
      ),
      query(':leave', [style({ opacity: 0 })], { optional: true })
    ])
  ])
]);
