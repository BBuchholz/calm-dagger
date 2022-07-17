import {
  Button,
  Composite,
  fs,
  ImageView,
  Row,
  ScrollView,
  Stack,
  Switch,
  Page,
  TextView,
} from 'tabris';

export class FileExamplePage extends Page {

  async openFile(type) {
    try {
      const files = await fs.openFile({type, quantity: $(Switch).only().checked ? 'multiple' : 'single'});
      const result = $(Composite).first('#result');
      result.children().dispose();
      if (files.length === 0) {
        result.append(<TextView text='NO FILE OPENED' top={64} centerX textColor='#757575' font='medium 16px'/>);
      } else {
        result.append(<TextView top={16} font='medium 12px' text='OPENED FILES' textColor='#757575'/>);
        files.forEach((file) => result.append(this.createFileView(file)));
      }
    } catch (e) {
      console.error(e);
    }
  }

  createFileView(file) {
    const fileSize = (file.size / 1000000).toFixed(2);
    return (
      <Composite>
        <TextView left='#preview 16' font='medium 16px' text={file.name}/>
        <Row left='#preview 16' right top='prev() 4'>
          <TextView text={new Date(file.lastModified).toLocaleDateString()} textColor='#757575'/>
          <TextView left={16} right={16} text={`${fileSize} MB`} alignment='centerX' textColor='#757575'/>
          <TextView text={file.type} textColor='#757575'/>
        </Row>
      </Composite>
    );
  }

  constructor(properties) {
    
    super();

    this.set({title: 'Myriad MD Report Log', ...properties}).append(

      <ScrollView stretch>
        <Stack stretchX padding={16} spacing={12} alignment='stretchX'>
          <Row height={38}>
            <TextView text='Open file...' font='black 24px'/>
            <TextView stretchX alignment='right' text='Allow multiple' textColor='#757575' baseline='prev()' left={8}/>
            <Switch left={8} centerY/>
          </Row>
          <Composite>
            <Button left={0} right='66% 8' text='Image' onSelect={() => this.openFile('image/*')}/>
            <Button left='33% 8' right='33% 8' text='Text' onSelect={() => this.openFile('text/*')}/>
            <Button left='66% 8' right={0} text='Any' onSelect={() => this.openFile('*/*')}/>
          </Composite>
          <Stack id='result' spacing={16} stretchX alignment='stretchX'/>
        </Stack>
      </ScrollView>
    );
  }

};