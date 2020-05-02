export const columns = [
  { title: 'Имя', field: 'firstname' },
  { title: 'Фамилия', field: 'lastname' },
  { title: 'Email', field: 'email' },
  {
    title: 'Роль',
    field: 'role',
    lookup: { developer: 'Разработчик', submitter: 'Тестировщик' },
  },
];

export const roles = [
  { name: 'developer', label: 'Разработчик', id: 1},
  { name: 'submitter', label: 'Тестировщик', id: 2},
];
