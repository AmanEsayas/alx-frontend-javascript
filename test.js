const { uploadPhoto, createUser } = require('./utils');

test('uploadPhoto returns correct response', () => {
  const response = uploadPhoto();
  expect(response.status).toBe(200);
  expect(response.body).toBe('photo-profile-1');
});

test('createUser returns correct response', () => {
  const user = createUser();
  expect(user.firstName).toBe('Guillaume');
  expect(user.lastName).toBe('Salva');
});

