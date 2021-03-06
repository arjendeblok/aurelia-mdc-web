import { customElement, bindable } from 'aurelia-framework';

interface ITab {
  label: string;
  language: string;
  code: string;
}

@customElement('example-viewer')
export class ExampleViewer {
  tabs: ITab[] = [];
  selectedTab: ITab;
  open: boolean;

  @bindable
  html: string;

  @bindable
  sass: string;

  @bindable
  code: string;

  bind() {
    if (this.html) {
      this.tabs.push({ label: 'HTML', language: 'html', code: this.html });
    }
    if (this.sass) {
      this.tabs.push({ label: 'SASS', language: 'scss', code: this.sass });
    }
    if (this.code) {
      this.tabs.push({ label: 'TS', language: 'typescript', code: this.code });
    }
    this.selectedTab = this.tabs[0];
  }

  toggle() {
    this.open = !this.open;
  }

  select(t: ITab) {
    this.selectedTab = t;
  }

  copyCode(): void {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.id = 'txt';
    tempTextarea.style.position = 'fixed';
    tempTextarea.style.top = '0';
    tempTextarea.style.left = '0';
    tempTextarea.style.opacity = '0';
    tempTextarea.textContent = this.selectedTab.code;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();

    try {
      const returnValue = document.execCommand('copy');
      if (returnValue) {
        //   this.snackbar.open('Code copied');
      }
    } catch (err) {
      // this.snackbar.open('Unable to copy');
    } finally {
      document.body.removeChild(tempTextarea);
    }
  }

}
