import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-free-field',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form>
      <mat-form-field class="example-chip-list w-100">
        <mat-label>Favorite Fruits</mat-label>
        <mat-chip-grid #chipGrid aria-label="Fruit selection">
          @for (fruit of fruits(); track $index) {
          <mat-chip-row (removed)="remove(fruit)">
            {{ fruit }}
            <button matChipRemove [attr.aria-label]="'remove ' + fruit">
              <mat-icon>cancel</mat-icon>
            </button>
          </mat-chip-row>
          }
        </mat-chip-grid>
        <input
          name="currentFruit"
          placeholder="New Fruit..."
          #fruitInput
          [(ngModel)]="currentFruit"
          [matChipInputFor]="chipGrid"
          [matAutocomplete]="auto"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          (matChipInputTokenEnd)="add($event)"
        />
        <mat-autocomplete
          #auto="matAutocomplete"
          (optionSelected)="selected($event); fruitInput.value = ''"
        >
          @for (fruit of filteredFruits(); track fruit) {
          <mat-option [value]="fruit">{{ fruit }}</mat-option>
          }
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
  styles: ``,
})
export class FreeFieldComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentFruit = model('');
  readonly fruits = signal(['Lemon']);
  readonly allFruits: string[] = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry',
  ];

  readonly filteredFruits = computed(() => {
    const current = this.currentFruit().toLowerCase();
    return this.allFruits.filter((fruit) => {
      return (
        !this.fruits().includes(fruit) &&
        (!current || fruit.toLowerCase().includes(current))
      );
    });
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add if not empty and not duplicate
    if (value && !this.fruits().includes(value)) {
      this.fruits.update((fruits) => [...fruits, value]);
    }

    // Clear the input
    this.currentFruit.set('');
  }

  remove(fruit: string): void {
    this.fruits.update((fruits) => {
      const index = fruits.indexOf(fruit);
      if (index < 0) return fruits;

      fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
      return [...fruits];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (!this.fruits().includes(value)) {
      this.fruits.update((fruits) => [...fruits, value]);
    }
    this.currentFruit.set('');
    event.option.deselect();
  }
}
