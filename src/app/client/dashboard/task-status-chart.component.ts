import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Simple task status chart component.
 * For a production‑grade chart you would install Chart.js/ng2-charts and render a doughnut/pie chart.
 * Here we provide a lightweight placeholder that displays the counts in a list.
 */
@Component({
  selector: 'app-task-status-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task-status-chart">
      <h6>Task Status Distribution</h6>
      <ul *ngIf="statusCounts && (statusKeys.length ?? 0) > 0" class="list-unstyled">
        <li *ngFor="let key of statusKeys">
          {{ key }}: {{ statusCounts[key] }}
        </li>
      </ul>
      <div *ngIf="!statusCounts || (statusKeys.length ?? 0) === 0" class="no-data">No task data.</div>
    </div>
  `,
  styles: [`
    .task-status-chart { padding: 1rem; background: #f8f9fa; border-radius: 4px; }
    .task-status-chart h6 { margin-bottom: 0.5rem; }
  `]
})
export class TaskStatusChartComponent {
  @Input() statusCounts: { [status: string]: number } = {};
  get statusKeys(): string[] { return Object.keys(this.statusCounts); }
}
