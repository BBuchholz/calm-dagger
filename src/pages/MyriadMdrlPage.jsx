import {
  Page, 
  TextView
} from 'tabris';

export class MyriadMdrlPage extends Page {

  constructor(properties) {
    
    super();

    const items = [
      '',
      'create a report with all of the other items', 
      'offer option to export to MD file called MyriaD MD RL (MyriaD Markdown Report Log)', 
      'offer option to parse the MD RL from a MD folder', 
      'total files', 
      'total files size', 
      'tag count', 
      'markdown files', 
      'non markdown files', 
    ];

    this.set({title: 'News', ...properties}).append(
      <TextView center>
- [ ] create a report with all of the other items
- [ ] offer option to export to MD file called MyriaD MD RL (MyriaD Markdown Report Log)
- [ ] offer option to parse the MD RL from a MD folder
- [ ] total files
- [ ] total files size
- [ ] tag count
- [ ] markdown files
- [ ] non markdown files

      </TextView>
    );
  }

};