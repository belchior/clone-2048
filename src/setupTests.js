const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('jest-prop-type-error');

enzyme.configure({ adapter: new Adapter() });

jest.spyOn(Storage.prototype, 'setItem').mockImplementation();
