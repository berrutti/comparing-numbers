export const usPoliticians = {
  isCurrency: true,
  units: null,
  backgroundColor: '#46555A',
  data: [
    {
      title: 'Median Net Worth:',
      subtitle: 'Millenial Households',
      avatar: null,
      number: 8850,
      color: '#3DC5F4',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Pete Buttigieg',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pete_Buttigieg_by_Gage_Skidmore.jpg/220px-Pete_Buttigieg_by_Gage_Skidmore.jpg',
      number: 100000,
      color: '#007FAC',
    },
    {
      title: 'Median Net Worth:',
      subtitle: 'Members of Congress',
      avatar: null,
      number: 460000,
      color: '#07415E',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Bernie Sanders',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bernie_Sanders_in_March_2020.jpg/220px-Bernie_Sanders_in_March_2020.jpg',
      number: 2000000,
      color: '#3DC5F4',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Amy Klobuchar',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg/220px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg',
      number: 2500000,
      color: '#007FAC',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Joe Biden',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Joe_Biden_February_2020_crop.jpg/220px-Joe_Biden_February_2020_crop.jpg',
      number: 9000000,
      color: '#07415E',
    },
    {
      title: 'Net Worth:',
      subtitle: 'Elizabeth Warren',
      avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg/220px-Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg',
      number: 12000000,
      color: '#3DC5F4'
    },
    {
      subtitle: 'F-32 Fighter Jet',
      number: 115500000,
      color: '#FFBF0E'
    },
    {
      subtitle: 'Avengers: Endgame Budget',
      number: 356000000,
      color: '#F89625'
    },
    {
      title: 'Net Worth (Inflation Adj.):',
      subtitle: 'George Washington',
      number: 525000000,
      color: '#F37823'
    },
    {
      title: 'Net Worth:',
      subtitle: 'Tom Steyer',
      number: 1600000000,
      color: '#FFBF0E'
    },
    {
      title: 'Net Worth:',
      subtitle: 'Donald Trump',
      number: 3100000000,
      color: '#F89625'
    },
    {
      title: 'Net Worth:',
      subtitle: 'All US Presidents Ever',
      number: 5000000000,
      color: '#F37823'
    },
  ]
};

export const cosmicCalendar = {
  isCurrency: false,
  units: 'years ago',
  backgroundColor: '#46555A',
  data: [
    {
      title: 'Modern History:',
      subtitle: 'Period following "Post-classical" history',
      avatar: null,
      number: 435,
      color: '#007FAC',
    },
    {
      title: 'Internet',
      subtitle: 'was invented',
      avatar: null,
      number: 50,
      color: '#3DC5F4',
    },
    {
      title: 'End of',
      subtitle: 'the Ice Age',
      avatar: null,
      number: 12000,
      color: '#07415E',
    },
    {
      title: 'Primitive Humans:',
      subtitle: 'Stone tools',
      number: 2500000,
      color: '#007FAC',
    },
    {
      title: 'Extinction:',
      subtitle: 'Non-avian dinosaurs die out',
      number: 65000000,
      color: '#07415E',
    },
    {
      title: 'Dinosaurs:',
      subtitle: 'started roaming the earth',
      number: 240000000,
      color: '#3DC5F4'
    },
    {
      subtitle: 'Complex Cells',
      number: 2000000000,
      color: '#FFBF0E'
    },
    {
      title: 'Biotic life:',
      subtitle: 'First known remains',
      number: 4100000000,
      color: '#F89625'
    },
    {
      title: 'Milky Way',
      subtitle: 'Galaxy formed',
      number: 11000000000,
      color: '#F37823'
    },
    {
      title: 'Big Bang:',
      subtitle: 'As seen through CBR',
      number: 13800000000,
      color: '#FFBF0E'
    }
  ]
};

export const byNumbers = (firstElement, secondElement) => {
  if (firstElement.number < secondElement.number) {
    return -1;
  }
  if (firstElement.number > secondElement.number) {
    return 1;
  }
  return 0;
};