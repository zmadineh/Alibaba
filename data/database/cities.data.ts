export const cities = [
    { id: 1, country_id: 1, name: 'تهران' },
    { id: 2, country_id: 1, name: 'اصفهان' },
    { id: 3, country_id: 1, name: 'تبریز' },
    { id: 4, country_id: 1, name: 'رشت' },
    { id: 5, country_id: 1, name: 'شیراز' },
    { id: 6, country_id: 1, name: 'اهواز' },
    { id: 7, country_id: 1, name: 'کرمان' },
    { id: 8, country_id: 1, name: 'آبادان' },


    { id: 9, country_id: 2, name: 'استانبول' },
    { id: 10, country_id: 2, name: 'ازمیر' },

    { id: 11, country_id: 3, name: 'ایروان' },
    { id: 12, country_id: 3, name: 'گیومری' },

    { id: 13, country_id: 4, name: 'برلین' },
    { id: 14, country_id: 4, name: 'مونیخ' },
    { id: 15, country_id: 4, name: 'فرانکوفرت' },

    { id: 16, country_id: 5, name: 'پاریس' },

    { id: 17, country_id: 6, name: 'دبی' },

    { id: 18, country_id: 9, name: 'تورنتو' },

    { id: 19, country_id: 10, name: 'لندن' },

    { id: 20, country_id: 11, name: 'میلان' },

];

export const getCityById = (id: number) => {
    const city = cities.find(item => item.id === id)
    return (city ? city.name : '')
}

export const getCitiesByCountryId = (id: number) => {
    return cities.filter(item => item.country_id === id)
}
