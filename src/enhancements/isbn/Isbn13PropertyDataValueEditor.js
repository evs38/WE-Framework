// @flow

import React, { PureComponent } from 'react';
import { boundMethod } from 'autobind-decorator';
import { connect } from 'react-redux';
import ExternalIdDataValueEditor from 'components/dataValueEditors/external-id/ExternalIdDataValueEditor';
import FillSisterIsbnClaimButtonCell from './FillSisterIsbnClaimButtonCell';
import HyphenateIsbnButtonCell from './HyphenateIsbnButtonCell';
import PropertyDescription from 'core/PropertyDescription';

type PropsType = {
  datavalue? : DataValueType,
  onClaimsFill : ( ?string => ?string, string ) => any,
  onDataValueChange : ?DataValueType => any,
  propertyDescription : PropertyDescription,
  readOnly? : boolean,
};

class Isbn13PropertyDataValueEditor extends PureComponent<PropsType> {

  @boundMethod
  handleValueChange( value : string ) {
    this.props.onDataValueChange( value.length !== 0
      ? {
        ...this.props.datavalue,
        type: 'string',
        value,
      }
      : null );
  }

  render() {
    const { datavalue, onClaimsFill, onDataValueChange, ...etc } = this.props;
    const isbn = ( datavalue || {} ).value || '';

    const buttons = [
      <HyphenateIsbnButtonCell
        isbn={isbn}
        key="HyphenateIsbn"
        mode="Isbn13"
        onHyphenate={this.handleValueChange} />,
      <FillSisterIsbnClaimButtonCell
        isbn={isbn}
        key="FillSisterIsbnClaim"
        modeOwn="Isbn13"
        modeSister="Isbn10"
        onClaimsFill={onClaimsFill} />,
    ];

    return <ExternalIdDataValueEditor
      {...etc}
      buttons={buttons}
      datavalue={datavalue}
      onDataValueChange={onDataValueChange} />;
  }
}

const mapDispatchToProps = dispatch => ( {
  onClaimsFill: ( normalizeF, newValue ) => dispatch( {
    type: 'CLAIMS_FILL',
    property: 'P957',
    datatype: 'external-id',
    datavalue: { type: 'string', value: newValue },
    normalizeF,
  } ),
} );

// $FlowFixMe
const Isbn13PropertyDataValueEditorConnected = connect( undefined, mapDispatchToProps )( Isbn13PropertyDataValueEditor );
export default Isbn13PropertyDataValueEditorConnected;
