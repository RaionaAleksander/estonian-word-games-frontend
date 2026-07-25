import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentExportService {

  private async render(element: HTMLElement): Promise<HTMLCanvasElement> {
    const html2canvas = (await import('html2canvas')).default;

    this.fixOklchColors(element);

    const clone = element.cloneNode(true) as HTMLElement;

    clone.style.width = '210mm';
    clone.style.height = '297mm';
    clone.style.margin = '0';
    clone.style.boxShadow = 'none';
    clone.style.border = 'none';

    document.body.appendChild(clone);

    const canvas = await html2canvas(clone, {
      scale: 2,
      backgroundColor: '#ffffff',
      windowWidth: clone.scrollWidth,
      windowHeight: clone.scrollHeight,
    });

    document.body.removeChild(clone);

    return canvas;
  }

  async exportPdf(element: HTMLElement): Promise<void> {
    const jsPDF = (await import('jspdf')).default;

    const canvas = await this.render(element);

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

    pdf.save(`word-search-${Date.now()}.pdf`);
  }

  async exportPng(element: HTMLElement): Promise<void> {
    const canvas = await this.render(element);

    const link = document.createElement('a');

    link.download = `word-search-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');

    link.click();
  }

  private fixOklchColors(root: HTMLElement): void {
    const all = root.querySelectorAll<HTMLElement>('*');

    all.forEach(el => {
      const style = getComputedStyle(el);

      if (style.color?.includes('oklch')) {
        el.style.color = '#000000';
      }

      if (style.backgroundColor?.includes('oklch')) {
        el.style.backgroundColor = '#ffffff';
      }

      if (style.borderColor?.includes('oklch')) {
        el.style.borderColor = '#cccccc';
      }
    });
  }
}