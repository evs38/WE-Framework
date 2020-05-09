// @flow

import FamilyMemberDataValueEditor, { oppositeGender } from './FamilyMemberDataValueEditor';
import React, { PureComponent } from 'react';

export default class PartnerDataValueEditor extends PureComponent {

  constructor() {
    super( ...arguments );
  }

  render() {
    return <FamilyMemberDataValueEditor
      {...this.props}
      newEntityGenderEntityId={oppositeGender}
      propertiesMapping={{}}
      propertyIdSelfInto="P451" />;
  }
}
