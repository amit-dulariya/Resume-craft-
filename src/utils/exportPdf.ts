import html2pdf from 'html2pdf.js'

export async function exportToPDF(elementId: string, filename: string): Promise<void> {
  const element = document.getElementById(elementId)
  if (!element) throw new Error('Resume element not found')

  const opt = {
    margin: 0,
    filename: `${filename}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
  }

  html2pdf().set(opt).from(element).save()
}

export function printResume(elementId: string): void {
  const element = document.getElementById(elementId)
  if (!element) return

  const printWindow = window.open('', '_blank')
  if (!printWindow) return

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume</title>
        <style>
          @page { size: A4; margin: 0; }
          body { margin: 0; padding: 0; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        </style>
      </head>
      <body>${element.outerHTML}</body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
}
