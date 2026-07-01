import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExportDownloadService {

  public downloadJson(data: unknown, fileName: string): void {
    const json = JSON.stringify(data, null, 2);

    this.download(
      json,
      `${fileName}.json`,
      'application/json',
    );
  }

  public downloadTxt(content: string, fileName: string): void {
    this.download(
      content,
      `${fileName}.txt`,
      'text/plain',
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