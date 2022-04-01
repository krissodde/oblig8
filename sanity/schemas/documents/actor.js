const actor = {
    title: 'Skuespiller',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'full_name',
            type: 'string',
            title: 'Tittel',
            description: 'Dette er skuespillerens fulle navn',
            validation: (Rule) => Rule.max(96).warning("Navnet kan ikke være lenger enn 96 karakterer"),
        },
        {
            name: 'name',
            type: 'slug',
            title: 'Navn',
            description: 'Dette er den unike url-en',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'full_name',
                maxLength: 96,
            }
        }
    ]
}

export default actor