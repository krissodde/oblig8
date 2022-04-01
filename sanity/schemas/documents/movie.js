const movie= {
    title: 'Film',
    name: 'movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Filmtittel',
            description: 'Dette er tittelen på filmen',
            validation: (Rule) => Rule.max(96).warning("Filmtittelen kan ikke være lenger enn 96 karakterer"),
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'actor',
            type: 'reference',
            title: 'Skuespiller',
            to: [{type: 'actor'}]
        }
    ]
}

export default movie