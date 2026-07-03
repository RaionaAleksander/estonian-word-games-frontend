import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExportPdfService {
  private async render(element: HTMLElement) {
    const html2canvas = (await import('html2canvas')).default;

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
      windowHeight: clone.scrollHeight
    });

    document.body.removeChild(clone);

    return canvas;
  }

  async exportFromElement(element: HTMLElement): Promise<void> {
    const jsPDF = (await import('jspdf')).default;

    this.fixOklchColors(element);

    const canvas = await this.render(element);

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

    pdf.save(`word-search-${Date.now()}.pdf`);
  }

  private fixOklchColors(root: HTMLElement): void {
    const all = root.querySelectorAll<HTMLElement>('*');

    all.forEach(el => {
      const style = getComputedStyle(el);

      if (style.color?.includes('oklch')) {
        (el.style as any).color = '#000000';
      }

      if (style.backgroundColor?.includes('oklch')) {
        (el.style as any).backgroundColor = '#ffffff';
      }

      if (style.borderColor?.includes('oklch')) {
        (el.style as any).borderColor = '#cccccc';
      }
    });
  }
}