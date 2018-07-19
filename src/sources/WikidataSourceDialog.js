import React, { PureComponent } from 'react';
import DialogWrapper from 'wrappers/DialogWrapper';
import { get } from './LruStore';
import LruTab from './LruTab';
import NewSourceTab from './NewSourceTab';
import PropTypes from 'prop-types';
import SourceLookupTab from './SourceLookupTab';
import TabsWrapper from 'wrappers/TabsWrapper';

export default class WikidataSourceDialog extends PureComponent {

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onInsert: PropTypes.func.isRequired,
  };

  constructor() {
    super( ...arguments );

    this.dialogRef = React.createRef();
  }

  render() {
    const { onClose, onInsert } = this.props;
    const tabs = [];

    if ( get().length > 0 ) {
      tabs.push( {
        label: 'Последние использованные',
        content: <LruTab onInsert={onInsert} />,
      } );
    }

    tabs.push( {
      label: 'Поиск источника',
      content: <SourceLookupTab onInsert={onInsert} />,
    } );

    tabs.push( {
      label: 'Создание нового',
      content: <NewSourceTab onInsert={onInsert} />,
    } );

    return <DialogWrapper
      height={480}
      onClose={onClose}
      ref={this.dialogRef}
      title={'Найти или создать источник на Викиданных'}
      width={640}>
      <TabsWrapper tabs={tabs} />
    </DialogWrapper>;
  }

}
