import {
  Page, 
  TextView,
  Stack
} from 'tabris';

export class MyriadMdrlPage extends Page {

  constructor(properties) {
    
    super();

    this.set({title: 'Myriad MD Report Log', ...properties}).append(
      <Stack alignment='center' padding={4} spacing={24} >
        
  
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