export const ExperienceImageSource = {
  ExperienceImageSource0: require('./DefaultBlurExperiencePhoto0/DefaultBlurExperiencePhoto0.png'),
  ExperienceImageSource1: require('./DefaultBlurExperiencePhoto1/DefaultBlurExperiencePhoto1.png'),
  ExperienceImageSource2: require('./DefaultBlurExperiencePhoto2/DefaultBlurExperiencePhoto2.png'),
  ExperienceImageSource3: require('./DefaultBlurExperiencePhoto3/DefaultBlurExperiencePhoto3.png'),
  ExperienceImageSource4: require('./DefaultBlurExperiencePhoto4/DefaultBlurExperiencePhoto4.png'),
  ExperienceImageSource5: require('./DefaultBlurExperiencePhoto5/DefaultBlurExperiencePhoto5.png'),
  ExperienceImageSource6: require('./DefaultBlurExperiencePhoto6/DefaultBlurExperiencePhoto6.png'),
  ExperienceImageSource7: require('./DefaultBlurExperiencePhoto7/DefaultBlurExperiencePhoto7.png'),
  ExperienceImageSource8: require('./DefaultBlurExperiencePhoto8/DefaultBlurExperiencePhoto8.png'),
  ExperienceImageSource9: require('./DefaultBlurExperiencePhoto9/DefaultBlurExperiencePhoto9.png'),
  ExperienceImageSource10: require('./DefaultBlurExperiencePhoto10/DefaultBlurExperiencePhoto10.png'),
  ExperienceImageSource11: require('./DefaultBlurExperiencePhoto11/DefaultBlurExperiencePhoto11.png'),
};

export const ExperienceImageSourceByIndex = (index) => {
  let blurId = index % 12;
  return ExperienceImageSource['ExperienceImageSource' + blurId];
};

export const ListImageSource = {
  ListImageSource0: require('./DefaultBlurListPhoto0/DefaultBlurListPhoto0.png'),
  ListImageSource1: require('./DefaultBlurListPhoto1/DefaultBlurListPhoto1.png'),
  ListImageSource2: require('./DefaultBlurListPhoto2/DefaultBlurListPhoto2.png'),
  ListImageSource3: require('./DefaultBlurListPhoto3/DefaultBlurListPhoto3.png'),
  ListImageSource4: require('./DefaultBlurListPhoto4/DefaultBlurListPhoto4.png'),
  ListImageSource5: require('./DefaultBlurListPhoto5/DefaultBlurListPhoto5.png'),
  ListImageSource6: require('./DefaultBlurListPhoto6/DefaultBlurListPhoto6.png'),
  ListImageSource7: require('./DefaultBlurListPhoto7/DefaultBlurListPhoto7.png'),
  ListImageSource8: require('./DefaultBlurListPhoto8/DefaultBlurListPhoto8.png'),
  ListImageSource9: require('./DefaultBlurListPhoto9/DefaultBlurListPhoto9.png'),
  ListImageSource10: require('./DefaultBlurListPhoto10/DefaultBlurListPhoto10.png'),
  ListImageSource11: require('./DefaultBlurListPhoto11/DefaultBlurListPhoto11.png'),
};

export const ListImageSourceByIndex = (index) => {
  let blurId = index % 12;
  return ListImageSource['ListImageSource' + blurId];
};

export const UserImageSource = require('./DefaultBlurProfilePhoto/DefaultBlurProfilePhoto.png');
