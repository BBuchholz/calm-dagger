import {
  Button, 
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
        <Button center onSelect={
          () => openMyriadMdrlPage()}>Open MyriadMdrl page</Button>
        <Button center onSelect={
          () => openNewsPage()}>Open news page</Button>
      </Stack>  
    </Page>
  </NavigationView>
);
