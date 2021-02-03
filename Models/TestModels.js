const currentDate = new Date();
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const currentDateTitle =
  weekday[currentDate.getDay()] +
  ', ' +
  month[currentDate.getMonth()] +
  ' ' +
  currentDate.getDate();

export const DiscoverModel = {
  data: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Featured Experience',
      caption: 'Additional Details',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      caption: 'Additional Details',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      caption: 'Additional Details',
    },
  ],
  listHeaderDate: currentDateTitle.toLocaleUpperCase(),
  listHeaderDateStatic: 'TUESDAY, NOVEMBER 3',
  listHeaderTitle: 'Article Title',
};

export const ProfileModel = {
  numColumns: 3,
  listHeaderTitle: 'Full Name',
  listHeaderData: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'List',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'List',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'List',
    },
    {
      id: '58694a0f-3da1-471f-145571e29d72-bd96',
      title: 'List',
    },
    {
      id: '58694a0f-3da1-145571e29d72-471f-bd96',
      title: 'List',
    },
    {
      id: '58694a0f-145571e29d72-3da1-471f-bd96',
      title: 'List',
    },
  ],
  data: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Experience',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Experience',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Experience',
    },
    {
      id: 'bd7acbea-c1b1-3ad53abb28ba-46c2-aed5',
      title: 'Experience',
    },
    {
      id: '3ac68afc-c605-fbd91aa97f63-48d3-a4f8',
      title: 'Experience',
    },
    {
      id: '58694a0f-145571e29d72-3da1-471f-bd96',
      title: 'Experience',
    },
    {
      id: 'bd7acbea-c1b1-46c2-3ad53abb28ba-aed5',
      title: 'Experience',
    },
    {
      id: '3ac68afc-c605-48d3-fbd91aa97f63-a4f8',
      title: 'Experience',
    },
    {
      id: '3da1-471f-58694a0f-145571e29d72-bd96',
      title: 'Experience',
    },
    {
      id: 'c1b1-bd7acbea-3ad53abb28ba-46c2-aed5',
      title: 'Experience',
    },
    {
      id: 'c605-3ac68afc-fbd91aa97f63-48d3-a4f8',
      title: 'Experience',
    },
    {
      id: '145571e29d72-58694a0f-3da1-471f-bd96',
      title: 'Experience',
    },
    {
      id: 'c1b1-bd7acbea-46c2-3ad53abb28ba-aed5',
      title: 'Experience',
    },
    {
      id: 'c605-3ac68afc-48d3-fbd91aa97f63-a4f8',
      title: 'Experience',
    },
    {
      id: '3da1-58694a0f-471f-145571e29d72-bd96',
      title: 'Experience',
    },
  ],
};

export const SocialModel = {
  listHeaderTitle: 'Guides',
  listHeaderData: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'username',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'username',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'username',
    },
    {
      id: '58694a0f-3da1-471f-145571e29d72-bd96',
      title: 'username',
    },
    {
      id: '58694a0f-3da1-145571e29d72-471f-bd96',
      title: 'username',
    },
    {
      id: '58694a0f-145571e29d72-3da1-471f-bd96',
      title: 'username',
    },
  ],
  data: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: 'bd7acbea-c1b1-3ad53abb28ba-46c2-aed5',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: '3ac68afc-c605-fbd91aa97f63-48d3-a4f8',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: '58694a0f-145571e29d72-3da1-471f-bd96',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: 'bd7acbea-c1b1-46c2-3ad53abb28ba-aed5',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: '3ac68afc-c605-48d3-fbd91aa97f63-a4f8',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
    {
      id: '3da1-471f-58694a0f-145571e29d72-bd96',
      title: 'Full Name',
      caption: 'Preview of message text...',
      date: 'Date',
    },
  ],
};
