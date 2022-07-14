import {
  Button, 
  NavigationView, 
  Page, 
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
      <Button center onSelect={
        () => openMyriadMdrlPage()}>Open MyriadMdrl page</Button>
      <Button center top={prev() 16} onSelect={
        () => openNewsPage()}>Open news page</Button>
    </Page>
  </NavigationView>
);
