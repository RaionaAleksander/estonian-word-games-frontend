import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-json-export',
  imports: [],
  templateUrl: './json-export.component.html',
  styleUrl: './json-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonExportComponent {

  readonly data = input.required<unknown>();

  readonly fileName = input('export');

  protected readonly jsonPreview = computed(() =>
    JSON.stringify(this.data(), null, 2)
  );

  protected downloadJson(): void {
    this.download(
      this.jsonPreview(),
      `${this.fileName()}.json`,
      'application/json'
    );
  }

  protected downloadTxt(): void {
    this.download(
      this.jsonPreview(),
      `${this.fileName()}.txt`,
      'text/plain'
    );
  }

  private download(
    content: string,
    fileName: string,
    mimeType: string,
  ): void {

    const blob = new Blob([content], {
      type: `${mimeType};charset=utf-8`,
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;

    link.click();

    URL.revokeObjectURL(url);
  }
}