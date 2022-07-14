import {CollectionView, Composite, TextView, contentView, AlertDialog, Setter} from 'tabris';

const people = [
  {firstName: 'Holger', lastName: 'Staudacher'},
  {firstName: 'Ian', lastName: 'Bull'},
  {firstName: 'Jochen', lastName: 'Krause'},
  {firstName: 'Jordi', lastName: 'Böhme López'},
  {firstName: 'Markus', lastName: 'Knauer'},
  {firstName: 'Moritz', lastName: 'Post'},
  {firstName: 'Ralf', lastName: 'Sternberg'},
  {firstName: 'Tim', lastName: 'Buschtöns'}
];

contentView.append(
  <CollectionView stretch itemCount={people.length} cellHeight={256} updateCell={updateCell}>
    <Setter target={CollectionView} attribute='createCell'>{() =>
      <Composite onTap={handleTap}>
        <TextView left={30} top='prev() 16' right={30} alignment='centerX'/>
      </Composite>}
    </Setter>
  </CollectionView>
);

/**
 * @param {Composite} cell
 * @param {number} index
 */
function updateCell(cell, index) {
  cell.find(TextView).only().text = people[index].firstName;
}

/** @param {tabris.WidgetTapEvent} ev */
function handleTap({target}) {
  const index = target.parent(CollectionView).itemIndex(target);
  AlertDialog.open(people[index].firstName + ' ' + people[index].lastName);
}