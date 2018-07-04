const editorDescription = {
  linkTitle: 'WEF: Movie',
  title: 'Movie',
  tabs: [
    {
      label: 'General',
      key: 'general',
      specials: [
        { type: 'LabelsAndDescriptionArea' },
      ],
      fields: [
        /* instance of */
        { property: 'P31' },
        /* image */
        { property: 'P18' },
        /* name */
        { property: 'P1476' },
        /* country */
        { property: 'P495' },
        /* language */
        { property: 'P364' },
        /* time */
        { property: 'P577' },
        /* genre */
        { property: 'P136' },
        /* follows */
        { property: 'P155' },
        /* followed by */
        { property: 'P156' },
      ],
    },
    {
      labelEntityId: 'Q3297652',
      fields: [
        /* director */
        { property: 'P57' },
        /* director of photography */
        { property: 'P344' },
        /* screenwriter */
        { property: 'P58' },
        /* producer */
        { property: 'P162' },
        /* production company */
        { property: 'P272' },
        /* composer */
        { property: 'P86' },
      ],
    },
    {
      labelEntityId: 'P161',
      fields: [
        /* cast member */
        { property: 'P161', columns: [ 'P453' ] },
      ],
    },
    {
      labelEntityId: 'P725',
      fields: [
        /* cast member */
        { property: 'P725', columns: [ 'P453' ] },
      ],
    },
    {
      labelEntityId: 'P166',
      fields: [
        /* award received */
        { property: 'P166', columns: [ 'P585', 'P1027' ] },
      ],
    },
    {
      labelEntityId: 'Q36524',
      key: 'authoritycontrol',
      specials: [
        { type: 'SparqlPropertyGroup',
          sparql: 'SELECT ?property '
                    + 'WHERE { '
                    + '?property wdt:P31 wd:Q29542094 . '
                    + '?property wikibase:propertyType wikibase:ExternalId . '
                    + '}' },
      ],
    },
  ],
};

export default editorDescription;
