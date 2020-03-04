import chai from 'chai';
import { Event } from 'server/models/Event';
import { User } from 'server/models/User';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import NotifierService from '../services/NotifierService';
import { Venue } from 'server/models/Venue';
import { Chapter } from 'server/models/Chapter';
import { Location } from 'server/models/Location';
import * as faker from 'faker';

chai.use(sinonChai);

describe('Notifier Service', () => {
  beforeEach(() => {
    sinon.spy(console, 'warn');
  });

  afterEach(() => {
    // Restore the default sandbox here
    sinon.restore();
  });

  it('Should create a new Notification when the User RSVPs', () => {
    const notifier = new NotifierService();
    const user = new User({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
    });

    const event = new Event({
      name: 'event Name',
      description: 'desc',
      start_at: new Date(),
      ends_at: new Date(),
      canceled: false,
      capacity: 1,
      venue: new Venue({
        name: 'name',
        location: new Location({
          country_code: '',
          city: '',
          postal_code: '',
          region: '',
        }),
      }),
      chapter: new Chapter({
        name: 'name',
        description: 'description',
        category: 'category',
        details: [],
      }),
    });
    notifier.userChangedRSVP(user, event);
  });
});
