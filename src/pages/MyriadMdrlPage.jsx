import {
  Page, 
  TextView,
  Stack
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
      <Stack alignment='center' padding={4} spacing={24} >
        
        <TextView>
          create a report with all of the other items
        </TextView>
  
        <TextView>
          offer option to export to MD file called MyriaD MD RL (MyriaD Markdown Report Log)
        </TextView>
  
        <TextView>
          offer option to parse the MD RL from a MD folder
        </TextView>
  
        <TextView>
          total files
        </TextView>
  
        <TextView>
          total files size
        </TextView>
  
        <TextView>
          tag count
        </TextView>
  
        <TextView>
          markdown files
        </TextView>
  
        <TextView>
          non markdown files
        </TextView>

      </Stack>
    );
  }

};