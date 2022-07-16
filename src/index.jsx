import {
  Button,
  TextView, 
  NavigationView, 
  Page, 
  Stack,
  contentView
} from 'tabris';

import { NewsPage } from './pages/NewsPage';
import { MyriadMdrlPage } from './pages/MyriadMdrlPage';

function openNewsPage() {
  
  $(NavigationView).only().append(
    <NewsPage />
  );

}

function openMyriadMdrlPage() {
  
  $(NavigationView).only().append(
    <MyriadMdrlPage />
  );

}

// Create a full-size navigation view and add a page to it
contentView.append(
  <NavigationView stretch>
    <Page title='Main Page'>
      <Stack alignment='center' padding={4} spacing={24} >
        
        <Button onSelect={
          () => openMyriadMdrlPage()}>Myriad MarkDown Report Log</Button>
        
        <Button onSelect={
          () => openNewsPage()}>Open news page</Button>


        <TextView>
          create a report with all of the other items
        </TextView>
  
        <TextView>
          offer option to export to MD file called MyriaD MD RL (MyriaD Markdown Report Log)
        </TextView>
  
        <TextView>
          offer option to parse the MD RL from a MD folder
        </TextView>

      </Stack>  
    </Page>
  </NavigationView>
);
