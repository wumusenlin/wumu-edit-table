export class DragManager {
  private elementTr: HTMLElement;
  private columns: Array<any>;
  private setColumns: (columns: Array<any>) => void;
  private currentTh: HTMLElement | null = null;

  constructor(
    elementTr: HTMLElement,
    columns: Array<any>,
    setColumns: (columns: Array<any>) => void,
  ) {
    this.elementTr = elementTr;
    this.columns = columns;
    this.setColumns = setColumns;

    this.elementTr.addEventListener('dragstart', this.handleDragStart);
    this.elementTr.addEventListener('dragenter', this.handleDragEnter);
    this.elementTr.addEventListener('dragover', this.handleDragOver);
    this.elementTr.addEventListener('dragend', this.handleDragEnd);
  }

  private handleDragStart = (e: DragEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== 'TH') return;

    const dataIndex = target.getAttribute('data-index');
    const column = this.columns.find((col) => col.dataIndex === dataIndex);

    if (column && (column.fixed === 'left' || column.fixed === 'right')) {
      e.preventDefault();
      return;
    }

    e.dataTransfer!.effectAllowed = 'move';
    this.currentTh = target;
    this.currentTh.style.border = '1px solid var(--primary-color)';

    setTimeout(() => this.currentTh?.classList.add('wumu-drag-moving'), 0);
  };

  private handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target === this.currentTh || target === this.elementTr) {
      return;
    }

    const targetDataIndex = target.getAttribute('data-index');
    const targetColumn = this.columns.find(
      (col) => col.dataIndex === targetDataIndex,
    );

    if (
      targetColumn &&
      (targetColumn.fixed === 'left' || targetColumn.fixed === 'right')
    ) {
      return;
    }

    let liArray = Array.from(this.elementTr.childNodes);
    let currentIndex = liArray.indexOf(this.currentTh);
    let targetIndex = liArray.indexOf(target);

    const leftFixedColumns = this.columns.filter((col) => col.fixed === 'left');
    const rightFixedColumns = this.columns.filter(
      (col) => col.fixed === 'right',
    );

    if (
      targetIndex < leftFixedColumns.length ||
      targetIndex >= this.columns.length - rightFixedColumns.length
    ) {
      return;
    }

    if (currentIndex < targetIndex) {
      this.elementTr.insertBefore(this.currentTh, target.nextElementSibling);
    } else {
      this.elementTr.insertBefore(this.currentTh, target);
    }
  };

  private handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  private handleDragEnd = () => {
    if (!this.currentTh) return;

    const dataIndexes = Array.from(this.elementTr.children).map((th) =>
      th.getAttribute('data-index'),
    );

    this.setColumns((oldColumns) =>
      dataIndexes.map(
        (index) => oldColumns.find((col) => col.dataIndex === index)!,
      ),
    );

    this.currentTh.classList.remove('wumu-drag-moving');
    this.currentTh.style.border = '';
    this.currentTh = null;
  };

  public destroy() {
    this.elementTr.removeEventListener('dragstart', this.handleDragStart);
    this.elementTr.removeEventListener('dragenter', this.handleDragEnter);
    this.elementTr.removeEventListener('dragover', this.handleDragOver);
    this.elementTr.removeEventListener('dragend', this.handleDragEnd);
  }
}
